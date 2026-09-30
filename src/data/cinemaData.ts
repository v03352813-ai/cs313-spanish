/**
 * 西班牙与拉美经典影视原声名场面精听切片库 (Cinéma y Series en Español)
 * 涵盖 30 部西语影史与拉美传世经典、Netflix全球冠军神剧名场面原声对白与名师考点精析
 * 每周五持续扩充自动同步更新
 */

export interface CinemaScene {
  id: string;
  movieTitle: string;
  spanishTitle: string;
  year: number;
  director: string;
  genre: string; // 治愈温情 | 传奇罪案 | 悬疑烧脑 | 青春生活 | 拉美魔幻 | 人生哲理
  levelTag: string; // A1-A2入门 | B1进阶 | B2高阶 | 考研高频
  coverImage: string;
  tag: string;
  audioDuration: string;
  sceneSummary: string;
  isFreePreview?: boolean;
  dialogues: {
    character: string;
    es: string;
    zh: string;
    keyPoints?: string;
  }[];
  vocabulary: {
    word: string;
    meaning: string;
  }[];
}

export const SPANISH_CINEMA_LIST: CinemaScene[] = [
  {
    "id": "film_papel",
    "movieTitle": "纸钞屋",
    "spanishTitle": "La Casa de Papel",
    "year": 2017,
    "director": "Álex Pina",
    "genre": "传奇罪案",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    "tag": "Netflix 西语全球冠军神剧 · 谈判的终极心理战",
    "audioDuration": "02:15",
    "isFreePreview": true,
    "sceneSummary": "西班牙皇家造币厂世纪劫案，红连体衣与达利面具下的智谋对决。对白充满精密逻辑、条件从句与坚毅意志表达。",
    "dialogues": [
      {
        "character": "El Profesor (教授)",
        "es": "La nostalgia es una debilidad. Si algo sale mal, no improvisamos: seguimos el plan al pie de la letra.",
        "zh": "怀旧是一种软弱。如果出了意外，我们绝不盲目即兴发挥：必须不折不扣地严格执行原定计划。",
        "keyPoints": "条件从句 si + 直陈式现在时 sale，主句紧随直陈式 seguimos，表达铁律般的绝对执行；成语 al pie de la letra (严格照办、字面不差地)。"
      },
      {
        "character": "Tokio (东京)",
        "es": "Al final, el amor es un buen motivo para que todas las cosas salgan mal.",
        "zh": "归根结底，爱总能成为让所有事情都搞砸的最好借口。",
        "keyPoints": "para que + 虚拟式现在时 salgan (salir变位)，表示导致某种结果的目的与倾斜性；al final 表达总结定论。"
      },
      {
        "character": "Berlín (柏林)",
        "es": "La muerte puede ser la mejor oportunidad de tu vida. Porque la libertad solo existe cuando no tienes nada que perder.",
        "zh": "死亡，或许能成为你一生中最华丽的机遇。因为只有当你一无所有、无所顾忌时，真正的自由才会降临。",
        "keyPoints": "情态动词 puede ser 表推测可能性；nada que + 原形动词 (nada que perder 一无所失)。"
      }
    ],
    "vocabulary": [
      {
        "word": "la nostalgia",
        "meaning": "怀旧、思乡之情 (阴性名词)"
      },
      {
        "word": "la debilidad",
        "meaning": "弱点、软弱"
      },
      {
        "word": "improvisar (v.)",
        "meaning": "即兴创作、盲目拼凑"
      },
      {
        "word": "el motivo",
        "meaning": "动机、原因"
      }
    ]
  },
  {
    "id": "film_coco",
    "movieTitle": "寻梦环游记",
    "spanishTitle": "Coco (Edición Latina)",
    "year": 2017,
    "director": "Lee Unkrich",
    "genre": "治愈温情",
    "levelTag": "A1-A2入门",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    "tag": "奥斯卡拉美文化传世经典 · 亡灵节爱与记忆的颂歌",
    "audioDuration": "01:45",
    "isFreePreview": true,
    "sceneSummary": "墨西哥万寿菊铺就的亡灵之桥，爱与记忆的永恒乐章。语言纯澈温润，是初学掌握西语命令式与现在完成时的无上佳作。",
    "dialogues": [
      {
        "character": "Héctor (埃克托)",
        "es": "Recuérdame, hoy me tengo que ir, mi amor. Recuérdame, no llores por favor.",
        "zh": "请记住我，今天我不得不远行，我的挚爱。请记住我，请千万不要哭泣。",
        "keyPoints": "肯定命令式 Recuérdame (代词 me 贴合在动词后并重音移位添加重音符号) vs 否定命令式 no llores (强制使用虚拟式变位！)。"
      },
      {
        "character": "Mamá Coco (可可太婆)",
        "es": "Papá... siempre estuviste en mi corazón. Nunca te olvidé.",
        "zh": "爸爸……你一直都在我的心底深处。我从未把你遗忘。",
        "keyPoints": "简单过去时 estuviste 与 olvidé，叙述过去确凿封存的情感经历；代词宾语 te 置于变位动词之前。"
      },
      {
        "character": "Miguel (米格)",
        "es": "Vive tu momento. Nadie me va a dar el éxito, tengo que salir a buscarlo.",
        "zh": "把握属于你的当下。没有人会把成功拱手送我，我必须主动去追寻它。",
        "keyPoints": "肯定命令式 Vive (vivir 的 tú 变位)；ir a + 不定式 (va a dar) 表达将来计划；tengo que + 不定式表达必须义务。"
      }
    ],
    "vocabulary": [
      {
        "word": "recordar (v.)",
        "meaning": "记住、回忆 (o -> ue 变位)"
      },
      {
        "word": "el corazón",
        "meaning": "心脏、心灵 (阳性以 -ón 结尾)"
      },
      {
        "word": "el éxito",
        "meaning": "成功、成就 (非 exit！)"
      },
      {
        "word": "llorar (v.)",
        "meaning": "哭泣、流泪"
      }
    ]
  },
  {
    "id": "film_contratiempo",
    "movieTitle": "看不见的客人",
    "spanishTitle": "Contratiempo",
    "year": 2016,
    "director": "Oriol Paulo",
    "genre": "悬疑烧脑",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80",
    "tag": "西班牙神级反转密室悬疑 · 辩词与时间悖论的高烈度攻防",
    "audioDuration": "02:30",
    "isFreePreview": true,
    "sceneSummary": "层层剥茧的高智商密室杀人案，女律师与富商长达数小时的高烈度逻辑攻防，DELE B2 听力口语绝佳素材。",
    "dialogues": [
      {
        "character": "Virginia Goodman (女律师)",
        "es": "Para cada problema hay una solución, pero para verla, debes decirme la verdad absoluta sin omitir ningún detalle.",
        "zh": "每一个难题都有其破解之道，但要想看清它，你必须把毫无保留的全部真相告诉我，不得隐瞒任何细节。",
        "keyPoints": "para + 原形动词 verla (代词直接后挂)；无人称动词 hay 表示客观存在；deber + 原形动词表达道德与必然责任。"
      },
      {
        "character": "Adrián Doria (男主)",
        "es": "Si yo hubiera sabido lo que pasaría después, jamás habría aceptado subir a ese coche.",
        "zh": "如果我当初早知道后来会发生什么，我绝对不会答应坐上那辆车。",
        "keyPoints": "DELE B2 核心高阶虚拟式过去完成时 hubiera sabido + 复合条件式 habría aceptado，构成与过去事实相反的高阶假设句！"
      },
      {
        "character": "Virginia Goodman (女律师)",
        "es": "El detalle es lo que marca la diferencia entre la libertad y treinta años de prisión.",
        "zh": "正是细节，决定了无罪自由与三十年铁窗牢狱的天壤之别。",
        "keyPoints": "中性代词结构 lo que 引领从句；marcar la diferencia 经典地道搭配“拉开差距、形成决定性差异”。"
      }
    ],
    "vocabulary": [
      {
        "word": "la solución",
        "meaning": "解决办法、解答"
      },
      {
        "word": "omitir (v.)",
        "meaning": "遗漏、隐瞒、忽略"
      },
      {
        "word": "el detalle",
        "meaning": "细节、细枝末节"
      },
      {
        "word": "la prisión",
        "meaning": "监狱、监禁"
      }
    ]
  },
  {
    "id": "film_elite",
    "movieTitle": "名校风暴",
    "spanishTitle": "Élite",
    "year": 2018,
    "director": "Carlos Montero",
    "genre": "青春生活",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    "tag": "Netflix 西班牙青春悬疑 · 马德里流行俚语与高能对白",
    "audioDuration": "01:50",
    "isFreePreview": true,
    "sceneSummary": "聚焦马德里私立贵族高中的青春秘密，充满年轻人群体地道口语、语气词与快节奏西班牙原声会话。",
    "dialogues": [
      {
        "character": "Guzmán (古斯曼)",
        "es": "No me importa lo que piensen los demás. Solo quiero que me digas la verdad mirándome a los ojos.",
        "zh": "我不在乎别人怎么想。我只想让你看着我的眼睛，亲口把真相告诉我。",
        "keyPoints": "先行词不确定时 lo que 引导从句接虚拟式 piensen；querer que + 虚拟式 digas (decir变位)；副动词 mirándome 表达伴随动作。"
      },
      {
        "character": "Lucrecia (露)",
        "es": "En este juego, el que pestañea, pierde. Y yo nunca bajo la guardia.",
        "zh": "在这场博弈中，谁眨一下眼，谁就输了。而我永远不会放松戒备。",
        "keyPoints": "复合关系代词 el que (……的人)；动词 perder 的靴子音变 (e -> ie)；bajar la guardia 习语“放松警惕”。"
      }
    ],
    "vocabulary": [
      {
        "word": "los demás",
        "meaning": "其他人、其余事物"
      },
      {
        "word": "pestañear (v.)",
        "meaning": "眨眼、眨动"
      },
      {
        "word": "la guardia",
        "meaning": "警惕、警戒"
      }
    ]
  },
  {
    "id": "film_fauno",
    "movieTitle": "潘神的迷宫",
    "spanishTitle": "El laberinto del fauno",
    "year": 2006,
    "director": "Guillermo del Toro",
    "genre": "拉美魔幻",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    "tag": "陀螺导演魔幻现实主义巅峰 · 奥斯卡三项大奖神作",
    "audioDuration": "02:05",
    "isFreePreview": false,
    "sceneSummary": "1944年战后西班牙森林中的童话与残酷现实交织。潘神的预言、地下王国的月光与无畏牺牲的纯洁灵魂。",
    "dialogues": [
      {
        "character": "El Fauno (潘神)",
        "es": "Vos sois la princesa Moanna, hija del rey de los reinos subterráneos. Vuestro espíritu no ha muerto.",
        "zh": "您就是莫安娜公主，地下王国至高君王的女儿。您的灵魂从未泯灭。",
        "keyPoints": "西班牙古雅敬语变位 vos sois 与形容词 vuestro；现在完成时 ha muerto (morir的规则过去分词 muerto)。"
      },
      {
        "character": "Ofelia (奥菲莉亚)",
        "es": "Mi hermano se queda conmigo. No permitiré que le hagáis ningún daño.",
        "zh": "我的弟弟必须留在我身边。我绝不会允许你们伤害他分毫。",
        "keyPoints": "自复动词 quedarse 表留下；permitir que + 虚拟式 hagáis (hacer变位)；ningún 修饰阳性单数名词的短尾现象。"
      }
    ],
    "vocabulary": [
      {
        "word": "el laberinto",
        "meaning": "迷宫"
      },
      {
        "word": "el reino",
        "meaning": "王国、领域"
      },
      {
        "word": "el espíritu",
        "meaning": "精神、灵魂"
      },
      {
        "word": "subterráneo (adj.)",
        "meaning": "地下的、深层的"
      }
    ]
  },
  {
    "id": "film_mar_adentro",
    "movieTitle": "深海长眠",
    "spanishTitle": "Mar adentro",
    "year": 2004,
    "director": "Alejandro Amenábar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    "tag": "哈维尔·巴登威尼斯影帝之作 · 奥斯卡最佳外语片",
    "audioDuration": "02:20",
    "isFreePreview": false,
    "sceneSummary": "关于尊严、爱与生命自由选择的深情篇章。哈维尔·巴登精湛声线演绎加利西亚海岸的深邃独白。",
    "dialogues": [
      {
        "character": "Ramón Sampedro (拉蒙)",
        "es": "Una vida que no es libre no es vida. Cuando uno no puede valerse por sí mismo, la libertad es solo un espejismo.",
        "zh": "没有自由的生命，便称不上真正活过。当一个人无法主宰自身时，自由便只是一场虚妄的海市蜃楼。",
        "keyPoints": "泛指代词 uno 作主语；valerse por sí mismo (依靠自己、自食其力)；espejismo (幻影、海市蜃楼)。"
      },
      {
        "character": "Julia (胡利娅)",
        "es": "El amor de verdad no encadena, Ramón: el amor comprende, acompaña y deja volar.",
        "zh": "真爱从不给人施加镣铐，拉蒙：真爱懂得理解、默默陪伴，并放任灵魂自由飞翔。",
        "keyPoints": "encadenar (套上锁链)；并列动词现在时第三人称单数 (comprende, acompaña y deja volar)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el espejismo",
        "meaning": "海市蜃楼、幻觉"
      },
      {
        "word": "encadenar (v.)",
        "meaning": "套上枷锁、束缚"
      },
      {
        "word": "la dignidad",
        "meaning": "尊严、高贵"
      }
    ]
  },
  {
    "id": "film_secreto",
    "movieTitle": "谜一样的双眼",
    "spanishTitle": "El secreto de sus ojos",
    "year": 2009,
    "director": "Juan José Campanella",
    "genre": "悬疑烧脑",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80",
    "tag": "阿根廷影史奥斯卡巅峰 · 执念与未了情愫",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "布宜诺斯艾利斯二十五载未破的悬案，关于一眼万年的深情与追凶执念。经典足球场长镜头震撼影史。",
    "dialogues": [
      {
        "character": "Sandoval (桑多瓦尔)",
        "es": "El tipo puede cambiar de todo: de cara, de casa, de familia, de novia, de religión... Pero hay una cosa que no puede cambiar: no puede cambiar de pasión.",
        "zh": "一个人可以改变所有的一切：样貌、住处、家庭、女友，甚至信仰……但唯独有一件东西他至死无法改变：那就是他内心的狂热执念。",
        "keyPoints": "cambiar de + 名词 (固定搭配：更换某种状态或属性)；pero hay una cosa que 引出哲学核心题眼。"
      },
      {
        "character": "Benjamín Espósito (男主)",
        "es": "Borrar el pasado no sirve de nada si cada recuerdo sigue ardiendo en el presente.",
        "zh": "如果每一个回忆仍旧在当下熊熊燃烧，那么抹去过去的一切根本无济于事。",
        "keyPoints": "动词不定式 borrar 作主语；no servir de nada (毫无作用、毫无意义)；seguir + 副动词 ardiendo 表达持续动作。"
      }
    ],
    "vocabulary": [
      {
        "word": "la pasión",
        "meaning": "激情、狂热执念"
      },
      {
        "word": "el recuerdo",
        "meaning": "回忆、记忆"
      },
      {
        "word": "arder (v.)",
        "meaning": "燃烧、发光"
      }
    ]
  },
  {
    "id": "film_diarios",
    "movieTitle": "摩托日记",
    "spanishTitle": "Diarios de motocicleta",
    "year": 2004,
    "director": "Walter Salles",
    "genre": "治愈温情",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    "tag": "青年切·格瓦拉南美大陆巡礼 · 青春蜕变公路史诗",
    "audioDuration": "01:55",
    "isFreePreview": false,
    "sceneSummary": "两个医学院青年骑着残破摩托跨越阿根廷、智利与秘鲁的壮丽山川，目光逐渐投向拉美被遗忘的人民与土地。",
    "dialogues": [
      {
        "character": "Ernesto Guevara (切·格瓦拉)",
        "es": "Este viaje no fue solo un recorrido geográfico. Este viaje me cambió para siempre; ya no soy el mismo que partió.",
        "zh": "这次旅行绝不仅仅是一次地理上的漫游。它永远地改变了我；我已不再是当初出发时的那个青年。",
        "keyPoints": "简单过去时 fue 与 cambió；para siempre (永远)；ya no soy el mismo (我已非当初之我)。"
      },
      {
        "character": "Alberto Granado (阿尔贝托)",
        "es": "La tierra es inmensa y hermosa, pero el dolor de nuestra gente no cabe en ningún mapa.",
        "zh": "这片土地浩瀚而壮美，然而我们同胞所承受的苦难，却丈量不进任何一张地图之中。",
        "keyPoints": "inmensa y hermosa 形容词性数配合；动词 caber (容纳、容得下) 不规则变位 cabe。"
      }
    ],
    "vocabulary": [
      {
        "word": "el recorrido",
        "meaning": "路线、行程、游览"
      },
      {
        "word": "inmenso (adj.)",
        "meaning": "巨大的、无垠的"
      },
      {
        "word": "el mapa",
        "meaning": "地图 (阳性名词！以 -a 结尾的特例)"
      }
    ]
  },
  {
    "id": "film_todo_sobre_mi_madre",
    "movieTitle": "关于我母亲的一切",
    "spanishTitle": "Todo sobre mi madre",
    "year": 1999,
    "director": "Pedro Almodóvar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
    "tag": "阿莫多瓦奥斯卡与戛纳双料加冕 · 女性坚韧之魂",
    "audioDuration": "02:15",
    "isFreePreview": false,
    "sceneSummary": "马德里至巴塞罗那的寻根与救赎。阿莫多瓦浓烈饱满的高定色彩，向所有扮演母亲、女演员以及女性的伟大灵魂致敬。",
    "dialogues": [
      {
        "character": "Manuela (曼努埃拉)",
        "es": "Una es más auténtica cuanto más se parece a lo que ha soñado de sí misma.",
        "zh": "一个人越是接近自己梦寐以求的模样，她就越是真实而纯粹。",
        "keyPoints": "cuanto más... más... (越……就越……的级比结构)；parecerse a (与……相像)；lo que ha soñado 关系从句。"
      },
      {
        "character": "Huma Rojo (女演员)",
        "es": "El éxito no tiene ningún sentido si al bajar del escenario no tienes a quién abrazar.",
        "zh": "如果你走下舞台的那一刻，身边没有一个可以相拥入怀的人，那么所有的辉煌成功都毫无意义。",
        "keyPoints": "no tener ningún sentido (毫无意义)；al + 不定式 bajar 表达“一当下……的时候”；a quién + 不定式。"
      }
    ],
    "vocabulary": [
      {
        "word": "auténtico (adj.)",
        "meaning": "真实的、真诚的"
      },
      {
        "word": "el escenario",
        "meaning": "舞台、剧场"
      },
      {
        "word": "abrazar (v.)",
        "meaning": "拥抱、环抱"
      }
    ]
  },
  {
    "id": "film_relatos_salvajes",
    "movieTitle": "荒蛮故事",
    "spanishTitle": "Relatos salvajes",
    "year": 2014,
    "director": "Damián Szifron",
    "genre": "传奇罪案",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    "tag": "戛纳高分黑色幽默讽刺神作 · 失控的人性临界点",
    "audioDuration": "02:00",
    "isFreePreview": false,
    "sceneSummary": "六个关于愤怒、报复与社会规则崩溃的荒诞短篇，将当代人压抑的焦虑与爆发力推至极致，台词极具讽刺张力。",
    "dialogues": [
      {
        "character": "Simón (炸弹狂人)",
        "es": "El sistema no está roto por accidente; está diseñado para que te rindas antes de empezar a protestar.",
        "zh": "这个体制并非偶然失灵；它的设计初衷，本就是为了让你在开口抗议之前就彻底举手投降。",
        "keyPoints": "estar + 过去分词 roto 表状态结果；estar diseñado para que + 虚拟式 rindas (rendirse 变位)。"
      },
      {
        "character": "Romina (新娘)",
        "es": "Vas a tener que mirarme a la cara todos los días y recordar lo que hiciste.",
        "zh": "从今往后，你每天都必须直视我的脸庞，时刻牢记你犯下的背叛。",
        "keyPoints": "ir a tener que + 不定式 (将来必须强制结构)；lo que hiciste (hacer简单过去时变位)。"
      }
    ],
    "vocabulary": [
      {
        "word": "salvaje (adj.)",
        "meaning": "野蛮的、狂野的"
      },
      {
        "word": "el sistema",
        "meaning": "系统、体制 (阳性名词！)"
      },
      {
        "word": "rendirse (v.)",
        "meaning": "投降、放弃"
      }
    ]
  },
  {
    "id": "film_hable_con_ella",
    "movieTitle": "对她说",
    "spanishTitle": "Hable con ella",
    "year": 2002,
    "director": "Pedro Almodóvar",
    "genre": "治愈温情",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=80",
    "tag": "阿莫多瓦奥斯卡最佳原创剧本 · 孤独与灵魂深切倾听",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "两位男士在病房守候昏迷爱人的动人悲歌。阿莫多瓦探索人类心底最幽微的倾听渴望与情感执念。",
    "dialogues": [
      {
        "character": "Benigno (贝尼尼奥)",
        "es": "Hable con ella. Las mujeres agradecen que se las escuche, incluso cuando parecen estar en otro mundo.",
        "zh": "对她说说话吧。女人总是感激有人耐心倾听她们，哪怕她们看起来仿佛身处另一个世界。",
        "keyPoints": "敬语肯定命令式 Hable (hablar 的 usted 变位)；agradecer que + 虚拟式 se las escuche 无人称被动态。"
      },
      {
        "character": "Marco (马可)",
        "es": "A veces, el silencio más profundo es el único modo de no romper lo que aún nos queda.",
        "zh": "有时，最深沉的静默，是守护我们所残存温存的唯一方式。",
        "keyPoints": "最高级结构 el silencio más profundo；lo que aún nos queda 关系从句结构。"
      }
    ],
    "vocabulary": [
      {
        "word": "agradecer (v.)",
        "meaning": "感谢、感激 (zc变位)"
      },
      {
        "word": "el silencio",
        "meaning": "沉默、寂静"
      },
      {
        "word": "profundo (adj.)",
        "meaning": "深刻的、深沉的"
      }
    ]
  },
  {
    "id": "film_roma",
    "movieTitle": "罗马",
    "spanishTitle": "Roma",
    "year": 2018,
    "director": "Alfonso Cuarón",
    "genre": "人生哲理",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    "tag": "阿方索·卡隆奥斯卡三项大奖 · 墨西哥时代记忆黑白史诗",
    "audioDuration": "02:15",
    "isFreePreview": false,
    "sceneSummary": "1970年代墨西哥城中产家庭与年轻原住民女佣克莱奥的命运起伏。浩瀚黑白光影中流淌着深沉的女性母性与隐忍。",
    "dialogues": [
      {
        "character": "Cleo (克莱奥)",
        "es": "No importa lo que pase en la calle, aquí en esta casa los niños tienen que sentirse seguros y amados.",
        "zh": "不论街头正在发生什么动荡，在这座屋檐下，孩子们必须感受到安全与被爱。",
        "keyPoints": "no importa lo que + 虚拟式 pase (pasar虚拟式变位)；sentirse + 形容词 (seguros y amados 性数配合)。"
      },
      {
        "character": "Sofía (索菲娅太太)",
        "es": "Estamos solas. No importa lo que te digan, las mujeres siempre estamos solas en este mundo.",
        "zh": "我们终究是形单影只的。不管外人对你说什么，在这个世界上，女人往往只能独自面对风雨。",
        "keyPoints": "lo que te digan (decir 虚拟式现在时第三人称复数)；estar solas 女性复数形容词一致性。"
      }
    ],
    "vocabulary": [
      {
        "word": "amado (adj.)",
        "meaning": "被爱的、亲爱的"
      },
      {
        "word": "seguro (adj.)",
        "meaning": "安全的、确信的"
      },
      {
        "word": "solitario (adj.)",
        "meaning": "孤独的、单身一人的"
      }
    ]
  },
  {
    "id": "film_hoyo",
    "movieTitle": "饥饿站台",
    "spanishTitle": "El hoyo",
    "year": 2019,
    "director": "Galder Gaztelu-Urrutia",
    "genre": "悬疑烧脑",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    "tag": "现象级反乌托邦人性寓言 · 垂直监狱的生存铁律",
    "audioDuration": "01:50",
    "isFreePreview": false,
    "sceneSummary": "垂直监狱坑道中每天降下的奢华盛宴。上层人的贪婪浪费与下层人的饥饿绝望，逼问人类文明自发团结的极限。",
    "dialogues": [
      {
        "character": "Trimagasi (特里马加西)",
        "es": "Hay tres tipos de personas: los de arriba, los de abajo y los que caen. Es evidente.",
        "zh": "世上只有三种人：处于上层的人、身处底层的人，以及正在坠落的人。这是不言而喻的道理。",
        "keyPoints": "无人称动词 hay；分词与从句省略结构 los de arriba / los de abajo；caer 变位 caen。"
      },
      {
        "character": "Goreng (戈伦)",
        "es": "El cambio no surge de la nada; necesita un símbolo que demuestre que aún somos humanos.",
        "zh": "改变绝不会凭空降临；它需要一个清晰的象征，来证明我们仍旧保有作为人的温良尊严。",
        "keyPoints": "surgir de la nada 习语；necesita un símbolo que + 虚拟式 demuestre (先行词未定时强制接虚拟式)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el hoyo",
        "meaning": "坑洞、深渊"
      },
      {
        "word": "evidente (adj.)",
        "meaning": "明显的、显而易见的"
      },
      {
        "word": "el símbolo",
        "meaning": "象征、标志"
      }
    ]
  },
  {
    "id": "film_mala_educacion",
    "movieTitle": "不良教育",
    "spanishTitle": "La mala educación",
    "year": 2004,
    "director": "Pedro Almodóvar",
    "genre": "传奇罪案",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
    "tag": "阿莫多瓦黑色悬疑巅峰 · 记忆错位与真相迷局",
    "audioDuration": "02:05",
    "isFreePreview": false,
    "sceneSummary": "马德里电影导演与阔别十六年童年好友的重聚。剧本、往事、神父与谋杀，层层嵌套出令人窒息的残酷成长叙事。",
    "dialogues": [
      {
        "character": "Enrique Goded (导演)",
        "es": "El cine no cuenta la verdad, pero a veces consigue revelar mentiras que nadie se atreve a pronunciar.",
        "zh": "电影并不直接复述真相，但它有时却能揭开那些谁也不敢亲口言说的谎言。",
        "keyPoints": "conseguir + 原形动词 (成功做到某事)；atreverse a + 不定式 (敢于做某事)。"
      },
      {
        "character": "Ángel / Juan (胡安)",
        "es": "La pasión más destructiva es aquella que nace disfrazada de inocencia.",
        "zh": "最具摧毁力的狂热，往往是那些乔装打扮成天真无邪模样的欲望。",
        "keyPoints": "指示代词 aquella 代指 la pasión；disfrazada de (伪装成……)。"
      }
    ],
    "vocabulary": [
      {
        "word": "destructivo (adj.)",
        "meaning": "破坏性的、毁灭性的"
      },
      {
        "word": "la mentira",
        "meaning": "谎言"
      },
      {
        "word": "disfrazar (v.)",
        "meaning": "乔装、伪装"
      }
    ]
  },
  {
    "id": "film_espiritu_colmena",
    "movieTitle": "蜂巢幽灵",
    "spanishTitle": "El espíritu de la colmena",
    "year": 1973,
    "director": "Víctor Erice",
    "genre": "人生哲理",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
    "tag": "西班牙影史至高无上殿堂神作 · 战后童年梦境与凝视",
    "audioDuration": "01:45",
    "isFreePreview": false,
    "sceneSummary": "1940年卡斯蒂利亚荒原村落，小女孩安娜看完电影《科学怪人》后，在废弃谷仓追寻神秘“精灵”的诗意史诗。",
    "dialogues": [
      {
        "character": "Isabel (姐姐伊莎贝尔)",
        "es": "Los monstruos no mueren nunca, Ana. Son espíritus que andan por el campo y solo puedes verlos si cierras los ojos.",
        "zh": "怪物是永远不会死去的，安娜。他们是游荡在田野里的精灵，只有当你闭上双眼时，你才能看清他们。",
        "keyPoints": "双重否定 no... nunca；andar por (在……漫步游荡)；si 条件从句 (cierras)。"
      },
      {
        "character": "Ana (小女孩安娜)",
        "es": "Soy Ana... Si eres un amigo, por favor sal y háblame.",
        "zh": "我是安娜……如果你是我的朋友，请你走出来，跟我说说话吧。",
        "keyPoints": "肯定命令式 sal (salir 的 tú 变位特例) 与 háblame (hablar + 宾语代词 me 贴合)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el monstruo",
        "meaning": "怪物、巨兽"
      },
      {
        "word": "el espíritu",
        "meaning": "幽灵、精灵、精神"
      },
      {
        "word": "la colmena",
        "meaning": "蜂巢、蜂箱"
      }
    ]
  },
  {
    "id": "film_narcos",
    "movieTitle": "毒枭",
    "spanishTitle": "Narcos: Medellín",
    "year": 2015,
    "director": "José Padilha",
    "genre": "传奇罪案",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    "tag": "拉美魔幻现实主义史诗 · 麦德林风云与双语博弈",
    "audioDuration": "02:25",
    "isFreePreview": false,
    "sceneSummary": "哥伦比亚麦德林贩毒集团与缉毒局探员长达数年的拉锯对决。拉美浓郁地方方言与高烈度西语博弈。",
    "dialogues": [
      {
        "character": "Pablo Escobar (巴勃罗)",
        "es": "Plata o plomo. Ustedes deciden cómo quieren que termine este negocio.",
        "zh": "要么拿银子，要么吃铅弹。这桩生意究竟该如何收场，全由你们自己做主。",
        "keyPoints": "拉美经典谚语 Plata o plomo；querer que + 虚拟式 termine (terminar变位)。"
      },
      {
        "character": "Javier Peña (探员佩尼亚)",
        "es": "En este país, la línea entre los buenos y los malos se borra más rápido que las huellas en la arena.",
        "zh": "在这个国度，正义与邪恶的边界被抹去的速度，甚至比沙滩上的脚印消逝得还要快。",
        "keyPoints": "se borra 动词自复被动态；级比句型 más... que...；la huella (足迹、指纹)。"
      }
    ],
    "vocabulary": [
      {
        "word": "la plata",
        "meaning": "白银、钱财 (拉美高频)"
      },
      {
        "word": "el plomo",
        "meaning": "铅、铅弹"
      },
      {
        "word": "la huella",
        "meaning": "脚印、痕迹"
      }
    ]
  },
  {
    "id": "film_dolor_y_gloria",
    "movieTitle": "痛苦与荣耀",
    "spanishTitle": "Dolor y gloria",
    "year": 2019,
    "director": "Pedro Almodóvar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
    "tag": "安东尼奥·班德拉斯戛纳影帝 · 自传式艺术救赎",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "年迈患病的电影导演萨尔瓦多回顾一生中的初恋、母亲与创作欲望。班德拉斯洗尽铅华的自省演绎。",
    "dialogues": [
      {
        "character": "Salvador Mallo (导演萨尔瓦多)",
        "es": "Sin el cine, mi vida carece de rumbo. Crear es la única forma que conozco para no enloquecer de dolor.",
        "zh": "离开了电影，我的人生便失去了航向。创作，是我所知道的唯一不至于被病痛逼疯的自救良方。",
        "keyPoints": "carecer de (缺乏、没有)；la única forma que conozco (conocer不规则现在时第一人称)；para no + 不定式。"
      },
      {
        "character": "Jacinta (母亲哈辛塔)",
        "es": "No has sido un buen hijo, Salvador... Pero has sabido mirar el mundo como nadie más supo hacerlo.",
        "zh": "你从来都不是个让人省心的好儿子，萨尔瓦多……但你却懂得用谁也未曾拥有的清澈目光去打量这个世界。",
        "keyPoints": "现在完成时 has sido / has sabido；como nadie más (如同无人能及)；saber + 不定式 表能力经验。"
      }
    ],
    "vocabulary": [
      {
        "word": "carecer (v.)",
        "meaning": "缺乏、短少 (zc变位)"
      },
      {
        "word": "el rumbo",
        "meaning": "方向、航向"
      },
      {
        "word": "enloquecer (v.)",
        "meaning": "发疯、发狂"
      }
    ]
  },
  {
    "id": "film_soledad",
    "movieTitle": "百年孤独",
    "spanishTitle": "Cien años de soledad",
    "year": 2024,
    "director": "Alex García López",
    "genre": "拉美魔幻",
    "levelTag": "考研高频",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    "tag": "马尔克斯诺奖传世丰碑 · 马孔多魔幻百年家族史诗",
    "audioDuration": "02:40",
    "isFreePreview": false,
    "sceneSummary": "布恩迪亚家族七代人在马孔多的兴衰与宿命轮回。西语文学最高开篇第一句的影视化神作。",
    "dialogues": [
      {
        "character": "Narrador (旁白)",
        "es": "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
        "zh": "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
        "keyPoints": "西语世界最著名的文学第一句！había de recordar (haber de + 不定式 表命定将来)；llevó 简单过去时；aquella tarde 指示代词。"
      },
      {
        "character": "Úrsula Iguarán (乌尔苏拉)",
        "es": "El tiempo no pasa, muchacho: da vueltas en redondo.",
        "zh": "时间并不会流逝，孩子：它只是在一个圆圈里不断打转轮回。",
        "keyPoints": "dar vueltas (打转、徘徊)；en redondo (成圆形地、一圈圈地)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el pelotón",
        "meaning": "小队、行刑队"
      },
      {
        "word": "el fusilamiento",
        "meaning": "枪决、枪毙"
      },
      {
        "word": "remoto (adj.)",
        "meaning": "遥远的、偏僻的"
      },
      {
        "word": "el hielo",
        "meaning": "冰、冰块"
      }
    ]
  },
  {
    "id": "film_volver",
    "movieTitle": "回归",
    "spanishTitle": "Volver",
    "year": 2006,
    "director": "Pedro Almodóvar",
    "genre": "治愈温情",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    "tag": "佩内洛普·克鲁兹戛纳影后 · 女性互助与拉曼查故土乡愁",
    "audioDuration": "02:00",
    "isFreePreview": false,
    "sceneSummary": "拉曼查狂风席卷的乡村与马德里平民区。三代女性在秘密、亡魂与相互守护中找到活下去的力量。",
    "dialogues": [
      {
        "character": "Raimunda (雷蒙达)",
        "es": "Las mujeres de este pueblo viven más que los hombres porque sabemos afrontar las tragedias juntas.",
        "zh": "这个镇上的女人总比男人们活得长久，因为我们懂得如何彼此携手共同直面所有的苦难悲剧。",
        "keyPoints": "más que 比较级结构；saber + 不定式 afrontar (懂得直面)；juntas 女性复数副词性用法。"
      },
      {
        "character": "Irene (母亲伊莲娜)",
        "es": "Los fantasmas no lloran, hija. Solo vuelven para pedir perdón a los que dejaron atrás.",
        "zh": "鬼魂是不会哭泣的，女儿。他们重返人间，只为了向那些曾被他们遗留在身后的亲人说一声抱歉。",
        "keyPoints": "volver para + 不定式；pedir perdón a (向某人请求原谅)；los que dejaron atrás (dejaron 简单过去时)。"
      }
    ],
    "vocabulary": [
      {
        "word": "afrontar (v.)",
        "meaning": "直面、对抗"
      },
      {
        "word": "el fantasma",
        "meaning": "鬼魂、幽灵 (阳性名词！)"
      },
      {
        "word": "la tragedia",
        "meaning": "悲剧、灾难"
      }
    ]
  },
  {
    "id": "film_julieta",
    "movieTitle": "茱丽叶塔",
    "spanishTitle": "Julieta",
    "year": 2016,
    "director": "Pedro Almodóvar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
    "tag": "阿莫多瓦改编诺奖门罗小说 · 母女宿命疏离与负疚之海",
    "audioDuration": "01:55",
    "isFreePreview": false,
    "sceneSummary": "一位母亲在女儿不辞而别十二年后的漫长追忆。关于负疚感如何像病毒般在爱人之间悄然蔓延的克制杰作。",
    "dialogues": [
      {
        "character": "Julieta (中年茱丽叶塔)",
        "es": "La culpa es un veneno silencioso: cuando entra en una familia, contamina todo lo que toca sin dejar rastro.",
        "zh": "内疚是一剂无声的剧毒：一旦渗入一个家庭，它便会在不留任何痕迹之间，污染它所触及的一切。",
        "keyPoints": "contamina todo lo que toca (关系从句)；sin + 原形动词 dejar (没有留下)。"
      },
      {
        "character": "Xoan (渔民索安)",
        "es": "El mar no perdona errores, pero te enseña a aceptar que las tormentas forman parte de la travesía.",
        "zh": "大海从不宽恕任何差错，但它却教会你坦然接受：狂风暴雨本就是这趟漫长航程中不可分割的一部分。",
        "keyPoints": "enseñar a + 不定式 aceptar；formar parte de (构成……的一部分)。"
      }
    ],
    "vocabulary": [
      {
        "word": "la culpa",
        "meaning": "内疚、过错"
      },
      {
        "word": "el veneno",
        "meaning": "毒药、毒素"
      },
      {
        "word": "la travesía",
        "meaning": "航程、长途旅行"
      }
    ]
  },
  {
    "id": "film_durante_la_tormenta",
    "movieTitle": "海市蜃楼",
    "spanishTitle": "Durante la tormenta",
    "year": 2018,
    "director": "Oriol Paulo",
    "genre": "悬疑烧脑",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80",
    "tag": "《看不见的客人》导演时空悬疑力作 · 蝴蝶效应与母爱救赎",
    "audioDuration": "02:20",
    "isFreePreview": false,
    "sceneSummary": "二十五年一遇的暴风雨使旧电视机联通时空。拯救了一个素昧平生的男孩，却导致自己的女儿凭空消失。",
    "dialogues": [
      {
        "character": "Vera Roy (女主薇拉)",
        "es": "No me importa la realidad que haya cambiado. Mi hija existió, y voy a mover el cielo y la tierra para recuperarla.",
        "zh": "我不在乎现实被篡改成什么模样。我的女儿真真切切存在过，即便翻江倒海，我也一定要把她找回来。",
        "keyPoints": "la realidad que haya cambiado (虚拟式现在完成时)；mover cielo y tierra 经典成语“倾尽全力、翻天覆地”。"
      },
      {
        "character": "Inspector Leyra (督察雷拉)",
        "es": "Cada decisión que tomamos en el pasado crea un laberinto infinito del que rara vez podemos escapar.",
        "zh": "我们在过往岁月中所作出的每一个微小抉择，都会筑起一座无穷无尽的迷宫，令人几乎无法脱身逃离。",
        "keyPoints": "cada decisión que tomamos (直陈式现在时)；del que (带定冠词的关系代词引出介词短语)；rara vez (罕见、极少)。"
      }
    ],
    "vocabulary": [
      {
        "word": "la tormenta",
        "meaning": "暴风雨、风暴"
      },
      {
        "word": "recuperar (v.)",
        "meaning": "恢复、找回"
      },
      {
        "word": "infinito (adj.)",
        "meaning": "无限的、无穷的"
      }
    ]
  },
  {
    "id": "film_cara_oculta",
    "movieTitle": "黑暗面",
    "spanishTitle": "La cara oculta",
    "year": 2011,
    "director": "Andrés Baiz",
    "genre": "悬疑烧脑",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80",
    "tag": "哥伦比亚密室惊悚反转神作 · 人性经不起刻意试探",
    "audioDuration": "01:50",
    "isFreePreview": false,
    "sceneSummary": "交响乐团指挥的新女友入住神秘别墅，却在洗手池与镜面后隐约听到阵阵求救敲击声。人性的试探反噬自身。",
    "dialogues": [
      {
        "character": "Belén (贝伦)",
        "es": "Quería probar si de verdad me amaba... Y ahora estoy atrapada en mi propia trampa.",
        "zh": "我原本只是想测试他是否真正深爱着我……可如今，我却亲手把自己困死在自己设下的陷阱之中。",
        "keyPoints": "probar si (测试是否……)；estar atrapada (estar + 过去分词表被动状态，阴性配合)；la trampa (陷阱)。"
      },
      {
        "character": "Fabiana (法比安娜)",
        "es": "A veces es mejor no hacer preguntas cuyas respuestas no estamos preparados para escuchar.",
        "zh": "有时，最好不要去追问那些我们尚未做好心理准备去聆听答案的问题。",
        "keyPoints": "cuyas respostas (物主关系代词 cuyo 根据修饰名词进行性数配合：cuyas 阴性复数)；estar preparado para (准备好做……)。"
      }
    ],
    "vocabulary": [
      {
        "word": "oculto (adj.)",
        "meaning": "隐藏的、隐秘的"
      },
      {
        "word": "la trampa",
        "meaning": "陷阱、圈套"
      },
      {
        "word": "atrapar (v.)",
        "meaning": "抓捕、困住"
      }
    ]
  },
  {
    "id": "film_ciudadano_ilustre",
    "movieTitle": "杰出公民",
    "spanishTitle": "El ciudadano ilustre",
    "year": 2016,
    "director": "Gastón Duprat",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    "tag": "威尼斯电影节最佳男演员 · 诺贝尔文学奖作家的故乡讽刺荒诞剧",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "旅居欧洲的诺贝尔文学奖得主曼托瓦尼荣归阿根廷故乡小镇，原本温情的授奖之旅却演变为荒谬勒索与人性丑态的闹剧。",
    "dialogues": [
      {
        "character": "Daniel Mantovani (作家曼托瓦尼)",
        "es": "El premio Nobel no consagra a un autor: lo neutraliza. Es el entierro más solemne y elegante que la cultura puede pagar.",
        "zh": "诺贝尔奖并不是在加冕一个作家：它是在阉割他。这是整个文化体制所能买得起的最庄严而体面的葬礼。",
        "keyPoints": "neutralizar (中和、使失效)；el entierro más solemne (最高级结构：最庄严肃穆的下葬)。"
      },
      {
        "character": "Daniel Mantovani (作家曼托瓦尼)",
        "es": "La mediocridad odia la excelencia porque le recuerda exactamente todo lo que nunca podrá ser.",
        "zh": "平庸之所以憎恨卓越，是因为卓越每时每刻都在无情提醒它：它这一辈子永远无法成为的模样。",
        "keyPoints": "间接宾语代词 le 代指 la mediocridad；todo lo que nunca podrá ser 复合条件关系从句。"
      }
    ],
    "vocabulary": [
      {
        "word": "ilustre (adj.)",
        "meaning": "杰出的、尊贵的"
      },
      {
        "word": "la mediocridad",
        "meaning": "平庸、平庸之辈"
      },
      {
        "word": "consagrar (v.)",
        "meaning": "加冕、祝圣、确认地位"
      }
    ]
  },
  {
    "id": "film_angel",
    "movieTitle": "黑色天使",
    "spanishTitle": "El ángel",
    "year": 2018,
    "director": "Luis Ortega",
    "genre": "传奇罪案",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    "tag": "阿根廷七十年代真实连环大盗传记 · 金发天使面孔下的虚无狂欢",
    "audioDuration": "01:55",
    "isFreePreview": false,
    "sceneSummary": "1971年布宜诺斯艾利斯，拥有天使般卷发与面孔的十七岁少年卡洛斯，以一种近乎艺术表演的游戏心态肆意偷盗与杀戮。",
    "dialogues": [
      {
        "character": "Carlos (卡洛斯)",
        "es": "El mundo le pertenece a quien tiene la audacia de tomarlo sin pedir permiso.",
        "zh": "这个世界只属于那些胆敢不经任何人许可、就伸手将其据为己有的人。",
        "keyPoints": "pertenecer a (属于……)；a quien tiene la audacia de + 不定式 (敢于……的人)；sin + 不定式 pedir。"
      },
      {
        "character": "Ramón (同伙拉蒙)",
        "es": "Tú no robas por necesidad, Carlos. Tú robas porque te gusta mirar cómo la gente pierde el control.",
        "zh": "你偷东西根本不是因为缺钱，卡洛斯。你偷，只是因为你陶醉于看着人们在失去控制时惊慌失措的样子。",
        "keyPoints": "robar por necesidad (因贫困而盗窃)；te gusta mirar cómo + 从句。"
      }
    ],
    "vocabulary": [
      {
        "word": "la audacia",
        "meaning": "大胆、魄力"
      },
      {
        "word": "pertenecer (v.)",
        "meaning": "属于 (zc变位)"
      },
      {
        "word": "el permiso",
        "meaning": "许可、准许"
      }
    ]
  },
  {
    "id": "film_babel",
    "movieTitle": "通天塔",
    "spanishTitle": "Babel",
    "year": 2006,
    "director": "Alejandro G. Iñárritu",
    "genre": "人生哲理",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    "tag": "冈萨雷斯·伊尼亚里图横跨四国史诗 · 语言隔阂与人类悲欢相通",
    "audioDuration": "02:15",
    "isFreePreview": false,
    "sceneSummary": "摩洛哥荒漠中的一声枪响，如蝴蝶翅膀般震动了美国夫妇、墨西哥保姆与日本聋哑少女的人生轨道。",
    "dialogues": [
      {
        "character": "Amelia (墨西哥保姆阿米莉亚)",
        "es": "Solo quería asistir a la boda de mi hijo... ¿Por qué una frontera tiene que convertir a una madre en una criminal?",
        "zh": "我只是想赶去参加我亲生儿子的婚礼……为什么仅仅一道国境线，就必须把一位母亲逼成罪犯？",
        "keyPoints": "querer + 原形动词 asistir a (参加)；convertir en (把……转变成……)；la frontera (国境线)。"
      },
      {
        "character": "Santiago (侄子圣地亚哥)",
        "es": "El miedo es el peor consejero cuando estás lejos de casa. Solo respira y confía.",
        "zh": "当你远离故土家园时，恐惧永远是最糟糕的谋士。深呼吸，试着去相信。",
        "keyPoints": "el peor consejero (最糟糕的参谋)；confiar (信任、相信) 肯定命令式 confía。"
      }
    ],
    "vocabulary": [
      {
        "word": "la frontera",
        "meaning": "边界、边境"
      },
      {
        "word": "el consejero",
        "meaning": "顾问、谋士"
      },
      {
        "word": "asistir (v.)",
        "meaning": "出席、参加 (+ a)"
      }
    ]
  },
  {
    "id": "film_amores_perros",
    "movieTitle": "爱情是狗娘",
    "spanishTitle": "Amores perros",
    "year": 2000,
    "director": "Alejandro G. Iñárritu",
    "genre": "传奇罪案",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    "tag": "墨西哥新浪潮开山传世神作 · 三段车祸交织的野性命运剧场",
    "audioDuration": "02:20",
    "isFreePreview": false,
    "sceneSummary": "墨西哥城一场惨烈车祸串联起地下斗狗少年、名模与流浪杀手老头的三段人生。粗粝写实与深邃命运哲思。",
    "dialogues": [
      {
        "character": "Octavio (奥克塔维奥)",
        "es": "Si quieres hacer a Dios reír, cuéntale tus planes. Creemos que mandamos sobre el destino, pero somos solo hojas al viento.",
        "zh": "如果你想让上帝发笑，就把你的宏图大计讲给他听。我们总以为自己在主宰命运，其实我们不过是风中的落叶。",
        "keyPoints": "拉美经典名言；hacer a Dios reír (使动结构)；mandar sobre (统率、主宰)；al viento (迎风)。"
      },
      {
        "character": "El Chivo (流浪杀手老头)",
        "es": "El amor nos hace vulnerables, pero es lo único que nos salva de convertirnos en bestias.",
        "zh": "爱确实让我们变得脆弱不堪，但它也是唯一能拯救我们、免于让我们沦为野兽的最后依靠。",
        "keyPoints": "hacer + 形容词 vulnerables；lo único que nos salva (定语从句)；convertirse en bestias (蜕变为兽)。"
      }
    ],
    "vocabulary": [
      {
        "word": "vulnerable (adj.)",
        "meaning": "脆弱的、易受伤害的"
      },
      {
        "word": "la bestia",
        "meaning": "野兽、牲畜"
      },
      {
        "word": "el destino",
        "meaning": "命运、终点"
      }
    ]
  },
  {
    "id": "film_como_agua",
    "movieTitle": "巧克力情人",
    "spanishTitle": "Como agua para chocolate",
    "year": 1992,
    "director": "Alfonso Arau",
    "genre": "拉美魔幻",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
    "tag": "墨西哥美食魔幻现实主义先驱 · 食谱中沸腾的爱欲与家族诅咒",
    "audioDuration": "01:50",
    "isFreePreview": false,
    "sceneSummary": "小女儿蒂塔因家族陈规不能出嫁，只能将自己炽热如火的爱欲与悲伤融入烹饪之中，品尝者皆受魔法感染。",
    "dialogues": [
      {
        "character": "Tita (蒂塔)",
        "es": "Cada persona debe descubrir cuáles son sus propios detonadores para encender la chispa interior del alma.",
        "zh": "每个人都必须去亲自探寻，究竟什么才是能够点燃自己灵魂深处微光火花的真正引信。",
        "keyPoints": "deber + 不定式 descubrir；cuáles son (特殊疑问从句)；encender la chispa (点燃火花)。"
      },
      {
        "character": "Pedro (佩德罗)",
        "es": "La distancia es solo una ilusión cuando dos almas están unidas por el mismo calor.",
        "zh": "当两个灵魂被同一份炽热温存紧紧维系在一起时，彼此间的空间距离便只是一场幻觉罢了。",
        "keyPoints": "la distancia es solo una ilusión；unidas por el mismo calor (过去分词形容词化，与 almas 阴性复数配合)。"
      }
    ],
    "vocabulary": [
      {
        "word": "la chispa",
        "meaning": "火花、火星"
      },
      {
        "word": "encender (v.)",
        "meaning": "点燃、点亮 (e->ie)"
      },
      {
        "word": "el detonador",
        "meaning": "引信、雷管、起爆器"
      }
    ]
  },
  {
    "id": "film_madres_paralelas",
    "movieTitle": "平行母亲",
    "spanishTitle": "Madres paralelas",
    "year": 2021,
    "director": "Pedro Almodóvar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
    "tag": "阿莫多瓦历史寻根与单亲母亲命运交织 · 威尼斯最佳女演员",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "妇产科病房偶遇的两位单亲母亲，因婴儿抱错与西班牙内战集体坟墓开挖而紧密交织在一起的沉痛篇章。",
    "dialogues": [
      {
        "character": "Janis (雅尼斯)",
        "es": "La historia no se puede enterrar para siempre. Los pueblos que no conocen su pasado están condenados a repetirlo.",
        "zh": "历史是永远无法被掩埋抹煞的。凡是不愿正视自身过往历史的民族，注定将一次次重蹈覆辙。",
        "keyPoints": "se puede enterrar (被动态)；estar condenado a + 不定式 (注定要做……)；repetirlo 代词后贴合。"
      },
      {
        "character": "Ana (年轻母亲安娜)",
        "es": "Ser madre me enseñó que la verdad siempre duele al principio, pero es lo único que nos hace libres.",
        "zh": "成为母亲教会了我：真相在刚揭开时固然让人痛苦难忍，但它却是唯一能让我们获得解脱与自由的钥匙。",
        "keyPoints": "ser madre 动名词作主语；doler (o->ue 变位：duele)；hacer libres (使人自由)。"
      }
    ],
    "vocabulary": [
      {
        "word": "enterrar (v.)",
        "meaning": "埋葬、掩埋 (e->ie)"
      },
      {
        "word": "condenado (adj.)",
        "meaning": "注定的、被判刑的"
      },
      {
        "word": "paralelo (adj.)",
        "meaning": "平行的、并列的"
      }
    ]
  },
  {
    "id": "film_voz_dormida",
    "movieTitle": "沉睡的声音",
    "spanishTitle": "La voz dormida",
    "year": 2011,
    "director": "Benito Zambrano",
    "genre": "传奇罪案",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80",
    "tag": "戈雅奖获奖西班牙内战女性抗争史诗 · 铁窗背后的信念歌声",
    "audioDuration": "02:00",
    "isFreePreview": false,
    "sceneSummary": "战后马德里文塔斯女子监狱中，女性政治犯在残酷迫害下守护新生命与尊严的感人篇章。",
    "dialogues": [
      {
        "character": "Hortensia (奥尔滕西亚)",
        "es": "Aunque nos quiten la vida, jamás podrán callar la voz de la dignidad humana que llevamos dentro.",
        "zh": "即便他们夺去我们的肉体生命，他们也至死无法扑灭我们深藏心底的人类尊严之声。",
        "keyPoints": "aunque + 虚拟式 quiten (即便……表假设或未发生)；jamás podrán callar (绝不能使之沉默)。"
      },
      {
        "character": "Pepita (妹妹佩皮塔)",
        "es": "El coraje no es la ausencia de miedo, sino la decisión de seguir adelante a pesar de temblar.",
        "zh": "真正的勇气绝非毫无恐惧，而是在身体即便止不住颤抖时，依然毅然决然迈步向前的信念。",
        "keyPoints": "no... sino... (不是……而是……)；a pesar de + 不定式 temblar (尽管……)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el coraje",
        "meaning": "勇气、魄力"
      },
      {
        "word": "la ausencia",
        "meaning": "缺乏、不在"
      },
      {
        "word": "callar (v.)",
        "meaning": "闭嘴、使沉默"
      }
    ]
  },
  {
    "id": "film_don_quijote",
    "movieTitle": "堂吉诃德",
    "spanishTitle": "Don Quijote de la Mancha",
    "year": 2002,
    "director": "Manuel Gutiérrez Aragón",
    "genre": "人生哲理",
    "levelTag": "考研高频",
    "coverImage": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
    "tag": "塞万提斯世界文学丰碑 · 骑士梦想与理想主义传世圣经",
    "audioDuration": "02:30",
    "isFreePreview": false,
    "sceneSummary": "拉曼查荒原上挑战巨型风车的疯癫游侠骑士。四百年来全人类理想主义与现实碰撞的最伟大寓言。",
    "dialogues": [
      {
        "character": "Don Quijote (堂吉诃德)",
        "es": "Mire vuestra merced que aquellos que allí se parecen no son gigantes, sino molinos de viento.",
        "zh": "大人，您请瞧仔细了：那边影影绰绰耸立着的并不是凶恶的巨人，只是一座座风车罢了。",
        "keyPoints": "桑丘经典台词；vuestra merced (古代敬语：阁下/大人)；no son gigantes sino... (并非……而是……)。"
      },
      {
        "character": "Don Quijote (堂吉诃德)",
        "es": "Cambiar el mundo, amigo Sancho, que no es locura ni utopía, ¡sino justicia!",
        "zh": "改变这个世界，桑丘吾友，这绝非什么疯癫妄想，亦非虚无乌托邦，而是人间至高之正义！",
        "keyPoints": "塞万提斯传世千古名句；cambiar el mundo 作主语；locura (疯癫)；la justicia (正义)。"
      }
    ],
    "vocabulary": [
      {
        "word": "el gigante",
        "meaning": "巨人、庞然大物"
      },
      {
        "word": "el molino",
        "meaning": "风车、磨坊"
      },
      {
        "word": "la locura",
        "meaning": "疯癫、疯狂"
      },
      {
        "word": "la justicia",
        "meaning": "正义、公正"
      }
    ]
  },
  {
    "id": "film_secret_eyes",
    "movieTitle": "谜一样的双眼",
    "spanishTitle": "El secreto de sus ojos",
    "year": 2009,
    "director": "Juan José Campanella",
    "genre": "悬疑烧脑",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
    "tag": "阿根廷奥斯卡最佳外语片 · 跨越25年的执念与爱恋",
    "audioDuration": "02:10",
    "isFreePreview": false,
    "sceneSummary": "退休法院调查员本哈明试图写一本小说，追溯二十五年前未解的奸杀悬案。在火车站台与爱人的告别，浓缩了阿根廷现代文学的隐喻与西班牙语虚拟式的终极运用。",
    "dialogues": [
      {
        "character": "Espósito",
        "es": "Un hombre puede cambiar de todo: de cara, de casa, de familia, de novia, de religión... Pero hay una cosa que no puede cambiar: no puede cambiar de pasión.",
        "zh": "一个人可以改变一切：换张脸，换栋房子，换个家庭，换个女友，换个信仰……但有一件事他永远无法改变：他无法改变自己的热爱与执念。",
        "keyPoints": "cambiar de + 名词: 改变/换（如 cambiar de idea, cambiar de opinión）；pasión: 热情/执念。"
      },
      {
        "character": "Irene",
        "es": "Si sigues mirando hacia atrás, te vas a chocar con lo que tienes adelante.",
        "zh": "如果你总是频频回头张望，你终将撞上迎面而来的未来。",
        "keyPoints": "seguir + 副动词 (mirando): 持续做某事；chocarse con: 与……相撞；lo que: 中性关系代词“所……的事”。"
      }
    ],
    "vocabulary": [
      {
        "word": "pasión (f.)",
        "meaning": "激情 / 挚爱 / 执念"
      },
      {
        "word": "obsesión (f.)",
        "meaning": "痴迷 / 执念 / 困扰"
      },
      {
        "word": "justicia (f.)",
        "meaning": "正义 / 司法 / 公正"
      },
      {
        "word": "mirar hacia atrás",
        "meaning": "频频回顾 / 留恋过去"
      }
    ]
  },
  {
    "id": "film_roma",
    "movieTitle": "罗马",
    "spanishTitle": "Roma",
    "year": 2018,
    "director": "Alfonso Cuarón",
    "genre": "人生哲理",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop&q=80",
    "tag": "威尼斯金狮奖与奥斯卡最佳外语片 · 墨西哥黑白诗史",
    "audioDuration": "01:50",
    "isFreePreview": false,
    "sceneSummary": "70年代初墨西哥城罗马区，年轻原住民女佣克莱奥在动荡社会与家庭破碎中，用坚韧与爱托举起一个中产阶级家庭的孩子们。",
    "dialogues": [
      {
        "character": "Cleo",
        "es": "No importa lo que digan, siempre estamos solas las mujeres en este mundo.",
        "zh": "不论别人怎么说，在这个世界上，女人最终都是孤身奋战的。",
        "keyPoints": "no importa lo que + 虚拟式 (digan): 不管他们说什么；虚拟现在时表让步。"
      },
      {
        "character": "Sofía",
        "es": "Las olas nos asustan, pero aprendemos a nadar juntas.",
        "zh": "海浪固然令我们恐惧，但我们学着一起游过去。",
        "keyPoints": "asustar: 使……害怕（类似于 gustar 的使动用法）；aprender a + 动词原形: 学会做某事。"
      }
    ],
    "vocabulary": [
      {
        "word": "mar (m./f.)",
        "meaning": "大海 / 海洋"
      },
      {
        "word": "ola (f.)",
        "meaning": "海浪 / 波涛"
      },
      {
        "word": "abrazar (v.)",
        "meaning": "拥抱 / 环抱"
      },
      {
        "word": "valiente (adj.)",
        "meaning": "勇敢的 / 坚毅的"
      }
    ]
  },
  {
    "id": "film_open_eyes",
    "movieTitle": "睁开你的双眼",
    "spanishTitle": "Abre los ojos",
    "year": 1997,
    "director": "Alejandro Amenábar",
    "genre": "悬疑烧脑",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    "tag": "阿梅纳瓦尔惊世科幻悬疑神作 · 好莱坞《香草天空》原作",
    "audioDuration": "02:05",
    "isFreePreview": false,
    "sceneSummary": "英俊富有的塞萨尔在一场车祸后毁容，随后现实与梦境开始不可逆地扭曲交错。影片开场马德里空无一人的格兰大道与终局的呼唤，构成了西语影史最震撼的视听图腾。",
    "dialogues": [
      {
        "character": "César",
        "es": "¿Cómo sabes si estás despierto o si sigues soñando dentro de una pesadilla?",
        "zh": "你怎么知道你究竟是清醒着的，还是依然陷在一场噩梦的深渊里做梦？",
        "keyPoints": "estar despierto: 处于清醒状态；seguir + 副动词: 持续处于……中；pesadilla: 噩梦。"
      },
      {
        "character": "Voz de Sofía",
        "es": "Abre los ojos... Es hora de despertar.",
        "zh": "睁开你的双眼吧……该是醒来的时候了。",
        "keyPoints": "abre: abrir 对 tú 的肯定祈使式；es hora de + 原形动词: 是做某事的时候了。"
      }
    ],
    "vocabulary": [
      {
        "word": "despertar (v.)",
        "meaning": "醒来 / 唤醒"
      },
      {
        "word": "pesadilla (f.)",
        "meaning": "噩梦 / 梦魇"
      },
      {
        "word": "realidad (f.)",
        "meaning": "现实 / 真实"
      },
      {
        "word": "rostro (m.)",
        "meaning": "容貌 / 面孔"
      }
    ]
  },
  {
    "id": "film_mar_adentro",
    "movieTitle": "深海长眠",
    "spanishTitle": "Mar adentro",
    "year": 2004,
    "director": "Alejandro Amenábar",
    "genre": "人生哲理",
    "levelTag": "B2高阶",
    "coverImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    "tag": "威尼斯影帝与奥斯卡最佳外语片 · 哈维尔·巴登传世生命之歌",
    "audioDuration": "02:15",
    "isFreePreview": false,
    "sceneSummary": "瘫痪三十年的雷蒙在加利西亚海边为尊严与自由而抗争，他通过文学与想象让灵魂飞越高山与大海。加利西亚海风与深沉的独白，是西班牙语诗歌修辞与高阶表达的巅峰典范。",
    "dialogues": [
      {
        "character": "Ramón",
        "es": "Cuando uno no puede escapar y depende constantemente de los demás, aprende a llorar sonriendo.",
        "zh": "当一个人插翅难飞且无时无刻不依赖他人时，他就学会了如何微笑着流泪。",
        "keyPoints": "depender de: 依赖于；aprende a + 原形: 学会；sonriendo: sonreír的副动词，表伴随方式。"
      },
      {
        "character": "Julia",
        "es": "El mar me da la vida, y el mar me la quita. Pero en el fondo del mar nunca hay ruido.",
        "zh": "大海赐予我生命，大海又将它剥夺。但在深海之底，永远没有任何喧嚣。",
        "keyPoints": "dar la vida / quitar la vida: 赋予生命 / 夺走生命；双重宾格代词 me la quita。"
      }
    ],
    "vocabulary": [
      {
        "word": "libertad (f.)",
        "meaning": "自由"
      },
      {
        "word": "dignidad (f.)",
        "meaning": "尊严 / 尊贵"
      },
      {
        "word": "escapar (v.)",
        "meaning": "逃离 / 摆脱"
      },
      {
        "word": "horizonte (m.)",
        "meaning": "地平线 / 视野"
      }
    ]
  },
  {
    "id": "film_relatos_salvajes",
    "movieTitle": "荒蛮故事",
    "spanishTitle": "Relatos salvajes",
    "year": 2014,
    "director": "Damián Szifron",
    "genre": "传奇罪案",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&auto=format&fit=crop&q=80",
    "tag": "戛纳电影节金棕榈提名 · 黑色幽默的极致复仇狂欢",
    "audioDuration": "01:55",
    "isFreePreview": false,
    "sceneSummary": "失控的婚礼、路怒的绝杀、爆破工程师的复仇……六个荒诞而充满张力的独立短篇，生动展示了阿根廷口语与快节奏争辩在日常生活中的极致表达。",
    "dialogues": [
      {
        "character": "Simón",
        "es": "Todo el mundo tiene un límite. Si me empujas una vez más, vas a conocer el mío.",
        "zh": "每个人都有自己的底线。如果你再把我往前逼一步，你就会见识到我的底线在哪。",
        "keyPoints": "tener un límite: 有底线/界限；si + 陈述现在时 (empujas) 表条件句；el mío: 物主代词（我的底线）。"
      },
      {
        "character": "Romina",
        "es": "No voy a fingir que nada ha pasado. Esta noche vamos a bailar sobre las ruinas.",
        "zh": "我绝不会假装什么都没发生过。今夜，我们就踩在这片废墟之上起舞。",
        "keyPoints": "fingir que + 虚拟式/陈述式: 假装……；bailar sobre las ruinas: 在废墟上起舞（象征决绝）。"
      }
    ],
    "vocabulary": [
      {
        "word": "límite (m.)",
        "meaning": "极限 / 界限 / 底线"
      },
      {
        "word": "salvaje (adj.)",
        "meaning": "荒蛮的 / 野性的"
      },
      {
        "word": "fingir (v.)",
        "meaning": "假装 / 伪装"
      },
      {
        "word": "ruinas (f.pl.)",
        "meaning": "废墟 / 残骸"
      }
    ]
  },
  {
    "id": "film_machuca",
    "movieTitle": "马丘卡",
    "spanishTitle": "Machuca",
    "year": 2004,
    "director": "Andrés Wood",
    "genre": "青春生活",
    "levelTag": "B1进阶",
    "coverImage": "https://images.unsplash.com/photo-1471286174890-9c112ffca564?w=800&auto=format&fit=crop&q=80",
    "tag": "智利影史殿堂级成长经典 · 动荡时代两少年的纯真友谊",
    "audioDuration": "01:45",
    "isFreePreview": false,
    "sceneSummary": "1973年智利圣地亚哥，在私立贵族学校神父的破格实验下，贫民窟男孩马丘卡与富裕少年贡萨洛结为挚友。在社会动荡的暴风雨前夕，友谊成了最纯净的避风港。",
    "dialogues": [
      {
        "character": "Gonzalo",
        "es": "Mírame a la cara. ¿Crees que por tener zapatos diferentes no podemos ser amigos?",
        "zh": "看着我的脸。你难道真以为就因为我们穿的鞋子不一样，我们俩就不能成为朋友吗？",
        "keyPoints": "mírame: mirar 的祈使式 + me（看着我）；por + 原形动词 (tener) 表原因；amigo: 朋友。"
      },
      {
        "character": "Machuca",
        "es": "No son los zapatos, Gonzalo. Es el mundo entero que nos está separando.",
        "zh": "并不是鞋子的问题，贡萨洛。是这整个世界在硬生生地把我们拆散开来。",
        "keyPoints": "no son A, es B: 不是A而是B；estar + 副动词 (separando) 表进行时态。"
      }
    ],
    "vocabulary": [
      {
        "word": "amistad (f.)",
        "meaning": "友谊 / 情谊"
      },
      {
        "word": "separar (v.)",
        "meaning": "分开 / 隔开 / 拆散"
      },
      {
        "word": "zapatos (m.pl.)",
        "meaning": "鞋子"
      },
      {
        "word": "mundo (m.)",
        "meaning": "世界 / 世间"
      }
    ]
  }
];


/**
 * 根据自然周自动轮换置顶本周精选特辑（周五为更新节点）
 * 确保即使没有重新编译，系统在每周五也会自动将本周当期主打影片呈现在置顶播放器舞台
 */
export function getWeeklyFeaturedMovie(movies: CinemaScene[]): CinemaScene {
  if (!movies || movies.length === 0) return {} as CinemaScene;
  const now = new Date();
  // 按照每周五对齐（以 2026-01-02 周五为基准周期锚点）
  const anchorTime = new Date('2026-01-02T00:00:00Z').getTime();
  const weekDiff = Math.max(0, Math.floor((now.getTime() - anchorTime) / (7 * 24 * 60 * 60 * 1000)));
  const index = weekDiff % movies.length;
  return movies[index] || movies[0];
}

export function getWeeklyFeaturedMovieId(movies: CinemaScene[]): string {
  const featured = getWeeklyFeaturedMovie(movies);
  return featured?.id || movies[0]?.id || 'film_papel';
}


// 向下兼容别名
export type CinemaItem = CinemaScene;
export const CINEMA_PLAYLIST = SPANISH_CINEMA_LIST;
