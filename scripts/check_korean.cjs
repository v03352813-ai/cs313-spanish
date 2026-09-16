const fs = require('fs');
const content = fs.readFileSync('d:/小语种学习/cs313-korean/src/data/korean/topikExams.ts', 'utf8');
const marathon = (content.match(/"mode":\s*"marathon_full"/g) || []).length;
const drill = (content.match(/"mode":\s*"special_drill"/g) || []).length;
const total = (content.match(/"id":\s*"/g) || []).length;
console.log({ marathon, drill, total });
