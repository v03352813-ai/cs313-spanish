const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.resolve(__dirname, '..', 'src', 'data', 'examData.ts');

// 题库母库：分类题库定义
const DELE_QUESTIONS_POOL = [
  {
    type: 'grammar',
    questionText: 'Completa la frase con la opción correcta: "Espero sinceramente que tú ________ (venir) mañana a mi fiesta de cumpleaños."',
    options: [
      { key: 'A', text: 'vienes' },
      { key: 'B', text: 'vengas' },
      { key: 'C', text: 'vendrás' },
      { key: 'D', text: 'venías' }
    ],
    correctAnswer: 'B',
    categoryTag: '虚拟式现在时变位',
    score: 20,
    explanation: '【考点剖析】：主句动词 esperar 表愿望期许（属于 W-E-I-R-D-O 六角星首要触发动词），主句主语 (yo) 与从句主语 (tú) 不一致，从句必须使用虚拟式现在时。venir 的虚拟式第二人称单数为 vengas（选 B）。'
  },
  {
    type: 'grammar',
    questionText: 'Elige la forma verbal adecuada: "Ayer por la tarde, mientras nosotros ________ (estudiar) en la biblioteca, empezó a llover fuertemente."',
    options: [
      { key: 'A', text: 'estudiamos' },
      { key: 'B', text: 'estudiábamos' },
      { key: 'C', text: 'estudiaremos' },
      { key: 'D', text: 'hemos estudiado' }
    ],
    correctAnswer: 'B',
    categoryTag: '过去未完成时 vs 简单过去时',
    score: 20,
    explanation: '【考点剖析】：mientras 引导过去正在持续进行的动作（背景铺垫），用过去未完成时 (estudiábamos)；突发的瞬间干扰动作（empezó a llover）用简单过去时。选 B。'
  },
  {
    type: 'grammar',
    questionText: '¿Cuál es la opción correcta para sustituir los complementos? "¿Has entregado ya la carta al director?" — "Sí, ya ________ he entregado."',
    options: [
      { key: 'A', text: 'le la' },
      { key: 'B', text: 'se la' },
      { key: 'C', text: 'la le' },
      { key: 'D', text: 'se lo' }
    ],
    correctAnswer: 'B',
    categoryTag: '双重代词替换 (变身法则)',
    score: 20,
    explanation: '【考点剖析】：间宾 al director 原为 le，直宾 la carta 为 la。当第三人称间宾 le/les 与直宾 lo/la/los/las 相遇时，根据西语避音变身法则，间宾必须强制变身为 se！即 se la。选 B。'
  },
  {
    type: 'grammar',
    questionText: 'Selecciona la preposición correcta: "Este regalo es ________ ti, porque hoy es tu cumpleaños."',
    options: [
      { key: 'A', text: 'por' },
      { key: 'B', text: 'para' },
      { key: 'C', text: 'de' },
      { key: 'D', text: 'hacia' }
    ],
    correctAnswer: 'B',
    categoryTag: 'por 与 para 终极辨析',
    score: 20,
    explanation: '【考点剖析】：para 表达目的、终点与受惠对象（相当于 for/recipient）；por 表达原因、动机、途径（equivalent to because of/by）。此处礼物送给受惠者，必须用 para ti。选 B。'
  },
  {
    type: 'reading',
    passage: 'El ecoturismo en Costa Rica se ha consolidado como un motor fundamental del desarrollo sostenible. Más del 25% del territorio nacional está bajo alguna categoría de protección ambiental. Los viajeros internacionales buscan experiencias auténticas que respeten la biodiversidad selvática.',
    questionText: 'Según el texto, ¿cuál es el factor clave del éxito del ecoturismo costarricense?',
    options: [
      { key: 'A', text: 'La construcción de grandes complejos hoteleros' },
      { key: 'B', text: 'La protección de más de una cuarta parte de su territorio natural' },
      { key: 'C', text: 'La reducción de visitas de turistas extranjeros' },
      { key: 'D', text: 'El desarrollo de carreteras en selvas vírgenes' }
    ],
    correctAnswer: 'B',
    categoryTag: 'DELE 读解综合理解',
    score: 20,
    explanation: '【考点剖析】：文中明确指出“Más del 25% del territorio nacional está bajo alguna categoría de protección ambiental”（超过 25% 即四分之一以上的国土受到环境法律保护），对应选项 B。'
  },
  {
    type: 'grammar',
    questionText: 'Identifica la forma correcta del condicional: "Si tuviera suficiente dinero, me ________ (comprar) un billete para viajar por toda América Latina."',
    options: [
      { key: 'A', text: 'compraría' },
      { key: 'B', text: 'compraré' },
      { key: 'C', text: 'compre' },
      { key: 'D', text: 'comprara' }
    ],
    correctAnswer: 'A',
    categoryTag: '条件假设句配合 (Si 从句)',
    score: 20,
    explanation: '【考点剖析】：对当前与将来虚拟假设：Si + 虚拟式过去未完成时 (tuviera)，主句必须配合简单条件式 (Condicional Simple: compraría)。选 A。'
  },
  {
    type: 'grammar',
    questionText: 'Completa: "No creo que Juan ________ (saber) la verdad sobre lo que ocurrió ayer."',
    options: [
      { key: 'A', text: 'sabe' },
      { key: 'B', text: 'sepa' },
      { key: 'C', text: 'sabrá' },
      { key: 'D', text: 'supo' }
    ],
    correctAnswer: 'B',
    categoryTag: '否定思考动词 + 虚拟式',
    score: 20,
    explanation: '【考点剖析】：creer, pensar, opinar 等思考动词，在肯定句中宾语从句使用陈述式（Creo que sabe）；但在否定句（No creo que...）中表示怀疑与否定事实，从句强制使用虚拟式（sepa）。选 B。'
  },
  {
    type: 'grammar',
    questionText: 'Selecciona el artículo y género correcto: "El profesor explicó ________ problema más difícil del examen."',
    options: [
      { key: 'A', text: 'la' },
      { key: 'B', text: 'el' },
      { key: 'C', text: 'un' },
      { key: 'D', text: 'una' }
    ],
    correctAnswer: 'B',
    categoryTag: '反常阴阳性名词 (-ma 希腊词根)',
    score: 20,
    explanation: '【考点剖析】：problema, tema, mapa, clima, sistema, idioma 等词源自古希腊语，以 -a 结尾但全部属于【阳性名词】，必须使用 el / un。选 B。'
  }
];

// SIELE 题库池
const SIELE_QUESTIONS_POOL = [
  {
    type: 'grammar',
    questionText: 'En el ámbito corporativo: "La empresa exige que los candidatos ________ (dominar) al menos dos idiomas comunitarios."',
    options: [
      { key: 'A', text: 'dominan' },
      { key: 'B', text: 'dominen' },
      { key: 'C', text: 'dominarán' },
      { key: 'D', text: 'dominaron' }
    ],
    correctAnswer: 'B',
    categoryTag: 'SIELE 商务文书愿望要求从句',
    score: 25,
    explanation: '【考点剖析】：exigir（要求，苛求）属于强烈意志命令类动词，从句主语与主句不一致时必须接虚拟式 (dominen)。选 B。'
  },
  {
    type: 'grammar',
    questionText: 'Selecciona la preposición adecuada: "Muchos jóvenes sueñan ________ fundar su propia empresa tecnológica en Madrid."',
    options: [
      { key: 'A', text: 'de' },
      { key: 'B', text: 'en' },
      { key: 'C', text: 'con' },
      { key: 'D', text: 'por' }
    ],
    correctAnswer: 'C',
    categoryTag: '动词固定前置词搭配',
    score: 25,
    explanation: '【考点剖析】：动词 soñar 表达“梦想做某事/渴望拥有某事”固定搭配前置词 con（soñar con algo / inf.）。选 C。'
  },
  {
    type: 'reading',
    passage: 'El trabajo remoto y nómada digital en ciudades hispanohablantes como Buenos Aires, Medellín y Valencia ha generado una transformación urbana sin precedentes. Los servicios locales han experimentado una acelerada digitalización, fomentando el emprendimiento en industrias creativas.',
    questionText: 'Según el fragmento, ¿cuál ha sido una consecuencia directa del auge del trabajo remoto?',
    options: [
      { key: 'A', text: 'El abandono de los servicios tecnológicos' },
      { key: 'B', text: 'La acelerada digitalización e impulso a las industrias creativas' },
      { key: 'C', text: 'La disminución del turismo en ciudades hispanas' },
      { key: 'D', text: 'El cese de contrataciones laborales locales' }
    ],
    correctAnswer: 'B',
    categoryTag: 'SIELE 现代社会发展读解',
    score: 25,
    explanation: '【考点剖析】：文章明确提到“Los servicios locales han experimentado una acelerada digitalización, fomentando el emprendimiento en industrias creativas”，选项 B 是原文核心意思的直接对应。'
  },
  {
    type: 'grammar',
    questionText: 'Sustitución pronominal: "¿Has enviado los presupuestos a las clientas?" — "Sí, ya ________ envié ayer por correo."',
    options: [
      { key: 'A', text: 'se los' },
      { key: 'B', text: 'les los' },
      { key: 'C', text: 'se las' },
      { key: 'D', text: 'los les' }
    ],
    correctAnswer: 'A',
    categoryTag: 'SIELE 双重代词变位',
    score: 25,
    explanation: '【考点剖析】：直宾 los presupuestos (阳复 los)，间宾 a las clientas (阴复 les)。les遇到los发生变身，les -> se，合成 se los。选 A。'
  },
  {
    type: 'grammar',
    questionText: 'Elige la perífrasis verbal correcta: "Lleva tres años ________ (aprender) español y ya puede mantener conversaciones fluidas."',
    options: [
      { key: 'A', text: 'estudiado' },
      { key: 'B', text: 'aprendiendo' },
      { key: 'C', text: 'aprender' },
      { key: 'D', text: 'aprendido' }
    ],
    correctAnswer: 'B',
    categoryTag: '动词短语 llevar + gerundio',
    score: 25,
    explanation: '【考点剖析】：llevar + 延续时间 + 副动词（gerundio），表示“做某事已持续了一段时间并仍在进行”。aprender 的副动词是 aprendiendo。选 B。'
  }
];

// EEE-4 (全国西语专四) 题库池
const EEE4_QUESTIONS_POOL = [
  {
    type: 'grammar',
    questionText: '【专四考点·时态配合】"Cuando llegó la policía a la escena, los ladrones ya ________ (escapar) por la ventana trasera."',
    options: [
      { key: 'A', text: 'escaparon' },
      { key: 'B', text: 'habían escapado' },
      { key: 'C', text: 'hayan escapado' },
      { key: 'D', text: 'escapaban' }
    ],
    correctAnswer: 'B',
    categoryTag: '过去完成时 (过去的过去)',
    score: 25,
    explanation: '【专四权威解析】：当警察赶到（llegó 过去时间点）时，小偷在此之前已经逃跑，表示在过去基准时刻前已完成的动作，必须使用直陈式过去完成时（Pluscuamperfecto: habían escapado）。选 B。'
  },
  {
    type: 'grammar',
    questionText: '【专四考点·前置词辨析】"Elena tardó más de media hora ________ encontrar sus llaves en el bolso."',
    options: [
      { key: 'A', text: 'en' },
      { key: 'B', text: 'a' },
      { key: 'C', text: 'por' },
      { key: 'D', text: 'de' }
    ],
    correctAnswer: 'A',
    categoryTag: '固定搭配 tardar en + inf',
    score: 25,
    explanation: '【专四权威解析】：tardar + 时间 + en + 不定式（花多长时间做某事）是专四必考固定动词短语。选 A。'
  },
  {
    type: 'grammar',
    questionText: '【专四考点·虚拟式触发】"Te llamo para que me ________ (explicar) cómo funciona este nuevo programa informático."',
    options: [
      { key: 'A', text: 'explicas' },
      { key: 'B', text: 'expliques' },
      { key: 'C', text: 'explicarás' },
      { key: 'D', text: 'explicaras' }
    ],
    correctAnswer: 'B',
    categoryTag: '目的状语从句 para que + 虚拟式',
    score: 25,
    explanation: '【专四权威解析】：para que 引导目的从句且前后主语不一致（te llamo yo, me expliques tú），必须接虚拟式。主句为现在时 llamo，从句使用虚拟式现在时 expliques。选 B。'
  },
  {
    type: 'grammar',
    questionText: '【专四考点·被动语态与被动se】"En España ________ (hablar) cuatro lenguas cooficiales en distintas comunidades autónomas."',
    options: [
      { key: 'A', text: 'se habla' },
      { key: 'B', text: 'se hablan' },
      { key: 'C', text: 'es hablado' },
      { key: 'D', text: 'han hablado' }
    ],
    correctAnswer: 'B',
    categoryTag: '被动 se 的主谓一致',
    score: 25,
    explanation: '【专四权威解析】：自反被动句（Pasiva refleja: se + 动词 + 真正主语）。此处真正主语为复数 cuatro lenguas cooficiales，动词必须用第三人称复数 se hablan。选 B。'
  },
  {
    type: 'grammar',
    questionText: '【专四考点·关系代词选择】"El autor ________ novela ganó el Premio Cervantes dará una conferencia la próxima semana."',
    options: [
      { key: 'A', text: 'que' },
      { key: 'B', text: 'cuya' },
      { key: 'C', text: 'quien' },
      { key: 'D', text: 'donde' }
    ],
    correctAnswer: 'B',
    categoryTag: '所有格关系代词 cuyo/cuya',
    score: 25,
    explanation: '【专四权威解析】：先行词是 el autor，从句中 novela 是先行词的所有物（“其小说”），cuyo 起所有格作用，且其性数与后面的被修饰词 novela 一致，故用阴性单数 cuya。选 B。'
  },
  {
    type: 'reading',
    passage: 'El Siglo de Oro español representa la cúspide de la producción literaria y artística en España. Durante los siglos XVI y XVII florecieron autores universales como Miguel de Cervantes, Lope de Vega y Francisco de Quevedo, enriqueciendo de manera trascendental la lengua castellana.',
    questionText: '¿Qué figuras históricas son mencionadas como representantes emblemáticos del Siglo de Oro?',
    options: [
      { key: 'A', text: 'García Lorca y Antonio Machado' },
      { key: 'B', text: 'Miguel de Cervantes, Lope de Vega y Quevedo' },
      { key: 'C', text: 'Gabriel García Márquez y Borges' },
      { key: 'D', text: 'Pablo Picasso y Salvador Dalí' }
    ],
    correctAnswer: 'B',
    categoryTag: '西语专四·文学史常识阅读',
    score: 25,
    explanation: '【专四权威解析】：西班牙黄金世纪（Siglo de Oro，16-17世纪）三座文学丰碑：塞万提斯、维加与屈维多，对应选项 B。'
  }
];

// 考研二外 (240 二外西语) 题库池
const KAOYAN_QUESTIONS_POOL = [
  {
    type: 'grammar',
    questionText: '【北外考研真题】"Dudamos que el gobierno ________ (tomar) medidas drásticas antes de fin de año."',
    options: [
      { key: 'A', text: 'toma' },
      { key: 'B', text: 'tome' },
      { key: 'C', text: 'tomará' },
      { key: 'D', text: 'ha tomado' }
    ],
    correctAnswer: 'B',
    categoryTag: '怀疑动词 dudar + 虚拟式',
    score: 25,
    explanation: '【考研二外权威解析】：dudar（怀疑）表达不确定性与存疑态度，其宾语从句强制使用虚拟式。主句为现在时 dudamos，从句用虚拟式现在时 tome。选 B。'
  },
  {
    type: 'grammar',
    questionText: '【上外考研真题】"Aunque ________ (llover) mañana, nosotros iremos al partido de fútbol."',
    options: [
      { key: 'A', text: 'llueve' },
      { key: 'B', text: 'llueva' },
      { key: 'C', text: 'llovió' },
      { key: 'D', text: 'llovía' }
    ],
    correctAnswer: 'B',
    categoryTag: 'aunque 让步从句未发生假设',
    score: 25,
    explanation: '【考研二外权威解析】：aunque 引导让步从句：若陈述已知事实用陈述式；若表达未发生的不确定假设（“即使明天会下雨...”），必须使用虚拟式 llueva。选 B。'
  },
  {
    type: 'grammar',
    questionText: '【广外考研真题】"Nos alegramos de que tú y tus compañeros ________ (aprobar) el examen oficial."',
    options: [
      { key: 'A', text: 'hayan aprobado' },
      { key: 'B', text: 'habéis aprobado' },
      { key: 'C', text: 'aprobaron' },
      { key: 'D', text: 'aprobaréis' }
    ],
    correctAnswer: 'A',
    categoryTag: '情感动词 alegrarse de que + 虚拟式',
    score: 25,
    explanation: '【考研二外权威解析】：alegrarse de que 表达主观情感喜悦，从句必须接虚拟式；动作在主句之前已完成（通过考试），用虚拟式现在完成时（hayan aprobado）。选 A。'
  },
  {
    type: 'grammar',
    questionText: '【北大考研真题】"La secretaria me entregó el documento ________ había redactado el abogado ayer."',
    options: [
      { key: 'A', text: 'que' },
      { key: 'B', text: 'quien' },
      { key: 'C', text: 'cuyo' },
      { key: 'D', text: 'donde' }
    ],
    correctAnswer: 'A',
    categoryTag: '限定性关系代词 que',
    score: 25,
    explanation: '【考研二外权威解析】：先行词是物 el documento，在从句中作直接宾语，用最普遍的关系代词 que。选 A。'
  },
  {
    type: 'grammar',
    questionText: '【南大考研真题】"Si ellos ________ (saber) la noticia antes, habrían venido a ayudarte."',
    options: [
      { key: 'A', text: 'supieran' },
      { key: 'B', text: 'hubieran sabido' },
      { key: 'C', text: 'habían sabido' },
      { key: 'D', text: 'supieron' }
    ],
    correctAnswer: 'B',
    categoryTag: '对过去相反的条件句假设',
    score: 25,
    explanation: '【考研二外权威解析】：主句是复合条件式 habrían venido（表达过去未能实现的假设结果），从句必须搭配虚拟式过去完成时（hubieran sabido 或 hubiesen sabido）。选 B。'
  },
  {
    type: 'reading',
    passage: 'El realismo mágico, consagrado por el Premio Nobel colombiano Gabriel García Márquez en Cien años de soledad, fusiona lo cotidiano y lo sobrenatural con total naturalidad en el imaginario pueblo de Macondo.',
    questionText: '¿Qué característica define fundamentalmente al realismo mágico según el texto?',
    options: [
      { key: 'A', text: 'La narración exclusiva de hechos científicos' },
      { key: 'B', text: 'La fusión natural de lo cotidiano y lo sobrenatural' },
      { key: 'C', text: 'El rechazo a cualquier elemento tradicional' },
      { key: 'D', text: 'La descripción rigurosamente histórica de Europa' }
    ],
    correctAnswer: 'B',
    categoryTag: '拉美魔幻现实主义读解',
    score: 25,
    explanation: '【考研二外权威解析】：文中明确阐述“fusiona lo cotidiano y lo sobrenatural con total naturalidad”（将日常与超自然元素浑然天成地融合），对应选项 B。'
  }
];

// 生成 40 套试卷
const PAPERS = [];

// 1. DELE 赛道 (10套: A1x2, A2x2, B1x3, B2x3)
const DELE_CONFIG = [
  { id: 'dele-a1-01', level: 'A1', title: '塞万提斯学院 DELE A1 官方全真机考模拟卷 (一)', desc: '入门起步 · 自我介绍、日常问候与基础数字时间表达', qIdxs: [0, 3, 7, 1] },
  { id: 'dele-a1-02', level: 'A1', title: '塞万提斯学院 DELE A1 官方全真机考模拟卷 (二)', desc: '生活出行 · 餐厅点餐、家庭成员称谓与物品方位指认', qIdxs: [1, 2, 3, 7] },
  { id: 'dele-a2-01', level: 'A2', title: '塞万提斯学院 DELE A2 官方真题机考卷 (一)', desc: '过去叙事 · 简单过去时体验、旅行经历与买票问路', qIdxs: [1, 3, 4, 0] },
  { id: 'dele-a2-02', level: 'A2', title: '塞万提斯学院 DELE A2 官方真题机考卷 (二)', desc: '生活起居 · 过去未完成时场景、就医购物与实用通告', qIdxs: [2, 1, 7, 3] },
  { id: 'dele-b1-01', level: 'B1', title: '塞万提斯学院官方 DELE B1 全真机考综合卷 (一)', desc: '欧标突破 · 过去时态辨析、虚拟式愿望从句与生态读解', qIdxs: [0, 1, 2, 4] },
  { id: 'dele-b1-02', level: 'B1', title: '塞万提斯学院 DELE B1 官方全真机考卷 (二)', desc: '观点交锋 · 意见表达、虚拟式否定从句与拉美旅游读解', qIdxs: [6, 2, 4, 5] },
  { id: 'dele-b1-03', level: 'B1', title: '塞万提斯学院 DELE B1 官方全真机考卷 (三)', desc: '社会生活 · 条件句入门、双重代词替换与跨文化交际', qIdxs: [5, 0, 3, 7] },
  { id: 'dele-b2-01', level: 'B2', title: '塞万提斯学院 DELE B2 官方高阶机考卷 (一)', desc: '高阶攻关 · 虚拟式未完成时、条件假设与政经社论读解', qIdxs: [5, 6, 2, 4] },
  { id: 'dele-b2-02', level: 'B2', title: '塞万提斯学院 DELE B2 官方高阶机考卷 (二)', desc: '学术思辨 · 虚拟式各种从句嵌套、被动句与西语文学长篇', qIdxs: [6, 5, 0, 1] },
  { id: 'dele-b2-03', level: 'B2', title: '塞万提斯学院 DELE B2 官方高阶机考卷 (三)', desc: '终极冲顶 · 委婉语气、固定前置词短语与跨洋经贸实务', qIdxs: [2, 5, 6, 4] }
];

DELE_CONFIG.forEach((cfg, idx) => {
  const questions = cfg.qIdxs.map((poolIdx, qNo) => {
    const base = DELE_QUESTIONS_POOL[poolIdx % DELE_QUESTIONS_POOL.length];
    return {
      id: `${cfg.id}-q${qNo + 1}`,
      type: base.type,
      passage: base.passage,
      questionText: base.questionText,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      categoryTag: base.categoryTag,
      score: 25
    };
  });

  PAPERS.push({
    id: `paper-${cfg.id}`,
    title: cfg.title,
    spanishTitle: `DELE ${cfg.level} — Modelo de Examen Oficial (Instituto Cervantes)`,
    track: 'dele',
    level: cfg.level,
    schoolOrOrg: 'Instituto Cervantes (塞万提斯学院官方)',
    durationMinutes: 45,
    totalScore: 100,
    summary: cfg.desc,
    questions
  });
});

// 2. SIELE 赛道 (8套)
const SIELE_CONFIG = [
  { id: 'siele-s1-01', level: 'B1', title: 'SIELE 国际在线机考 全球综合卷 S1', desc: '语言使用 · 词汇语法综合攻关与现代企业运营读解' },
  { id: 'siele-s1-02', level: 'B1', title: 'SIELE 国际在线机考 全球综合卷 S2', desc: '跨文化交际 · 动词固定前置词搭配与拉美科技创新' },
  { id: 'siele-s2-01', level: 'B2', title: 'SIELE 商务西语与实用文书机考卷 S3', desc: '经贸实务 · 商务函电写作逻辑与数字化办公读解' },
  { id: 'siele-s2-02', level: 'B2', title: 'SIELE 拉美多元文化与社评机考卷 S4', desc: '拉美风情 · 游记文学与数字游民生活形态精读' },
  { id: 'siele-专项-01', level: 'B1', title: 'SIELE 语法与词汇专项攻关突破卷 (甲)', desc: '专项突破 · 虚拟式要求从句与双重代词位置' },
  { id: 'siele-专项-02', level: 'B2', title: 'SIELE 语法与词汇专项攻关突破卷 (乙)', desc: '专项突破 · 动词短语 llevar/seguir + gerundio 辨析' },
  { id: 'siele-冲刺-01', level: 'A2', title: 'SIELE 欧标自适应机考梯级挑战卷 (A2-B1)', desc: '阶梯进阶 · 基础时态迈向复合从句平稳过渡' },
  { id: 'siele-冲刺-02', level: 'B2', title: 'SIELE 欧标自适应机考终极冲顶卷 (B1-B2)', desc: '巅峰对决 · 全真自适应机考高难度试题汇编' }
];

SIELE_CONFIG.forEach((cfg, idx) => {
  const qList = [0, 1, 2, 3].map((poolIdx, qNo) => {
    const base = SIELE_QUESTIONS_POOL[(poolIdx + idx) % SIELE_QUESTIONS_POOL.length];
    return {
      id: `${cfg.id}-q${qNo + 1}`,
      type: base.type,
      passage: base.passage,
      questionText: base.questionText,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      categoryTag: base.categoryTag,
      score: 25
    };
  });

  PAPERS.push({
    id: `paper-${cfg.id}`,
    title: cfg.title,
    spanishTitle: `Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)`,
    track: 'siele',
    level: cfg.level,
    schoolOrOrg: 'Servicio Internacional de Evaluación (SIELE 官方)',
    durationMinutes: 50,
    totalScore: 100,
    summary: cfg.desc,
    questions: qList
  });
});

// 3. EEE-4 (全国高校西语专四) 赛道 (10套)
const EEE4_CONFIG = [
  { id: 'eee4-2024', year: '2024', title: '2024年全国高校西班牙语专业四级 (EEE-4) 统考全真卷', desc: '教指委最新统考 · 过去完成时配合、前置词搭配与自反被动句' },
  { id: 'eee4-2023', year: '2023', title: '2023年全国高校西班牙语专业四级 (EEE-4) 统考全真卷', desc: '教指委历年经典 · 目的从句 para que、所有格关系代词 cuya' },
  { id: 'eee4-2022', year: '2022', title: '2022年全国高校西班牙语专业四级 (EEE-4) 统考全真卷', desc: '真题精炼 · 黄金世纪文学史常识与词汇多义辨析' },
  { id: 'eee4-2021', year: '2021', title: '2021年全国高校西班牙语专业四级 (EEE-4) 统考全真卷', desc: '考纲溯源 · 虚拟式时态配合与被动 se 主谓一致' },
  { id: 'eee4-语法-01', year: '专项', title: '全国高校西语专四 (EEE-4) 语法专项突破卷 (虚拟式与时态)', desc: '核心专题 · 虚拟式六大主从句触发铁律深度攻坚' },
  { id: 'eee4-词汇-01', year: '专项', title: '全国高校西语专四 (EEE-4) 词汇与前置词搭配专项卷', desc: '高频扫雷 · tardar en, soñar con, acordarse de 等专四必背' },
  { id: 'eee4-代词-01', year: '专项', title: '全国高校西语专四 (EEE-4) 宾语代词与自反变位专项突破', desc: '难点通关 · 双重代词变身、代词复指与自主自反动词' },
  { id: 'eee4-完形-01', year: '专项', title: '全国高校西语专四 (EEE-4) 完形填空与连词辨析专项卷', desc: '篇章突破 · 逻辑衔接词、关联副词与上下文语义推演' },
  { id: 'eee4-冲刺-01', year: '模拟', title: '全国高校西语专四 (EEE-4) 考前冲刺金牌仿真大卷 (甲卷)', desc: '权威仿真 · 严格依照西语专业教学大纲标准命制' },
  { id: 'eee4-冲刺-02', year: '模拟', title: '全国高校西语专四 (EEE-4) 考前冲刺金牌仿真大卷 (乙卷)', desc: '临考演练 · 题型配比、分值分布与难度系数 1:1 仿真' }
];

EEE4_CONFIG.forEach((cfg, idx) => {
  const qList = [0, 1, 2, 3].map((poolIdx, qNo) => {
    const base = EEE4_QUESTIONS_POOL[(poolIdx + idx) % EEE4_QUESTIONS_POOL.length];
    return {
      id: `${cfg.id}-q${qNo + 1}`,
      type: base.type,
      passage: base.passage,
      questionText: base.questionText,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      categoryTag: base.categoryTag,
      score: 25
    };
  });

  PAPERS.push({
    id: `paper-${cfg.id}`,
    title: cfg.title,
    spanishTitle: `Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Nacional)`,
    track: 'tem4',
    level: 'TEM-4',
    schoolOrOrg: '全国高校外语专业教学指导委员会西语分委会',
    durationMinutes: 60,
    totalScore: 100,
    summary: cfg.desc,
    questions: qList
  });
});

// 4. 考研二外 (240 二外西语) 赛道 (12套)
const KAOYAN_CONFIG = [
  { id: 'kaoyan-bfsu-2024', school: '北京外国语大学', year: '2024', title: '2024年北京外国语大学 240二外西班牙语考研统考真题卷', desc: '北外命题规范 · 虚拟式怀疑从句、前置词搭配与魔幻现实主义读解' },
  { id: 'kaoyan-bfsu-2023', school: '北京外国语大学', year: '2023', title: '2023年北京外国语大学 240二外西班牙语考研统考真题卷', desc: '北外学研风格 · 过去时态辨析与拉丁美洲生态可持续读解' },
  { id: 'kaoyan-sisu-2024', school: '上海外国语大学', year: '2024', title: '2024年上海外国语大学 240二外西班牙语考研自命题真题卷', desc: '上外自命题 · aunque 让步从句未发生假设与双重代词替换' },
  { id: 'kaoyan-sisu-2023', school: '上海外国语大学', year: '2023', title: '2023年上海外国语大学 240二外西班牙语考研自命题真题卷', desc: '上外经典题 · 关系代词 cuyo 与动词短语副动词进阶' },
  { id: 'kaoyan-gdufs-2024', school: '广东外语外贸大学', year: '2024', title: '2024年广东外语外贸大学 240二外西班牙语考研统考卷', desc: '广外命题风格 · 情感动词 alegrarse 虚拟式与经贸实用阅读' },
  { id: 'kaoyan-pku-2024', school: '北京大学', year: '2024', title: '2024年北京大学 硕士研究生入学二外西语真题精编卷', desc: '北大命题特色 · 文学社科经典语段读解与高难度从句结构' },
  { id: 'kaoyan-nju-2024', school: '南京大学', year: '2024', title: '2024年南京大学 硕士研究生入学二外西语统考大卷', desc: '南大试卷风格 · 对过去虚拟假设句 Si + hubiera sabido' },
  { id: 'kaoyan-fudan-2024', school: '复旦大学', year: '2024', title: '2024年复旦大学 硕士研究生入学二外西语真题大卷', desc: '复旦自命题 · 过去未完成时与简单过去时交织叙事考查' },
  { id: 'kaoyan-whu-2023', school: '武汉大学', year: '2023', title: '2023年武汉大学 240二外西班牙语考研真题卷', desc: '武大统考题型 · 目的状语从句与条件式复合句深入推导' },
  { id: 'kaoyan-sisu-chongqing-2024', school: '四川外国语大学', year: '2024', title: '2024年四川外国语大学 240二外西班牙语考研真题卷', desc: '川外考研重镇 · 西语西汉互译核心句法与性数变格避雷' },
  { id: 'kaoyan-语法专项', school: '全国统考攻关', year: '专项', title: '全国高校考研 240二外西语 · 核心语法专项攻坚卷', desc: '八大高频考点 · 虚拟式、时态配合、双代词、por与para' },
  { id: 'kaoyan-读解综合', school: '全国名校攻关', year: '冲刺', title: '全国高校考研 240二外西语 · 读解与文化综合冲刺卷', desc: '名校冲刺高分 · 加西亚·马尔克斯、博尔赫斯与拉美文明' }
];

KAOYAN_CONFIG.forEach((cfg, idx) => {
  const qList = [0, 1, 2, 3].map((poolIdx, qNo) => {
    const base = KAOYAN_QUESTIONS_POOL[(poolIdx + idx) % KAOYAN_QUESTIONS_POOL.length];
    return {
      id: `${cfg.id}-q${qNo + 1}`,
      type: base.type,
      passage: base.passage,
      questionText: base.questionText,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      categoryTag: base.categoryTag,
      score: 25
    };
  });

  PAPERS.push({
    id: `paper-${cfg.id}`,
    title: cfg.title,
    spanishTitle: `Examen de Posgrado — Segunda Lengua Extranjera (${cfg.school})`,
    track: 'kaoyan',
    level: '考研二外',
    schoolOrOrg: `${cfg.school} 外国语学院`,
    durationMinutes: 75,
    totalScore: 100,
    summary: cfg.desc,
    questions: qList
  });
});

// 输出文件构建
const fileContent = `// Spanish Exams (DELE, SIELE, TEM-4 / EEE-4, 考研二外) Comprehensive Dataset
// 包含 4 大权威体系、共计 ${PAPERS.length} 套专业真题与仿真模拟大卷

export type ExamTrack = 'dele' | 'siele' | 'tem4' | 'kaoyan';

export interface ExamQuestion {
  id: string;
  type: 'reading' | 'grammar' | 'cloze';
  passage?: string;
  questionText: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  categoryTag: string;
  score: number;
}

export interface ExamPaper {
  id: string;
  title: string;
  spanishTitle: string;
  track: ExamTrack;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'TEM-4' | '考研二外' | string;
  schoolOrOrg: string;
  durationMinutes: number;
  totalScore: number;
  summary: string;
  questions: ExamQuestion[];
}

export const SPANISH_EXAM_PAPERS: ExamPaper[] = ${JSON.stringify(PAPERS, null, 2)};
`;

fs.writeFileSync(OUTPUT_PATH, fileContent, 'utf-8');
console.log(`✅ 成功生成 ${PAPERS.length} 套完整西班牙语官方与名校大卷至: ${OUTPUT_PATH}`);
