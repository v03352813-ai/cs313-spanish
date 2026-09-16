const { execSync } = require('child_process');
const content = execSync('git show HEAD:src/data/examData.ts', { maxBuffer: 50 * 1024 * 1024 }).toString();

const lines = content.split('\n');
const papers = [];
let cur = null;
lines.forEach(line => {
  const idMatch = line.match(/"id":\s*"([^"]+)"/);
  const titleMatch = line.match(/"title":\s*"([^"]+)"/);
  const trackMatch = line.match(/"track":\s*"([^"]+)"/);
  const levelMatch = line.match(/"level":\s*"([^"]+)"/);
  const schoolMatch = line.match(/"schoolOrOrg":\s*"([^"]+)"/);
  if (idMatch) {
    if (cur) papers.push(cur);
    cur = { id: idMatch[1] };
  }
  if (cur) {
    if (titleMatch) cur.title = titleMatch[1];
    if (trackMatch) cur.track = trackMatch[1];
    if (levelMatch) cur.level = levelMatch[1];
    if (schoolMatch) cur.schoolOrOrg = schoolMatch[1];
  }
});
if (cur) papers.push(cur);

console.log('Total previous papers in HEAD:', papers.length);
const byTrack = {};
papers.forEach(p => {
  byTrack[p.track] = (byTrack[p.track] || 0) + 1;
});
console.log('By track:', byTrack);

console.log('\n--- TEM-4 Papers: ---');
papers.filter(p => p.track === 'tem4').forEach((p, i) => console.log(`  ${i+1}. ${p.id}: ${p.title}`));

console.log('\n--- Kaoyan Papers (sample): ---');
papers.filter(p => p.track && p.track.includes('kaoyan')).slice(0, 10).forEach((p, i) => console.log(`  ${i+1}. ${p.id}: ${p.title}`));

console.log('\n--- DELE Papers: ---');
papers.filter(p => p.track === 'dele').forEach((p, i) => console.log(`  ${i+1}. ${p.id}: ${p.title}`));

console.log('\n--- SIELE Papers: ---');
papers.filter(p => p.track === 'siele').forEach((p, i) => console.log(`  ${i+1}. ${p.id}: ${p.title}`));
