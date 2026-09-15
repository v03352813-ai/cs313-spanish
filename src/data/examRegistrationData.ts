// 西班牙语 DELE / SIELE / 高校专四 (TEM-4) 官方权威考期与报考全景数据

export interface ExamSessionInfo {
  title: string;
  targetAudience: string;
  examDate: string;
  registerDate: string;
  neeaUrl: string;
  neeaUrlLabel: string;
}

export interface RegistrationStep {
  step: string;
  title: string;
  dateRange: string;
  status: 'upcoming' | 'current' | 'completed';
  desc: string;
  tips: string[];
}

export interface SnatchTip {
  title: string;
  tag: string;
  points: string[];
}

export interface ExamScoringCriterion {
  level: string;
  totalScore: number;
  passScore: number;
  sectionThreshold: number;
  desc: string;
  sections: { name: string; max: number; minPass: number }[];
}

export const SPANISH_EXAM_REGISTRATION_DATA = {
  // DELE 官方欧标大考
  deleSession: {
    title: '2026年 DELE 塞万提斯学院全球统考 (秋季大考)',
    targetAudience: '西班牙/拉美留学、移民入籍、外企入职、全球终身有效西班牙语官方认证',
    examDate: '2026年11月21日 (笔试与口试)',
    registerDate: '2026年9月1日 - 10月7日 (额满即止)',
    neeaUrl: 'https://dele.neea.cn',
    neeaUrlLabel: '教育部教育考试院 DELE 官方报名网 (dele.neea.cn)'
  },

  // SIELE 国际机考
  sieleSession: {
    title: 'SIELE 国际西班牙语评估测试 (全球在线机考)',
    targetAudience: '急需语言成绩、高校升学、求职加薪（随报随考、3周快速出分）',
    examDate: '常年可考 (考点每周排考 / 自主选期)',
    registerDate: '考前至少提前 48 小时官网完成报名',
    neeaUrl: 'https://siele.org',
    neeaUrlLabel: 'SIELE 官方国际站 (siele.org)'
  },

  // TEM-4 高校专四
  temSession: {
    title: '2027年 全国高校西班牙语专业四级统考 (TEM-4)',
    targetAudience: '全国普通高校西班牙语专业大二本科生、专升本学生',
    examDate: '2027年5月下旬 (周六上午 08:30)',
    registerDate: '每年 3月 由各高校外国语学院统一集体报考',
    neeaUrl: 'http://fltrc.bfsu.edu.cn',
    neeaUrlLabel: '全国高校外语专业教学指导委员会'
  },

  // DELE 考期时间线
  deleTimeline: [
    {
      step: '01',
      title: '确认报考级别与官方考点',
      dateRange: '考前 3~4 个月',
      status: 'completed' as const,
      desc: '评估自身水平（A1入门、A2签证、B1进阶、B2留学必备、C1精通），选定考点（北京塞院、上外、川外、广外等）。',
      tips: [
        '西班牙大学本科/硕博通常硬性要求 DELE B2 或 SIELE B2',
        '热门考点（北京、上海、广州）考位紧张，建议提前注册 NEEA 账号',
        '核对身份证件有效期（护照或身份证，须在考试当日有效）'
      ]
    },
    {
      step: '02',
      title: 'NEEA 官网抢位与缴费',
      dateRange: '考前 2 个月 (9月上旬)',
      status: 'current' as const,
      desc: '登录教育部教育考试院 DELE 报名网站，选择考点与级别，在线支付考费并锁定考位。',
      tips: [
        '提前在 NEEA 网站完善个人拼音姓名、出生日期，务必与护照完全一致',
        '准备银联或支付宝快捷支付，30分钟内完成缴费，逾期考位自动释放',
        '报名成功后务必下载并打印【报名确认回执表】留存'
      ]
    },
    {
      step: '03',
      title: '准考证打印与口试时间确认',
      dateRange: '考前 1~2 周',
      status: 'upcoming' as const,
      desc: '考点通常在考前 10 天左右通过邮件或官网公布考生准考证（Convocatoria），内含口试与笔试具体考场与时间。',
      tips: [
        '特别注意：DELE 口语考试可能安排在笔试当天下午或笔试前/后一天',
        '提前确认考场所在教学楼与进校路线要求',
        '携带准考证彩色打印件与报名原件证件进入考场'
      ]
    },
    {
      step: '04',
      title: '全真大考与成绩单/证书领取',
      dateRange: '考试当日 & 考后 2~3 个月',
      status: 'upcoming' as const,
      desc: '笔试听力采用全真外放/耳机，考后约 60~90 个工作日官网公布成绩 (APTO / NO APTO)。',
      tips: [
        '阅读与写作（Grupo 1）及听力与口语（Grupo 2）两大部分均须达到 30/50 才能及格',
        '官网查分通过后可先下载带电子签章的成绩单（具有同等效力）',
        '纸质羊皮纸文凭证书由西班牙教育部制作，约半年后送达考点'
      ]
    }
  ],

  // 抢考位与备战技巧
  snatchTips: [
    {
      title: 'DELE 考位秒杀攻略',
      tag: '抢位必看',
      points: [
        '报名开放日上午 9:00 前 10 分钟登录 NEEA 网站，保持登录状态避免被挤出。',
        '若本地塞万提斯考点已满，可放眼周边城市考点（如天津、重庆、西安、杭州考点）。',
        '如果错过 DELE 报名或急需当月语言成绩递交签证，可无缝报考 SIELE（机考随报随测，3周内即出官方证书）。'
      ]
    },
    {
      title: '听力与口试避坑指南',
      tag: '提分绝招',
      points: [
        'DELE 听力包含多国西语口音（西班牙中部、阿根廷、墨西哥、智利等），平时务必在西影精听中强化多口音适应。',
        '口试前有 15~20 分钟准备室草稿时间，列出思维导图关键词，严禁背诵整段模板，考官重点考察互动自然流畅度。',
        '写作严格遵循西语格式规范：信头、敬语（Estimado/a señor/a）、结尾致意与虚拟式高级句型运用。'
      ]
    }
  ],

  // 算分标准
  scoringRules: [
    {
      level: 'DELE A1 / A2 / B1 / B2',
      totalScore: 100,
      passScore: 60,
      sectionThreshold: 30,
      desc: '总分 100 分。分两组 (Grupos)：Grupo 1（阅读+写作 50分）须≥30分；Grupo 2（听力+口语 50分）须≥30分。任意一组低于30分即判定 NO APTO。',
      sections: [
        { name: '阅读理解 (Comprensión de lectura)', max: 25, minPass: 15 },
        { name: '书面表达 (Expresión escrita)', max: 25, minPass: 15 },
        { name: '听力理解 (Comprensión auditiva)', max: 25, minPass: 15 },
        { name: '口语表达 (Expresión oral)', max: 25, minPass: 15 }
      ]
    }
  ]
};
