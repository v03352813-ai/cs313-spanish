const fs = require('fs');
const content = fs.readFileSync('d:/小语种学习/cs313-korean/src/data/korean/topikExams.ts', 'utf8');
const lines = content.split('\n');
const papers = [];
let cur = null;
lines.forEach(line => {
  const idMatch = line.match(/"id":\s*"([^"]+)"/);
  const titleMatch = line.match(/"title":\s*"([^"]+)"/);
  const modeMatch = line.match(/"mode":\s*"([^"]+)"/);
  const yearMatch = line.match(/"yearSession":\s*"([^"]+)"/);
  const qCountMatch = line.match(/"totalQuestions":\s*(\d+)/);
  if (idMatch) {
    if (cur) papers.push(cur);
    cur = { id: idMatch[1] };
  }
  if (cur) {
    if (titleMatch) cur.title = titleMatch[1];
    if (modeMatch) cur.mode = modeMatch[1];
    if (yearMatch) cur.yearSession = yearMatch[1];
    if (qCountMatch) cur.totalQuestions = parseInt(qCountMatch[1]);
  }
});
if (cur) papers.push(cur);

console.log('Korean papers summary:');
papers.forEach((p, idx) => {
  console.log(`[${idx + 1}] mode=${p.mode} | qCount=${p.totalQuestions} | sess=${p.yearSession} | title=${p.title}`);
});
