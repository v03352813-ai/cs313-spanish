/**
 * 西班牙语考研二外与 DELE / SIELE 核心文法宝典数据库 (Gramática)
 */

export interface GrammarPoint {
  id: string;
  title: string;
  spanishTitle: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-KAOYAN';
  category: '冠词与名词' | '三大系动词与时态' | '代词系统' | '介词与连接词' | '虚拟式与从句';
  tracks: ('kaoyan' | 'dele')[]; // 考研二外 vs DELE/SIELE 归属赛道
  trackNotes?: {
    kaoyan?: string; // 考研二外踩分要点
    dele?: string;   // DELE 欧标实战要点
  };
  summary: string;
  formula: string;
  conjugationBridge?: {
    bridgeName: string;
    concept: string;
    targetTenseOrRule: string;
  };
  comparisonTable?: {
    itemA: string;
    itemB: string;
    differences: { context: string; expA: string; expB: string; zhExample: string }[];
  };
  rules: {
    name: string;
    description: string;
    examples: { es: string; zh: string }[];
  }[];
  examTrap: string; // 考研/DELE 避坑指南
}

export const SPANISH_GRAMMAR_LIST: GrammarPoint[] = [
  // ==================== 1. 冠词与名词系统 ====================
  {
    id: 'g_articles_neutral_lo',
    title: '冠词全景体系与神级中性冠词 LO 深度解析',
    spanishTitle: 'Los Artículos y el Neutro LO',
    level: 'A1-A2',
    category: '冠词与名词',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '中性冠词 lo + 形容词/过去分词/副词/que 从句的名词化句型，各大高校考研二外汉译法与单选高频压轴考点。',
      dele: 'DELE B1/B2 议论文写作中提炼抽象概念（lo importante, lo difícil）不可或缺的学术交际句型。'
    },
    summary: '西语冠词除定冠词 (el, la, los, las) 与不定冠词 (un, una, unos, unas) 外，独创了全球罕见的【中性冠词 LO】，它是将任何形容词或从句一秒升华为“抽象概念事物”的魔杖！',
    formula: '定冠/不定冠 + 名词 | LO + 阳性单数形容词/过去分词 = “...的事情/特质”',
    conjugationBridge: {
      bridgeName: '桥梁 0 · 性数配合的判断之母',
      concept: '为什么在动词变位与过去分词配合中，分词有时要加 -a、加 -os、加 -as？判定先行词的阴阳性数正是通过冠词（el/la/un/una）确定的！而 LO 修饰的词永远只有阳性单数形式，绝无复数！',
      targetTenseOrRule: '直通文法【中性概念名词化】'
    },
    rules: [
      {
        name: '1. 定冠词与不定冠词的核心语用',
        description: '定冠词表特指已知或全类别泛指；不定冠词表初次提及个体，复数 unos/unas 表“大约”（unos diez euros 大约10欧）。',
        examples: [
          { es: 'El libro está en la mesa.', zh: '这本书在桌子上 (特指双方知晓的书)。' },
          { es: 'Compré un coche nuevo.', zh: '我买了一辆新车 (初次提及泛指)。' }
        ]
      },
      {
        name: '2. 必考缩合冠词：al 与 del 铁律',
        description: '介词 a/de 遇到阳性单数定冠词 el 必须无条件缩合：a + el ➔ al；de + el ➔ del。若 el 为专有名词一部分则不缩合。',
        examples: [
          { es: 'Voy al cine con mi amigo.', zh: '我和朋友去电影院 (a + el cine ➔ al cine)。' },
          { es: 'Vengo del trabajo.', zh: '我刚下班过来 (de + el trabajo ➔ del trabajo)。' }
        ]
      },
      {
        name: '3. 神级中性冠词 LO 的四大魔法形态',
        description: 'LO + 阳单形容词 = 抽象事物（lo bueno 好的地方）；LO + que 从句 = 所...的事物（lo que quiero 我所想要的）。',
        examples: [
          { es: 'Lo importante es participar.', zh: '重要的是参与 (lo importante 抽象本质)。' },
          { es: 'No entiendo lo que dices.', zh: '我不明白你所说的话 (lo que = 所...的事情)。' }
        ]
      }
    ],
    examTrap: '【考研必考避坑】：以重读 a- 或 ha- 开头的阴性单数名词（如 agua, águila, hambre, hacha），为了避免发音音爆，单数时必须借用阳性冠词【el agua, un agua】，但其本质依然是 100% 阴性名词！修饰它的形容词必须用阴性（el agua fría 凉水，绝非 frío！），复数立刻变回 las aguas！'
  },
  {
    id: 'g_nouns_gender_ma',
    title: '名词阴阳性铁律与希腊词根 -ma 反常阳性陷阱',
    spanishTitle: 'Género de Sustantivos y Palabras en -ma',
    level: 'A1-A2',
    category: '冠词与名词',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '专四及考研二外改错题常客：el problema, el tema, el clima, el idioma, el mapa 故意错配阴性形容词。',
      dele: '日常口语与公函规范，避免将 el mapa 或 el día 说成 la mapa/la día 的基础硬伤。'
    },
    summary: '西语名词基本遵循“-o 结尾为阳性、-a 结尾为阴性”；但源自古希腊语的 -ma 结尾词汇 100% 为阳性名词，绝不能按常规视为阴性！',
    formula: '-ma 希腊词根名词 ➔ 必须配阳性定冠词 el 及阳性形容词！',
    rules: [
      {
        name: '1. 希腊词根 -ma 阳性全家桶 (必背)',
        description: '以下重点名词虽然是 -a 结尾，但统统是阳性名词：problema (问题), tema (主题), idioma (语言), sistema (系统), clima (气候), programa (节目/程序), poema (诗歌), dilema (进退两难)。',
        examples: [
          { es: 'El problema es muy complicado.', zh: '这个问题非常复杂 (el problema + complicado)。' },
          { es: 'El idioma español es maravilloso.', zh: '西班牙语很美妙 (el idioma)。' }
        ]
      },
      {
        name: '2. 经典反常男女颠倒词 (死敌对决)',
        description: 'mano (手) 看起来是 -o 却是阴性 (la mano)；día (白天) 看起来是 -a 却是阳性 (el día, ¡buenos días!)；mapa (地图) 也是阳性 (el mapa)。',
        examples: [
          { es: 'Levanta la mano derecha.', zh: '举起你的右手 (la mano derecha 阴性配合)。' },
          { es: 'Que tengas un buen día.', zh: '祝你度过美好的一天 (un buen día 阳性配合)。' }
        ]
      },
      {
        name: '3. 100% 阴性黄金后缀',
        description: '以 -dad, -tad, -ción, -sión, -umbre 结尾的名词 100% 为阴性名词（la ciudad, la verdad, la canción, la costumbre）。',
        examples: [
          { es: 'La ciudad es muy hermosa.', zh: '这座城市很漂亮 (la ciudad)。' },
          { es: 'La decisión fue difícil.', zh: '这个决定很艰难 (la decisión)。' }
        ]
      }
    ],
    examTrap: '【考研必考陷阱】：el problema 是阳性，所以修饰它时必须说 “el problema económico” 而绝对不能写成 “la problema económica”；同理，el clima templado (温带气候)，绝不是 la clima！'
  },

  // ==================== 2. 三大系动词与时态系统 ====================
  {
    id: 'g_ser_estar',
    title: '两个“是”的世纪对决：Ser vs Estar',
    spanishTitle: 'Ser vs Estar: Esencia vs Estado',
    level: 'A1-A2',
    category: '三大系动词与时态',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '二外完形填空与单选极高频考点：多义形容词接 ser 与 estar 的词义质变。',
      dele: 'A1~B2 全级别写作基石：描述人与事件的核心句式。'
    },
    summary: 'Ser 表达固有属性、本质特征、国籍身份、材质与常态时间（刻在 DNA 里的本质）；Estar 表达瞬时心境、健康状况、物理地理位置与进行时动作（仪表盘上的临时状态）。',
    formula: 'Ser + 本质/定义/时间/材料 | Estar + 临时心境/状态/地理位置/进行中动作',
    conjugationBridge: {
      bridgeName: '桥梁 4 · 两个“是”的世界观映射',
      concept: '在动词变位器中，Ser 的不规则变位 (soy, eres, es...) 象征永恒骨架；Estar 的重音加持 (estoy, estás, está...) 象征瞬态读数。山川再久远，只要是空间坐标，铁律必用 estar！',
      targetTenseOrRule: '直通变位器【Ser 与 Estar 变位矩阵】'
    },
    comparisonTable: {
      itemA: 'SER (本质 · 出厂固有配置)',
      itemB: 'ESTAR (状态 · 仪表盘临时读数)',
      differences: [
        {
          context: '性格 vs 情绪',
          expA: 'Ella es alegre. (她天性开朗阳光)',
          expB: 'Ella está alegre hoy. (她今天很高兴)',
          zhExample: '一个是天生性格，一个是当前瞬时心情'
        },
        {
          context: '聪明智商 vs 准备就绪',
          expA: 'Él es muy listo. (他智商极高/很聪明)',
          expB: 'Él ya está listo. (他已经准备就绪，可以走了)',
          zhExample: 'listo 搭配不同系动词，词义彻底质变'
        },
        {
          context: '品种绿色 vs 未成熟青涩',
          expA: 'La manzana es verde. (这苹果品种是青苹果)',
          expB: 'La manzana está verde. (这苹果还没熟，很生)',
          zhExample: '一个是品种本质，一个是成熟度当前状态'
        },
        {
          context: '乏味之人 vs 此时无聊',
          expA: 'Carlos es aburrido. (卡洛斯是个乏味无趣的人)',
          expB: 'Carlos está aburrido. (卡洛斯现在闲得发慌/无聊)',
          zhExample: '经典骂人陷阱：es aburrido 是无聊之辈，está aburrido 是感到无聊'
        }
      ]
    },
    rules: [
      {
        name: '1. 物理空间位置铁律：山川再永久也是 Estar',
        description: '无论物体存在的时间多么永恒，只要表达“位于何处物理位置”，100% 必须用 estar！唯一的例外是“某事件/活动在哪里举行”用 ser。',
        examples: [
          { es: 'Madrid está en el centro de España.', zh: '马德里位于西班牙中部 (物理地理位置用 estar)。' },
          { es: 'La fiesta es en mi casa.', zh: '聚会在我家里举行 (事件活动举行用 ser)。' }
        ]
      }
    ],
    examTrap: '【避坑警示】：表示“职业、国籍、宗教、材质”必用 ser（Soy profesor, Es de madera）；表示“生死状态”必须用 estar（Está muerto 他已经死了，不能用 ser，因为死亡是生命终结后的状态）！'
  },
  {
    id: 'g_haber_estar',
    title: '存在与定位生死线：Hay (Haber) vs Estar',
    spanishTitle: 'Existencia (Hay) vs Ubicación (Estar)',
    level: 'A1-A2',
    category: '三大系动词与时态',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '各大高校基础翻译与填空高频扣分点：冠词有无决定 hay 还是 está。',
      dele: 'DELE A1-A2 描述城市街区、寻找设施的核心问路句式。'
    },
    summary: 'Hay 表达“某处存在某物”（有/没有，关注客体是否存在）；Estar 表达“已知特定事物位于何处”（已知事物的位置坐标）。',
    formula: '地点 + hay + 不定冠词/零冠词/数字 | 定冠词/人名 + está + 地点',
    rules: [
      {
        name: '1. Hay 的搭配铁律：绝不接定冠词',
        description: 'Hay (Haber无人称形式) 后面只能跟：不定冠词 (un/una)、数字 (dos, tres)、量词 (muchos, pocos) 或复数无冠词名词。绝对不能接定冠词 (el, la, los, las)！',
        examples: [
          { es: 'Hay una farmacia cerca de aquí.', zh: '这附近有一家药店 (关注有没有药店)。' },
          { es: 'Hay muchos libros en la biblioteca.', zh: '图书馆里有许多书。' }
        ]
      },
      {
        name: '2. Estar 的搭配铁律：必接已知确指对象',
        description: '当主语带有定冠词 (el/la)、物主代词 (mi/tu) 或为人名专名时，主语已被确知，必须用 estar 寻找其位置坐标。',
        examples: [
          { es: 'La farmacia está al final de la calle.', zh: '那家药店在街道尽头 (已知特定的那家药店在哪里)。' },
          { es: '¿Dónde está mi teléfono?', zh: '我的手机在哪里？(确指的物主代词)。' }
        ]
      }
    ],
    examTrap: '【绝对红线】：西语里绝不存在 “Hay el libro” 这种病句！一旦看到定冠词 el/la，立即排除 hay，必须选用 está！'
  },
  {
    id: 'g_indefinido_imperfecto',
    title: '简单过去时 vs 过去未完成时：快门与摄像机的交锋',
    spanishTitle: 'Pretérito Indefinido vs Pretérito Imperfecto',
    level: 'B1-B2',
    category: '三大系动词与时态',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '考研二外过去时篇章填空丢分率最高的“分水岭试金石”。',
      dele: 'DELE B1/B2 口语与写作中讲述个人过往经历、讲故事故事背景铺垫的终极能力。'
    },
    summary: '简单过去时 (Indefinido: hablé, comí) 就像照相机的快门，记录动作在特定时间点爆发并彻底终结；过去未完成时 (Imperfecto: hablaba, comía) 就像摄像机，记录过去的背景铺垫、习惯性重复与未限定边界的状态！',
    formula: '时间快门点动量 (ayer, anoche) ➔ Indefinido | 背景摄像机线状态 (siempre, cuando era niño) ➔ Imperfecto',
    conjugationBridge: {
      bridgeName: '桥梁 3 · 点动量快门 vs 线状态摄像机',
      concept: '在变位器中，Indefinido 的不规则变位极多（fui, estuve, tuve, puse），这是因为突发动作具有强烈的物理冲击力；而 Imperfecto 只有 ser (era), ir (iba), ver (veía) 三个不规则词，极其平稳柔和，正是由于它用于持续背景摄像！',
      targetTenseOrRule: '直通变位器【两大约束过去时时态演武】'
    },
    comparisonTable: {
      itemA: '简单过去时 (INDEFINIDO · 快门动作)',
      itemB: '过去未完成时 (IMPERFECTO · 摄像背景)',
      differences: [
        {
          context: '突发打断 vs 背景铺垫',
          expA: 'Cuando sonó el teléfono... (电话突然响了)',
          expB: '...yo dormía en el sofá. (我正在沙发上睡觉)',
          zhExample: '快门动作(响了)打断了长线背景(正睡着)'
        },
        {
          context: '单次终结 vs 往日习惯',
          expA: 'Ayer fui al parque. (昨天我去了一次公园)',
          expB: 'De niño iba al parque todos los días. (童年时我天天去公园)',
          zhExample: 'ayer (特定单次) vs todos los días (过去反复习惯)'
        },
        {
          context: '特定起止时段 vs 边界模糊',
          expA: 'Viví en Madrid durante tres años. (我在马德里住了三年，已结束)',
          expB: 'Vivía en Madrid cuando te conocí. (认识你时我正住在马德里)',
          zhExample: 'durante tres años 边界清晰锁死，必须用简单过去时！'
        }
      ]
    },
    rules: [
      {
        name: '1. 典型时间副词旗帜对决',
        description: '看见 ayer (昨天), anoche (昨晚), el año pasado (去年), en 2010 ➔ 毫不犹豫选用 Indefinido；看见 siempre (总是), a menudo (常常), todos los días (每天), antes (过去) ➔ 优先 Imperfecto。',
        examples: [
          { es: 'El verano pasado viajé a Barcelona.', zh: '去年夏天我去巴塞罗那旅行了 (单次完成)。' },
          { es: 'Antes comía mucho chocolate.', zh: '过去我常常吃很多巧克力 (过去的习惯)。' }
        ]
      }
    ],
    examTrap: '【考研重点考点】：有具体时间跨度（如 viví allí 5 años），即使时间很长，只要动作已经彻底闭环终结，依然必须用简单过去时 viví，绝不可误用 vivía！'
  },
  {
    id: 'g_perfecto_indefinido',
    title: '复合过去时 vs 简单过去时：今日未完与昨日已死',
    spanishTitle: 'Pretérito Perfecto vs Pretérito Indefinido',
    level: 'A1-A2',
    category: '三大系动词与时态',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '西班牙本土文法与拉美文法分歧考点，考研二外一律严格遵循西班牙本土皇家语言学院 (RAE) 标准。',
      dele: 'DELE A2/B1 写作中今日时间范畴 (hoy, este mes) 与已终结时间 (ayer) 的精准时态配合。'
    },
    summary: '复合过去时 (he hablado, has comido) 表达发生在【尚未结束的时间段内】的动作，且对现在仍有心理连接（今天、这周、这辈子未死）；简单过去时 (hablé) 表达发生在【已经彻底结束的时间段内】的动作（昨天、去年）。',
    formula: '未死时间段 (hoy, esta semana, nunca, ya) ➔ Perfecto | 彻底死亡时间段 (ayer, hace un mes) ➔ Indefinido',
    rules: [
      {
        name: '1. 时间段生存状态心法',
        description: 'hoy (今天，今天还没过完), esta mañana (今天上午), esta semana (本周), este año (今年) ➔ 一律用复合过去时 (he comido)；ayer (昨天已死), el mes pasado (上个月已死) ➔ 简单过去时 (comí)。',
        examples: [
          { es: 'Hoy he desayunado café y tostadas.', zh: '今天我早餐吃了咖啡和吐司 (今天未结束)。' },
          { es: 'Ayer desayuné churros.', zh: '昨天我早餐吃了吉事果 (昨天已结束)。' }
        ]
      },
      {
        name: '2. 人生阅历未完状态 (ya / todavía no / nunca)',
        description: '表示“到目前为止这辈子有没有做过某事”，因为说话人生命尚未结束，必须用复合过去时。',
        examples: [
          { es: '¿Has estado alguna vez en España? — No, nunca he estado.', zh: '你曾去过西班牙吗？——没有，我从未去过 (人生履历)。' }
        ]
      }
    ],
    examTrap: '【西语考研重要考点】：注意 esta mañana 如果在下午说话，西班牙本土大部分地区依然视为今日范畴用 he visto；拉美全境更倾向通通使用简单过去时 vi，但国内考研及专业四级阅卷均以西班牙本土 RAE 规则为首要得分标准！'
  },

  // ==================== 3. 代词系统与自反防爆 ====================
  {
    id: 'g_pronouns_direct_indirect',
    title: '直接宾语与间接宾语代词全景及位置铁律 (RID 原则)',
    spanishTitle: 'Pronombres de Objeto Directo e Indirecto',
    level: 'A1-A2',
    category: '代词系统',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '宾语代词位置（动词前分写 vs 动名词/肯定命令式后连写带重音符），考研二外必考书写题型。',
      dele: '日常对话流畅省字、避免机械冗长重复的核心表达法。'
    },
    summary: '直接宾语代词 (me, te, lo/la, nos, os, los/las) 代替动作直接承受物；间接宾语代词 (me, te, le, nos, os, les) 代替受益人。代词次序铁律：永远是【间宾在前，直宾在后】（人前物后，RID 原则）！',
    formula: '常规句：主语 + (间宾 + 直宾) + 动词 | 三大特区：动名词/原形/肯定命令式 ➔ 必须尾随合并并补戴重音帽！',
    conjugationBridge: {
      bridgeName: '桥梁 2 · 宾语代词合体与防音爆变身',
      concept: '代词平时必须规规矩矩跑在变位动词前面；但在【肯定命令式 (¡Cómpralo!)】、【动名词 (comprándolo)】和【原形动词 (comprarlo)】中，代词强行合体挂载在词尾，导致重心后移打破自然重音，必须在原动词重音节补戴重音符号（tilde）！',
      targetTenseOrRule: '直通文法【重音戴帽与代词合并】'
    },
    rules: [
      {
        name: '1. 常规位置：变位动词前紧邻分写',
        description: '在陈述句、否定句和否定命令式中，宾代一律独立置于变位动词之前，绝不可插在否定词 no 与动词之间。',
        examples: [
          { es: 'Te lo doy mañana.', zh: '我明天把它给你 (te 间宾在前，lo 直宾在后)。' },
          { es: 'No me lo digas.', zh: '别告诉我这件事 (否定命令式代词必须在动词前)。' }
        ]
      },
      {
        name: '2. 三大合并特区与重音戴帽补偿',
        description: '遇到 1. 肯定命令式；2. 原形动词；3. 动名词，代词必须粘附在词尾！当两个代词同时粘附在词尾时，必须在原重音音节打上重音符号 (tilde)。',
        examples: [
          { es: 'Dímelo ahora mismo.', zh: '立刻把它告诉我 (di + me + lo ➔ dímelo 戴帽)。' },
          { es: 'Estoy explicándotelo.', zh: '我正在把它解释给你听 (explicando + te + lo ➔ 补戴重音符号)。' }
        ]
      }
    ],
    examTrap: '【高频书写扣分点】：肯定命令式中忘记补戴重音符（如写成 dimelo 扣分，正确为 dímelo；escríbemelo 必须戴帽）！'
  },
  {
    id: 'g_pronouns_se_cacofonia',
    title: '双重宾语代词合并与【防音爆变身 Se 法则】',
    spanishTitle: 'Cambio de LE por SE ante LO/LA',
    level: 'A2',
    category: '代词系统',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '二外代词改错、完形与翻译题 100% 设陷阱点。',
      dele: '避免出现“le lo”这种极其怪异难听的语音硬伤。'
    },
    summary: '当第三人称间接宾语代词 (le, les) 与直接宾语代词 (lo, la, los, las) 在动词前同框出现时，连续两个 [l] 音发生严重的听觉碰撞 (Cacofonía)，前方的 le/les 强制蜕变为【SE】！',
    formula: 'le / les + lo / la / los / las ➔ 【se + lo / la / los / las】 (严禁保留两L相撞)',
    rules: [
      {
        name: '1. 防音爆变身的核心机制',
        description: '西班牙人绝不容忍 “le lo doy” 这种结巴音，因此第一代词 le/les 自动退让变身为 se。',
        examples: [
          { es: '¿Le das el libro a Juan? — Sí, se lo doy.', zh: '你把书给胡安了吗？——是的，我给他它了 (le lo ➔ se lo)。' },
          { es: 'Se las envié ayer.', zh: '我昨天把它们(信件)寄给他们了 (les las ➔ se las)。' }
        ]
      },
      {
        name: '2. 歧义消除：末尾补齐 a él / a ellos',
        description: '由于 se 既能代表单数也能代表复数（给他人、给她、给您、给他们），若语境不明，句尾可补充 a él / a ella / a ellos 进行消除歧义。',
        examples: [
          { es: 'Se lo digo a ella.', zh: '我把它告诉她 (强调 se 是指她 a ella)。' }
        ]
      }
    ],
    examTrap: '【致命陷阱】：绝不能因为后面的宾语是复数，就把 se 写成 ses！西语里根本没有 ses 这种词！哪怕是给他们，也是 se los doy，绝不能写 ses los doy！'
  },
  {
    id: 'g_se_multiple_faces',
    title: '全能代词 SE 的六大面具终极解剖',
    spanishTitle: 'Los Valores del SE en español',
    level: 'B1-B2',
    category: '代词系统',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '全国各大高校考研二外文法分析题（辨析下列句子中 se 的语法功能）压轴必出大题！',
      dele: 'DELE B2 官方公函句式、无人称通知与学术客观陈述的核心表达。'
    },
    summary: 'SE 是整个西班牙语语法中最千变万化的一颗宝石。它一共拥有六副面孔：防音爆代词、自反代词、相互代词、被动 se、无人称 se 与自变固定搭配。',
    formula: '被动 se (动词单复数与受词一致) vs 无人称 se (动词永远单数且不接直接受词)',
    rules: [
      {
        name: '面具 1：防音爆代词 (Se falso / alomorfo)',
        description: '前文所学：代替间接宾代 le/les，防止两 L 相撞。',
        examples: [{ es: 'Se lo di ayer.', zh: '昨天我把它给他了。' }]
      },
      {
        name: '面具 2：自反代词 (Se reflexivo)',
        description: '动作施加在主语自己身上（主谓宾合一）。',
        examples: [{ es: 'Juan se lava la cara.', zh: '胡安洗自己的脸。' }]
      },
      {
        name: '面具 3：相互代词 (Se recíproco)',
        description: '复数主语互相施加动作（互相）。',
        examples: [{ es: 'Ellos se aman.', zh: '他们彼此相爱。' }]
      },
      {
        name: '面具 4：自反被动句 (Pasiva refleja)',
        description: '动词为及物动词，事物充当形式主语，动词单复数必须与后面的事物严格一致！',
        examples: [
          { es: 'Se habla español aquí.', zh: '这里讲西班牙语 (español 单数 ➔ habla 单数)。' },
          { es: 'Se venden casas.', zh: '房屋出售 (casas 复数 ➔ venden 复数配合！)。' }
        ]
      },
      {
        name: '面具 5：无人称句 (Se impersonal)',
        description: '表示泛指“人们、大家”，动词永远锁死在第三人称单数！后面不接可做主语的名词。',
        examples: [{ es: 'Se vive bien en esta ciudad.', zh: '在这个城市生活很舒适 (动词固定单数)。' }]
      }
    ],
    examTrap: '【考研必考大分】：自反被动句中动词必须配合（Se venden casas 房屋被卖，绝不能写 Se vende casas）；而无人称句动词永远单数（Se busca a los culpables 搜捕罪犯，前面带 a 表人，动词永远用单数 busca）！'
  },
  {
    id: 'g_gustar_verbs',
    title: '心理感官动词逆向句型 (Gustar 类动词全家桶)',
    spanishTitle: 'Verbos Tipo Gustar: Estructura Invertida',
    level: 'A1-A2',
    category: '代词系统',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '考研二外主谓一致陷阱题常客：受汉语思维影响将动词与人称误配合。',
      dele: 'A1~B1 阐述个人喜好、兴趣、痛苦与建议的基础核心句式。'
    },
    summary: 'Gustar 类动词不是“人喜欢某物”，而是“某物取悦了某人”！因此句首的人只是【间接宾语】，句尾的东西才是【真正的语法主语】！动词的单复数完全取决于后面的东西，与人毫无关系！',
    formula: '(A mí) me / (A ti) te / (A él) le + gusta (单数事物/动词原形) 或 gustan (复数事物)',
    rules: [
      {
        name: '1. 动词变位只看后置真实主语',
        description: '后面的东西是单数或动词原形 ➔ 用 gusta；后面的东西是复数 ➔ 必须用 gustan！句首的 me, te, le, nos 只表达受影响的人。',
        examples: [
          { es: 'Me gusta el fútbol.', zh: '我喜欢足球 (足球是单数主语 ➔ gusta)。' },
          { es: 'Me gustan los gatos.', zh: '我喜欢猫咪 (猫咪是复数主语 ➔ gustan)。' },
          { es: 'Nos encanta viajar.', zh: '我们热爱旅行 (动词原形充当主语 ➔ 单数 encanta)。' }
        ]
      },
      {
        name: '2. Gustar 家族核心衍生动词',
        description: 'encantar (酷爱/极度喜欢), interesar (感兴趣), importar (在乎/要紧), doler (疼痛), costar (费劲), parecer (觉得/看似)。',
        examples: [
          { es: 'Me duele la cabeza.', zh: '我头痛 (脑袋是单数主语)。' },
          { es: 'Me duelen los ojos.', zh: '我眼睛痛 (眼睛是复数主语 ➔ duelen)。' }
        ]
      }
    ],
    examTrap: '【初学者最高频错题】：千万不要说 “Yo gusto el café” 这种致命错误！必须写成 “Me gusta el café”；如果是他们喜欢这本书，是 “Les gusta el libro”，绝不可因为他们是复数就写 gustan！'
  },

  // ==================== 4. 介词与逻辑连接词 ====================
  {
    id: 'g_por_para',
    title: '两个“为了”的终极辨析：Por vs Para',
    spanishTitle: 'Por vs Para: Causa vs Finalidad',
    level: 'A2-B1',
    category: '介词与连接词',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '单选题与完形填空核心考点：区分动机与目的、价格交换与期限。',
      dele: 'DELE A2~B2 写作中清晰表述论证逻辑的黄金介词。'
    },
    summary: 'Por 表达原因、动机、交换价格、途径空间与方式工具（回头看因何而起）；Para 表达目的宗旨、受惠受众、截止期限与去向终点（向前看向何而去）。',
    formula: '【前后视线法】：向后看“因何而生、由谁经由、花多少钱”用 Por | 向前看“为了何目、送给何人、何时截止”用 Para！',
    comparisonTable: {
      itemA: 'POR (因为 · 经由 · 交换 · 时长)',
      itemB: 'PARA (为了 · 送给 · 截止 · 终点)',
      differences: [
        {
          context: '原因 vs 目的',
          expA: 'Estudio español por mi trabajo. (因为工作要求而学西语)',
          expB: 'Estudio español para viajar. (为了将来去旅游而学西语)',
          zhExample: '一个是推动力的来源起因，一个是前方的奋斗目标'
        },
        {
          context: '受惠送礼人',
          expA: 'Hago esto por ti. (看在你的面子上/为了报答你我才做)',
          expB: 'Este regalo es para ti. (这份礼物是送给你的)',
          zhExample: 'por ti 是因为你；para ti 是归属于你'
        },
        {
          context: '时间观念',
          expA: 'Viví allí por dos años. (在那住了两年时间跨度)',
          expB: 'La tarea es para mañana. (作业截止死线是明天)',
          zhExample: 'por 表时间跨度时长，para 表终点截止死线 Deadline'
        }
      ]
    },
    rules: [
      {
        name: '1. Por 的独家高频领地',
        description: '表达原因（gracias por... 感谢因为...）；表达途径空间（caminar por el parque 穿过公园）；表达交换（compre esto por 20 euros 花20欧买下）。',
        examples: [
          { es: 'Gracias por tu ayuda.', zh: '感谢你的帮助 (原因必用 por)。' },
          { es: 'Paseamos por la playa.', zh: '我们在海滩上散步 (穿行空间用 por)。' }
        ]
      },
      {
        name: '2. Para 的独家高频领地',
        description: '表达奔赴的终点目的地（salimos para Madrid 出发前往马德里）；表达个人观点（para mí 在我看来）；表达截止死线（para el viernes 周五前截止）。',
        examples: [
          { es: 'El tren sale para Sevilla.', zh: '列车开往塞维利亚 (目的地用 para)。' },
          { es: 'Para mí, la salud es lo primero.', zh: '在我看来，健康是第一位的。' }
        ]
      }
    ],
    examTrap: '【考研必考避坑】：表达“被动句的动作施加者”时（由谁所做），必须用【por】（El libro fue escrito por Cervantes），绝对不能用 para！表达“为了做某事”接动词原形时，必须用【para + 原形】（para aprobar el examen 为了通过考试）！'
  },
  {
    id: 'g_preposition_personal_a',
    title: '人称标记介词 A 与核心介词 A / DE / EN 规范',
    spanishTitle: 'La Preposición A Personal y Usos de DE / EN',
    level: 'A1-A2',
    category: '介词与连接词',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '单选题改错题最高频考点：直接宾语指人时遗漏介词 A 必扣大分。',
      dele: 'A2~B1 描述亲友社交关系、出行方式与空间属性的标准规范。'
    },
    summary: '在西语中，当直接宾语指代【确定的人或拟人化宠物】时，前面必须强行加介词【A】（人身标记 A）；若指物则绝对不加！这是西班牙语最经典的灵魂特征之一。',
    formula: '及物动词 + A + 确指的人/宠物 (人身标记 A) | 及物动词 + 物 (不加 A)',
    rules: [
      {
        name: '1. 人称标记 A (A personal) 强制启动规则',
        description: '直接宾语是指具体的人或被视为家人的宠物时，必须加上 a。',
        examples: [
          { es: 'Veo a María en el parque.', zh: '我在公园里看到了玛丽亚 (宾语是具体的人 ➔ 必加 a)。' },
          { es: 'Veo la casa en la montaña.', zh: '我看到了山上的房子 (宾语是物 ➔ 绝不加 a)。' },
          { es: 'Paseo a mi perro.', zh: '我遛我的狗 (拟人化宠物带 a)。' }
        ]
      },
      {
        name: '2. 介词 A 的免用特例：Tener 动词后通常不加',
        description: '在动词 tener (拥有) 后面即使指人，通常也不加 a（Tengo dos hermanos 我有两个兄弟）。',
        examples: [{ es: 'Tengo un hermano mayor.', zh: '我有一个哥哥 (tener 后指人默认不加 a)。' }]
      }
    ],
    examTrap: '【考研送命题】：Escucho la música (听音乐，物不加 a) vs Escucho a la profesora (听老师讲话，人必须加 a)！遗漏这个 a 是西语专四与二外翻译题的最常见丢分陷阱！'
  },

  // ==================== 5. 虚拟式与从句系统 ====================
  {
    id: 'g_subjuntivo_weirdo',
    title: '虚拟式触发引擎：W-E-I-R-D-O 情感六角星法则',
    spanishTitle: 'El Subjuntivo: Regla de la Estrella W-E-I-R-D-O',
    level: 'B1-B2',
    category: '虚拟式与从句',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '全国高校考研二外自命题分值最高的语法专题（从句时态呼应与虚拟式选择题）。',
      dele: 'DELE B1/B2 迈入中高级门槛的绝对试金石，虚拟式运用自如是取得 APTO 的关键。'
    },
    summary: '虚拟式并非单纯的时态，而是说话人对客观现实的“主观心理态度”。当主句表达愿望(W)、情绪(E)、客观评价(I)、要求(R)、怀疑否定(D)与神明但愿(O)，且主从句主语不同时，从句动词强制启动【A⇄E 元音互换】进入虚拟式！',
    formula: '主句点亮 W-E-I-R-D-O + 连接词 que + 主从主语不一致 = 从句动词必用虚拟式！',
    conjugationBridge: {
      bridgeName: '桥梁 1 · 虚拟式元音对调换乘站 (Swap Vowels)',
      concept: '在变位器中，-ar 动词在直陈式为 -a，进入虚拟式瞬间变成 -e (hable, hables...)；-er/-ir 动词在直陈式为 -e，进入虚拟式瞬间变成 -a (coma, comas...)！只要背熟现在时 yo 变位，取词根互换元音，整个虚拟式一网打尽！',
      targetTenseOrRule: '直通变位器【虚拟式现在时元音对调】'
    },
    rules: [
      {
        name: 'W - Wishes / 意愿愿望',
        description: 'querer, desear, preferir, esperar + que 引导从句，主语不同用虚拟式。',
        examples: [{ es: 'Quiero que vengas a mi fiesta.', zh: '我想让你来我的派对 (venir 变身 vengas)。' }]
      },
      {
        name: 'E - Emotions / 情绪情感',
        description: 'alegrarse de, sentir, temer, gustar, encantar + que。',
        examples: [{ es: 'Me alegro de que estés bien.', zh: '我真高兴你一切都好 (estar 变身 estés)。' }]
      },
      {
        name: 'I - Impersonal / 无人称客观评价',
        description: 'Es necesario / importante / bueno / una lástima que。',
        examples: [{ es: 'Es importante que estudiemos todos los días.', zh: '我们每天都学习是很重要的。' }]
      },
      {
        name: 'D - Doubt & Denial / 怀疑与否定',
        description: 'dudar (怀疑), no creer (不相信), no pensar (不认为), no es verdad (不是真的)。',
        examples: [
          { es: 'No creo que sea verdad.', zh: '我不相信这是真的 (否定相信 ➔ sea 虚拟式)。' },
          { es: 'Creo que es verdad.', zh: '我相信这是真的 (肯定相信 ➔ es 直陈式事实！)。' }
        ]
      },
      {
        name: 'O - Ojalá / 但愿与祝福',
        description: '源自阿拉伯语（愿真主保佑），后面无条件 100% 紧跟虚拟式！',
        examples: [{ es: '¡Ojalá que haga buen tiempo mañana!', zh: '但愿明天是个好天气！(haga 虚拟式)。' }]
      }
    ],
    examTrap: '【考研必考核弹题】：Creo que (我相信) 后面接【直陈式事实】；而否定句 No creo que (我不相信) 破坏了事实客观性，后面必须接【虚拟式】！同理：Pienso que es vs No pienso que sea！'
  },
  {
    id: 'g_subjuntivo_temporales',
    title: '时间状语从句虚拟式判定法则：未发生未来 vs 习惯既成',
    spanishTitle: 'Oraciones Temporales: Cuando + Subjuntivo',
    level: 'B1-B2',
    category: '虚拟式与从句',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '考研单选与时态填空最易踩雷的高频考题。',
      dele: 'DELE B1/B2 制定未来计划、商务交谈与条件约定的标准句型。'
    },
    summary: '当 cuando (当...时), en cuanto / tan pronto como (一...就), hasta que (直到) 引导时间状语从句时：如果指向【尚未发生的未来动作】，从句动词强制使用虚拟式；如果指向【过去既成事实或平时反复习惯】，必须使用直陈式！',
    formula: '未来未发生动作 ➔ Cuando + 虚拟式 | 过去完成动作 / 经常性习惯 ➔ Cuando + 直陈式',
    rules: [
      {
        name: '1. 未发生未来动作：必须用虚拟式',
        description: '主句动词为将来时 (viajaré) 或命令式 (llámame) 时，从句动作显然尚未发生，属于未来预设，从句必须用虚拟式。',
        examples: [
          { es: 'Te llamaré cuando llegue a casa.', zh: '我到家时就给你打电话 (尚未到家 ➔ 虚拟式 llegue)。' },
          { es: 'Dime la verdad cuando puedas.', zh: '你有空时请告诉我真相 (尚未有空 ➔ pueda 虚拟式)。' }
        ]
      },
      {
        name: '2. 过去事实或平时习惯：必须用直陈式',
        description: '如果该动作平时天天发生，或过去已经终结，它是客观存在的，绝不用虚拟式。',
        examples: [
          { es: 'Cuando llego a casa, siempre ceno primero.', zh: '每次我到家时，总是先吃晚饭 (平时习惯 ➔ 直陈式 llego)。' },
          { es: 'Cuando llegó la policía, los ladrones huyeron.', zh: '警察到达时，小偷们逃跑了 (过去事实 ➔ 简单过去时 llegó)。' }
        ]
      },
      {
        name: '3. Antes de que 铁律：100% 必须接虚拟式',
        description: '无论如何，连接词 antes de que (在...之前) 后面 100% 无条件必须用虚拟式，因为事情在发生之前都是未实现的！',
        examples: [{ es: 'Sal antes de que llueva.', zh: '在下雨之前赶紧出门吧 (llueva 虚拟式)。' }]
      }
    ],
    examTrap: '【考研必考大陷阱】：在西语中，从句里【绝对不能用一般将来时】！比如英语说 “when I will arrive”，西语严禁说 “cuando llegaré”，必须转换为 “cuando llegue (虚拟式现在时)”！'
  },
  {
    id: 'g_conditionals_si',
    title: '条件从句 Si 的三重时态跳跃平行宇宙',
    spanishTitle: 'Las Oraciones Condicionales con SI',
    level: 'B2-C1-KAOYAN',
    category: '虚拟式与从句',
    tracks: ['kaoyan', 'dele'],
    trackNotes: {
      kaoyan: '各大高校考研二外虚拟式考核终极压轴题型（虚拟式未完成时与条件式搭配）。',
      dele: 'DELE B2/C1 探讨假设、提出反事实论证的高阶表达标志。'
    },
    summary: '由 Si (如果) 引导的条件句分为三个平行宇宙：1. 真实可能条件；2. 与现在相反的虚拟假设；3. 与过去事实完全相反的无法挽回的遗憾。时态搭配拥有绝对数学铁律，绝不可随意乱配！',
    formula: '1型可能: Si + 直陈现在 ➔ 将来/现在 | 2型与现在相反: Si + 虚拟未完成 ➔ 简单条件式 | 3型与过去相反: Si + 虚拟愈过去 ➔ 复合条件式',
    rules: [
      {
        name: '第一宇宙：真实可能条件 (Posible)',
        description: '条件具有很大实现可能。从句用直陈式现在时，主句用将来时或现在时。',
        examples: [{ es: 'Si tengo tiempo mañana, iré al cine.', zh: '如果我明天有时间，我就去看电影。' }]
      },
      {
        name: '第二宇宙：与现在事实相反的虚拟假设 (Irreal del presente)',
        description: '对现在的纯假设（如果我现在是鸟，如果我现在有钱）。从句必用虚拟式未完成时 (-ra)，主句必用简单条件式 (-ría)！',
        examples: [{ es: 'Si tuviera dinero, viajaría por todo el mundo.', zh: '如果我现在有钱（实际上没有），我就去环游世界了。' }]
      },
      {
        name: '第三宇宙：与过去事实相反的历史遗憾 (Irreal del pasado)',
        description: '对过去的懊悔遗憾（如果当时我好好复习了，我就能通过考试了）。从句必用虚拟式愈过去时 (hubiera + p.p.)，主句用复合条件式 (habría + p.p.)！',
        examples: [{ es: 'Si hubieras estudiado, habrías aprobado el examen.', zh: '如果你当时努力学习了（实际没学），你早就通过考试了。' }]
      }
    ],
    examTrap: '【西语铁律第一死刑禁忌】：在 Si (如果) 引导的从句里，【绝对禁止出现一般将来时 (irá)】和【条件式 (iría)】！例如绝对不能说 “Si tendría dinero”，100% 零分！必须是 “Si tuviera dinero”！'
  }
];

// 向后兼容旧字段导出的别名
export const SPANISH_GRAMMAR_TOPICS = SPANISH_GRAMMAR_LIST;
export type GrammarTopic = GrammarPoint;
