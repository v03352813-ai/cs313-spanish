// Spanish Verbs & Conjugation Engine Data
export interface VerbConjugation {
  infinitive: string;
  meaning: string;
  group: '-ar' | '-er' | '-ir';
  isRegular: boolean;
  isBootVerb?: boolean;
  bootVowelChange?: 'e->ie' | 'o->ue' | 'e->i' | 'u->ue' | 'none';
  pastParticiple: string; // 过去分词
  gerund: string;        // 副动词 (进行时)
  derivationStory: string;
  // 核心 6 个人称: yo, tú, él/ella/Ud., nosotros, vosotros, ellos/ellas/Uds.
  tenses: {
    presente: [string, string, string, string, string, string];
    indefinido: [string, string, string, string, string, string];
    imperfecto: [string, string, string, string, string, string];
    futuro: [string, string, string, string, string, string];
    condicional: [string, string, string, string, string, string];
    subjuntivo: [string, string, string, string, string, string];
  };
}

export const PERSON_LABELS = [
  { code: 'yo', label: 'Yo (我)', inBoot: true },
  { code: 'tu', label: 'Tú (你)', inBoot: true },
  { code: 'el', label: 'Él/Ella/Ud. (他/她/您)', inBoot: true },
  { code: 'nosotros', label: 'Nosotros (我们)', inBoot: false },
  { code: 'vosotros', label: 'Vosotros (你们)', inBoot: false },
  { code: 'ellos', label: 'Ellos/Ellas/Uds. (他们/您各位)', inBoot: true },
];

export const SPANISH_VERBS: VerbConjugation[] = [
  // 1. hablar (-ar 规则标杆)
  {
    infinitive: 'hablar',
    meaning: '说话、交谈',
    group: '-ar',
    isRegular: true,
    isBootVerb: false,
    pastParticiple: 'hablado',
    gerund: 'hablando',
    derivationStory: '标准 -ar 规则大弟子。砍掉词尾 -ar 露出词根 habl-，按人称套用 -o, -as, -a, -amos, -áis, -an。进入虚拟式时执行【灵魂互换】，全面换穿 -er 系列的 e 系列衣服！',
    tenses: {
      presente: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'],
      indefinido: ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'],
      imperfecto: ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban'],
      futuro: ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'],
      condicional: ['hablaría', 'hablarías', 'hablaría', 'hablaríamos', 'hablaríais', 'hablarían'],
      subjuntivo: ['hable', 'hables', 'hable', 'hablemos', 'habléis', 'hablen']
    }
  },

  // 2. comer (-er 规则标杆)
  {
    infinitive: 'comer',
    meaning: '吃、进餐',
    group: '-er',
    isRegular: true,
    isBootVerb: false,
    pastParticiple: 'comido',
    gerund: 'comiendo',
    derivationStory: '标准 -er 规则掌门人。直陈式词尾紧随 e 系 (-o, -es, -e, -emos, -éis, -en)；进入虚拟式时执行【灵魂互换】，全面改穿 -ar 系列的 a 系列衣服 (coma, comas...)！',
    tenses: {
      presente: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
      indefinido: ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'],
      imperfecto: ['comía', 'comías', 'comía', 'comíamos', 'comíais', 'comían'],
      futuro: ['comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'],
      condicional: ['comería', 'comerías', 'comería', 'comeríamos', 'comeríais', 'comerían'],
      subjuntivo: ['coma', 'comas', 'coma', 'comamos', 'comáis', 'coman']
    }
  },

  // 3. vivir (-ir 规则标杆)
  {
    infinitive: 'vivir',
    meaning: '生活、居住',
    group: '-ir',
    isRegular: true,
    isBootVerb: false,
    pastParticiple: 'vivido',
    gerund: 'viviendo',
    derivationStory: '标准 -ir 规则动词。除 nosotros (-imos) 与 vosotros (-ís) 外，其余人称与 -er 家族完全共享！进入虚拟式同样全面换穿 a 系列衣服！',
    tenses: {
      presente: ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven'],
      indefinido: ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron'],
      imperfecto: ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían'],
      futuro: ['viviré', 'vivirás', 'vivirá', 'viviremos', 'viviréis', 'vivirán'],
      condicional: ['viviría', 'vivirías', 'viviría', 'viviríamos', 'viviríais', 'vivirían'],
      subjuntivo: ['viva', 'vivas', 'viva', 'vivamos', 'viváis', 'vivan']
    }
  },

  // 4. ser (四大天王之首 · 出厂配置本质)
  {
    infinitive: 'ser',
    meaning: '是 (表示固有属性、本质、出身、时间)',
    group: '-er',
    isRegular: false,
    pastParticiple: 'sido',
    gerund: 'siendo',
    derivationStory: '西语两大本源动词之首！传承千年的古拉丁本质系，直陈式呈现特异独立形态 (soy, eres, es...)；简单过去时与 ir 完全同形 (fui, fuiste...)；未完成过去时独家保全 (era, eras...)。',
    tenses: {
      presente: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
      indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      imperfecto: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
      futuro: ['seré', 'serás', 'será', 'seremos', 'seréis', 'serán'],
      condicional: ['sería', 'serías', 'sería', 'seríamos', 'seríais', 'serían'],
      subjuntivo: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean']
    }
  },

  // 5. estar (四大天王之二 · 仪表盘临时状态)
  {
    infinitive: 'estar',
    meaning: '在、处于 (表示空间位置、临时情绪、健康、进行时)',
    group: '-ar',
    isRegular: false,
    pastParticiple: 'estado',
    gerund: 'estando',
    derivationStory: '西语临时状态核心。词尾保留带重音符的特殊直陈形式 (estoy, estás, está...)，与 ser 形成终极哲学互补！过去时态为变异强词根 estuv-。',
    tenses: {
      presente: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
      indefinido: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
      imperfecto: ['estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban'],
      futuro: ['estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'],
      condicional: ['estaría', 'estarías', 'estaría', 'estaríamos', 'estaríais', 'estarían'],
      subjuntivo: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén']
    }
  },

  // 6. ir (全异化行走动词)
  {
    infinitive: 'ir',
    meaning: '去、前往 (与 a 搭配构成将来时)',
    group: '-ir',
    isRegular: false,
    pastParticiple: 'ido',
    gerund: 'yendo',
    derivationStory: '最狂野的异化动词！原形只有两个字母，直陈现在时化身 voy, vas, va...；过去时竟然借用了 ser 的 fui, fuiste...，二者合二为一！',
    tenses: {
      presente: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
      indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      imperfecto: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
      futuro: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'],
      condicional: ['iría', 'irías', 'iría', 'iríamos', 'iríais', 'irían'],
      subjuntivo: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan']
    }
  },

  // 7. tener (核心拥有动词 · -go派 + 靴子变音)
  {
    infinitive: 'tener',
    meaning: '有、拥有 (tener que 必须)',
    group: '-er',
    isRegular: false,
    isBootVerb: true,
    bootVowelChange: 'e->ie',
    pastParticiple: 'tenido',
    gerund: 'teniendo',
    derivationStory: '高频双重特性派：第一人称带有强大的 -go 结尾 (tengo)，而在 tú, él, ellos 靴内发生 e->ie 音变 (tienes, tiene, tienen)，只有 nosotros 和 vosotros 安全避险保留 ten-！',
    tenses: {
      presente: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
      indefinido: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
      imperfecto: ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían'],
      futuro: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'],
      condicional: ['tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'],
      subjuntivo: ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan']
    }
  },

  // 8. hacer (经典制作与做动词)
  {
    infinitive: 'hacer',
    meaning: '做、制造 (hace calor 天气热)',
    group: '-er',
    isRegular: false,
    pastParticiple: 'hecho',
    gerund: 'haciendo',
    derivationStory: 'Yo 反骨派！第一人称 hago，后续规则变位。过去分词为不规则 hecho。简单过去时为 hic- 词根 (hizo 第三人家 c 变 z 保持发音)。',
    tenses: {
      presente: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
      indefinido: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
      imperfecto: ['hacía', 'hacías', 'hacía', 'hacíamos', 'hacíais', 'hacían'],
      futuro: ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'],
      condicional: ['haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'],
      subjuntivo: ['haga', 'hagas', 'haga', 'hagamos', 'hagáis', 'hagan']
    }
  },

  // 9. pensar (【靴子法则】经典 e->ie 标杆)
  {
    infinitive: 'pensar',
    meaning: '思考、认为、打算',
    group: '-ar',
    isRegular: false,
    isBootVerb: true,
    bootVowelChange: 'e->ie',
    pastParticiple: 'pensado',
    gerund: 'pensando',
    derivationStory: '【靴子法则代表作】！重音落在词根 pen- 时，e 承受不住重压核爆为双元音 ie (pienso, piensas, piensa, piensan)；而 nosotros 和 vosotros 重音转移到词尾 pen-sa-mos，避开冲击保全原形 e！',
    tenses: {
      presente: ['pienso', 'piensas', 'piensa', 'pensamos', 'pensáis', 'piensan'],
      indefinido: ['pensé', 'pensaste', 'pensó', 'pensamos', 'pensasteis', 'pensaron'],
      imperfecto: ['pensaba', 'pensabas', 'pensaba', 'pensábamos', 'pensabais', 'pensaban'],
      futuro: ['pensaré', 'pensarás', 'pensará', 'pensaremos', 'pensaréis', 'pensarán'],
      condicional: ['pensaría', 'pensarías', 'pensaría', 'pensaríamos', 'pensaríais', 'pensarían'],
      subjuntivo: ['piense', 'pienses', 'piense', 'pensemos', 'penséis', 'piensen']
    }
  },

  // 10. volver (【靴子法则】经典 o->ue 标杆)
  {
    infinitive: 'volver',
    meaning: '返回、回来 (volver a + 动词 再次做某事)',
    group: '-er',
    isRegular: false,
    isBootVerb: true,
    bootVowelChange: 'o->ue',
    pastParticiple: 'vuelto',
    gerund: 'volviendo',
    derivationStory: '【o 变 ue 靴子标杆】！靴内四人称重音受力，单母音 o 爆破裂变为 ue (vuelvo, vuelves, vuelve, vuelven)；靴外的 nosotros (volvemos) 原模原样！',
    tenses: {
      presente: ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'volvéis', 'vuelven'],
      indefinido: ['volví', 'volviste', 'volvió', 'volvimos', 'volvisteis', 'volvieron'],
      imperfecto: ['volvía', 'volvías', 'volvía', 'volvíamos', 'volvíais', 'volvían'],
      futuro: ['volveré', 'volverás', 'volverá', 'volveremos', 'volveréis', 'volverán'],
      condicional: ['volvería', 'volverías', 'volvería', 'volveríamos', 'volveríais', 'volverían'],
      subjuntivo: ['vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan']
    }
  },

  // 11. pedir (【靴子法则】经典 e->i 标杆)
  {
    infinitive: 'pedir',
    meaning: '请求、要求、点餐',
    group: '-ir',
    isRegular: false,
    isBootVerb: true,
    bootVowelChange: 'e->i',
    pastParticiple: 'pedido',
    gerund: 'pidiendo',
    derivationStory: '【-ir 族独有 e->i 变音】！靴内人称元音变窄变高为 i (pido, pides, pide, piden)。在餐厅点餐用它最地道（¡Pido una paella!）',
    tenses: {
      presente: ['pido', 'pides', 'pide', 'pedimos', 'pedís', 'piden'],
      indefinido: ['pedí', 'pediste', 'pidió', 'pedimos', 'pedisteis', 'pidieron'],
      imperfecto: ['pedía', 'pedías', 'pedía', 'pedíamos', 'pedíais', 'pedían'],
      futuro: ['pediré', 'pedirás', 'pedirá', 'pediremos', 'pediréis', 'pedirán'],
      condicional: ['pediría', 'pedirías', 'pediría', 'pediríamos', 'pediríais', 'pedirían'],
      subjuntivo: ['pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan']
    }
  },

  // 12. poder (情态动词 · 能够)
  {
    infinitive: 'poder',
    meaning: '能够、可以 (¿Puedes ayudarme?)',
    group: '-er',
    isRegular: false,
    isBootVerb: true,
    bootVowelChange: 'o->ue',
    pastParticiple: 'podido',
    gerund: 'pudiendo',
    derivationStory: '高频情态动词。直陈现在时遵从 o->ue 靴子法则 (puedo, puedes, puede...)；简单过去时为变异 pud- 词根；条件式中常表委婉请求 (podría...)。',
    tenses: {
      presente: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
      indefinido: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
      imperfecto: ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían'],
      futuro: ['podré', 'podrás', 'podrá', 'podremos', 'podréis', 'podrán'],
      condicional: ['podría', 'podrías', 'podría', 'podríamos', 'podríais', 'podrían'],
      subjuntivo: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan']
    }
  }
];
