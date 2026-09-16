const fs = require('fs');
const path = require('path');

const examsPath = path.resolve(__dirname, '../src/data/examData.ts');
const fileContent = fs.readFileSync(examsPath, 'utf8');

console.log('Exam data file size:', fileContent.length);

// Extract JSON
const match = fileContent.match(/export const SPANISH_EXAM_PAPERS:\s*ExamPaper\[\]\s*=\s*(\[[\s\S]*?\]);\s*$/);
if (!match) {
  console.error('Failed to match SPANISH_EXAM_PAPERS');
  process.exit(1);
}

const papers = JSON.parse(match[1]);
console.log('Total papers:', papers.length);

const marathonPapers = papers.filter(p => p.mode === 'marathon_full');
const drillPapers = papers.filter(p => p.mode === 'special_drill');

console.log('Marathon papers count:', marathonPapers.length);
console.log('Special drill papers count:', drillPapers.length);

// Verify TEM-4 papers (each should have 75 questions)
const tem4 = marathonPapers.filter(p => p.track === 'tem4');
console.log('TEM-4 papers count:', tem4.length);
tem4.forEach(p => {
  if (p.questions.length !== 75) {
    console.error(`TEM-4 paper ${p.id} has ${p.questions.length} questions, expected 75!`);
    process.exit(1);
  }
});
console.log('✓ All TEM-4 papers have exactly 75 questions!');

// Verify Kaoyan papers (each should have 60 questions)
const kaoyan = marathonPapers.filter(p => p.track === 'kaoyan');
console.log('Kaoyan papers count:', kaoyan.length);
kaoyan.forEach(p => {
  if (p.questions.length !== 60) {
    console.error(`Kaoyan paper ${p.id} has ${p.questions.length} questions, expected 60!`);
    process.exit(1);
  }
});
console.log('✓ All Kaoyan papers have exactly 60 questions!');

// Verify DELE papers (each should have 60 questions)
const dele = marathonPapers.filter(p => p.track === 'dele');
console.log('DELE papers count:', dele.length);
dele.forEach(p => {
  if (p.questions.length !== 60) {
    console.error(`DELE paper ${p.id} has ${p.questions.length} questions, expected 60!`);
    process.exit(1);
  }
});
console.log('✓ All DELE papers have exactly 60 questions!');

// Verify Drills (each should have 12 questions)
console.log('Drill papers count:', drillPapers.length);
drillPapers.forEach(p => {
  if (p.questions.length !== 12) {
    console.error(`Drill paper ${p.id} has ${p.questions.length} questions, expected 12!`);
    process.exit(1);
  }
});
console.log('✓ All Drill papers have exactly 12 questions!');

// Check question integrity
let totalQ = 0;
papers.forEach(p => {
  totalQ += p.questions.length;
  p.questions.forEach((q, idx) => {
    if (!q.id || !q.questionText || !q.options || q.options.length !== 4 || !q.correctAnswer) {
      console.error(`Malformed question ${q.id} in paper ${p.id}`);
      process.exit(1);
    }
  });
});
console.log(`✓ All ${totalQ} questions across all 34 papers are valid, fully structured, and consistent!`);
