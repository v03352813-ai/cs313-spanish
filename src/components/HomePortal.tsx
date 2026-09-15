import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  FileCheck2, 
  Layers, 
  BookOpenCheck, 
  Sparkles, 
  Volume2, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  Bell, 
  RefreshCw, 
  Compass, 
  RotateCcw,
  GraduationCap,
  Globe2,
  ArrowRight,
  BookOpen,
  Zap,
  Mic,
  PenTool
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ActiveTab } from './Navbar';
import { WallpaperBanner } from './WallpaperBanner';
import { 
  DAILY_QUOTES_POOL, 
  CONTENT_UPDATE_LOGS, 
  getStudyStreak, 
  checkInToday, 
  DailyQuote 
} from '../data/cloudSync';
import { speakSpanish } from '../utils/speech';

export type TrackId = 'beginner' | 'cinema' | 'kaoyan' | 'dele';

interface TrackStep {
  stepNum: string;
  stepLabel: string;
  title: string;
  targetBadge: string;
  badgeBg: string;
  desc: string;
  actionText: string;
  targetTab: ActiveTab;
  icon: React.ComponentType<{ className?: string }>;
  buttonBg: string;
}

interface TrackConfig {
  id: TrackId;
  name: string;
  targetAudience: string;
  tag: string;
  icon: string;
  themeColorName: string;
  cardBg: string;
  cardBorder: string;
  tagBg: string;
  hoverBorder: string;
  hoverTitle: string;
  activeBorder: string;
  activeBg: string;
  activeRing: string;
  activeCheckmarkBg: string;
  activeTag: string;
  activeTitle: string;
  activeFooterText: string;
  bannerGrad: string;
  bannerDot: string;
  bannerBadgeBg: string;
  bannerBadgeText: string;
  desc: string;
  steps: TrackStep[];
}

const TRACKS_CONFIG: Record<TrackId, TrackConfig> = {
  beginner: {
    id: 'beginner',
    name: '零基础入门 / 地基巩固',
    targetAudience: '从字母大舌音到初级 · 稳扎稳打',
    tag: '系统筑基',
    icon: '🌱',
    themeColorName: '阳光金',
    cardBg: 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4]',
    cardBorder: 'border-[#E8DEC8]',
    tagBg: 'bg-[#F4EADA] text-[#785E39] border-[#DFD0BA]',
    hoverBorder: 'hover:border-[#D97706]',
    hoverTitle: 'group-hover:text-[#B45309]',
    activeBorder: 'border-[#D97706]',
    activeBg: 'bg-gradient-to-b from-[#FFFDF7] via-[#FAF3E3] to-[#F5EADA]',
    activeRing: 'ring-2 ring-[#D97706]/35 shadow-md',
    activeCheckmarkBg: 'bg-[#B45309]',
    activeTag: 'bg-white text-[#785E39] border-[#D97706]/50 shadow-2xs',
    activeTitle: 'text-[#78350F]',
    activeFooterText: 'text-[#B45309]',
    bannerGrad: 'bg-gradient-to-r from-[#FAF3E3] via-[#FAF6EE] to-white border-[#E8DEC8]',
    bannerDot: 'bg-[#D97706]',
    bannerBadgeBg: 'bg-white text-[#785E39] border-[#D97706]/40',
    bannerBadgeText: 'text-[#785E39]',
    desc: '初学者零压力科学路线：攻克 27 字母系统与 RRR 大舌颤音诊所 ➔ 玩转三大规则变位与靴子法则推导 ➔ 掌握 5,000+ 阴阳性核心词！',
    steps: [
      {
        stepNum: '01',
        stepLabel: '第 1 步 · 夯实语音',
        title: '27 字母体系与 RRR 大舌颤音诊所',
        targetBadge: '气流搭桥 · 舌尖振颤',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '系统学习西语字母发音、分音节与重音规则，独创 [tr]/[dr] 辅音连缀搭桥训练，彻底攻克大舌颤音。',
        actionText: '进入发音与大舌音实验室',
        targetTab: 'phonetics',
        icon: Sparkles,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '02',
        stepLabel: '第 2 步 · 攻破变位',
        title: '动词变位可视化演练器 (Conjugación)',
        targetBadge: '靴子法则 · 灵魂互换',
        badgeBg: 'bg-amber-50 text-amber-900 border border-amber-300',
        desc: '第一组(-ar)、第二组(-er)、第三组(-ir)规则变位与不规则靴子法则，一键对照直陈式与虚拟式。',
        actionText: '开启动词变位神器',
        targetTab: 'conjugation',
        icon: RotateCcw,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '03',
        stepLabel: '第 3 步 · 积累词汇',
        title: '5,000+ 核心高频词闪卡 (性数双标)',
        targetBadge: '♂阳性标 · ♀阴性标',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '告别背词不记性数大忌！严格标定阴阳性与前置词搭配，结合艾宾浩斯抗遗忘记忆曲线与真人朗读。',
        actionText: '背诵核心分级词汇',
        targetTab: 'vocab',
        icon: Layers,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '04',
        stepLabel: '第 4 步 · 搭建框架',
        title: '70+ 核心语法全景宝典',
        targetBadge: 'ser/estar · 宾格与与格',
        badgeBg: 'bg-amber-50 text-amber-900 border border-amber-300',
        desc: '冠词用法、直接与间接宾语代词位置、自复动词与 ser/estar 核心辨析，配备避坑指南。',
        actionText: '查阅体系文法宝典',
        targetTab: 'grammar',
        icon: BookOpenCheck,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      }
    ]
  },
  cinema: {
    id: 'cinema',
    name: '兴趣日常 / 西影金曲',
    targetAudience: '追剧看电影听西乐 · 突破哑巴西语',
    tag: '沉浸开口',
    icon: '🎙️',
    themeColorName: '西班牙红',
    cardBg: 'bg-gradient-to-b from-[#FFF9FA] via-[#FCF1F3] to-[#F7E5E9]',
    cardBorder: 'border-[#B82E24]/25',
    tagBg: 'bg-[#FEF2F2] text-[#B82E24] border-[#B82E24]/25',
    hoverBorder: 'hover:border-[#B82E24]',
    hoverTitle: 'group-hover:text-[#B82E24]',
    activeBorder: 'border-[#B82E24]',
    activeBg: 'bg-gradient-to-b from-[#FEF2F2] via-[#FDE8E8] to-[#FBD5D5]',
    activeRing: 'ring-2 ring-[#B82E24]/35 shadow-md',
    activeCheckmarkBg: 'bg-[#B82E24]',
    activeTag: 'bg-white text-[#B82E24] border-[#B82E24]/30 shadow-2xs',
    activeTitle: 'text-[#B82E24]',
    activeFooterText: 'text-[#B82E24]',
    bannerGrad: 'bg-gradient-to-r from-[#FEF2F2]/80 via-[#FAF8F5] to-white border-[#B82E24]/25',
    bannerDot: 'bg-[#B82E24]',
    bannerBadgeBg: 'bg-white text-[#B82E24] border-[#B82E24]/25',
    bannerBadgeText: 'text-[#B82E24]',
    desc: '告别死板背诵！甄选《纸钞屋》《寻梦环游记》《名校风暴》高光名场面 ➔ 逐句慢速盲听跟读 ➔ 每日金句养成纯正西语母语直觉。',
    steps: [
      {
        stepNum: '01',
        stepLabel: '第 1 步 · 影视精听',
        title: '西语高分经典影视原声台词精听',
        targetBadge: '0.75x慢速 · 逐句对齐',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20',
        desc: '原汁原味西班牙语切片，支持 0.75x 慢速播放、双语对照字幕与重点语法考点拆解，告别哑巴西语。',
        actionText: '进入西影金曲精听',
        targetTab: 'cinema',
        icon: Headphones,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '02',
        stepLabel: '第 2 步 · 语感打卡',
        title: '每日晨读原声金句自律打卡',
        targetBadge: '西语韵律 · 每日坚持',
        badgeBg: 'bg-amber-50 text-amber-900 border border-amber-300',
        desc: '每日精读一句地道西语原声名言，收听标准本土发音，连续打卡激活西语语言表达直觉。',
        actionText: '朗读今日金句',
        targetTab: 'home',
        icon: Calendar,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '03',
        stepLabel: '第 3 步 · AI实战',
        title: '马德里母语级 1v1 AI 口语对练室',
        targetBadge: '8大场景 · 智能测评',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20',
        desc: 'Tapas 酒吧点餐、马德里问路、DELE 考官面试场景，与母语级 AI 模拟对话，即时评估发音流利度。',
        actionText: '进入 AI 口语对练',
        targetTab: 'speaking',
        icon: Mic,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      }
    ]
  },
  kaoyan: {
    id: 'kaoyan',
    name: '全国高校专四 / 考研二外冲刺',
    targetAudience: '专四专八 · 考研二外冲刺高分通关',
    tag: '专业必过',
    icon: '🎯',
    themeColorName: '深蓝灰',
    cardBg: 'bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]',
    cardBorder: 'border-[#CBD5E1]',
    tagBg: 'bg-[#E2E8F0] text-[#1E293B] border-[#CBD5E1]',
    hoverBorder: 'hover:border-[#1E293B]',
    hoverTitle: 'group-hover:text-[#1E293B]',
    activeBorder: 'border-[#1E293B]',
    activeBg: 'bg-gradient-to-b from-[#EBF0F7] via-[#DCE5F1] to-[#CBD8E9]',
    activeRing: 'ring-2 ring-[#1E293B]/35 shadow-md',
    activeCheckmarkBg: 'bg-[#1E293B]',
    activeTag: 'bg-white text-[#1E293B] border-[#94A3B8] shadow-2xs',
    activeTitle: 'text-[#1E293B]',
    activeFooterText: 'text-[#1E293B]',
    bannerGrad: 'bg-gradient-to-r from-[#EBF0F7] via-[#F1F5F9] to-white border-[#CBD5E1]',
    bannerDot: 'bg-[#1E293B]',
    bannerBadgeBg: 'bg-white text-[#1E293B] border-[#CBD5E1]',
    bannerBadgeText: 'text-[#1E293B]',
    desc: '专为全国高校西语专四考生与考研二外考生打造的标准提分闭环：高校历届全真大卷摸底 ➔ 错题遗忘曲线靶向复盘 ➔ 动词时态与虚拟式攻坚 ➔ 命题作文逐句精批！',
    steps: [
      {
        stepNum: '01',
        stepLabel: '第 1 步 · 模考查漏',
        title: '高校专四 (TEM-4) & 考研二外全真大卷',
        targetBadge: '北外·上外·专四真题',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '全真还原考场倒计时，涵盖统考原卷与全国名校二外原卷，即做即看与全真模考双模式，精准测出薄弱项。',
        actionText: '进入真题考场',
        targetTab: 'exam',
        icon: FileCheck2,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '02',
        stepLabel: '第 2 步 · 靶向消错',
        title: '艾宾浩斯智能错题消灭',
        targetBadge: '遗忘曲线靶向重练',
        badgeBg: 'bg-amber-50 text-amber-900 border border-amber-300',
        desc: '真题考场做错的题目自动归集到专属错题本，按失分考点分类沉淀，靶向消除知识盲区。',
        actionText: '消灭待复习错题',
        targetTab: 'mistakes',
        icon: BookOpen,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '03',
        stepLabel: '第 3 步 · 考点攻坚',
        title: '动词时态与虚拟式专题特训',
        targetBadge: '过去未完成 vs 简单过去',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '专攻西语两大过去时辨析、条件假设句、虚拟式从句用法与双宾语代词顺序等命题高频陷阱。',
        actionText: '开启时态专项突破',
        targetTab: 'conjugation',
        icon: Zap,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '04',
        stepLabel: '第 4 步 · 写作提分',
        title: '西语命题短文与汉译西工坊',
        targetBadge: '名校题库 · 逐句批改',
        badgeBg: 'bg-emerald-50 text-emerald-900 border border-emerald-200',
        desc: '覆盖全国名校命题短文与高频汉译西长难句，AI 考官多维雷达打分，指出变位与性数配合漏洞。',
        actionText: '进入西语写作工坊',
        targetTab: 'writing',
        icon: PenTool,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      }
    ]
  },
  dele: {
    id: 'dele',
    name: 'DELE / SIELE 欧标考级 (A1-C1)',
    targetAudience: '塞万提斯官方认证 · 留学移民终身有效',
    tag: '国际认证',
    icon: '🌍',
    themeColorName: '阳光金',
    cardBg: 'bg-gradient-to-b from-[#FFFDF5] via-[#FAF4E2] to-[#F4E9C8]',
    cardBorder: 'border-amber-300',
    tagBg: 'bg-[#F6EDD0] text-[#8A6A1E] border-amber-300',
    hoverBorder: 'hover:border-[#D97706]',
    hoverTitle: 'group-hover:text-[#B45309]',
    activeBorder: 'border-[#D97706]',
    activeBg: 'bg-gradient-to-b from-[#FAF1D6] via-[#F3E3B6] to-[#E8CF8C]',
    activeRing: 'ring-2 ring-amber-400/55 shadow-md',
    activeCheckmarkBg: 'bg-[#B45309]',
    activeTag: 'bg-white text-[#8A6A1E] border-amber-400 shadow-2xs',
    activeTitle: 'text-[#78350F]',
    activeFooterText: 'text-[#8A6A1E]',
    bannerGrad: 'bg-gradient-to-r from-[#FAF1D6] via-[#FAF4E2] to-white border-amber-300',
    bannerDot: 'bg-[#D97706]',
    bannerBadgeBg: 'bg-white text-[#8A6A1E] border-amber-300',
    bannerBadgeText: 'text-[#8A6A1E]',
    desc: '专为 DELE A1/A2/B1/B2/C1 考生打造的标准通关路径：官方历届模考大卷全真机考 ➔ 5,000+ 欧标分级核心词汇 ➔ 70+ 核心文法考点避坑！',
    steps: [
      {
        stepNum: '01',
        stepLabel: '第 1 步 · 欧标模考',
        title: 'DELE / SIELE 历届官方欧标模考大卷',
        targetBadge: '官方机考 · 原声听力',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '全真还原 DELE 听力与阅读大题型，官方正统原语音频，自动评分与答案详解，攻克备考瓶颈。',
        actionText: '进入 DELE 全真考场',
        targetTab: 'exam',
        icon: Globe2,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '02',
        stepLabel: '第 2 步 · 欧标词汇',
        title: 'CEFR 分级核心高频词闪卡',
        targetBadge: '性数双标 · 抗遗忘',
        badgeBg: 'bg-amber-50 text-amber-900 border border-amber-300',
        desc: '严选 DELE A1-B2 必考核心词汇，严格标注阴阳性与前置词搭配，结合艾宾浩斯抗遗忘记忆曲线。',
        actionText: '背诵分级考纲词汇',
        targetTab: 'vocab',
        icon: Layers,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '03',
        stepLabel: '第 3 步 · 体系文法',
        title: '70+ 欧标核心语法全景宝典',
        targetBadge: '虚拟式时态配合 · 避坑指南',
        badgeBg: 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25',
        desc: '关系代词用法、过去未完成与过去完成时配合、条件式与虚拟式进阶，配独家欧标考级避坑指南。',
        actionText: '查阅体系文法宝典',
        targetTab: 'grammar',
        icon: BookOpenCheck,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      },
      {
        stepNum: '04',
        stepLabel: '第 4 步 · 欧标写作',
        title: 'DELE B1/B2 正式公函与议论短文',
        targetBadge: '信函规范 · 论证逻辑',
        badgeBg: 'bg-purple-50 text-purple-900 border border-purple-200',
        desc: 'DELE B2 投诉信、求职信行政公函与观点论证短文，提供标准信头骨架、万能连接词与高分范文。',
        actionText: '进入 DELE 写作工坊',
        targetTab: 'writing',
        icon: PenTool,
        buttonBg: 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-xs'
      }
    ]
  }
};

interface HomePortalProps {
  onSelectTab: (tab: ActiveTab) => void;
  onOpenWallpaperModal: () => void;
  onOpenMultiLangModal: () => void;
  onOpenVipModal: () => void;
  onOpenExamModal?: () => void;
  isVip: boolean;
}

export const HomePortal: React.FC<HomePortalProps> = ({
  onSelectTab,
  onOpenWallpaperModal,
  onOpenMultiLangModal,
  onOpenVipModal,
  onOpenExamModal,
  isVip
}) => {
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);
  const [streakData, setStreakData] = useState(() => getStudyStreak());
  const quote: DailyQuote = DAILY_QUOTES_POOL[currentQuoteIdx];

  // 学习主线选择器状态 (默认：DELE 欧标考级)
  const [selectedTrack, setSelectedTrack] = useState<TrackId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cs313_es_active_track');
      if (saved === 'beginner' || saved === 'cinema' || saved === 'kaoyan' || saved === 'dele') {
        return saved as TrackId;
      }
    }
    return 'dele';
  });

  const handleTrackChange = (track: TrackId) => {
    setSelectedTrack(track);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cs313_es_active_track', track);
    }
  };

  const handleTrackCardClick = (trackKey: TrackId) => {
    if (selectedTrack === trackKey) {
      const firstStep = TRACKS_CONFIG[trackKey].steps[0];
      handleStepClick(firstStep);
    } else {
      handleTrackChange(trackKey);
      setTimeout(() => {
        const roadmapElem = document.getElementById('track-steps-roadmap');
        if (roadmapElem) {
          roadmapElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  };

  const currentTrackConfig = TRACKS_CONFIG[selectedTrack];

  // Auto-scrolling update logs ticker state
  const [activeLogIndex, setActiveLogIndex] = useState<number>(0);
  const [isLogHovered, setIsLogHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isLogHovered) return;
    const timer = setInterval(() => {
      setActiveLogIndex(prev => (prev + 1) % CONTENT_UPDATE_LOGS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isLogHovered]);

  const handleCheckIn = () => {
    const newCount = checkInToday();
    setStreakData({ count: newCount, lastDate: new Date().toISOString().slice(0, 10), isCheckedToday: true });
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleNextQuote = () => {
    setCurrentQuoteIdx(prev => (prev + 1) % DAILY_QUOTES_POOL.length);
  };

  const handleStepClick = (step: TrackStep) => {
    if (step.targetTab === 'home') {
      speakSpanish(quote.audioText);
      const elem = document.getElementById('daily-quote-section');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onSelectTab(step.targetTab);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-2 sm:pt-2.5 pb-8 space-y-3 sm:space-y-3.5">
      
      {/* --- 1. 每日晨读打卡 (8 cols) & 持续更新动态跑马灯轮播 (4 cols) --- */}
      <div id="daily-quote-section" className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        
        {/* Compact Daily Morning Reading (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-3">
          
          {/* Header row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="p-1.5 rounded-lg bg-[#FEF2F2] text-[#B82E24] font-bold text-xs flex items-center gap-1 border border-[#B82E24]/20 shrink-0">
                <Calendar className="w-3.5 h-3.5" /> 每日晨读
              </span>
              <span className="text-xs font-bold text-slate-800 shrink-0">
                今日推荐 · 西语励志格言 · 每日自律
              </span>
              <span className="text-[10px] text-[#B82E24] bg-[#FEF2F2] px-1.5 py-0.2 rounded border border-[#B82E24]/25 font-bold hidden sm:inline">
                考点: {quote.keyGrammar}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
              <button
                onClick={handleNextQuote}
                className="text-[11px] text-slate-500 hover:text-[#B82E24] flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-amber-50 transition cursor-pointer font-bold shrink-0 whitespace-nowrap"
                title="切换金句"
              >
                <RefreshCw className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">换一句</span>
              </button>
            </div>
          </div>

          {/* Quote Body - Single sleek container */}
          <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-amber-100 flex items-center justify-between gap-3">
            <div className="space-y-0.5 min-w-0">
              <p className="text-sm sm:text-base font-extrabold text-slate-900 truncate font-serif">
                “{quote.spanish}”
              </p>
              <p className="text-xs text-slate-600 truncate font-medium">
                {quote.chinese}
                <span className="text-slate-400 font-normal ml-2">— {quote.source}</span>
              </p>
            </div>

            <button
              onClick={() => speakSpanish(quote.audioText)}
              className="p-2 rounded-full bg-white text-[#B82E24] hover:bg-amber-50 border border-amber-200 shadow-2xs shrink-0 transition cursor-pointer"
              title="朗读西语名言"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-between pt-0.5 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
              <Flame className="w-3.5 h-3.5 text-[#B82E24] fill-current" />
              <span>已连续打卡 <strong className="text-[#B82E24] font-bold">{streakData.count}</strong> 天</span>
            </div>

            <button
              onClick={handleCheckIn}
              disabled={streakData.isCheckedToday}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-2xs cursor-pointer ${
                streakData.isCheckedToday
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
                  : 'bg-[#B82E24] hover:bg-[#991B1B] text-white active:scale-95'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{streakData.isCheckedToday ? '今日已打卡 ✓' : '立即打卡'}</span>
            </button>
          </div>

        </div>

        {/* --- Auto-scrolling Vertical Ticker (4 cols) --- */}
        <div 
          onMouseEnter={() => setIsLogHovered(true)}
          onMouseLeave={() => setIsLogHovered(false)}
          className="lg:col-span-4 bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-2.5 relative overflow-hidden group"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Bell className="w-3.5 h-3.5 text-[#B82E24]" />
              <span>持续交付动态</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FEF2F2] text-[#B82E24] rounded-full border border-[#B82E24]/25">
                ● 自动滚播
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {activeLogIndex + 1}/{CONTENT_UPDATE_LOGS.length}
              </span>
            </div>
          </div>

          {/* Smooth Vertical Slide Ticker Area */}
          <div className="relative h-[66px] overflow-hidden">
            {CONTENT_UPDATE_LOGS.map((log, idx) => {
              const isCurrent = idx === activeLogIndex;
              return (
                <div
                  key={log.id}
                  className={`absolute inset-0 p-2.5 rounded-xl bg-[#FAF8F5] border border-amber-100 flex flex-col justify-center space-y-1 transition-all duration-500 ease-in-out ${
                    isCurrent
                      ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
                      : 'opacity-0 -translate-y-4 pointer-events-none scale-95'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <strong className="text-xs font-bold text-slate-900 truncate">
                      {log.title}
                    </strong>
                    <span className="text-[#B82E24] font-bold text-[10px] bg-[#FEF2F2] px-1.5 py-0.2 rounded border border-[#B82E24]/20 shrink-0">
                      {log.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">
                    {log.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-between pt-1 border-t border-amber-100 text-[11px] text-slate-400">
            <span>买家享永久云端同步解锁特权</span>
            <div className="flex items-center gap-1">
              {CONTENT_UPDATE_LOGS.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === activeLogIndex ? 'bg-[#B82E24] w-3' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* --- 2. 核心学习目标指引与 4 大主线选择器 --- */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 pb-3.5 sm:pb-4 border border-amber-200/80 shadow-xs space-y-3 sm:space-y-3.5">
        
        {/* Header with target badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              <span>新学员指引 · 学习主线向导</span>
              <span className="text-slate-500 font-normal hidden sm:inline">不知道从哪学起？点击下方选定你的目标：</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              你当前的核心学习目标是什么？
            </h2>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-xs font-bold text-slate-900">
            <span className="text-slate-400 font-normal">当前主线:</span>
            <span className="text-[#B82E24] font-black">{currentTrackConfig.name}</span>
          </div>
        </div>

        {/* Selected Track Banner (阳光金温暖微渐变) */}
        <div className={`p-3.5 rounded-2xl ${currentTrackConfig.bannerGrad} border shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs transition-all duration-300`}>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${currentTrackConfig.bannerDot} shrink-0 animate-pulse`} />
            <span className="font-black text-slate-900">
              【{currentTrackConfig.name}】闭环指引
            </span>
            <span className="text-slate-600 hidden md:inline">
              | {currentTrackConfig.desc}
            </span>
          </div>

          <button
            onClick={() => handleTrackCardClick(selectedTrack)}
            className="px-3 py-1 rounded-xl bg-white border border-amber-300 text-slate-800 font-bold hover:bg-amber-50 transition shrink-0 cursor-pointer shadow-2xs text-[11px]"
          >
            按顺序执行 {currentTrackConfig.steps.length} 步 ➔ 达成闭环
          </button>
        </div>

        {/* 4 Track Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {(Object.keys(TRACKS_CONFIG) as TrackId[]).map(trackKey => {
            const track = TRACKS_CONFIG[trackKey];
            const isSelected = selectedTrack === trackKey;

            return (
              <div
                key={track.id}
                onClick={() => handleTrackCardClick(trackKey)}
                className={`group relative rounded-2xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? `${track.activeBg} ${track.activeBorder} ${track.activeRing}`
                    : `${track.cardBg} ${track.cardBorder} hover:shadow-sm ${track.hoverBorder}`
                }`}
              >
                {/* Checkmark Indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#B82E24] text-white flex items-center justify-center shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between pr-5">
                    <span className="text-2xl">{track.icon}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? track.activeTag : track.tagBg}`}>
                      {track.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-black text-sm transition ${isSelected ? track.activeTitle : 'text-slate-900 ' + track.hoverTitle}`}>
                      {track.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-medium">
                      {track.targetAudience}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? track.activeFooterText : 'text-slate-400 group-hover:text-slate-600'}>
                    {isSelected ? '立即进入学习 (进入第一步)' : '点击切换此路线'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition group-hover:translate-x-0.5 ${isSelected ? track.activeFooterText : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap Steps Container (跟在 4 大主线卡片下方，融为一体，严格对标法语版) */}
        <div id="track-steps-roadmap" className="pt-1 space-y-2.5">
          <div className={`grid grid-cols-1 ${
            currentTrackConfig.steps.length === 2 
              ? 'sm:grid-cols-2' 
              : currentTrackConfig.steps.length === 4 
              ? 'sm:grid-cols-2 lg:grid-cols-4' 
              : 'sm:grid-cols-3 lg:grid-cols-3'
          } gap-3`}>
            {currentTrackConfig.steps.map((step) => {
              return (
                <div
                  key={step.stepNum}
                  className="bg-slate-50/80 hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-[#B82E24]/40 hover:shadow-xs transition flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2.5">
                    {/* Top row: STEP pill + target badge */}
                    <div className="flex items-center justify-between gap-1.5">
                      <span 
                        className="px-2.5 py-0.5 rounded-lg bg-[#29354A] text-white font-mono text-[11px] font-black tracking-wider flex items-center gap-1 shadow-2xs shrink-0 select-none"
                        title={step.stepLabel}
                      >
                        <span>STEP</span>
                        <span className="text-[#D97706]">{step.stepNum}</span>
                      </span>

                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap shrink-0 shadow-2xs ${step.badgeBg}`}>
                        {step.targetBadge}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-[#29354A] group-hover:text-[#B82E24] transition">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleStepClick(step)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer active:scale-98 ${step.buttonBg}`}
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* --- 3. 4K 壁纸奖励横幅 --- */}
      <WallpaperBanner streakCount={streakData.count} onOpenModal={onOpenWallpaperModal} />

    </div>
  );
};
