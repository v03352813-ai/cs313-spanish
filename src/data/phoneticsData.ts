// 27 Official Alphabet & Core Phonetics & Clínica del RRR & Reglas de Acentuación (Spanish)
export interface SpanishPhoneticItem {
  id: string;
  letter: string;
  name: string;
  ipa: string;
  category: 'vowel' | 'consonant' | 'special' | 'contrast';
  tags: string[];
  mouthTips: string;
  spellingRules: string[];
  examples: {
    word: string;
    phonetic: string;
    meaning: string;
  }[];
}

export const SPANISH_PHONETICS: SpanishPhoneticItem[] = [
  {
    id: 'a',
    letter: 'A a',
    name: 'a',
    ipa: '[a]',
    category: 'vowel',
    tags: ['强元音', '纯单元音'],
    spellingRules: ['无论处在词首、词中或词尾，发音始终如一', '绝不向英语 /eɪ/ 或弱化音滑动'],
    mouthTips: '口腔充分张大，舌身自然平放于口腔底部，舌尖轻抵下齿背，双唇自然张开不紧绷。发音饱满清脆，一气呵成。',
    examples: [
      { word: 'amor', phonetic: '[aˈmoɾ]', meaning: '爱 / 爱情' },
      { word: 'agua', phonetic: '[ˈaɣwa]', meaning: '水' },
      { word: 'amigo', phonetic: '[aˈmiɣo]', meaning: '朋友' },
      { word: 'casa', phonetic: '[ˈkasa]', meaning: '家 / 房屋' }
    ]
  },
  {
    id: 'b',
    letter: 'B b',
    name: 'be',
    ipa: '[b] / [β]',
    category: 'consonant',
    tags: ['双唇音', '与V同一'],
    spellingRules: ['词首或鼻音 (m,n) 后发闭塞音 [b]', '两元音之间软化为轻微双唇摩擦音 [β]', '与 V 发音完全等同，严禁咬下唇'],
    mouthTips: '词首发音时双唇紧闭阻断气流然后瞬间爆破 [b]；而在两个元音之间时双唇不完全闭死，留出极细微缝隙让气流摩擦溢出 [β]。',
    examples: [
      { word: 'barco', phonetic: '[ˈbaɾko]', meaning: '船 / 轮船' },
      { word: 'bien', phonetic: '[bjen]', meaning: '好 / 很好' },
      { word: 'saber', phonetic: '[saˈβeɾ]', meaning: '知道 / 了解' },
      { word: 'abuela', phonetic: '[aˈβwela]', meaning: '祖母 / 外婆' }
    ]
  },
  {
    id: 'c',
    letter: 'C c',
    name: 'ce',
    ipa: '[k] / [θ]',
    category: 'consonant',
    tags: ['条件变音', '咬舌音'],
    spellingRules: ['在 a, o, u 前读不送气塞音 [k]', '在 e, i 前在西班牙本土读咬舌音 [θ]（拉美读 [s]）'],
    mouthTips: '在 a,o,u 前舌后部紧贴软腭闭塞后冲开，不送气（听感接近拼音 g）；在 e,i 前舌尖轻垫在上下门牙之间吹气，声带不振动。',
    examples: [
      { word: 'casa', phonetic: '[ˈkasa]', meaning: '家 / 房屋' },
      { word: 'cielo', phonetic: '[ˈθjelo]', meaning: '天空 / 天堂' },
      { word: 'cine', phonetic: '[ˈθine]', meaning: '电影院' },
      { word: 'color', phonetic: '[koˈloɾ]', meaning: '颜色' }
    ]
  },
  {
    id: 'd',
    letter: 'D d',
    name: 'de',
    ipa: '[d] / [ð]',
    category: 'consonant',
    tags: ['舌尖齿音', '元音间软化'],
    spellingRules: ['词首或在 n, l 后读舌尖齿龈塞音 [d]', '在两元音之间或词尾软化为微露舌尖齿间擦音 [ð]'],
    mouthTips: '词首不送气，类似拼音 d；但在两元音之间（如 nada, todo）时，舌尖微露于上下齿间轻柔抚过，类似英语 that 中的 th。',
    examples: [
      { word: 'día', phonetic: '[ˈdi.a]', meaning: '白天 / 日子' },
      { word: 'nada', phonetic: '[ˈnaða]', meaning: '没有什么' },
      { word: 'madrid', phonetic: '[maˈðɾið]', meaning: '马德里' },
      { word: 'todo', phonetic: '[ˈtoðo]', meaning: '全部 / 所有' }
    ]
  },
  {
    id: 'e',
    letter: 'E e',
    name: 'e',
    ipa: '[e]',
    category: 'vowel',
    tags: ['强元音', '纯单元音'],
    spellingRules: ['嘴角向两侧自然平拉', '绝不可读成汉语拼音 ei 或英语 /eɪ/'],
    mouthTips: '双唇向两侧自然展开，开口度中等（略小于 a，大于 i）。声音干脆饱满，口型从发音开始到结束坚决保持固定，绝不滑动。',
    examples: [
      { word: 'estrella', phonetic: '[esˈtɾeʎa]', meaning: '星星' },
      { word: 'mesa', phonetic: '[ˈmesa]', meaning: '桌子' },
      { word: 'escuela', phonetic: '[esˈkwela]', meaning: '学校' },
      { word: 'enero', phonetic: '[eˈneɾo]', meaning: '一月' }
    ]
  },
  {
    id: 'f',
    letter: 'F f',
    name: 'efe',
    ipa: '[f]',
    category: 'consonant',
    tags: ['唇齿擦音', '清辅音'],
    spellingRules: ['上门牙轻触下唇内缘', '清气流擦出，声带不振动'],
    mouthTips: '上齿轻搭在下唇靠里位置，气流从唇齿缝隙之间强力摩擦而出。与汉语拼音 f 完全一致，利落干脆。',
    examples: [
      { word: 'fiesta', phonetic: '[ˈfjesta]', meaning: '节日 / 派对' },
      { word: 'familia', phonetic: '[faˈmilja]', meaning: '家庭 / 家族' },
      { word: 'fuego', phonetic: '[ˈfweɣo]', meaning: '火焰 / 火' },
      { word: 'flor', phonetic: '[floɾ]', meaning: '花朵' }
    ]
  },
  {
    id: 'g',
    letter: 'G g',
    name: 'ge',
    ipa: '[g] / [x]',
    category: 'consonant',
    tags: ['条件变音', '喉壁擦音'],
    spellingRules: ['在 a, o, u 前读舌后浊塞音 [g]', '在 e, i 前读小舌喉擦音 [x]（类似仰头漱口声）', '在 gue, gui 组合中 u 不发音'],
    mouthTips: '在 a,o,u 前舌后隆起与软腭接触爆破 [g]；在 e,i 前舌后部隆起贴近软腭与小舌，呼出强气流摩擦出声 [x]。',
    examples: [
      { word: 'gato', phonetic: '[ˈgato]', meaning: '猫' },
      { word: 'gente', phonetic: '[ˈxente]', meaning: '人们' },
      { word: 'gota', phonetic: '[ˈgota]', meaning: '水滴' },
      { word: 'guitarra', phonetic: '[giˈtara]', meaning: '吉他' }
    ]
  },
  {
    id: 'h',
    letter: 'H h',
    name: 'hache',
    ipa: '[-]',
    category: 'consonant',
    tags: ['完全静音', '西语哑巴字母'],
    spellingRules: ['在西语所有单词中 100% 保持完全静默', '唯一例外：与 C 组合成 CH 时发音'],
    mouthTips: '西语最纯粹的沉默者！无论处于词首还是词中，视同不存在，直接发其后面的元音。切记不要发成英语的 /h/！',
    examples: [
      { word: 'hola', phonetic: '[ˈola]', meaning: '你好' },
      { word: 'hombre', phonetic: '[ˈombɾe]', meaning: '男人' },
      { word: 'hasta', phonetic: '[ˈasta]', meaning: '直到' },
      { word: 'hora', phonetic: '[ˈoɾa]', meaning: '小时 / 时间' }
    ]
  },
  {
    id: 'i',
    letter: 'I i',
    name: 'i',
    ipa: '[i]',
    category: 'vowel',
    tags: ['弱元音', '高闭元音'],
    spellingRules: ['高音调，嘴角用力向两侧拉开', '与强元音相邻时构成二重元音 [j]'],
    mouthTips: '舌前部高高抬起贴近硬腭，嘴角向两侧用力展开形成微笑状，开口度极小。声音尖锐清脆，不拖尾音。',
    examples: [
      { word: 'isla', phonetic: '[ˈisla]', meaning: '岛屿' },
      { word: 'idea', phonetic: '[iˈðe.a]', meaning: '主意 / 想法' },
      { word: 'idioma', phonetic: '[iˈðjoma]', meaning: '语言' },
      { word: 'hijo', phonetic: '[ˈixo]', meaning: '儿子' }
    ]
  },
  {
    id: 'j',
    letter: 'J j',
    name: 'jota',
    ipa: '[x]',
    category: 'consonant',
    tags: ['喉擦音', '特色音'],
    spellingRules: ['在任何元音前均发喉壁摩擦音 [x]', '声音粗犷有质感，声带不振动'],
    mouthTips: '舌后部抬高贴近软腭与小舌通道，深层气流强力摩擦喷出，类似深喉漱口或轻咳清嗓的声音。',
    examples: [
      { word: 'jamón', phonetic: '[xaˈmon]', meaning: '火腿' },
      { word: 'joven', phonetic: '[ˈxoβen]', meaning: '年轻人' },
      { word: 'jardín', phonetic: '[xaɾˈðin]', meaning: '花园' },
      { word: 'ojo', phonetic: '[ˈoxo]', meaning: '眼睛' }
    ]
  },
  {
    id: 'k',
    letter: 'K k',
    name: 'ka',
    ipa: '[k]',
    category: 'consonant',
    tags: ['外来借词', '不送气'],
    spellingRules: ['仅出现于外来借词中', '严格不送气，与字母 C 在 a,o,u 前相同'],
    mouthTips: '舌根抵软腭蓄压然后爆破，绝对不喷出多余气流。在嘴唇前放纸巾测试，纸巾不应被吹动。',
    examples: [
      { word: 'kilo', phonetic: '[ˈkilo]', meaning: '公斤 / 千克' },
      { word: 'karaoke', phonetic: '[kaɾaˈoke]', meaning: '卡拉OK' },
      { word: 'kimono', phonetic: '[kiˈmono]', meaning: '和服' },
      { word: 'koala', phonetic: '[koˈala]', meaning: '考拉' }
    ]
  },
  {
    id: 'l',
    letter: 'L l',
    name: 'ele',
    ipa: '[l]',
    category: 'consonant',
    tags: ['齿龈边音', '明亮L'],
    spellingRules: ['舌尖抵上齿龈，气流由舌两侧流出', '即使在词尾也必须发清晰明亮的舌尖前音，绝非英语深L'],
    mouthTips: '舌尖牢固抵住上门牙牙龈，舌身两侧放松悬空，气流从两侧通道流过，声带振动。发词尾 sol, azul 时舌尖必须顶上去！',
    examples: [
      { word: 'luna', phonetic: '[ˈluna]', meaning: '月亮' },
      { word: 'libro', phonetic: '[ˈliβɾo]', meaning: '书本' },
      { word: 'sol', phonetic: '[sol]', meaning: '太阳' },
      { word: 'azul', phonetic: '[aˈθul]', meaning: '蓝色' }
    ]
  },
  {
    id: 'm',
    letter: 'M m',
    name: 'eme',
    ipa: '[m]',
    category: 'consonant',
    tags: ['双唇鼻音', '浊辅音'],
    spellingRules: ['双唇闭合，气流从鼻腔透出', '拼写规则：字母 b 和 p 前只能写 m，绝不写 n'],
    mouthTips: '双唇紧紧闭合并放松，软腭下垂通向鼻腔，声带振动，气流由鼻孔涌出。',
    examples: [
      { word: 'madre', phonetic: '[ˈmaðɾe]', meaning: '母亲' },
      { word: 'mundo', phonetic: '[ˈmundo]', meaning: '世界' },
      { word: 'música', phonetic: '[ˈmusika]', meaning: '音乐' },
      { word: 'mar', phonetic: '[maɾ]', meaning: '大海' }
    ]
  },
  {
    id: 'n',
    letter: 'N n',
    name: 'ene',
    ipa: '[n]',
    category: 'consonant',
    tags: ['舌尖齿龈鼻音', '核心辅音'],
    spellingRules: ['舌尖紧贴上门牙内侧龈部', '在 v 前通常写 n（如 invierno）'],
    mouthTips: '舌尖抵紧上齿龈堵住口腔气流通路，软腭下垂，声带振动，气流从鼻孔共鸣流出。',
    examples: [
      { word: 'noche', phonetic: '[ˈnotʃe]', meaning: '夜晚' },
      { word: 'nube', phonetic: '[ˈnuβe]', meaning: '云朵' },
      { word: 'nombre', phonetic: '[ˈnombɾe]', meaning: '名字' },
      { word: 'vino', phonetic: '[ˈbino]', meaning: '红酒' }
    ]
  },
  {
    id: 'ñ',
    letter: 'Ñ ñ',
    name: 'eñe',
    ipa: '[ɲ]',
    category: 'special',
    tags: ['西语灵魂', '硬腭鼻音', '民族象征'],
    spellingRules: ['西班牙语专属官方标志性字母（头顶波浪号 Virgulilla）', '绝不可写成普通 n'],
    mouthTips: '舌前部和舌面大面积紧贴硬腭，软腭下垂堵住口腔，声带振动，鼻音喷薄而出。听感宛如汉语拼音 ni 的紧密快速交融。',
    examples: [
      { word: 'español', phonetic: '[espaˈɲol]', meaning: '西班牙语 / 西班牙人' },
      { word: 'niño', phonetic: '[ˈniɲo]', meaning: '小孩 / 男孩' },
      { word: 'año', phonetic: '[ˈaɲo]', meaning: '年 / 岁' },
      { word: 'mañana', phonetic: '[maˈɲana]', meaning: '明天 / 早晨' }
    ]
  },
  {
    id: 'o',
    letter: 'O o',
    name: 'o',
    ipa: '[o]',
    category: 'vowel',
    tags: ['强元音', '圆唇音'],
    spellingRules: ['双唇收圆向前用力突出', '严禁像英语 /oʊ/ 那样向 u 弱化滑动'],
    mouthTips: '舌后部隆起，双唇收圆呈中等圆孔向前用力拢出。声音浑厚、短促干脆，发音结束时双唇保持圆形不收紧。',
    examples: [
      { word: 'sol', phonetic: '[sol]', meaning: '太阳' },
      { word: 'ojo', phonetic: '[ˈoxo]', meaning: '眼睛' },
      { word: 'oro', phonetic: '[ˈoɾo]', meaning: '黄金' },
      { word: 'hola', phonetic: '[ˈola]', meaning: '你好' }
    ]
  },
  {
    id: 'p',
    letter: 'P p',
    name: 'pe',
    ipa: '[p]',
    category: 'consonant',
    tags: ['双唇清塞音', '严禁送气'],
    spellingRules: ['绝对不送气清塞音', '切忌发成英语那种呼呼吹气的 p'],
    mouthTips: '双唇闭死蓄积口腔气压，然后突然开启双唇爆破。手掌放在唇前感受，不能有明显气流喷在手掌上（听感极近汉语拼音 b）。',
    examples: [
      { word: 'padre', phonetic: '[ˈpaðɾe]', meaning: '父亲' },
      { word: 'pan', phonetic: '[pan]', meaning: '面包' },
      { word: 'playa', phonetic: '[ˈplaʝa]', meaning: '沙滩' },
      { word: 'puerta', phonetic: '[ˈpweɾta]', meaning: '门' }
    ]
  },
  {
    id: 'q',
    letter: 'Q q',
    name: 'cu',
    ipa: '[k]',
    category: 'consonant',
    tags: ['固定搭档', 'u不发音'],
    spellingRules: ['永远与 u 绑定书写为 que / qui', '中间的 u 永远保持静默不发音，整体读 [ke], [ki]'],
    mouthTips: '舌根抵软腭闭气突然爆破，绝对不送气。与字母 C 在 a,o,u 前音值完全一致。',
    examples: [
      { word: 'queso', phonetic: '[ˈkeso]', meaning: '奶酪' },
      { word: 'quince', phonetic: '[ˈkinθe]', meaning: '十五' },
      { word: 'querer', phonetic: '[keˈɾeɾ]', meaning: '想要 / 爱' },
      { word: 'parque', phonetic: '[ˈpaɾke]', meaning: '公园' }
    ]
  },
  {
    id: 'r_single',
    letter: 'R r (单)',
    name: 'ere',
    ipa: '[ɾ]',
    category: 'consonant',
    tags: ['舌尖单击轻弹音', '日常高频'],
    spellingRules: ['在词中非首字母、且非 l,n,s 之后时发单击音', '舌尖快速弹击上齿龈一次，绝不连颤'],
    mouthTips: '舌尖放松轻触上齿龈前部，随着一股微弱气流冲出，舌尖向上齿龈轻巧弹击一次即收回，宛如水滴溅起。',
    examples: [
      { word: 'pero', phonetic: '[ˈpeɾo]', meaning: '但是 / 然而' },
      { word: 'caro', phonetic: '[ˈkaɾo]', meaning: '昂贵的' },
      { word: 'hora', phonetic: '[ˈoɾa]', meaning: '小时 / 时间' },
      { word: 'tres', phonetic: '[tɾes]', meaning: '三' }
    ]
  },
  {
    id: 'rr_multi',
    letter: 'RR rr (多)',
    name: 'erre',
    ipa: '[r]',
    category: 'special',
    tags: ['大舌多击颤音', '伯努利被动振动', '西语冠冕'],
    spellingRules: ['在词首 r、词中双写 rr、或在 l,n,s 之后时必须连颤 2~4 次', '依靠肺部喷射气流被动振颤，非大脑主动控制'],
    mouthTips: '舌尖像柳叶般极其放松地轻搭在上门牙后方齿龈处，大牙咬合舌侧封死侧漏。肺部爆发深层气流冲破缝隙，流体压差瞬间带动舌尖被动振颤！',
    examples: [
      { word: 'perro', phonetic: '[ˈpero]', meaning: '狗 (区分 pero 但是)' },
      { word: 'carro', phonetic: '[ˈkaro]', meaning: '汽车 (区分 caro 昂贵)' },
      { word: 'rosa', phonetic: '[ˈrosa]', meaning: '玫瑰 (词首r必颤)' },
      { word: 'correr', phonetic: '[koˈreɾ]', meaning: '跑步 / 奔跑' }
    ]
  },
  {
    id: 's',
    letter: 'S s',
    name: 'ese',
    ipa: '[s]',
    category: 'consonant',
    tags: ['齿龈清擦音', '舌尖音'],
    spellingRules: ['舌尖靠近上齿龈形成狭缝，气流剧烈摩擦', '西班牙中部为微凹舌尖音，拉美为平直齿龈音'],
    mouthTips: '舌尖微翘靠近上齿龈，气流自狭缝中吹出，声带不振动。声音干脆利落。',
    examples: [
      { word: 'sol', phonetic: '[sol]', meaning: '太阳' },
      { word: 'silla', phonetic: '[ˈsiʎa]', meaning: '椅子' },
      { word: 'semana', phonetic: '[seˈmana]', meaning: '周 / 星期' },
      { word: 'casa', phonetic: '[ˈkasa]', meaning: '家' }
    ]
  },
  {
    id: 't',
    letter: 'T t',
    name: 'te',
    ipa: '[t]',
    category: 'consonant',
    tags: ['舌尖齿背塞音', '严禁送气'],
    spellingRules: ['舌尖抵上门牙内侧齿背，不送气', '切忌发成英语吹大气的 t，听感极接近拼音 d'],
    mouthTips: '舌尖紧紧顶在上门牙齿背形成闭塞，蓄压后突然释放，严禁吐出气流。配合元音发音极为清脆坚实。',
    examples: [
      { word: 'tiempo', phonetic: '[ˈtjempo]', meaning: '时间 / 天气' },
      { word: 'tarde', phonetic: '[ˈtaɾðe]', meaning: '下午 / 迟' },
      { word: 'taza', phonetic: '[ˈtaθa]', meaning: '茶杯' },
      { word: 'teatro', phonetic: '[teˈatɾo]', meaning: '剧院' }
    ]
  },
  {
    id: 'u',
    letter: 'U u',
    name: 'u',
    ipa: '[u]',
    category: 'vowel',
    tags: ['弱元音', '后闭圆唇音'],
    spellingRules: ['双唇用力聚拢向前收成极小圆孔', '在 que, qui, gue, gui 中默认不发音（除非带分音符 ü）'],
    mouthTips: '舌后部隆起贴近软腭，双唇收得很小并向前强力突出。声音深沉纯净，绝不向两端滑动。',
    examples: [
      { word: 'uva', phonetic: '[ˈuβa]', meaning: '葡萄' },
      { word: 'uno', phonetic: '[ˈuno]', meaning: '一 / 一个' },
      { word: 'luz', phonetic: '[luθ]', meaning: '光芒 / 光线' },
      { word: 'mundo', phonetic: '[ˈmundo]', meaning: '世界' }
    ]
  },
  {
    id: 'v',
    letter: 'V v',
    name: 'uve',
    ipa: '[b] / [β]',
    category: 'consonant',
    tags: ['与B完全相同', '严禁咬唇'],
    spellingRules: ['西语中 V 与 B 读音 100% 同化无差别', '词首读 [b]，元音间读轻摩擦音 [β]，绝非英语咬唇 v'],
    mouthTips: '忘掉英语的咬下唇动作！在西语里看到 V 就要当作 B 来读：在词首双唇完全闭合 [b]，在两元音之间双唇微触留缝 [β]。',
    examples: [
      { word: 'vino', phonetic: '[ˈbino]', meaning: '红酒' },
      { word: 'vaca', phonetic: '[ˈbaka]', meaning: '奶牛' },
      { word: 'vida', phonetic: '[ˈbiða]', meaning: '生活 / 生命' },
      { word: 'verano', phonetic: '[beˈɾano]', meaning: '夏天' }
    ]
  },
  {
    id: 'w',
    letter: 'W w',
    name: 'uve doble',
    ipa: '[w] / [b]',
    category: 'consonant',
    tags: ['外来借词', '双唇半元音'],
    spellingRules: ['只出现在外来专有名词与借词中', '英语词源读 [w]，德语词源读 [b]'],
    mouthTips: '根据借词语言背景调整，绝大多数现代西语使用者直接发双唇圆唇半元音 [w]。',
    examples: [
      { word: 'wifi', phonetic: '[ˈwifi]', meaning: '无线网络' },
      { word: 'web', phonetic: '[web]', meaning: '网络 / 网页' },
      { word: 'whisky', phonetic: '[ˈwiski]', meaning: '威士忌' },
      { word: 'walkman', phonetic: '[ˈwokman]', meaning: '随身听' }
    ]
  },
  {
    id: 'x',
    letter: 'X x',
    name: 'equis',
    ipa: '[ks] / [s]',
    category: 'consonant',
    tags: ['复合辅音', '多元变音'],
    spellingRules: ['在两元音之间发 [ks]', '在词首多读为 [s]', '在墨西哥国名与地名中发喉擦音 [x] (México)'],
    mouthTips: '发 [ks] 时先由舌后部闭塞迅速滑向齿龈清擦音；发词首时直接由舌尖发出 [s]。',
    examples: [
      { word: 'éxito', phonetic: '[ˈeksito]', meaning: '成功' },
      { word: 'examen', phonetic: '[ekˈsamen]', meaning: '考试' },
      { word: 'taxi', phonetic: '[ˈtaksi]', meaning: '出租车' },
      { word: 'méxico', phonetic: '[ˈmexiko]', meaning: '墨西哥' }
    ]
  },
  {
    id: 'y',
    letter: 'Y y',
    name: 'ye / i griega',
    ipa: '[ʝ] / [i]',
    category: 'consonant',
    tags: ['半元辅音', '变体多端'],
    spellingRules: ['作为连词“和”单独使用或在词尾时读元音 [i]', '在词首或元音前读硬腭浊擦音 [ʝ]'],
    mouthTips: '作辅音时舌面抬高贴近硬腭形成狭缝，呼气时声带强烈振动；在阿根廷等地带有轻微带摩擦的 [ʃ] 或 [ʒ] 音色。',
    examples: [
      { word: 'playa', phonetic: '[ˈplaʝa]', meaning: '沙滩' },
      { word: 'yo', phonetic: '[ʝo]', meaning: '我' },
      { word: 'ayer', phonetic: '[aˈʝeɾ]', meaning: '昨天' },
      { word: 'muy', phonetic: '[mwi]', meaning: '非常' }
    ]
  },
  {
    id: 'z',
    letter: 'Z z',
    name: 'zeta',
    ipa: '[θ] ([s])',
    category: 'consonant',
    tags: ['咬舌音', '美洲Seseo'],
    spellingRules: ['在 a, o, u 前充当清齿音', '西班牙本土读咬舌音 [θ]，拉美全境读 [s]', '在西语中极少写 ze, zi（均转写为 ce, ci）'],
    mouthTips: '舌尖伸入上下门牙缝隙之间，轻轻呼气擦出气流，绝不咬死，声带不振动。',
    examples: [
      { word: 'zapato', phonetic: '[θaˈpato]', meaning: '鞋子' },
      { word: 'zumo', phonetic: '[ˈθumo]', meaning: '果汁' },
      { word: 'corazón', phonetic: '[koɾaˈθon]', meaning: '心脏 / 核心' },
      { word: 'azul', phonetic: '[aˈθul]', meaning: '蓝色' }
    ]
  },
  {
    id: 'ch',
    letter: 'CH ch',
    name: 'che',
    ipa: '[tʃ]',
    category: 'special',
    tags: ['传统双字母', '清塞擦音'],
    spellingRules: ['由 C 与 H 组合而成的不可分割传统音素', '发音对应英语 ch 或汉语拼音 ch（但更圆润有力）'],
    mouthTips: '舌尖抵上齿龈闭气，随后迅速滑开留缝形成强烈气流摩擦，声带不振动。',
    examples: [
      { word: 'chico', phonetic: '[ˈtʃiko]', meaning: '男孩 / 年轻人' },
      { word: 'noche', phonetic: '[ˈnotʃe]', meaning: '夜晚' },
      { word: 'leche', phonetic: '[ˈletʃe]', meaning: '牛奶' },
      { word: 'chocolate', phonetic: '[tʃokoˈlate]', meaning: '巧克力' }
    ]
  },
  {
    id: 'll',
    letter: 'LL ll',
    name: 'doble ele',
    ipa: '[ʎ] / [ʝ]',
    category: 'special',
    tags: ['传统双字母', 'Yeísmo现象'],
    spellingRules: ['传统音值为硬腭边音 [ʎ]', '现代西语 90% 以上地区通行 Yeísmo，直接同化读为 [ʝ]（等同于辅音 Y）'],
    mouthTips: '发 [ʝ] 时舌面紧贴硬腭，带声带振动摩擦出声；发传统 [ʎ] 时舌面贴硬腭，气流由舌两侧涌出。',
    examples: [
      { word: 'calle', phonetic: '[ˈkaʎe]', meaning: '街道' },
      { word: 'lluvia', phonetic: '[ˈʎuβja]', meaning: '雨水' },
      { word: 'pollo', phonetic: '[ˈpoʎo]', meaning: '小鸡 / 鸡肉' },
      { word: 'llave', phonetic: '[ˈʎaβe]', meaning: '钥匙' }
    ]
  }
];

// 5 大核心发音与重音规则 (Reglas de Oro y Fonética)
export interface SpanishRuleItem {
  id: string;
  title: string;
  spanishTitle: string;
  tag: string;
  summary: string;
  formula: string;
  examples: {
    phrase: string;
    ipa: string;
    meaning: string;
    explanation: string;
  }[];
}

export const SPANISH_PRONUNCIATION_RULES: SpanishRuleItem[] = [
  {
    id: 'accentuation',
    title: '单词重音天性与强制“戴帽”法则',
    spanishTitle: 'Reglas de Acentuación y Tilde Diacrítica',
    tag: '核心考点 · 必考',
    summary: '西语单词什么时候必须在头顶加一撇重音符（tilde ´）？牢记两大自然天性，违规者强制“戴帽”！倒数第三音节起 100% 无条件必须打重音符。',
    formula: '元音/N/S 结尾 ➔ 倒二 | 其他辅音结尾 ➔ 末尾 | 打破天性或倒三以上 ➔ 强制戴帽 (´)',
    examples: [
      { phrase: 'café', ipa: '[kaˈfe]', meaning: '咖啡', explanation: '元音结尾本应重在倒二，实际重在末尾，违规强制戴帽' },
      { phrase: 'corazón', ipa: '[koɾaˈθon]', meaning: '心脏', explanation: '字母 n 结尾本应重在倒二，实际重在末尾，违规戴帽' },
      { phrase: 'árbol', ipa: '[ˈaɾβol]', meaning: '树木', explanation: '辅音 l 结尾本应重在末尾，实际重在倒二，违规戴帽' },
      { phrase: 'música', ipa: '[ˈmusika]', meaning: '音乐', explanation: '重音落在倒数第三音节，无条件 100% 必须戴帽' },
      { phrase: 'dígamelos', ipa: '[ˈdiɣamelos]', meaning: '请您告诉我它们', explanation: '重音落在倒数第四音节，无条件强制戴帽' }
    ]
  },
  {
    id: 'rrr_clinic',
    title: 'RRR 大舌颤音：伯努利气流搭桥突破法',
    spanishTitle: 'Vibrante Múltiple y Modelo de Bernoulli',
    tag: '突破瓶颈 · 独家法门',
    summary: '颤音绝非靠大脑命令舌尖主动抖动（生理上不可能实现每秒5次主动振颤），而是舌尖放松轻触齿龈，由肺部喷射气流穿过狭缝产生的流体压差带动的“被动振动”！借力 T/D 辅音连缀蓄压带响！',
    formula: '本体打嘟噜 (Brrr) ➔ 齿龈搭桥 (tra/dra/tren) ➔ 双元音实战 (carro/perro)',
    examples: [
      { phrase: 'tren', ipa: '[tɾen]', meaning: '火车', explanation: '藉由 [t] 的齿龈闭塞瞬间爆发，蓄力引爆气流带响舌尖' },
      { phrase: 'tres', ipa: '[tɾes]', meaning: '三', explanation: '先念 [t] 再加力吹气，连续练习 tra-tra-tra 形成肌肉记忆' },
      { phrase: 'pero vs perro', ipa: '[ˈpeɾo] vs [ˈpero]', meaning: '但是 vs 狗', explanation: '单舌音轻弹一下 vs 多击颤音气流连颤，决定词义的分水岭' },
      { phrase: 'ferrocarril', ipa: '[ferokaˈril]', meaning: '铁路', explanation: '双重 RRR 实战连续测试，检验气流持续推进能力' }
    ]
  },
  {
    id: 'inverted_marks',
    title: '情绪倒置镜 ¿ ? 与 ¡ ! 视窗语调控制',
    spanishTitle: 'Signos de Interrogación y Exclamación Invertidos',
    tag: '西语独门 · 语调视窗',
    summary: '西班牙语是全球唯一在句首使用倒置问号（¿）与感叹号（¡）的语言！它的核心功能是“情绪前瞻视窗”：读者在视线触及句首第一眼即可预判疑问升调或感叹强拍，朗读时从容自如，绝不慌乱。',
    formula: '¿ 句首升调前瞻 ... ? 疑问落地 | ¡ 句首情绪爆发 ... ! 饱满收束',
    examples: [
      { phrase: '¿Cómo te llamas?', ipa: '[ˈkomo te ˈʝamas]', meaning: '你叫什么名字？', explanation: '看到 ¿ 瞬间即可提前拉高句首语调准备疑问上扬' },
      { phrase: '¡Qué maravilloso día!', ipa: '[ke maɾaβiˈʝoso ˈdi.a]', meaning: '多美妙的一天啊！', explanation: '看到 ¡ 瞬间即以饱满激昂的情绪喷薄发音' },
      { phrase: 'Si no vienes, ¿qué hacemos?', ipa: '[si no ˈbjenes, ke aˈθemos]', meaning: '如果你不来，我们做什么？', explanation: '倒置符号可精准嵌套在复合句的疑问子句开头！' }
    ]
  },
  {
    id: 'sinalefa_diptongos',
    title: '双元音、三元音与连音铁律 (Sinalefa)',
    spanishTitle: 'Diptongos, Triptongos y Enlace Vocálico (Sinalefa)',
    tag: '听力提分 · 流畅语流',
    summary: '强元音 (A, E, O) 相聚各自立门（分属不同音节）；强弱相聚或双弱相聚 (I, U) 融为二重元音归入同一音节。前词末元音与后词首元音在语流中无缝滑动融合为连音 (Sinalefa)，这正是西班牙人说话“快如机关枪”的真正秘密！',
    formula: '强 (A,E,O) + 弱 (I,U) = 二重元音 (同音节) | 词末元音 + 词首元音 = 连音 (Sinalefa)',
    examples: [
      { phrase: 'cielo', ipa: '[ˈθjelo]', meaning: '天空 (cie-lo 两个音节)', explanation: '弱元音 i + 强元音 e 构成二重元音，绝不拆开' },
      { phrase: 'teatro', ipa: '[teˈatɾo]', meaning: '剧院 (te-a-tro 三个音节)', explanation: '强元音 e 与 强元音 a 相遇，互相排斥拆分为独立音节' },
      { phrase: '¿Cómo estás?', ipa: '[ˈkomehˈtas]', meaning: '你好吗？(连音合并)', explanation: 'cómo 的词尾 o 与 estás 的词首 e 融合成一个复合音节' }
    ]
  },
  {
    id: 'softened_consonants',
    title: '辅音软化与易混对决 (b/v, d, g & Fricativas)',
    spanishTitle: 'Alófonos: Oclusivas vs Fricativas',
    tag: '纯正口音 · 去中式化',
    summary: '西语辅音具有极强的“环境适应性”：b 与 v 发音完全同一（切忌咬下唇）；d 在两元音之间软化为微露舌尖齿间擦音 [ð]（似英语 this 的 th）；g 在元音间软化为 [ɣ]；c/z 咬舌与美洲 Seseo。掌握软化规律，口音立刻蜕变为地道本土腔！',
    formula: 'b = v (双唇同一) | a-d-a ➔ [aðz] 齿间轻拂 | ce/ci/za/zo/zu ➔ [θ]',
    examples: [
      { phrase: 'vino tinto', ipa: '[ˈbino ˈtinto]', meaning: '红葡萄酒', explanation: 'v 读作标准双唇塞音 [b]，绝不用上牙齿咬下唇' },
      { phrase: 'nada de nada', ipa: '[ˈnaða ðe ˈnaða]', meaning: '一点也没有', explanation: '三个 d 全部软化为轻柔的齿间擦音 [ð]，宛如微风拂面' },
      { phrase: 'agua fría', ipa: '[ˈaɣwa ˈfɾi.a]', meaning: '凉水', explanation: 'g 在两元音之间软化为舌后轻擦音 [ɣ]，毫不费力' }
    ]
  }
];

// RRR 大舌音实战三阶梯训练
export const RRR_PRACTICE_STEPS = [
  {
    step: 1,
    title: '第一阶：本体感觉唤醒 · 双唇打嘟噜 (Brrr)',
    theory: '伯努利被动振动原理。人脑神经无法在一秒内主动支配肌肉颤动 5 次以上，颤音必须依靠流体气流压差驱动！',
    guide: '彻底放松面部，像小马喷鼻一样用力吹气，让完全放松的双唇被气流吹动快速扑打发出“嘟噜噜”声。体会这种“不是肌肉主动用力，而是被气流吹动”的感觉。',
    syllables: ['Brrrrr...', 'Prrrrr...', 'Frrrrr...'],
    tip: '每天练习 3 分钟，直至双唇能持续稳定颤动 5 秒以上。'
  },
  {
    step: 2,
    title: '第二阶：齿龈搭桥引流 · T / D 辅音连缀蓄能法',
    theory: '不要凭空单发 R！借助舌前阻碍塞音 [t] 或 [d]，先在齿龈处蓄积口腔内部气压，爆破瞬间带起舌尖被动振动。',
    guide: '舌尖轻点上齿龈，先快速连续念：te-re, te-re, te-re ➔ 逐渐加速缩短中间元音 ➔ tra, tra, tra, tra ➔ dra, dra, dra！在念出 t 的瞬间加大肺部吹气量，舌尖就会被带响！',
    syllables: ['tra', 'tre', 'tri', 'tro', 'tru', 'dra', 'dre', 'dri', 'dro', 'dru'],
    tip: '借力打力：95% 的人都是在练习 “tren (火车)” 和 “tres (三)” 的过程中第一次突破大舌音！'
  },
  {
    step: 3,
    title: '第三阶：词中软着陆 · 真正西语双颤实战',
    theory: '从搭桥音过渡到真实词汇的双元音支撑环境。在元音与元音之间自如启动气流喷射。',
    guide: '深吸一口气，保持舌尖像一片薄薄的柳树叶，轻搭在上门牙后方的凸起牙龈处，两侧大牙咬住舌边封死侧漏气流，气流单向向前喷射！',
    syllables: ['carro (汽车)', 'perro (狗)', 'correr (跑步)', 'arroz (米饭)', 'guitarra (吉他)', 'ferrocarril (铁路)'],
    tip: '如果一时颤不响不要慌，用单舌音 [ɾ] 交流母语者 100% 听得懂，绝不影响日常交流和考试！'
  }
];

// 向后兼容旧字段导出的别名
export const SPANISH_ALPHABET = SPANISH_PHONETICS;
export const RRR_CLINIC_STEPS = RRR_PRACTICE_STEPS.map(s => ({
  step: s.step,
  name: s.title,
  scientificPrinciple: s.theory,
  actionGuidance: s.guide,
  practiceSyllables: s.syllables,
  tips: s.tip
}));
export const ACCENTUATION_RULES = [
  {
    type: 'Palabras Agudas (重音在末尾音节)',
    naturalRule: '以除 N、S 以外的辅音结尾的单词，天生重音在最后一个音节（如 ha-blar, ma-drid, a-zul）。',
    whenToAccent: '一旦它违规以 N、S 或元音结尾，头顶必须强制戴帽子（打上重音符号）！',
    examples: ['café (违规戴帽)', 'corazón (违规戴帽)', 'papá (违规戴帽)', 'pared (合规不打)']
  },
  {
    type: 'Palabras Llanas / Graves (重音在倒数第二音节)',
    naturalRule: '以 N、S 或元音结尾的单词，天生重音在倒数第二音节（如 ha-bla, ca-sa, li-bro, jo-ven）。',
    whenToAccent: '一旦它违规以其他辅音结尾，头顶必须强制戴帽子！',
    examples: ['árbol (辅音l结尾却重在倒数第二，违规戴帽)', 'fácil (违规戴帽)', 'móvil (违规戴帽)', 'amigo (合规不打)']
  },
  {
    type: 'Palabras Esdrújulas (重音在倒数第三音节)',
    naturalRule: '天生没有这种规矩！',
    whenToAccent: '100% 无条件必须全部戴帽子！没有例外！',
    examples: ['médico (医生)', 'música (音乐)', 'teléfono (电话)', 'pájaro (鸟)']
  },
  {
    type: 'Palabras Sobreesdrújulas (重音在倒数第四或更前)',
    naturalRule: '多出现在动词后接双重代词合并时。',
    whenToAccent: '100% 无条件全部戴帽子！',
    examples: ['dígamelos (请您告诉我它们)', 'cómpratelo (你把它买给自己吧)']
  }
];
export type LetterPhonetic = SpanishPhoneticItem;
