// Spanish Vocabulary Flashcards Dataset (CEFR A1 - B2 & TEM-4 / 考研二外高频)
export interface SpanishVocab {
  id: string;
  spanish: string; // 核心词汇 (不含冠词)
  article?: string; // 冠词: "el", "la", "el/la"
  word: string; // 兼容旧字段: 包含冠词的完整显示
  gender: 'masculine' | 'feminine' | 'both' | 'none'; // 阴阳性分类
  pos: string; // 词性缩写 (sustantivo m., sustantivo f., etc.)
  partOfSpeech: string; // 兼容旧字段
  phonetic: string; // 国际音标 / 重音拆解
  chinese: string; // 中文释义
  meaning: string; // 兼容旧字段
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'TEM4';
  category: string; // 分类标签 (生活日常, 抽象学术, 动词搭配, 易错陷阱)
  example: {
    es: string;
    zh: string;
  };
  exampleEs: string; // 兼容旧字段
  exampleZh: string; // 兼容旧字段
  tip?: string; // 易错考点提示 (如 -ma 结尾阳性、重音 a- 单数用 el 等)
  isException?: boolean; // 是否属于经典反常阴阳性词汇
}

// 兼容别名导出
export type VocabCard = SpanishVocab;

export const SPANISH_VOCAB_LIST: SpanishVocab[] = [
  // ================= A1 入门起步 (生活日常 + 基础陷阱) =================
  {
    id: 'es-a1-001',
    spanish: 'problema',
    article: 'el',
    word: 'el problema',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[pɾoˈβle.ma]',
    chinese: '问题、难题',
    meaning: '问题、难题',
    level: 'A1',
    category: '高频核心 · 陷阱词',
    example: {
      es: 'No hay ningún problema, lo resolveremos juntos esta tarde.',
      zh: '没有任何问题，我们今天下午会一起解决的。'
    },
    exampleEs: 'No hay ningún problema, lo resolveremos juntos esta tarde.',
    exampleZh: '没有任何问题，我们今天下午会一起解决的。',
    tip: '⚠️【高频考点】以 -a 结尾却是阳性！希腊语借词（同类：el tema, el sistema, el idioma, el clima）。',
    isException: true
  },
  {
    id: 'es-a1-002',
    spanish: 'mano',
    article: 'la',
    word: 'la mano',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈma.no]',
    chinese: '手、手部',
    meaning: '手、手部',
    level: 'A1',
    category: '身体部位 · 陷阱词',
    example: {
      es: 'Por favor, lávate las manos antes de sentarte a comer.',
      zh: '坐下吃饭之前，请把手洗干净。'
    },
    exampleEs: 'Por favor, lávate las manos antes de sentarte a comer.',
    exampleZh: '坐下吃饭之前，请把手洗干净。',
    tip: '⚠️【高频考点】以 -o 结尾却是阴性！必须搭配阴性冠词与形容词：la mano / las manos limpias。',
    isException: true
  },
  {
    id: 'es-a1-003',
    spanish: 'día',
    article: 'el',
    word: 'el día',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈdi.a]',
    chinese: '天、白天、日子',
    meaning: '天、白天、日子',
    level: 'A1',
    category: '时间与日常',
    example: {
      es: '¡Buenos días! Hoy hace un día maravilloso para pasear.',
      zh: '早上好！今天是个非常适合散步的美妙日子。'
    },
    exampleEs: '¡Buenos días! Hoy hace un día maravilloso para pasear.',
    exampleZh: '早上好！今天是个非常适合散步的美妙日子。',
    tip: '⚠️ 经典反常阳性词，故日常问安为 ¡Buenos días!（阳性复数），而非 buenas。',
    isException: true
  },
  {
    id: 'es-a1-004',
    spanish: 'agua',
    article: 'el',
    word: 'el agua',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈa.ɣwa]',
    chinese: '水 (阴性名词！)',
    meaning: '水 (阴性名词！)',
    level: 'A1',
    category: '日常饮食 · 防音爆',
    example: {
      es: 'Bebo un vaso de agua fresca todas las mañanas.',
      zh: '我每天早晨都会喝一杯清凉的水。'
    },
    exampleEs: 'Bebo un vaso de agua fresca todas las mañanas.',
    exampleZh: '我每天早晨都会喝一杯清凉的水。',
    tip: '⚡【防音爆避难法则】重读 a- 开头的单数阴性名词，单数定冠词用 el，但本质仍是阴性！形容词用阴性 (el agua fría)，复数恢复 (las aguas)。',
    isException: true
  },
  {
    id: 'es-a1-005',
    spanish: 'ciudad',
    article: 'la',
    word: 'la ciudad',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[θjuˈðað]',
    chinese: '城市',
    meaning: '城市',
    level: 'A1',
    category: '地理城市',
    example: {
      es: 'Madrid es una ciudad muy hermosa, animada y llena de historia.',
      zh: '马德里是一座非常美丽、充满活力且底蕴深厚的城市。'
    },
    exampleEs: 'Madrid es una ciudad muy hermosa, animada y llena de historia.',
    exampleZh: '马德里是一座非常美丽、充满活力且底蕴深厚的城市。',
    tip: '规律：以 -dad / -tad / -tud 结尾的名词 100% 为阴性！'
  },
  {
    id: 'es-a1-006',
    spanish: 'estación',
    article: 'la',
    word: 'la estación',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[es.taˈθjon]',
    chinese: '车站、季节',
    meaning: '车站、季节',
    level: 'A1',
    category: '交通与季节',
    example: {
      es: 'Nos encontraremos a las ocho en la estación de tren de Atocha.',
      zh: '我们八点在阿托查火车站碰面。'
    },
    exampleEs: 'Nos encontraremos a las ocho en la estación de tren de Atocha.',
    exampleZh: '我们八点在阿托查火车站碰面。',
    tip: '规律：以 -ción / -sión / -z 结尾的名词绝大多数为阴性 (la estación, la televisión, la paz)。'
  },
  {
    id: 'es-a1-007',
    spanish: 'mapa',
    article: 'el',
    word: 'el mapa',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈma.pa]',
    chinese: '地图',
    meaning: '地图',
    level: 'A1',
    category: '地理工具 · 陷阱词',
    example: {
      es: 'Mira el mapa de España para planificar nuestra ruta de viaje.',
      zh: '看看西班牙地图来规划我们的旅游路线吧。'
    },
    exampleEs: 'Mira el mapa de España para planificar nuestra ruta de viaje.',
    exampleZh: '看看西班牙地图来规划我们的旅游路线吧。',
    tip: '⚠️ -a 结尾阳性陷阱词！必须说 el mapa turístico，复数 los mapas。',
    isException: true
  },
  {
    id: 'es-a1-008',
    spanish: 'tiempo',
    article: 'el',
    word: 'el tiempo',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈtjem.po]',
    chinese: '时间、天气',
    meaning: '时间、天气',
    level: 'A1',
    category: '时间与气候',
    example: {
      es: 'No tengo suficiente tiempo libre hoy para ir al cine.',
      zh: '我今天没有足够的空余时间去看电影。'
    },
    exampleEs: 'No tengo suficiente tiempo libre hoy para ir al cine.',
    exampleZh: '我今天没有足够的空余时间去看电影。',
    tip: '常见句型：¿Qué tiempo hace hoy? (今天天气如何？) / a tiempo (准时)。'
  },

  // ================= A2 基础进阶 (社会风俗 + 常用搭配) =================
  {
    id: 'es-a2-001',
    spanish: 'costumbre',
    article: 'la',
    word: 'la costumbre',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[kosˈtum.bɾe]',
    chinese: '风俗、习俗、习惯',
    meaning: '风俗、习俗、习惯',
    level: 'A2',
    category: '文化习俗',
    example: {
      es: 'Dormir la siesta es una costumbre tradicional española muy famosa.',
      zh: '睡午觉是一项非常著名的西班牙传统习俗。'
    },
    exampleEs: 'Dormir la siesta es una costumbre tradicional española muy famosa.',
    exampleZh: '睡午觉是一项非常著名的西班牙传统习俗。',
    tip: '规律：以 -umbre 结尾的名词绝大多数为阴性 (la costumbre, la cumbre, la certidumbre)。'
  },
  {
    id: 'es-a2-002',
    spanish: 'viaje',
    article: 'el',
    word: 'el viaje',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈbja.xe]',
    chinese: '旅行、旅途',
    meaning: '旅行、旅途',
    level: 'A2',
    category: '旅游出行',
    example: {
      es: '¡Buen viaje y que disfrutes mucho de tus vacaciones en Sevilla!',
      zh: '旅途愉快，祝你在塞维利亚度假玩得开心！'
    },
    exampleEs: '¡Buen viaje y que disfrutes mucho de tus vacaciones en Sevilla!',
    exampleZh: '旅途愉快，祝你在塞维利亚度假玩得开心！',
    tip: '规律：以 -aje 结尾的名词 100% 为阳性！(el viaje, el equipaje, el paisaje, el mensaje)。'
  },
  {
    id: 'es-a2-003',
    spanish: 'idioma',
    article: 'el',
    word: 'el idioma',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[iˈðjo.ma]',
    chinese: '语言',
    meaning: '语言',
    level: 'A2',
    category: '语言学习 · 陷阱词',
    example: {
      es: 'El español es el segundo idioma más hablado del mundo como lengua materna.',
      zh: '西班牙语是世界上作为母语使用人数第二多的语言。'
    },
    exampleEs: 'El español es el segundo idioma más hablado del mundo como lengua materna.',
    exampleZh: '西班牙语是世界上作为母语使用人数第二多的语言。',
    tip: '⚠️ 希腊语 -ma 词缀，强制为阳性：el idioma español（严禁写成 la idioma）。',
    isException: true
  },
  {
    id: 'es-a2-004',
    spanish: 'gente',
    article: 'la',
    word: 'la gente',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈxen.te]',
    chinese: '人们、大家 (单数集合名词)',
    meaning: '人们、大家 (单数集合名词)',
    level: 'A2',
    category: '人际社交 · 变位陷阱',
    example: {
      es: 'La gente en Andalucía es especialmente acogedora y simpática.',
      zh: '安达卢西亚的人们格外热情好客且亲切友善。'
    },
    exampleEs: 'La gente en Andalucía es especialmente acogedora y simpática.',
    exampleZh: '安达卢西亚的人们格外热情好客且亲切友善。',
    tip: '⚠️【高频语法陷阱】gente 表复数含义，但语法形式为阴性单数！动词一律用单数：La gente es/está（不可用 son）。'
  },
  {
    id: 'es-a2-005',
    spanish: 'tema',
    article: 'el',
    word: 'el tema',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈte.ma]',
    chinese: '话题、主题、题目',
    meaning: '话题、主题、题目',
    level: 'A2',
    category: '学术交流 · 陷阱词',
    example: {
      es: 'Vamos a debatir sobre el tema del cambio climático en la próxima clase.',
      zh: '我们将在下一节课上就气候变化这一主题展开辩论。'
    },
    exampleEs: 'Vamos a debatir sobre el tema del cambio climático en la próxima clase.',
    exampleZh: '我们将在下一节课上就气候变化这一主题展开辩论。',
    tip: '⚠️ 经典 -ma 阳性名词：el tema principal（主旨）。',
    isException: true
  },
  {
    id: 'es-a2-006',
    spanish: 'foto',
    article: 'la',
    word: 'la foto',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈfo.to]',
    chinese: '照片 (fotografía 缩写)',
    meaning: '照片 (fotografía 缩写)',
    level: 'A2',
    category: '数码摄影 · 陷阱词',
    example: {
      es: '¿Puedo sacarme una foto contigo frente a la Alhambra?',
      zh: '我可以在阿尔罕布拉宫前和你拍一张合照吗？'
    },
    exampleEs: '¿Puedo sacarme una foto contigo frente a la Alhambra?',
    exampleZh: '我可以在阿尔罕布拉宫前和你拍一张合照吗？',
    tip: '⚠️ 缩写词保留全称性数：fotografía 为阴性，因此 foto 为阴性：la foto / las fotos。',
    isException: true
  },

  // ================= B1 进阶通关 (社会议题 + 辩论表态) =================
  {
    id: 'es-b1-001',
    spanish: 'desarrollo',
    article: 'el',
    word: 'el desarrollo',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[de.saˈro.ʎo]',
    chinese: '发展、开发、展开',
    meaning: '发展、开发、展开',
    level: 'B1',
    category: '经济发展',
    example: {
      es: 'El desarrollo sostenible es indispensable para garantizar el porvenir.',
      zh: '可持续发展对于保障未来的前途命运是不可或缺的。'
    },
    exampleEs: 'El desarrollo sostenible es indispensable para garantizar el porvenir.',
    exampleZh: '可持续发展对于保障未来的前途命运是不可或缺的。',
    tip: 'DELE B1/B2 写作高频核心热点：el desarrollo económico y social。'
  },
  {
    id: 'es-b1-002',
    spanish: 'medio ambiente',
    article: 'el',
    word: 'el medio ambiente',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[ˈme.ðjo amˈbjen.te]',
    chinese: '生态环境、自然环境',
    meaning: '生态环境、自然环境',
    level: 'B1',
    category: '生态环保',
    example: {
      es: 'Todos los ciudadanos deben colaborar en la protección del medio ambiente.',
      zh: '所有公民都应当在生态环境保护中通力协作。'
    },
    exampleEs: 'Todos los ciudadanos deben colaborar en la protección del medio ambiente.',
    exampleZh: '所有公民都应当在生态环境保护中通力协作。',
    tip: '常搭配动词：proteger / respetar / contaminar el medio ambiente。'
  },
  {
    id: 'es-b1-003',
    spanish: 'ventaja',
    article: 'la',
    word: 'la ventaja',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[benˈta.xa]',
    chinese: '优势、长处、利益',
    meaning: '优势、长处、利益',
    level: 'B1',
    category: '议论逻辑',
    example: {
      es: 'Una de las mayores ventajas del transporte público es la reducción de emisiones.',
      zh: '公共交通最大的优势之一是减少碳排放。'
    },
    exampleEs: 'Una de las mayores ventajas del transporte público es la reducción de emisiones.',
    exampleZh: '公共交通最大的优势之一是减少碳排放。',
    tip: '反义词：la desventaja / el inconveniente。议论文必备词对：las ventajas e inconvenientes。'
  },
  {
    id: 'es-b1-004',
    spanish: 'opinión',
    article: 'la',
    word: 'la opinión',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[o.piˈnjon]',
    chinese: '观点、见解、看法',
    meaning: '观点、见解、看法',
    level: 'B1',
    category: '主观表达',
    example: {
      es: 'En mi opinión, el aprendizaje autodidacta fomenta la independencia.',
      zh: '在我看来，自主学习能极大地促进个人的独立性。'
    },
    exampleEs: 'En mi opinión, el aprendizaje autodidacta fomenta la independencia.',
    exampleZh: '在我看来，自主学习能极大地促进个人的独立性。',
    tip: '句式考点：En mi opinión... / Desde mi punto de vista... / Soy de la opinión de que + 直陈式。'
  },
  {
    id: 'es-b1-005',
    spanish: 'compromiso',
    article: 'el',
    word: 'el compromiso',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[kom.pɾoˈmi.so]',
    chinese: '承诺、责任、婚约',
    meaning: '承诺、责任、婚约',
    level: 'B1',
    category: '社会责任',
    example: {
      es: 'La empresa ha asumido un firme compromiso con la innovación social.',
      zh: '该企业对社会创新承担了坚定的承诺。'
    },
    exampleEs: 'La empresa ha asumido un firme compromiso con la innovación social.',
    exampleZh: '该企业对社会创新承担了坚定的承诺。',
    tip: '固定搭配：asumir un compromiso (履行承担承诺) / comprometerse a hacer algo。'
  },

  // ================= B2 提升准绳 (学术辨析 + 抽象概念) =================
  {
    id: 'es-b2-001',
    spanish: 'globalización',
    article: 'la',
    word: 'la globalización',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[glo.βa.li.θaˈθjon]',
    chinese: '全球化',
    meaning: '全球化',
    level: 'B2',
    category: '学术思辨',
    example: {
      es: 'El impacto de la globalización económica en las culturas locales es ambivalente.',
      zh: '经济全球化对本土文化的冲击具有双重复杂性。'
    },
    exampleEs: 'El impacto de la globalización económica en las culturas locales es ambivalente.',
    exampleZh: '经济全球化对本土文化的冲击具有双重复杂性。',
    tip: 'DELE B2 议论文写作与口语 Tarea 1 必备学术核心词。'
  },
  {
    id: 'es-b2-002',
    spanish: 'desafío',
    article: 'el',
    word: 'el desafío',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[de.saˈfi.o]',
    chinese: '挑战、艰难抉择 (同义词 reto)',
    meaning: '挑战、艰难抉择 (同义词 reto)',
    level: 'B2',
    category: '学术思辨',
    example: {
      es: 'Afrontar este desafío colosal requiere estrecha cooperación multilateral.',
      zh: '应对这一巨大挑战需要紧密的国际多边合作。'
    },
    exampleEs: 'Afrontar este desafío colosal requiere estrecha cooperación multilateral.',
    exampleZh: '应对这一巨大挑战需要紧密的国际多边合作。',
    tip: '同义词：el reto。动词搭配：afrontar / superar / plantear un desafío。'
  },
  {
    id: 'es-b2-003',
    spanish: 'incertidumbre',
    article: 'la',
    word: 'la incertidumbre',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[in.θeɾ.tiˈðum.bɾe]',
    chinese: '不确定性、未知感',
    meaning: '不确定性、未知感',
    level: 'B2',
    category: '哲学与心理',
    example: {
      es: 'En épocas de profunda incertidumbre, la resiliencia es el recurso más valioso.',
      zh: '在充满剧烈不确定的时代，心理韧性是最可贵的资源。'
    },
    exampleEs: 'En épocas de profunda incertidumbre, la resiliencia es el recurso más valioso.',
    exampleZh: '在充满剧烈不确定的时代，心理韧性是最可贵的资源。',
    tip: '反义词：la certeza (确信)。以 -umbre 结尾强制为阴性！'
  },
  {
    id: 'es-b2-004',
    spanish: 'perspectiva',
    article: 'la',
    word: 'la perspectiva',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[peɾs.pekˈti.βa]',
    chinese: '视角、前景、透视',
    meaning: '视角、前景、透视',
    level: 'B2',
    category: '学术思辨',
    example: {
      es: 'Desde una perspectiva científica rigurosa, las conclusiones son determinantes.',
      zh: '从严密的科学视角来看，这些推论是具有决定性的。'
    },
    exampleEs: 'Desde una perspectiva científica rigurosa, las conclusiones son determinantes.',
    exampleZh: '从严密的科学视角来看，这些推论是具有决定性的。',
    tip: '句式：abrir nuevas perspectivas (开拓全新前景) / cambiar de perspectiva。'
  },

  // ================= TEM-4 / 考研二外高频专攻 =================
  {
    id: 'es-tem4-001',
    spanish: 'águila',
    article: 'el',
    word: 'el águila',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈa.ɣi.la]',
    chinese: '老鹰 (阴性名词！)',
    meaning: '老鹰 (阴性名词！)',
    level: 'TEM4',
    category: '专四高频 · 考研必考',
    example: {
      es: 'El águila imperial sobrevolaba la cordillera con majestuosidad.',
      zh: '白肩雕以威严的姿态盘旋在山脉上空。'
    },
    exampleEs: 'El águila imperial sobrevolaba la cordillera con majestuosidad.',
    exampleZh: '白肩雕以威严的姿态盘旋在山脉上空。',
    tip: '⚠️【专四考研高频考题】以重读 a- 开头的阴性单数名词，单数用 el águila / un águila，复数必须用 las águilas！形容词必须用阴性：el águila blanca。',
    isException: true
  },
  {
    id: 'es-tem4-002',
    spanish: 'hacha',
    article: 'el',
    word: 'el hacha',
    gender: 'feminine',
    pos: 'sustantivo f.',
    partOfSpeech: 'sustantivo f.',
    phonetic: '[ˈa.tʃa]',
    chinese: '斧头 (阴性名词！)',
    meaning: '斧头 (阴性名词！)',
    level: 'TEM4',
    category: '专四高频 · 考研必考',
    example: {
      es: 'El leñador afiló el hacha antes de adentrarse en el bosque.',
      zh: '伐木工人在深入森林之前磨利了斧头。'
    },
    exampleEs: 'El leñador afiló el hacha antes de adentrarse en el bosque.',
    exampleZh: '伐木工人在深入森林之前磨利了斧头。',
    tip: '⚠️【重读 ha- 规则】h 不发音，以重读 ha- 开头同样触发防音爆规则：单数用 el hacha，复数恢复 las hachas。',
    isException: true
  },
  {
    id: 'es-tem4-003',
    spanish: 'sistema',
    article: 'el',
    word: 'el sistema',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[sisˈte.ma]',
    chinese: '系统、体制、制度',
    meaning: '系统、体制、制度',
    level: 'TEM4',
    category: '专四高频 · 希腊词根',
    example: {
      es: 'El sistema educativo actual necesita reformas orientadas a la práctica.',
      zh: '当前的教育体制需要开展面向实践的改革。'
    },
    exampleEs: 'El sistema educativo actual necesita reformas orientadas a la práctica.',
    exampleZh: '当前的教育体制需要开展面向实践的改革。',
    tip: '⚠️ 专四常考希腊借词阳性：el sistema solar, el sistema nervioso。',
    isException: true
  },
  {
    id: 'es-tem4-004',
    spanish: 'planeta',
    article: 'el',
    word: 'el planeta',
    gender: 'masculine',
    pos: 'sustantivo m.',
    partOfSpeech: 'sustantivo m.',
    phonetic: '[plaˈne.ta]',
    chinese: '行星、地球',
    meaning: '行星、地球',
    level: 'TEM4',
    category: '专四高频 · 考研必考',
    example: {
      es: 'Debemos cuidar el planeta Tierra para las generaciones venideras.',
      zh: '我们必须为了后代子孙呵护地球家园。'
    },
    exampleEs: 'Debemos cuidar el planeta Tierra para las generaciones venideras.',
    exampleZh: '我们必须为了后代子孙呵护地球家园。',
    tip: '⚠️ -a 结尾阳性极高频陷阱：el planeta / nuestro planeta azul。',
    isException: true
  }
];
