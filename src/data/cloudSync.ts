// Daily Quotes Pool & Study Streak Sync (Spanish Cultural Edition)
export interface DailyQuote {
  id: string;
  spanish: string;
  chinese: string;
  author: string;
  source: string;
  keyGrammar: string;
  audioText: string;
  tags: string[];
}

export const DAILY_QUOTES_POOL: DailyQuote[] = [
  {
    id: 'quote-1',
    spanish: 'El que lee mucho y anda mucho, ve mucho y sabe mucho.',
    chinese: '读万卷书、行万里路的人，见得多，知道的也多。',
    author: 'Miguel de Cervantes',
    source: '《堂吉诃德》Don Quijote de la Mancha',
    keyGrammar: '定语从句结构 "el que..." (凡是...的人)；动词 leer / andar / ver / saber 现在时变位。',
    audioText: 'El que lee mucho y anda mucho, ve mucho y sabe mucho.',
    tags: ['文学经典', '求知']
  },
  {
    id: 'quote-2',
    spanish: 'No llores porque ya se terminó, sonríe porque sucedió.',
    chinese: '不要因为结束而哭泣，微笑吧，为你曾经经历过。',
    author: 'Gabriel García Márquez',
    source: '加西亚·马尔克斯 (百年孤独作者)',
    keyGrammar: '否定命令式 "no llores" (虚拟式现在时) + 简单过去时 "terminó / sucedió"。',
    audioText: 'No llores porque ya se terminó, sonríe porque sucedió.',
    tags: ['人生感悟', '治愈']
  },
  {
    id: 'quote-3',
    spanish: 'Cada día es una nueva oportunidad para cambiar tu vida.',
    chinese: '每一天，都是改变人生的全新契机。',
    author: 'Proverbio Español',
    source: '西班牙民间箴言',
    keyGrammar: '介词 para + 动词原形表示目的；形容词 nueva 前置强调感情色彩。',
    audioText: 'Cada día es una nueva oportunidad para cambiar tu vida.',
    tags: ['励志', '自律']
  },
  {
    id: 'quote-4',
    spanish: 'El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.',
    chinese: '幸福的秘密不在于总能做自己想做的事，而在于始终热爱自己正在做的事。',
    author: 'León Tolstói (Traducido al español)',
    source: '名家智慧',
    keyGrammar: '对偶句型 "no es... sino..." (不是...而是...)；自复动词被动句 "lo que se hace"。',
    audioText: 'El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.',
    tags: ['心态', '成长']
  },
  {
    id: 'quote-5',
    spanish: 'Poco a poco se anda lejos.',
    chinese: '不积跬步，无以至千里。（只要坚持，步步皆远方。）',
    author: 'Refrán Popular',
    source: '西语经典谚语',
    keyGrammar: '固定短语 "poco a poco" (逐渐/慢慢地)；无人称句 "se anda lejos"。',
    audioText: 'Poco a poco se anda lejos.',
    tags: ['学习法则', '坚持']
  }
];

export interface ContentUpdateLog {
  id: string;
  date: string;
  version: string;
  tag: '真题上新' | '原声精听' | '考纲扩充' | '变位神器' | '功能升级';
  title: string;
  description: string;
}

export const CONTENT_UPDATE_LOGS: ContentUpdateLog[] = [
  {
    id: 'es-up-001',
    date: '本周最新',
    version: 'v2.6',
    tag: '原声精听',
    title: '西影精听全量扩充 30 部西语影史与拉美传世名片高光台词',
    description: '重磅收录《纸钞屋》《寻梦环游记》《看不见的客人》《百年孤独》《罗马》等 30 部高分名片名场面，标配全片连播、影子跟读打卡与台词挖空挑战，每周五自动扩充同步上新！'
  },
  {
    id: 'es-up-002',
    date: '本周最新',
    version: 'v2.5',
    tag: '真题上新',
    title: 'DELE A1-B2 官方国际模考全真机考题库扩充',
    description: '涵盖塞万提斯学院官方阅读长难句、听力原声精练与历年大考高频易错题解析。'
  },
  {
    id: 'es-up-003',
    date: '2026-09',
    version: 'v2.4',
    tag: '变位神器',
    title: '独创【靴子法则动词变位推导演练器】全量升级',
    description: '重磅覆盖直陈式现在时、未完成过去时、简单过去时与虚拟式现在时一键对照推导。'
  },
  {
    id: 'es-up-004',
    date: '2026-09',
    version: 'v2.2',
    tag: '考纲扩充',
    title: '5,000+ 欧标考纲高频词闪卡全量标定阴阳性与前置词搭配',
    description: '彻底解决西语性数配合混乱难题，配备艾宾浩斯抗遗忘记忆曲线与真人地道发音。'
  },
  {
    id: 'es-up-005',
    date: '2026-08',
    version: 'v2.1',
    tag: '功能升级',
    title: '27 字母与 RRR 大舌颤音诊所动画图解升级',
    description: '独家气流搭桥训练法：通过辅音连缀 [tr]/[dr] 引导舌尖振颤，告别发不出大舌音困扰。'
  }
];

const STREAK_KEY = 'cs313_es_streak_data';

export function getStudyStreak(): { count: number; lastDate: string; isCheckedToday: boolean } {
  if (typeof window === 'undefined') return { count: 1, lastDate: '', isCheckedToday: false };
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    const today = new Date().toISOString().slice(0, 10);
    if (!raw) return { count: 1, lastDate: '', isCheckedToday: false };
    const data = JSON.parse(raw);
    return {
      count: data.count || 1,
      lastDate: data.lastDate || '',
      isCheckedToday: data.lastDate === today
    };
  } catch {
    return { count: 1, lastDate: '', isCheckedToday: false };
  }
}

export function checkInToday(): number {
  if (typeof window === 'undefined') return 1;
  try {
    const streak = getStudyStreak();
    const today = new Date().toISOString().slice(0, 10);
    if (streak.isCheckedToday) return streak.count;

    let newCount = streak.count;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (streak.lastDate === yesterday) {
      newCount += 1;
    } else if (streak.lastDate !== today) {
      newCount = 1;
    }

    localStorage.setItem(STREAK_KEY, JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  } catch {
    return 1;
  }
}
