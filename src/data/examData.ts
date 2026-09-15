// Spanish Exams (DELE, SIELE, TEM-4, 考研二外) Dataset
export type ExamTrack = 'dele' | 'siele' | 'tem4' | 'kaoyan';

export interface ExamQuestion {
  id: string;
  type: 'reading' | 'grammar' | 'cloze';
  passage?: string; // 阅读或完形上下文
  questionText: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  categoryTag: string; // 如 "虚拟式触发", "过去时态辨析", "前置词搭配", "反常阴阳性"
  score: number;
}

export interface ExamPaper {
  id: string;
  title: string;
  spanishTitle: string;
  track: ExamTrack;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'TEM-4' | '考研二外';
  schoolOrOrg: string;
  durationMinutes: number;
  totalScore: number;
  summary: string;
  questions: ExamQuestion[];
}

export const SPANISH_EXAM_PAPERS: ExamPaper[] = [
  // ================= 赛道 1：塞万提斯 DELE 欧标机考 (A1 - B2) =================
  {
    id: 'paper-dele-b1-01',
    title: '塞万提斯学院官方 DELE B1 全真机考综合卷',
    spanishTitle: 'DELE B1 — Comprensión de Lectura y Uso de la Lengua',
    track: 'dele',
    level: 'B1',
    schoolOrOrg: 'Instituto Cervantes (塞万提斯学院官方)',
    durationMinutes: 45,
    totalScore: 100,
    summary: '塞万提斯学院官方机考架构：重点考查过去时态区分、虚拟式愿望及情感从句触发、双重代词变身与拉美生态发展长篇读解。',
    questions: [
      {
        id: 'db1-q1',
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
        score: 25,
        explanation: '【考点剖析】：主句动词 esperar 表愿望期许（属于 W-E-I-R-D-O 六角星首要触发动词），主句主语 (yo) 与从句主语 (tú) 不一致，宾语从句强制使用虚拟式现在时。venir 的虚拟式现在时第二人称单数为 vengas（选 B）。'
      },
      {
        id: 'db1-q2',
        type: 'grammar',
        questionText: 'Elige la forma verbal adecuada: "Ayer por la tarde, mientras nosotros ________ (estudiar) en la biblioteca, empezó a llover fuertemente."',
        options: [
          { key: 'A', text: 'estudiamos' },
          { key: 'B', text: 'estudiábamos' },
          { key: 'C', text: 'hemos estudiado' },
          { key: 'D', text: 'estudiaremos' }
        ],
        correctAnswer: 'B',
        categoryTag: '过去未完成时 vs 简单过去时',
        score: 25,
        explanation: '【考点剖析】：连词 mientras 引导过去正在持续进行的背景活动，必须使用过去未完成时 (estudiábamos)；而突发的瞬间动作开始下雨用简单过去时 (empezó)。典型“背景动作+突发插入”的 DELE 必考时态组合！'
      },
      {
        id: 'db1-q3',
        type: 'grammar',
        questionText: '¿Cuál es la sustitución pronominal correcta? "¿Le has entregado las llaves a Carmen? — Sí, ya ________ he entregado."',
        options: [
          { key: 'A', text: 'le las' },
          { key: 'B', text: 'se las' },
          { key: 'C', text: 'la se' },
          { key: 'D', text: 'les las' }
        ],
        correctAnswer: 'B',
        categoryTag: '双重宾格代词防音爆变身 Se',
        score: 25,
        explanation: '【考点剖析】：间接宾语 a Carmen 为 le，直接宾语 las llaves 为 las。当第三人称间接宾语 le 与第三人称直接宾语 las/los/la/lo 在动词前连用时，为避免连读音爆，前方的 le 强制蜕变成为 se，故为 se las he entregado（选 B）。'
      },
      {
        id: 'db1-q4',
        type: 'reading',
        passage: 'El auge del ecoturismo en Costa Rica ha demostrado de manera fehaciente que es posible generar prosperidad económica sin degradar los ecosistemas naturales. Con más del 25% de su superficie terrestre sujeta a protección estricta bajo el régimen de parques nacionales y corredores biológicos, la nación centroamericana se ha consolidado como un paradigma universal de sostenibilidad ambiental y diversificación turística.',
        questionText: 'Según el contenido del texto, ¿por qué Costa Rica es considerada un referente internacional?',
        options: [
          { key: 'A', text: 'Porque prohíbe terminantemente la entrada de viajeros foráneos.' },
          { key: 'B', text: 'Porque ha logrado conciliar con éxito el crecimiento económico con la preservación ecológica.' },
          { key: 'C', text: 'Porque la totalidad del territorio nacional está declarada parque natural.' },
          { key: 'D', text: 'Porque carece por completo de actividades comerciales e industriales.' }
        ],
        correctAnswer: 'B',
        categoryTag: '阅读推断与生态热点',
        score: 25,
        explanation: '【考点剖析】：文章首句明确指出 "es posible generar prosperidad económica sin degradar los ecosistemas naturales"（在创造经济繁荣的同时不破坏自然生态系统），选项 B 精准提炼了经济增长与环境保护的良性协调。'
      }
    ]
  },
  {
    id: 'paper-dele-b2-01',
    title: '塞万提斯 DELE B2 官方高分冲刺大卷',
    spanishTitle: 'DELE B2 — Uso Avanzado de la Lengua y Textos de Opinión',
    track: 'dele',
    level: 'B2',
    schoolOrOrg: 'Instituto Cervantes (塞万提斯官方学术部)',
    durationMinutes: 60,
    totalScore: 100,
    summary: 'DELE B2 官方高分核心试卷：攻克非现实条件句 (Si + 虚拟式过去未完成时)、否定信念动词虚拟式配合与人工智能学术长难句推断。',
    questions: [
      {
        id: 'db2-q1',
        type: 'grammar',
        questionText: 'Completa la hipótesis: "Si yo ________ (tener) más tiempo libre y menos responsabilidades, me matricularía en la facultad de Bellas Artes."',
        options: [
          { key: 'A', text: 'tuviera' },
          { key: 'B', text: 'tengo' },
          { key: 'C', text: 'tendría' },
          { key: 'D', text: 'tenga' }
        ],
        correctAnswer: 'A',
        categoryTag: '非现实条件句 (Si + 虚拟式未完成过去时)',
        score: 25,
        explanation: '【考点剖析】：主句为简单条件式 me matricularía，表示对目前情况的反事实假设与愿望。条件从句必须强制搭配虚拟式过去未完成时 tuviera 或 tuviese（选 A）。切忌在 Si 条件从句中使用简单条件式 tendría！'
      },
      {
        id: 'db2-q2',
        type: 'grammar',
        questionText: 'Selecciona la opción correcta: "No creo en absoluto que el nuevo director ________ (saber) los detalles comprometedores de la auditoría."',
        options: [
          { key: 'A', text: 'sabe' },
          { key: 'B', text: 'sepa' },
          { key: 'C', text: 'sabrá' },
          { key: 'D', text: 'supo' }
        ],
        correctAnswer: 'B',
        categoryTag: '否定信念动词 (No creer que + 虚拟式)',
        score: 25,
        explanation: '【考点剖析】：肯定形式 creo que 接直陈式表达断定；而否定形式 no creo que 表达怀疑、否定与不确定性，从句强制使用虚拟式现在时 sepa（选 B）。'
      },
      {
        id: 'db2-q3',
        type: 'grammar',
        questionText: 'Elige el conector que expresa concesión con subjuntivo futuro: "Iremos a la excursión a la sierra, ________ (llover) mañana o haga sol."',
        options: [
          { key: 'A', text: 'aunque llueva' },
          { key: 'B', text: 'porque llueve' },
          { key: 'C', text: 'como llueva' },
          { key: 'D', text: 'ya que llueva' }
        ],
        correctAnswer: 'A',
        categoryTag: '让步从句 (Aunque + 虚拟式表未发生事实)',
        score: 25,
        explanation: '【考点剖析】：aunque 引导让步从句，当修饰尚未发生或说话人假设的未来情况时，从句动词强制使用虚拟式 (aunque llueva)；从句中 "o haga sol" 亦对称使用虚拟式。选 A。'
      },
      {
        id: 'db2-q4',
        type: 'reading',
        passage: 'La vertiginosa irrupción de la inteligencia artificial generativa plantea dilemas éticos sin precedentes en la esfera laboral y deontológica. Lejos de constituir una mera optimización de la productividad técnica, su extraordinaria capacidad para emular procesos heurísticos y analíticos exige una inaplazable reconfiguración de las competencias humanísticas y críticas del individuo.',
        questionText: '¿Cuál es la tesis vertebral que sostiene el autor del fragmento?',
        options: [
          { key: 'A', text: 'Que la IA generativa debe ser vetada en todos los entornos corporativos.' },
          { key: 'B', text: 'Que la emulación de procesos analíticos exige reformular las facultades críticas del ser humano.' },
          { key: 'C', text: 'Que la automatización erradicará el pensamiento filosófico.' },
          { key: 'D', text: 'Que no concurren dilemas deontológicos reseñables en la actualidad.' }
        ],
        correctAnswer: 'B',
        categoryTag: '学术评论深度主旨概括',
        score: 25,
        explanation: '【考点剖析】：文末核心句指出 "exige una inaplazable reconfiguración de las competencias humanísticas y críticas del individuo"，选项 B 准确对应重塑人类批判性人文思维这一核心论点。'
      }
    ]
  },

  // ================= 赛道 2：SIELE 国际在线机考 (Comprensión de Lectura) =================
  {
    id: 'paper-siele-global-01',
    title: 'SIELE 国际在线机考 全真模拟大卷 · S1 读解专项',
    spanishTitle: 'SIELE Global — Tarea de Comprensión de Lectura (CL)',
    track: 'siele',
    level: 'B1',
    schoolOrOrg: 'SIELE 国际认证中心 (UNAM / USAL / UBA / Cervantes)',
    durationMinutes: 40,
    totalScore: 100,
    summary: '四所世界顶尖西语大学联合认证在线机考架构：交通官方公告、职场邮件通知与可再生能源社论快速细节定位。',
    questions: [
      {
        id: 'siele-q1',
        type: 'reading',
        passage: 'Comunicado Oficial de Renfe: Con motivo de las labores inaplazables de mantenimiento y modernización en la infraestructura de las vías de alta velocidad entre Madrid-Puerta de Atocha y Valencia-Joaquín Sorolla, los convoyes experimentarán demoras operativas de aproximadamente 20 minutos durante el próximo fin de semana. Renfe lamenta los inconvenientes y ofrece el cambio gratuito de billetes a todos los viajeros afectados.',
        questionText: 'Según el comunicado oficial de la operadora ferroviaria, ¿qué derecho asiste a los pasajeros afectados?',
        options: [
          { key: 'A', text: 'Exigir una indemnización pecuniaria en efectivo de forma automática.' },
          { key: 'B', text: 'Modificar la fecha u hora de sus títulos de transporte sin coste adicional.' },
          { key: 'C', text: 'Reclamar un trayecto gratis en avión.' },
          { key: 'D', text: 'Acceder a plazas de clase preferente con independencia de su billete.' }
        ],
        correctAnswer: 'B',
        categoryTag: '公共服务通告细节推断',
        score: 33,
        explanation: '【考点剖析】：通告末句明确指出 "ofrece el cambio gratuito de billetes a todos los viajeros afectados"（为所有受影响的旅客提供免费改签服务），对应选项 B。'
      },
      {
        id: 'siele-q2',
        type: 'reading',
        passage: 'España ha alcanzado un hito histórico en su matriz energética al generar más del 50% de su electricidad anual a partir de fuentes renovables, encabezadas por la energía eólica y la fotovoltaica. Este avance no solo atenúa la dependencia de los combustibles fósiles importados, sino que abarata sensiblemente los costes para los hogares e industrias.',
        questionText: '¿Cuál es uno de los beneficios directos señalados en la nota periodística?',
        options: [
          { key: 'A', text: 'El cese total de la actividad en las plantas nucleares.' },
          { key: 'B', text: 'La disminución tangible de la factura eléctrica para familias y empresas.' },
          { key: 'C', text: 'La exportación exclusiva de carbón a países vecinos.' },
          { key: 'D', text: 'La gratuidad total de los suministros energéticos en el país.' }
        ],
        correctAnswer: 'B',
        categoryTag: '经济环保新闻信息提取',
        score: 33,
        explanation: '【考点剖析】：原文指出 "abarata sensiblemente los costes para los hogares e industrias"（显著降低了家庭与工业企业的用电成本），选项 B 精准转述了这一经济利好。'
      },
      {
        id: 'siele-q3',
        type: 'grammar',
        questionText: 'Completa la instrucción laboral: "Por favor, cuando tú ________ (terminar) de revisar el informe contable, envíamelo por correo electrónico."',
        options: [
          { key: 'A', text: 'termines' },
          { key: 'B', text: 'terminas' },
          { key: 'C', text: 'terminarás' },
          { key: 'D', text: 'terminaste' }
        ],
        correctAnswer: 'A',
        categoryTag: '时间从句指向未来 (Cuando + 虚拟式)',
        score: 34,
        explanation: '【考点剖析】：时间连词 cuando 引导未发生的事物（主句为祈使句 envíamelo），从句动词强制使用虚拟式现在时 termines（选 A）。切不可在从句中使用将来时 terminarás！'
      }
    ]
  },

  // ================= 赛道 3：全国高校西班牙语专业四级 (TEM-4) =================
  {
    id: 'paper-tem4-01',
    title: '全国高校西班牙语专业四级 (TEM-4) 全真模拟大卷',
    spanishTitle: 'Examen Nacional de Nivel para la Especialidad de Español (TEM-4)',
    track: 'tem4',
    level: 'TEM-4',
    schoolOrOrg: '全国高校外语专业教学指导委员会西语分会',
    durationMinutes: 50,
    totalScore: 100,
    summary: '高校西语本科专业水平统考：涵盖经典反常阳性名词、前置词固定搭配 (por/para/a/en/de)、动词短语与时态变位。',
    questions: [
      {
        id: 'tem4-q1',
        type: 'grammar',
        questionText: 'Señala cuál de los siguientes sustantivos pertenece al género MASCULINO:',
        options: [
          { key: 'A', text: 'la costumbre' },
          { key: 'B', text: 'la canción' },
          { key: 'C', text: 'el mapa' },
          { key: 'D', text: 'la universidad' }
        ],
        correctAnswer: 'C',
        categoryTag: '以 -a 结尾的反常阳性名词',
        score: 25,
        explanation: '【考点剖析】：专四高频考点。mapa 虽然以 -a 结尾，但属于阳性名词 (el mapa / los mapas)。其余选项 -umbre (la costumbre), -ción (la canción), -dad (la universidad) 均为规则阴性名词。选 C。'
      },
      {
        id: 'tem4-q2',
        type: 'grammar',
        questionText: 'Completa con la preposición adecuada: "No pude asistir a la conferencia de ayer ________ motivos de salud."',
        options: [
          { key: 'A', text: 'por' },
          { key: 'B', text: 'para' },
          { key: 'C', text: 'con' },
          { key: 'D', text: 'hacia' }
        ],
        correctAnswer: 'A',
        categoryTag: '前置词 Por 表起因与理由',
        score: 25,
        explanation: '【考点剖析】：por motivos de... 意为“由于……的原因”，前置词 por 用于表达引起动作的原因、理由或动机；而 para 表达目的或终点。故选 A。'
      },
      {
        id: 'tem4-q3',
        type: 'grammar',
        questionText: 'Indica la concordancia correcta para el sustantivo femenino "águila": "En la cima del monte vimos ________."',
        options: [
          { key: 'A', text: 'un águila blanca hermosa' },
          { key: 'B', text: 'una águila blanco hermoso' },
          { key: 'C', text: 'un águila blanco hermoso' },
          { key: 'D', text: 'el águila blanco hermoso' }
        ],
        correctAnswer: 'A',
        categoryTag: '重读 a- 阴性名词单数冠词防音爆法则',
        score: 25,
        explanation: '【考点剖析】：águila 为阴性名词，因其首音节为重读 a-，单数不定冠词使用 un（避免 una águila 两个 a 相撞音爆），但其本身的阴性属性丝毫不变！后续修饰它的形容词必须保留阴性形式：blanca / hermosa。故选 A。'
      },
      {
        id: 'tem4-q4',
        type: 'grammar',
        questionText: 'Selecciona la opción correcta: "La ceremonia de apertura comenzará con absoluta puntualidad ________ las nueve en punto de la mañana."',
        options: [
          { key: 'A', text: 'a' },
          { key: 'B', text: 'en' },
          { key: 'C', text: 'de' },
          { key: 'D', text: 'por' }
        ],
        correctAnswer: 'A',
        categoryTag: '前置词搭配：具体时刻表达法',
        score: 25,
        explanation: '【考点剖析】：在西班牙语中表达在具体几点钟，标准固定搭配是前置词 a + 定冠词 + 钟点（a las nueve en punto）。选 A。'
      }
    ]
  },

  // ================= 赛道 4：全国名校考研二外西班牙语 (24X) =================
  {
    id: 'paper-kaoyan-beiwai-01',
    title: '2025年北京外国语大学 二外西班牙语 (243) 考研真题卷',
    spanishTitle: 'BFSU 243 — Examen de Admisión de Posgrado (Segunda Lengua)',
    track: 'kaoyan',
    level: '考研二外',
    schoolOrOrg: '北京外国语大学 (BFSU)',
    durationMinutes: 60,
    totalScore: 100,
    summary: '北外命题权威特色：高频关系代词精准选用、虚拟式在主语从句与时态呼应中的考查、汉西翻译句式重构。',
    questions: [
      {
        id: 'ky-bw-q1',
        type: 'grammar',
        questionText: 'Completa la oración: "Es indispensable que todos los candidatos ________ (presentar) los certificados originales antes del viernes."',
        options: [
          { key: 'A', text: 'presenten' },
          { key: 'B', text: 'presentan' },
          { key: 'C', text: 'presentarán' },
          { key: 'D', text: 'presentaban' }
        ],
        correctAnswer: 'A',
        categoryTag: '无人称评价句 (Es necesario/indispensable que + 虚拟式)',
        score: 25,
        explanation: '【考点剖析】：北外高频考点。结构 "Es indispensable que..." 为无人称评价句，主语从句动词强制使用虚拟式现在时 presenten（选 A）。'
      },
      {
        id: 'ky-bw-q2',
        type: 'grammar',
        questionText: 'Elige el pronombre relativo adecuado: "El catedrático con ________ hablé ayer en el congreso es un eminente hispanista."',
        options: [
          { key: 'A', text: 'quien' },
          { key: 'B', text: 'que' },
          { key: 'C', text: 'cuyo' },
          { key: 'D', text: 'donde' }
        ],
        correctAnswer: 'A',
        categoryTag: '前置词 + 指人关系代词 (con quien / con el que)',
        score: 25,
        explanation: '【考点剖析】：先行词为指人的 el catedrático（大学教授），且位于单音节前置词 con 之后，必须使用指人关系代词 quien（或带冠词的 el que / el cual）。选 A。'
      },
      {
        id: 'ky-bw-q3',
        type: 'grammar',
        questionText: 'Selecciona la combinación correcta: "Dudo mucho que ellos ________ (haber) llegado a tiempo a la estación con semejante temporal."',
        options: [
          { key: 'A', text: 'hayan' },
          { key: 'B', text: 'han' },
          { key: 'C', text: 'habrán' },
          { key: 'D', text: 'hubieran' }
        ],
        correctAnswer: 'A',
        categoryTag: '怀疑动词 (Dudar que + 虚拟式现在完成时)',
        score: 25,
        explanation: '【考点剖析】：dudar 表达强烈的怀疑，从句动作在主句之前已经发生（表过去的推测与怀疑），必须使用虚拟式现在完成时 hayan llegado。选 A。'
      },
      {
        id: 'ky-bw-q4',
        type: 'grammar',
        questionText: 'Indica la traducción correcta para: "由于缺乏经验，那位年轻人犯了一个严重的错误。"',
        options: [
          { key: 'A', text: 'Por falta de experiencia, aquel joven cometió un grave error.' },
          { key: 'B', text: 'Para falta de experiencia, aquel joven hizo un error grave.' },
          { key: 'C', text: 'A causa para experiencia falta, aquel joven cometió un error.' },
          { key: 'D', text: 'Por tener experiencia, aquel joven cometió un error grave.' }
        ],
        correctAnswer: 'A',
        categoryTag: '考研汉西翻译核心句式与动词搭配 (cometer un error)',
        score: 25,
        explanation: '【考点剖析】：西语中“犯错误”的标准地道搭配是 cometer un error（严禁使用英语思维的 hacer un error）；“由于缺乏……”标准表达为 por falta de...。选项 A 用词纯正，句法严谨。'
      }
    ]
  },
  {
    id: 'paper-kaoyan-shisu-01',
    title: '2025年上海外国语大学 二外西班牙语 (244) 考研真题卷',
    spanishTitle: 'SISU 244 — Examen de Admisión de Posgrado (Segunda Lengua)',
    track: 'kaoyan',
    level: '考研二外',
    schoolOrOrg: '上海外国语大学 (SISU)',
    durationMinutes: 60,
    totalScore: 100,
    summary: '上外命题学术特色：侧重词汇精微辨析、副词性关系词、时态呼应配合与学术文献理解。',
    questions: [
      {
        id: 'ky-sh-q1',
        type: 'grammar',
        questionText: 'Completa la correlación temporal: "El profesor nos advirtió que ________ (estudiar) con ahínco para el examen final."',
        options: [
          { key: 'A', text: 'estudiáramos' },
          { key: 'B', text: 'estudiemos' },
          { key: 'C', text: 'estudiamos' },
          { key: 'D', text: 'estudiaremos' }
        ],
        correctAnswer: 'A',
        categoryTag: '时态呼应：过去时主句 + 虚拟式未完成过去时',
        score: 33,
        explanation: '【考点剖析】：主句动词 advirtió 为简单过去时（过去范畴），从句动词表告诫要求，必须与主句保持时态呼应，使用虚拟式过去未完成时 estudiáramos（选 A）。'
      },
      {
        id: 'ky-sh-q2',
        type: 'grammar',
        questionText: 'Elige la opción que completa el sentido: "No me gusta el café con azúcar, prefiero tomarlo ________ (sin nada de dulce)."',
        options: [
          { key: 'A', text: 'amargo' },
          { key: 'B', text: 'dulce' },
          { key: 'C', text: 'agrio' },
          { key: 'D', text: 'salado' }
        ],
        correctAnswer: 'A',
        categoryTag: '味觉形容词精微辨析',
        score: 33,
        explanation: '【考点剖析】：不加糖的咖啡在西语中称为 café amargo（苦咖啡）；dulce 为甜，agrio 为酸，salado 为咸。选 A。'
      },
      {
        id: 'ky-sh-q3',
        type: 'grammar',
        questionText: 'Selecciona la opción correcta: "Hablaba con tanta elocuencia ________ todos los oyentes quedaron fascinados."',
        options: [
          { key: 'A', text: 'que' },
          { key: 'B', text: 'como' },
          { key: 'C', text: 'de que' },
          { key: 'D', text: 'para que' }
        ],
        correctAnswer: 'A',
        categoryTag: '结果从句搭配 (tan / tanto... que + 直陈式)',
        score: 34,
        explanation: '【考点剖析】：tanto/tanta... que 引导连续结果从句，意为“如此……以至于……”，从句表达客观发生的事实，搭配直陈式 quedaron。选 A。'
      }
    ]
  }
];
