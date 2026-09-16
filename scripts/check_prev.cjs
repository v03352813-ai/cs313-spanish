const { execSync } = require('child_process');
const content = execSync('git show HEAD:src/data/examData.ts', { maxBuffer: 50 * 1024 * 1024 }).toString();
const papers = (content.match(/"id":\s*"paper-/g) || []).length;
console.log('Previous total papers:', papers);
const kaoyan = (content.match(/"track":\s*"kaoyan/g) || []).length;
const tem4 = (content.match(/"track":\s*"tem4/g) || []).length;
const dele = (content.match(/"track":\s*"dele/g) || []).length;
const siele = (content.match(/"track":\s*"siele/g) || []).length;
console.log({ kaoyan, tem4, dele, siele });
