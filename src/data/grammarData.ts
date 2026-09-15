// Spanish Grammar Topics & Visual Mindmap Data
export interface GrammarTopic {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  subtitle: string;
  tag: string;
  coreRule: string;
  breakthroughFormula: string;
  comparisonTable?: {
    itemA: string;
    itemB: string;
    differences: { context: string; expA: string; expB: string; zhExample: string }[];
  };
  examples: { es: string; zh: string; analysis: string }[];
}

export const SPANISH_GRAMMAR_TOPICS: GrammarTopic[] = [
  // 1. Ser vs Estar 对决
  {
    id: 'g-ser-estar',
    level: 'A1',
    title: '两个“是”的世纪对决：Ser vs Estar',
    subtitle: 'DNA 出厂配置卡 vs 仪表盘临时状态灯',
    tag: '基础核心死穴',
    coreRule: 'Ser 表达固有属性、本质特征、国籍身份、材质与常态时间；Estar 表达瞬时心境、健康状况、物理地理位置与进行时动作。',
    breakthroughFormula: '【出厂与状态心法】：“刻在 DNA 里带的用 Ser，眼睛看得到会变的用 Estar，山川地理再永久也是坐标位置用 Estar！”',
    comparisonTable: {
      itemA: 'SER (本质·出厂配置)',
      itemB: 'ESTAR (状态·临时读数)',
      differences: [
        {
          context: '性格 vs 情绪',
          expA: 'Ella es alegre. (她天性是个开朗的人)',
          expB: 'Ella está alegre hoy. (她今天心情很高兴)',
          zhExample: '一个是天生性格，一个是当前心情'
        },
        {
          context: '聪明 vs 就绪',
          expA: 'Él es muy listo. (他智商极高/很聪明)',
          expB: 'Él ya está listo. (他已经准备好了，可以出发了)',
          zhExample: 'listo 搭配不同动词含义彻底改变'
        },
        {
          context: '品种 vs 成熟度',
          expA: 'La manzana es verde. (这苹果品种是青苹果)',
          expB: 'La manzana está verde. (这苹果还没熟呢，很生涩)',
          zhExample: '绿色是品种本质，还是未成熟的瞬态'
        },
        {
          context: '无聊人 vs 感无聊',
          expA: 'Carlos es aburrido. (卡洛斯是个乏味无趣的人)',
          expB: 'Carlos está aburrido. (卡洛斯现在感到很无聊/闲得发慌)',
          zhExample: '千万人误用的经典骂人陷阱！'
        }
      ]
    },
    examples: [
      { es: 'Madrid está en el centro de España.', zh: '马德里位于西班牙中部。', analysis: '即便马德里永远在那里，因为是空间物理地理位置，铁律必须用 estar！' },
      { es: 'Hoy es lunes, y la fiesta es en mi casa.', zh: '今天是周一，聚会在我家里举行。', analysis: '表示时间用 ser；表示“事件/活动发生”用 ser！' }
    ]
  },

  // 2. Por vs Para 终极辨析
  {
    id: 'g-por-para',
    level: 'A2',
    title: '两个“为了”的终极辨析：Por vs Para',
    subtitle: '回望原因媒介 (Por) vs 远望目的死线 (Para)',
    tag: '高频逻辑介词',
    coreRule: 'Por 表达原因、动机、交换价格、途径空间、方式工具（回头看因为什么）；Para 表达目的宗旨、受惠受众、截止期限、去向终点（向前看向着什么）。',
    breakthroughFormula: '【前后视线法】：向后看“因何而起、由谁经由”用 Por；向前看“为了何目、走向何方、送给何人、何时截止”用 Para！',
    comparisonTable: {
      itemA: 'POR (因为·经由·交换·持续)',
      itemB: 'PARA (为了·送给·截止·朝向)',
      differences: [
        {
          context: '原因 vs 目的',
          expA: 'Estudio español por mi trabajo. (因为工作需要而学西语)',
          expB: 'Estudio español para viajar. (为了将来去旅行而学西语)',
          zhExample: '一个是推动力来源，一个是终极奋斗目标'
        },
        {
          context: '送礼受惠者',
          expA: 'Hago esto por ti. (看在你的份上/为了报答你我才做)',
          expB: 'Este regalo es para ti. (这份礼物是送给你的)',
          zhExample: 'por ti 是因为你；para ti 是归属于你'
        },
        {
          context: '时间观念',
          expA: 'Viví allí por dos años. (在那住了两年时间跨度)',
          expB: 'La tarea es para mañana. (作业截止日期是明天)',
          zhExample: 'por 表时间跨度时长，para 表终点死线 Deadline'
        }
      ]
    },
    examples: [
      { es: 'Gracias por tu ayuda.', zh: '感谢你的帮助。', analysis: '表达感谢的原因，一律用 por！' },
      { es: 'Salimos para Madrid en tren.', zh: '我们乘火车前往马德里。', analysis: '朝向目的地，用 para！' }
    ]
  },

  // 3. 双重代词碰撞与 Se 变身法则
  {
    id: 'g-pronouns-se',
    level: 'A2',
    title: '双重宾语代词合并与【防音爆变身 Se 法则】',
    subtitle: '两 L 相撞必打架，间接宾语变身 Se',
    tag: '代词系统核心',
    coreRule: '当间接宾语代词 (le, les) 与直接宾语代词 (lo, la, los, las) 在动词前同框出现时，连续两个 l 发音极其别扭碰撞 (Cacofonía)，前方的 le/les 强制蜕变为 se！',
    breakthroughFormula: '【口诀】：人前物后，两 L 相撞，le/les 统统秒变 se！(se lo doy，而不是 le lo doy！)',
    examples: [
      { es: '¿Le das el libro a Juan? — Sí, se lo doy.', zh: '你把书给胡安了吗？——是的，我给他它了。', analysis: '原本是 le (人) + lo (物)，为了避免舌头打结，le 强制变身为 se！' },
      { es: 'Dímelo ahora mismo.', zh: '现在就把它告诉我。', analysis: '肯定命令式中，代词双重后贴合写，重心后移强制在 dí 上补戴重音符号！' }
    ]
  },

  // 4. 虚拟式 W-E-I-R-D-O 情感六角星
  {
    id: 'g-subjuntivo-weirdo',
    level: 'B1',
    title: '虚拟式触发引擎：W-E-I-R-D-O 情感六角星法则',
    subtitle: '主观意愿与现实断裂时的从句强制变位',
    tag: '高阶灵魂难关',
    coreRule: '虚拟式并非一种时态，而是一种“主观投射的态度”。当主句表达愿望(W)、情绪(E)、客观评价(I)、要求(R)、怀疑(D)、但愿(O)，且从句主语与主句不一致时，从句动词强制启动【A⇄E灵魂互换】进入虚拟式！',
    breakthroughFormula: '【六角星公式】：主句点亮 W-E-I-R-D-O + 出现连接词 que + 主语不同 = 从句动词必用虚拟式！',
    examples: [
      { es: 'Quiero que vengas a mi fiesta.', zh: '我想让你来参加我的派对。', analysis: 'W (愿望) querer + que + 主语转换 (我 -> 你) = venir 变身虚拟式 vengas！' },
      { es: 'No creo que sea verdad.', zh: '我不相信这是真的。', analysis: 'D (怀疑否定) no creer 破坏了事实认定，ser 必须用虚拟式 sea！注意：肯定我相信 Creo que es 是直陈式！' },
      { es: '¡Ojalá que haga buen tiempo mañana!', zh: '但愿明天是个好天气！', analysis: 'O (Ojalá 但愿神明保佑) 后面无条件使用虚拟式 haga！' }
    ]
  }
];
