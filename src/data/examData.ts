// Spanish Exams Comprehensive Dataset
// 涵盖 5 大权威赛道体系、共计 64 套专业历届真题与仿真冲刺大卷

export type ExamTrack = 'dele' | 'siele' | 'tem4' | 'kaoyan' | 'kaoyan_mock';

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
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'TEM-4' | '考研二外' | '考研模拟' | string;
  schoolOrOrg: string;
  durationMinutes: number;
  totalScore: number;
  summary: string;
  questions: ExamQuestion[];
}

export const SPANISH_EXAM_PAPERS: ExamPaper[] = [
  {
    "id": "paper-dele-a1-01",
    "title": "塞万提斯学院 DELE A1 官方真题机考精编卷 (一)",
    "spanishTitle": "DELE A1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "A1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "入门起步 · 自我介绍、日常问候与基础数字时间",
    "questions": [
      {
        "id": "dele-a1-01-q1",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-a1-01-q2",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-a1-01-q3",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-a1-01-q4",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-a1-02",
    "title": "塞万提斯学院 DELE A1 官方真题机考精编卷 (二)",
    "spanishTitle": "DELE A1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "A1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "生活出行 · 餐厅点餐、家庭称谓与交通物品指认",
    "questions": [
      {
        "id": "dele-a1-02-q1",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-a1-02-q2",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-a1-02-q3",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-a1-02-q4",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-a2-01",
    "title": "塞万提斯学院 DELE A2 官方真题机考大卷 (一)",
    "spanishTitle": "DELE A2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "A2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "过去叙事 · 简单过去时体验、旅行买票与问路",
    "questions": [
      {
        "id": "dele-a2-01-q1",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-a2-01-q2",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-a2-01-q3",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-a2-01-q4",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-a2-02",
    "title": "塞万提斯学院 DELE A2 官方真题机考大卷 (二)",
    "spanishTitle": "DELE A2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "A2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "生活起居 · 过去未完成时场景、就医购物与实用通告",
    "questions": [
      {
        "id": "dele-a2-02-q1",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-a2-02-q2",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-a2-02-q3",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-a2-02-q4",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b1-01",
    "title": "塞万提斯官方 DELE B1 全真机考综合大卷 (一)",
    "spanishTitle": "DELE B1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "欧标突破 · 过去时态辨析、虚拟式愿望从句与生态读解",
    "questions": [
      {
        "id": "dele-b1-01-q1",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-b1-01-q2",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-b1-01-q3",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-b1-01-q4",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b1-02",
    "title": "塞万提斯官方 DELE B1 全真机考综合大卷 (二)",
    "spanishTitle": "DELE B1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "观点交锋 · 意见表达、虚拟式否定从句与拉美旅游读解",
    "questions": [
      {
        "id": "dele-b1-02-q1",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-b1-02-q2",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-b1-02-q3",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-b1-02-q4",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b1-03",
    "title": "塞万提斯官方 DELE B1 全真机考综合大卷 (三)",
    "spanishTitle": "DELE B1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "社会生活 · 条件句入门、双重代词替换与跨文化交际",
    "questions": [
      {
        "id": "dele-b1-03-q1",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-b1-03-q2",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-b1-03-q3",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-b1-03-q4",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b1-04",
    "title": "塞万提斯官方 DELE B1 全真机考综合大卷 (四)",
    "spanishTitle": "DELE B1 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B1",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "综合冲刺 · 目的从句与动词短语时态综合运用",
    "questions": [
      {
        "id": "dele-b1-04-q1",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-b1-04-q2",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-b1-04-q3",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-b1-04-q4",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b2-01",
    "title": "塞万提斯官方 DELE B2 高阶机考全真大卷 (一)",
    "spanishTitle": "DELE B2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "高阶攻关 · 虚拟式未完成时、条件假设与政经社论读解",
    "questions": [
      {
        "id": "dele-b2-01-q1",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      },
      {
        "id": "dele-b2-01-q2",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-b2-01-q3",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-b2-01-q4",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b2-02",
    "title": "塞万提斯官方 DELE B2 高阶机考全真大卷 (二)",
    "spanishTitle": "DELE B2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "学术思辨 · 虚拟式各种从句嵌套、自反被动句与西语文学",
    "questions": [
      {
        "id": "dele-b2-02-q1",
        "type": "reading",
        "passage": "El Camino de Santiago es una de las rutas de peregrinación cultural y espiritual más antiguas de Europa. Cada año, peregrinos de más de 150 países recorren cientos de kilómetros a pie o en bicicleta, dinamizando las economías rurales del norte de España.",
        "questionText": "Según el texto sobre el Camino de Santiago, ¿qué beneficio genera la afluencia de peregrinos?",
        "options": [
          {
            "key": "A",
            "text": "La saturación de grandes metrópolis industriales"
          },
          {
            "key": "B",
            "text": "La dinamización de las economías rurales en el norte peninsular"
          },
          {
            "key": "C",
            "text": "El abandono de las tradiciones locales"
          },
          {
            "key": "D",
            "text": "La obligatoriedad de viajar en transporte aéreo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：文中明确指出“dinamizando las economías rurales del norte de España”（促进了西班牙北部乡村地区的经济活力），对应选项 B。",
        "categoryTag": "DELE 西班牙地理文化阅读",
        "score": 25
      },
      {
        "id": "dele-b2-02-q2",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-b2-02-q3",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-b2-02-q4",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b2-03",
    "title": "塞万提斯官方 DELE B2 高阶机考全真大卷 (三)",
    "spanishTitle": "DELE B2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "终极冲顶 · 委婉语气、固定前置词短语与经贸实务",
    "questions": [
      {
        "id": "dele-b2-03-q1",
        "type": "grammar",
        "questionText": "Selecciona la preposición correcta: \"Lucía trabaja duro ________ conseguir una beca de investigación en Salamanca.\"",
        "options": [
          {
            "key": "A",
            "text": "por"
          },
          {
            "key": "B",
            "text": "para"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "con"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：para + 动词原形表示行动追求的目的和目标（为了获得奖学金）；por 表示原因。此处表达奋斗目的，必须使用 para。选 B。",
        "categoryTag": "por 与 para 目的考查",
        "score": 25
      },
      {
        "id": "dele-b2-03-q2",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-b2-03-q3",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-b2-03-q4",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-dele-b2-04",
    "title": "塞万提斯官方 DELE B2 高阶机考全真大卷 (四)",
    "spanishTitle": "DELE B2 — Modelo Oficial de Examen (Instituto Cervantes)",
    "track": "dele",
    "level": "B2",
    "schoolOrOrg": "Instituto Cervantes (塞万提斯学院官方)",
    "durationMinutes": 45,
    "totalScore": 100,
    "summary": "全真模拟 · 综合读解能力与语言运用高难度冲刺",
    "questions": [
      {
        "id": "dele-b2-04-q1",
        "type": "grammar",
        "questionText": "Completa la frase condicional: \"Si yo ________ (tener) más tiempo libre, aprendería a bailar flamenco.\"",
        "options": [
          {
            "key": "A",
            "text": "tengo"
          },
          {
            "key": "B",
            "text": "tuviera"
          },
          {
            "key": "C",
            "text": "tendría"
          },
          {
            "key": "D",
            "text": "tuviese tenido"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句是简单条件式 aprendería，Si 引导的对当前或未来不太可能实现的虚拟假设从句必须使用虚拟式过去未完成时（tuviera / tuviese）。选 B。",
        "categoryTag": "条件从句时态配合",
        "score": 25
      },
      {
        "id": "dele-b2-04-q2",
        "type": "grammar",
        "questionText": "Completa con la forma verbal correcta: \"Espero que vosotros ________ (tener) un buen viaje por Andalucía.\"",
        "options": [
          {
            "key": "A",
            "text": "tenéis"
          },
          {
            "key": "B",
            "text": "tengáis"
          },
          {
            "key": "C",
            "text": "tendréis"
          },
          {
            "key": "D",
            "text": "teníais"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：主句动词 esperar 表愿望期许，主从句主语不一致（yo vs vosotros），从句强制使用虚拟式现在时。tener 的虚拟式第二人称复数为 tengáis（带重音符号）。选 B。",
        "categoryTag": "虚拟式现在时 vosotros 变位",
        "score": 25
      },
      {
        "id": "dele-b2-04-q3",
        "type": "grammar",
        "questionText": "Identifica la opción adecuada: \"Cuando éramos pequeños, nosotros ________ (ir) a la playa todos los veranos.\"",
        "options": [
          {
            "key": "A",
            "text": "fuimos"
          },
          {
            "key": "B",
            "text": "íbamos"
          },
          {
            "key": "C",
            "text": "iremos"
          },
          {
            "key": "D",
            "text": "vayamos"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【DELE 考点剖析】：todos los veranos 表达过去长期反复发生的习惯性、周期性动作，ir 在过去未完成时呈现不规则形态 íbamos（带重音符号）。选 B。",
        "categoryTag": "过去未完成时习惯动作",
        "score": 25
      },
      {
        "id": "dele-b2-04-q4",
        "type": "grammar",
        "questionText": "Elige la combinación de pronombres correcta: \"¿Le has dado el informe a la directora?\" — \"Sí, ya ________ he entregado esta mañana.\"",
        "options": [
          {
            "key": "A",
            "text": "se lo"
          },
          {
            "key": "B",
            "text": "le lo"
          },
          {
            "key": "C",
            "text": "se la"
          },
          {
            "key": "D",
            "text": "lo le"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【DELE 考点剖析】：el informe (直宾 lo)，a la directora (间宾 le)。当间宾与第三人称直宾相遇时，间宾 le 必须变身为 se，因此为 se lo。选 A。",
        "categoryTag": "双重代词替换变身",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-s1-01",
    "title": "SIELE 国际在线机考 全球综合大卷 S1",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B1",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "语言使用 · 词汇语法综合攻关与现代企业运营读解",
    "questions": [
      {
        "id": "siele-s1-01-q1",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-s1-01-q2",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-s1-01-q3",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-s1-01-q4",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-s1-02",
    "title": "SIELE 国际在线机考 全球综合大卷 S2",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B1",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "跨文化交际 · 动词固定前置词搭配与拉美科技创新",
    "questions": [
      {
        "id": "siele-s1-02-q1",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-s1-02-q2",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-s1-02-q3",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-s1-02-q4",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-s2-01",
    "title": "SIELE 商务西语与实用文书机考卷 S3",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "经贸实务 · 商务函电写作逻辑与数字化办公读解",
    "questions": [
      {
        "id": "siele-s2-01-q1",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-s2-01-q2",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-s2-01-q3",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-s2-01-q4",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-s2-02",
    "title": "SIELE 拉美多元文化与社评机考卷 S4",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "拉美风情 · 游记文学与数字游民生活形态精读",
    "questions": [
      {
        "id": "siele-s2-02-q1",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-s2-02-q2",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-s2-02-q3",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-s2-02-q4",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-spec-01",
    "title": "SIELE 语法与词汇专项攻关突破卷 (甲)",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B1",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "专项突破 · 虚拟式要求从句与双重代词位置",
    "questions": [
      {
        "id": "siele-spec-01-q1",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-spec-01-q2",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-spec-01-q3",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-spec-01-q4",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-spec-02",
    "title": "SIELE 语法与词汇专项攻关突破卷 (乙)",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "专项突破 · 动词短语 llevar/seguir + gerundio 辨析",
    "questions": [
      {
        "id": "siele-spec-02-q1",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-spec-02-q2",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-spec-02-q3",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-spec-02-q4",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-tier-01",
    "title": "SIELE 欧标自适应机考梯级挑战卷 (A2-B1)",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "A2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "阶梯进阶 · 基础时态迈向复合从句平稳过渡",
    "questions": [
      {
        "id": "siele-tier-01-q1",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-tier-01-q2",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-tier-01-q3",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-tier-01-q4",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-tier-02",
    "title": "SIELE 欧标自适应机考终极冲顶卷 (B1-B2)",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "巅峰对决 · 全真自适应机考高难度试题汇编",
    "questions": [
      {
        "id": "siele-tier-02-q1",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-tier-02-q2",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-tier-02-q3",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-tier-02-q4",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-read-01",
    "title": "SIELE 国际机考 快速阅读与图表信息检索专练卷",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B1",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "题型专项 · 官方通告、商务邮件与公共设施信息检索",
    "questions": [
      {
        "id": "siele-read-01-q1",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      },
      {
        "id": "siele-read-01-q2",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-read-01-q3",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-read-01-q4",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-siele-read-02",
    "title": "SIELE 国际机考 长篇学术综述与观点论证综合卷",
    "spanishTitle": "Examen Oficial SIELE Global (Cervantes, UNAM, USAL, UBA)",
    "track": "siele",
    "level": "B2",
    "schoolOrOrg": "Servicio Internacional de Evaluación (SIELE 官方)",
    "durationMinutes": 50,
    "totalScore": 100,
    "summary": "高分攻关 · 环境生态、数字化经济与拉美社会前沿",
    "questions": [
      {
        "id": "siele-read-02-q1",
        "type": "grammar",
        "questionText": "Uso de preposiciones: \"El éxito de la campaña publicitaria consistió ________ conectar emocionalmente con la audiencia joven.\"",
        "options": [
          {
            "key": "A",
            "text": "en"
          },
          {
            "key": "B",
            "text": "de"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：动词 consistir 表达“在于、由...组成”固定搭配前置词 en（consistir en algo / inf.）。选 A。",
        "categoryTag": "固定搭配 consistir en",
        "score": 25
      },
      {
        "id": "siele-read-02-q2",
        "type": "reading",
        "passage": "La expansión de energías renovables en Chile, especialmente la energía solar fotovoltaica en el Desierto de Atacama, ha posicionado al país suramericano como un referente global de transición energética limpia, atrayendo capitales de innovación tecnológica.",
        "questionText": "¿Cuál es el papel del Desierto de Atacama en el panorama energético chileno?",
        "options": [
          {
            "key": "A",
            "text": "Constituye un obstáculo para el tendido eléctrico"
          },
          {
            "key": "B",
            "text": "Es el epicentro del desarrollo solar fotovoltaico y la transición limpia"
          },
          {
            "key": "C",
            "text": "Se destina únicamente a la minería tradicional"
          },
          {
            "key": "D",
            "text": "Ha provocado un déficit en la inversión extranjera"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：文中明确提及阿塔卡马沙漠的太阳能光伏发电让智利成为全球清洁能源转型的典范，对应选项 B。",
        "categoryTag": "SIELE 拉美科技与产业生态读解",
        "score": 25
      },
      {
        "id": "siele-read-02-q3",
        "type": "grammar",
        "questionText": "Perífrasis de continuidad: \"A pesar de las dificultades del mercado, la compañía sigue ________ (expandir) su red de distribución.\"",
        "options": [
          {
            "key": "A",
            "text": "expandiendo"
          },
          {
            "key": "B",
            "text": "expandido"
          },
          {
            "key": "C",
            "text": "a expandir"
          },
          {
            "key": "D",
            "text": "por expandir"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【SIELE 考点剖析】：seguir + 副动词（gerundio）表示动作或状态持续进行（“继续扩大其网络”）。expandir 的副动词形式为 expandiendo。选 A。",
        "categoryTag": "动词短语 seguir + gerundio",
        "score": 25
      },
      {
        "id": "siele-read-02-q4",
        "type": "grammar",
        "questionText": "Entorno profesional y corporativo: \"El comité directivo solicita que todos los departamentos ________ (enviar) sus informes trimestrales.\"",
        "options": [
          {
            "key": "A",
            "text": "envían"
          },
          {
            "key": "B",
            "text": "envíen"
          },
          {
            "key": "C",
            "text": "enviarán"
          },
          {
            "key": "D",
            "text": "enviaron"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【SIELE 考点剖析】：solicitar que 表官方正式请求，宾语从句必须使用虚拟式（envíen，注意带重音符号）。选 B。",
        "categoryTag": "SIELE 商务文书与意志从句",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2024",
    "title": "2024年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "教指委统考 · 过去完成时配合、前置词搭配与自反被动句",
    "questions": [
      {
        "id": "eee4-2024-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-2024-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-2024-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-2024-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2023",
    "title": "2023年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "教指委经典 · 目的从句 para que、所有格关系代词 cuya",
    "questions": [
      {
        "id": "eee4-2023-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-2023-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-2023-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-2023-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2022",
    "title": "2022年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "真题精炼 · 黄金世纪文学史常识与词汇多义辨析",
    "questions": [
      {
        "id": "eee4-2022-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-2022-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-2022-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-2022-q4",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2021",
    "title": "2021年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "考纲溯源 · 虚拟式时态配合与被动 se 主谓一致",
    "questions": [
      {
        "id": "eee4-2021-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-2021-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-2021-q3",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-2021-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2020",
    "title": "2020年全国高校西班牙语专业四级 (EEE-4) 统考全真卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "经典回溯 · 直宾代词提前与复合条件假设句",
    "questions": [
      {
        "id": "eee4-2020-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-2020-q2",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-2020-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-2020-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2019",
    "title": "2019年全国高校西班牙语专业四级 (EEE-4) 统考全真卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "命题规律 · 重读 a- 开头反常阴性词与关系从句",
    "questions": [
      {
        "id": "eee4-2019-q1",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-2019-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-2019-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-2019-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2018",
    "title": "2018年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "语法溯源 · 过去时态混合叙事与副动词用法",
    "questions": [
      {
        "id": "eee4-2018-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-2018-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-2018-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-2018-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-2017",
    "title": "2017年全国高校西班牙语专业四级 (EEE-4) 统考真题卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "十年经典 · 虚拟式独立用法与陈述式虚拟式辨析",
    "questions": [
      {
        "id": "eee4-2017-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-2017-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-2017-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-2017-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-spec-grammar",
    "title": "全国高校西语专四 (EEE-4) 语法专项攻坚卷 (虚拟式与时态配合)",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "核心专题 · 虚拟式六大主从句触发铁律深度攻坚",
    "questions": [
      {
        "id": "eee4-spec-grammar-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      },
      {
        "id": "eee4-spec-grammar-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-spec-grammar-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-spec-grammar-q4",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-spec-prep",
    "title": "全国高校西语专四 (EEE-4) 词汇与前置词搭配高频扫雷卷",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "高频扫雷 · tardar en, quejarse de, soñar con 等专四必背",
    "questions": [
      {
        "id": "eee4-spec-prep-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·自反被动句一致性】\"En las conferencias internacionales se ________ (tratar) diversos temas de actualidad geopolítica.\"",
        "options": [
          {
            "key": "A",
            "text": "trata"
          },
          {
            "key": "B",
            "text": "tratan"
          },
          {
            "key": "C",
            "text": "es tratado"
          },
          {
            "key": "D",
            "text": "han tratado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：被动 se 句型中，真正语法主语是后面的 diversos temas（复数），动词必须采用第三人称复数 tratan。选 B。",
        "categoryTag": "被动 se 主谓一致",
        "score": 25
      },
      {
        "id": "eee4-spec-prep-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-spec-prep-q3",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-spec-prep-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-mock-a",
    "title": "全国高校西语专四 (EEE-4) 考前金牌仿真大卷 (甲卷)",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "权威仿真 · 严格依照专业四级考试大纲 1:1 标准命制",
    "questions": [
      {
        "id": "eee4-mock-a-q1",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·反常阴阳性专有考点】\"Bebimos ________ agua mineral fresca después de subir a la montaña.\"",
        "options": [
          {
            "key": "A",
            "text": "el"
          },
          {
            "key": "B",
            "text": "la"
          },
          {
            "key": "C",
            "text": "un"
          },
          {
            "key": "D",
            "text": "al"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：agua, águila, hacha, alma 等词本质为阴性名词，但因首音节为重读 a- 音，单数定冠词必须使用 el 以避免元音连读冲突（el agua），但其修饰形容词依然保持阴性（fresca）。选 A。",
        "categoryTag": "重读 a- 开头阴性名词冠词规则",
        "score": 25
      },
      {
        "id": "eee4-mock-a-q2",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-mock-a-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-mock-a-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-eee4-mock-b",
    "title": "全国高校西语专四 (EEE-4) 考前金牌仿真大卷 (乙卷)",
    "spanishTitle": "Examen Estatal de Español - Grado 4 (EEE-4 / Convocatoria Oficial)",
    "track": "tem4",
    "level": "TEM-4",
    "schoolOrOrg": "全国高校外语专业教学指导委员会西班牙语分委会",
    "durationMinutes": 60,
    "totalScore": 100,
    "summary": "临考冲刺 · 难度系数、知识点覆盖与题型配比全面仿真",
    "questions": [
      {
        "id": "eee4-mock-b-q1",
        "type": "reading",
        "passage": "Don Quijote de la Mancha, cumbre de Miguel de Cervantes publicada en 1605, desmitificó los libros de caballerías mediante una parodia genial que exploró los límites entre la cordura y el idealismo ético humano.",
        "questionText": "¿Cuál fue el propósito literario primordial de la obra cervantina según la crítica?",
        "options": [
          {
            "key": "A",
            "text": "Promover las guerras feudales medievales"
          },
          {
            "key": "B",
            "text": "Parodiar y desmitificar las novelas de caballerías con un profundo humanismo"
          },
          {
            "key": "C",
            "text": "Enseñar técnicas de combate a caballo"
          },
          {
            "key": "D",
            "text": "Traducir leyendas árabes al castellano antiguo"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：塞万提斯通过《堂吉诃德》以反讽模仿（parodia）打破了中世纪骑士小说的虚妄神话，闪耀着人文主义光芒，对应选项 B。",
        "categoryTag": "西语专四·文学史名著精解",
        "score": 25
      },
      {
        "id": "eee4-mock-b-q2",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·动词时态配合】\"Cuando la profesora entró en el aula, los alumnos ya ________ (terminar) el ejercicio de traducción.\"",
        "options": [
          {
            "key": "A",
            "text": "terminaron"
          },
          {
            "key": "B",
            "text": "habían terminado"
          },
          {
            "key": "C",
            "text": "terminaban"
          },
          {
            "key": "D",
            "text": "hayan terminado"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：在过去的过去发生的动作（老师进教室前已做完），必须使用直陈式过去完成时（habían terminado）。选 B。",
        "categoryTag": "过去完成时 (Pluscuamperfecto)",
        "score": 25
      },
      {
        "id": "eee4-mock-b-q3",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·固定前置词辨析】\"Muchos estudiantes extranjeros se quejan ________ la excesiva velocidad del habla de los madrileños.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "con"
          },
          {
            "key": "C",
            "text": "en"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【EEE-4 官方专四解析】：quejarse 表达“抱怨、抗议某事”固定搭配前置词 de（quejarse de algo）。选 A。",
        "categoryTag": "固定搭配 quejarse de",
        "score": 25
      },
      {
        "id": "eee4-mock-b-q4",
        "type": "grammar",
        "questionText": "【西语专四 EEE-4·目的从句】\"Te dejo las llaves del coche para que ________ (poder) ir a la estación a recoger a tus abuelos.\"",
        "options": [
          {
            "key": "A",
            "text": "puedes"
          },
          {
            "key": "B",
            "text": "puedas"
          },
          {
            "key": "C",
            "text": "podrás"
          },
          {
            "key": "D",
            "text": "pudiste"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【EEE-4 官方专四解析】：连词短语 para que 引导目的从句且主句从句主语不同（yo vs tú），从句强制接虚拟式现在时 puedas。选 B。",
        "categoryTag": "目的从句 para que + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-bfsu-2024",
    "title": "2024年北京外国语大学 240二外西班牙语考研统考真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北外官方真题 · 虚拟式情感从句、前置词搭配与拉美文学读解",
    "questions": [
      {
        "id": "kaoyan-bfsu-2024-q1",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2024-q2",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2024-q3",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2024-q4",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-bfsu-2023",
    "title": "2023年北京外国语大学 240二外西班牙语考研统考真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北外官方真题 · 过去时态辨析与拉丁美洲生态可持续读解",
    "questions": [
      {
        "id": "kaoyan-bfsu-2023-q1",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2023-q2",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2023-q3",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2023-q4",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-bfsu-2022",
    "title": "2022年北京外国语大学 240二外西班牙语考研统考真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北外官方真题 · 关系代词 cuyo 与动词短语副动词进阶",
    "questions": [
      {
        "id": "kaoyan-bfsu-2022-q1",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2022-q2",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2022-q3",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2022-q4",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-bfsu-2021",
    "title": "2021年北京外国语大学 240二外西班牙语考研统考真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北外官方真题 · 目的从句 para que 与双重代词替换",
    "questions": [
      {
        "id": "kaoyan-bfsu-2021-q1",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2021-q2",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2021-q3",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-bfsu-2021-q4",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-sisu-2024",
    "title": "2024年上海外国语大学 240二外西班牙语考研自命题真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (上海外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "上海外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "上外自命题真题 · aunque 让步从句未发生假设与代词复指",
    "questions": [
      {
        "id": "kaoyan-sisu-2024-q1",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2024-q2",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2024-q3",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2024-q4",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-sisu-2023",
    "title": "2023年上海外国语大学 240二外西班牙语考研自命题真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (上海外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "上海外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "上外自命题真题 · 词义辨析与拉美魔幻现实主义阅读",
    "questions": [
      {
        "id": "kaoyan-sisu-2023-q1",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2023-q2",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2023-q3",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2023-q4",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-sisu-2022",
    "title": "2022年上海外国语大学 240二外西班牙语考研自命题真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (上海外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "上海外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "上外自命题真题 · 条件假设从句与自反被动句型",
    "questions": [
      {
        "id": "kaoyan-sisu-2022-q1",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2022-q2",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2022-q3",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-2022-q4",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-gdufs-2024",
    "title": "2024年广东外语外贸大学 240二外西班牙语考研统考卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (广东外语外贸大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "广东外语外贸大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "广外统考真题 · en cuanto 时间从句虚拟式与经贸阅读",
    "questions": [
      {
        "id": "kaoyan-gdufs-2024-q1",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2024-q2",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2024-q3",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2024-q4",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-gdufs-2023",
    "title": "2023年广东外语外贸大学 240二外西班牙语考研统考卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (广东外语外贸大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "广东外语外贸大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "广外统考真题 · 情感动词 alegrarse 虚拟式与社会热点",
    "questions": [
      {
        "id": "kaoyan-gdufs-2023-q1",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2023-q2",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2023-q3",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-gdufs-2023-q4",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-pku-2024",
    "title": "2024年北京大学 硕士研究生入学二外西语真题精编卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北大命题真题 · 文学社科经典语段读解与高难度从句结构",
    "questions": [
      {
        "id": "kaoyan-pku-2024-q1",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2024-q2",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2024-q3",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2024-q4",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-pku-2023",
    "title": "2023年北京大学 硕士研究生入学二外西语真题精编卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (北京大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "北京大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "北大命题真题 · 西班牙哲学与黄金世纪文学名篇精读",
    "questions": [
      {
        "id": "kaoyan-pku-2023-q1",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2023-q2",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2023-q3",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-pku-2023-q4",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-nju-2024",
    "title": "2024年南京大学 硕士研究生入学二外西语统考大卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (南京大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "南京大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "南大统考真题 · 对过去虚拟假设句 Si + hubieras venido",
    "questions": [
      {
        "id": "kaoyan-nju-2024-q1",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2024-q2",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2024-q3",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2024-q4",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-nju-2023",
    "title": "2023年南京大学 硕士研究生入学二外西语统考大卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (南京大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "南京大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "南大统考真题 · 过去未完成时与简单过去时交织叙事考查",
    "questions": [
      {
        "id": "kaoyan-nju-2023-q1",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2023-q2",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2023-q3",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-nju-2023-q4",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-fudan-2024",
    "title": "2024年复旦大学 硕士研究生入学二外西语真题大卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (复旦大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "复旦大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "复旦自命题真题 · 复杂长句分析、动词时态配合与汉西互译",
    "questions": [
      {
        "id": "kaoyan-fudan-2024-q1",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-fudan-2024-q2",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-fudan-2024-q3",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-fudan-2024-q4",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-whu-2023",
    "title": "2023年武汉大学 240二外西班牙语考研真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (武汉大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "武汉大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "武大统考真题 · 目的状语从句与条件式复合句深入推导",
    "questions": [
      {
        "id": "kaoyan-whu-2023-q1",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-whu-2023-q2",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-whu-2023-q3",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-whu-2023-q4",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-kaoyan-sisu-cq-2024",
    "title": "2024年四川外国语大学 240二外西班牙语考研真题卷",
    "spanishTitle": "Examen Oficial de Posgrado — Segunda Lengua Española (四川外国语大学)",
    "track": "kaoyan",
    "level": "考研二外",
    "schoolOrOrg": "四川外国语大学 外国语学院",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "川外考研真题 · 西汉互译核心句法与性数变格避雷",
    "questions": [
      {
        "id": "kaoyan-sisu-cq-2024-q1",
        "type": "grammar",
        "questionText": "【南大考研真题·虚拟假设条件从句】\"Si hubieras venido ayer a la fiesta, te ________ (divertir) muchísimo con nosotros.\"",
        "options": [
          {
            "key": "A",
            "text": "habrías divertido"
          },
          {
            "key": "B",
            "text": "diviertes"
          },
          {
            "key": "C",
            "text": "divertías"
          },
          {
            "key": "D",
            "text": "hayas divertido"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【南大考研权威解析】：Si + 虚拟式过去完成时（hubieras venido）表达对过去的相反假设，主句必须使用复合条件式（Condicional compuesto: habrías divertido）。选 A。",
        "categoryTag": "对过去相反的虚拟假设复合条件式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-cq-2024-q2",
        "type": "grammar",
        "questionText": "【北外考研真题·虚拟式情感从句】\"Me extraña mucho que ellos no ________ (asistir) a la reunión de antiguos alumnos.\"",
        "options": [
          {
            "key": "A",
            "text": "asisten"
          },
          {
            "key": "B",
            "text": "hayan asistido"
          },
          {
            "key": "C",
            "text": "asistieron"
          },
          {
            "key": "D",
            "text": "asistirán"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【北外考研权威解析】：me extraña que 表达主观诧异情绪，从句强制使用虚拟式；动作发生在过去已完成，使用虚拟式现在完成时 hayan asistido。选 B。",
        "categoryTag": "使动情感动词 extrañar + 虚拟式",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-cq-2024-q3",
        "type": "grammar",
        "questionText": "【上外考研真题·代词位置与复指】\"A María ________ encontramos ayer paseando por el parque con su hermano.\"",
        "options": [
          {
            "key": "A",
            "text": "la"
          },
          {
            "key": "B",
            "text": "le"
          },
          {
            "key": "C",
            "text": "se"
          },
          {
            "key": "D",
            "text": "lo"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【上外考研权威解析】：明确人称的直接宾语（A María）提前到动词前面时，西语句法要求必须在动词前添加相应的宾格代词进行复指！María 是女性单数直宾，用 la。选 A。",
        "categoryTag": "直宾提前代词复指 (Reduplicación)",
        "score": 25
      },
      {
        "id": "kaoyan-sisu-cq-2024-q4",
        "type": "grammar",
        "questionText": "【广外考研真题·时间状语从句时态配合】\"Te llamaré por teléfono en cuanto ________ (llegar) a la oficina de Madrid.\"",
        "options": [
          {
            "key": "A",
            "text": "llego"
          },
          {
            "key": "B",
            "text": "llegue"
          },
          {
            "key": "C",
            "text": "llegaré"
          },
          {
            "key": "D",
            "text": "llegara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【广外考研权威解析】：en cuanto (一...就...) 引导时间状语从句，当主句为将来时（llamaré）表达未来未发生的动作时，从句强制使用虚拟式现在时（llegue）。选 B。",
        "categoryTag": "en cuanto 将来时间从句 + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-tongkao-01",
    "title": "2026年全国统考考研 240二外西班牙语全真模拟大卷 (甲卷)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "考前押题 · 八大核心语法高频出题点与全真阅读演练",
    "questions": [
      {
        "id": "mock-tongkao-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-tongkao-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-tongkao-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-tongkao-01-q4",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-tongkao-02",
    "title": "2026年全国统考考研 240二外西班牙语全真模拟大卷 (乙卷)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "考前押题 · 虚拟式愿望从句、让步从句与双重代词替换",
    "questions": [
      {
        "id": "mock-tongkao-02-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-tongkao-02-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-tongkao-02-q3",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-tongkao-02-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-tongkao-03",
    "title": "2026年全国统考考研 240二外西班牙语全真模拟大卷 (丙卷)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "考前押题 · 过去未完成时与简单过去时混合长篇记叙",
    "questions": [
      {
        "id": "mock-tongkao-03-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-tongkao-03-q2",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-tongkao-03-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-tongkao-03-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-tongkao-04",
    "title": "2026年全国统考考研 240二外西班牙语全真模拟大卷 (丁卷)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "考前押题 · 目的状语从句与条件假设复合时态演练",
    "questions": [
      {
        "id": "mock-tongkao-04-q1",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-tongkao-04-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-tongkao-04-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-tongkao-04-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-subjuntivo-01",
    "title": "考研二外西语 · 虚拟式高分突破专项模拟卷 (一)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · 愿望/怀疑/情感/意志/否定思考动词全盘操练",
    "questions": [
      {
        "id": "mock-subjuntivo-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-01-q4",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-subjuntivo-02",
    "title": "考研二外西语 · 虚拟式高分突破专项模拟卷 (二)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · por muy que, sin que, a no ser que 等高难度从句",
    "questions": [
      {
        "id": "mock-subjuntivo-02-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-02-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-02-q3",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-subjuntivo-02-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-pronouns-01",
    "title": "考研二外西语 · 宾格与与格双代词攻关模拟卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · 间宾变身 se、直宾代词复指与副动词代词后置连写",
    "questions": [
      {
        "id": "mock-pronouns-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-pronouns-01-q2",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-pronouns-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-pronouns-01-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-tenses-01",
    "title": "考研二外西语 · 过去时态辨析黄金攻坚模拟卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · 简单过去时、过去未完成时、过去完成时三维对照",
    "questions": [
      {
        "id": "mock-tenses-01-q1",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-tenses-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-tenses-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-tenses-01-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-prepositions-01",
    "title": "考研二外西语 · 固定前置词搭配绝密扫雷模拟卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · por与para终极辨析、动词+介词固定短语汇总",
    "questions": [
      {
        "id": "mock-prepositions-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-prepositions-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-prepositions-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-prepositions-01-q4",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-relative-01",
    "title": "考研二外西语 · 关系代词与复杂从句高分突破卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "专题突破 · cuyo, donde, el que, quien 在考研长难句中的定位",
    "questions": [
      {
        "id": "mock-relative-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-relative-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-relative-01-q3",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-relative-01-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-reading-01",
    "title": "考研二外西语 · 拉美文学经典语段读解仿真大卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "读解专项 · 加西亚·马尔克斯、博尔赫斯、科塔萨尔名篇精读",
    "questions": [
      {
        "id": "mock-reading-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-reading-01-q2",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-reading-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-reading-01-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-reading-02",
    "title": "考研二外西语 · 现代西班牙社会与科技评论专练卷",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "读解专项 · 数字游民、绿色能源转型、都市文化热点透析",
    "questions": [
      {
        "id": "mock-reading-02-q1",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-reading-02-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-reading-02-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-reading-02-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-sprint-final-01",
    "title": "2026考研二外西语 · 考前48小时终极封题押密卷 (A)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "终极冲刺 · 难度系数 1.15 倍全真仿真综合考场演练",
    "questions": [
      {
        "id": "mock-sprint-final-01-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      },
      {
        "id": "mock-sprint-final-01-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-sprint-final-01-q3",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-sprint-final-01-q4",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      }
    ]
  },
  {
    "id": "paper-mock-sprint-final-02",
    "title": "2026考研二外西语 · 考前48小时终极封题押密卷 (B)",
    "spanishTitle": "Examen de Simulación Oficial — Segunda Lengua Española (Maestría)",
    "track": "kaoyan_mock",
    "level": "考研模拟",
    "schoolOrOrg": "全国高校二外教研组仿真中心",
    "durationMinutes": 75,
    "totalScore": 100,
    "summary": "终极冲刺 · 查漏补缺扫除知识盲点，助力二外高分破百",
    "questions": [
      {
        "id": "mock-sprint-final-02-q1",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·时态辨析】\"El año pasado, Manuel ________ (viajar) por cinco países de Sudamérica.\"",
        "options": [
          {
            "key": "A",
            "text": "ha viajado"
          },
          {
            "key": "B",
            "text": "viajó"
          },
          {
            "key": "C",
            "text": "viajaba"
          },
          {
            "key": "D",
            "text": "viajara"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：el año pasado 是已经完全结束的明确过去时间段，必须使用简单过去时（Pretérito Indefinido: viajó）。选 B。",
        "categoryTag": "明确过去时间点与简单过去时",
        "score": 25
      },
      {
        "id": "mock-sprint-final-02-q2",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·前置词进阶】\"Ayer nos enteramos ________ que habían cancelado el vuelo hacia Buenos Aires.\"",
        "options": [
          {
            "key": "A",
            "text": "de"
          },
          {
            "key": "B",
            "text": "en"
          },
          {
            "key": "C",
            "text": "a"
          },
          {
            "key": "D",
            "text": "por"
          }
        ],
        "correctAnswer": "A",
        "explanation": "【考研二外模拟剖析】：enterarse de que 表达“获悉、得知某事”，介词 de 绝对不能脱落。选 A。",
        "categoryTag": "固定短语 enterarse de que",
        "score": 25
      },
      {
        "id": "mock-sprint-final-02-q3",
        "type": "reading",
        "passage": "El auge del microteatro en Madrid y Barcelona ha revolucionado las artes escénicas. En salas de apenas quince metros cuadrados y ante públicos reducidos, actores y dramaturgos ofrecen piezas intensas de quince minutos que democratizan el acceso a la cultura vanguardista.",
        "questionText": "¿Qué rasgo distintivo caracteriza al fenómeno del microteatro según el fragmento?",
        "options": [
          {
            "key": "A",
            "text": "Obras de más de tres horas en auditorios gigantescos"
          },
          {
            "key": "B",
            "text": "Representaciones cortas en espacios íntimos ante un público reducido"
          },
          {
            "key": "C",
            "text": "El abandono de la interacción entre público y actores"
          },
          {
            "key": "D",
            "text": "Precios prohibitivos destinados a élites"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：文中清晰描述小剧场特色“salas de apenas quince metros cuadrados... públicos reducidos... piezas de quince minutos”，即微型空间、观众精炼、时长短促，对应选项 B。",
        "categoryTag": "考研二外·现代西班牙都市文化读解",
        "score": 25
      },
      {
        "id": "mock-sprint-final-02-q4",
        "type": "grammar",
        "questionText": "【考研二外全真模拟·让步从句】\"Por muy difícil que ________ (parecer) el examen, no debes desanimarte.\"",
        "options": [
          {
            "key": "A",
            "text": "parece"
          },
          {
            "key": "B",
            "text": "parezca"
          },
          {
            "key": "C",
            "text": "parecerá"
          },
          {
            "key": "D",
            "text": "pareció"
          }
        ],
        "correctAnswer": "B",
        "explanation": "【考研二外模拟剖析】：por muy + 形容词 + que（无论多么...）引导高阶让步从句，其从句动词必须强制使用虚拟式 parezca。选 B。",
        "categoryTag": "por muy + adj + que + 虚拟式",
        "score": 25
      }
    ]
  }
];
