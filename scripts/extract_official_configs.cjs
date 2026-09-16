const { execSync } = require('child_process');
const content = execSync('git show HEAD:src/data/examData.ts', { maxBuffer: 50 * 1024 * 1024 }).toString();

const lines = content.split('\n');
const papers = [];
let cur = null;
lines.forEach(line => {
  const idMatch = line.match(/"id":\s*"([^"]+)"/);
  const titleMatch = line.match(/"title":\s*"([^"]+)"/);
  const spanishTitleMatch = line.match(/"spanishTitle":\s*"([^"]+)"/);
  const trackMatch = line.match(/"track":\s*"([^"]+)"/);
  const levelMatch = line.match(/"level":\s*"([^"]+)"/);
  const schoolMatch = line.match(/"schoolOrOrg":\s*"([^"]+)"/);
  const durMatch = line.match(/"durationMinutes":\s*(\d+)/);
  const sumMatch = line.match(/"summary":\s*"([^"]+)"/);
  if (idMatch) {
    if (cur && cur.id && cur.title && cur.track) papers.push(cur);
    cur = { id: idMatch[1] };
  }
  if (cur) {
    if (titleMatch) cur.title = titleMatch[1];
    if (spanishTitleMatch) cur.spanishTitle = spanishTitleMatch[1];
    if (trackMatch) cur.track = trackMatch[1];
    if (levelMatch) cur.level = levelMatch[1];
    if (schoolMatch) cur.schoolOrOrg = schoolMatch[1];
    if (durMatch) cur.durationMinutes = parseInt(durMatch[1]);
    if (sumMatch) cur.summary = sumMatch[1];
  }
});
if (cur && cur.id && cur.title && cur.track) papers.push(cur);

console.log('Valid extracted papers:', papers.length);
const fs = require('fs');
fs.writeFileSync('scripts/official_64_configs.json', JSON.stringify(papers, null, 2), 'utf8');
console.log('Saved to scripts/official_64_configs.json');
