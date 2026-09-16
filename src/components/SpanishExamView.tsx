import React, { useState, useMemo, useEffect } from 'react';
import { 
  FileCheck2, 
  CheckCircle, 
  XCircle, 
  Sparkles, 
  Volume2, 
  Lock,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  RotateCcw,
  Timer,
  Award,
  BookOpen,
  Search,
  CheckCircle2,
  Calendar,
  Clock,
  Zap,
  Headphones,
  GraduationCap,
  Globe2,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPANISH_EXAM_PAPERS, ExamPaper, ExamQuestion, MainExamMode } from '../data/examData';
import { WrongRecord } from './MistakesView';
import { speakSpanish } from '../utils/speech';

interface SpanishExamViewProps {
  onSaveMistake: (record: WrongRecord) => void;
  onGoToMistakes: () => void;
  isVip: boolean;
  onOpenVipModal: (reason?: string) => void;
  onOpenExamModal?: () => void;
  onNavigateToWriting?: () => void;
  initialTrack?: string;
  onTrackChange?: (track: string) => void;
}

// 统一赛道类型：5赛道直接切换（法语风格大标签架构）
type ActiveTrack = 'kaoyan' | 'tem4' | 'dele' | 'siele' | 'drill';

export const SpanishExamView: React.FC<SpanishExamViewProps> = ({
  onSaveMistake,
  onGoToMistakes,
  isVip,
  onOpenVipModal,
  onOpenExamModal,
  onNavigateToWriting,
  initialTrack = 'marathon_full'
}) => {
  // 统一赛道选择（法语风格：直接切换 5 赛道，无需先选模式再筛赛道）
  const [activeTrack, setActiveTrack] = useState<ActiveTrack>('kaoyan');

  // 各赛道子筛选状态
  const [kaoyanSubFilter, setKaoyanSubFilter] = useState<string>('all');
  const [tem4SubFilter, setTem4SubFilter] = useState<string>('all');
  const [deleSubFilter, setDeleSubFilter] = useState<string>('all');
  const [sieleSubFilter, setSieleSubFilter] = useState<string>('all');
  const [drillSubFilter, setDrillSubFilter] = useState<string>('all');

  // 当前选中试卷与考场状态
  const [selectedPaperId, setSelectedPaperId] = useState<string>('paper-kaoyan-beiwai-2024');
  const [showOfficialGuide, setShowOfficialGuide] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showInstantExplanation, setShowInstantExplanation] = useState<boolean>(true);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);

  // 考场全真倒计时 (秒数)
  const [timeLeftSec, setTimeLeftSec] = useState<number>(130 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  // 兼容旧 mainMode 逻辑（考场计时器、重置、解析显示）
  const mainMode: MainExamMode = activeTrack === 'drill' ? 'special_drill' : 'marathon_full';

  // 试卷套数精确统计
  const marathonCount = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.mode === 'marathon_full').length, []);
  const drillCount = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.mode === 'special_drill').length, []);

  const tem4Count = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.track === 'tem4').length, []);
  const kaoyanCount = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.track === 'kaoyan' || p.track === 'kaoyan_mock').length, []);
  const deleCount = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.track === 'dele').length, []);
  const sieleCount = useMemo(() => SPANISH_EXAM_PAPERS.filter(p => p.track === 'siele').length, []);

  // 各赛道子分类动态统计
  const paperCounts = useMemo(() => {
    const kaoyan = SPANISH_EXAM_PAPERS.filter(p => p.track === 'kaoyan' || p.track === 'kaoyan_mock');
    const tem4 = SPANISH_EXAM_PAPERS.filter(p => p.track === 'tem4');
    const dele = SPANISH_EXAM_PAPERS.filter(p => p.track === 'dele');
    const siele = SPANISH_EXAM_PAPERS.filter(p => p.track === 'siele');
    const drill = SPANISH_EXAM_PAPERS.filter(p => p.mode === 'special_drill');
    return {
      kaoyan: {
        all: kaoyan.length,
        beiwai: kaoyan.filter(p => p.schoolOrOrg.includes('北京外国语大学')).length,
        shisu: kaoyan.filter(p => p.schoolOrOrg.includes('上海外国语大学')).length,
        gdufs: kaoyan.filter(p => p.schoolOrOrg.includes('广东外语外贸大学')).length,
        others985: kaoyan.filter(p =>
          p.schoolOrOrg.includes('北京大学') || p.schoolOrOrg.includes('南京大学') ||
          p.schoolOrOrg.includes('复旦') || p.schoolOrOrg.includes('武汉大学') ||
          p.schoolOrOrg.includes('四川外国语大学')
        ).length,
        sprint: kaoyan.filter(p => p.schoolOrOrg.includes('仿真') || p.schoolOrOrg.includes('教研组')).length,
      },
      tem4: {
        all: tem4.length,
        latest: tem4.filter(p => p.yearSession.includes('2024') || p.yearSession.includes('2023') || p.yearSession.includes('2022')).length,
        recent: tem4.filter(p => p.yearSession.includes('2021') || p.yearSession.includes('2020') || p.yearSession.includes('2019')).length,
        classic: tem4.filter(p => p.yearSession.includes('2018') || p.yearSession.includes('2017') || p.yearSession.includes('官方')).length,
      },
      dele: {
        all: dele.length,
        A1: dele.filter(p => p.level.includes('A1')).length,
        A2: dele.filter(p => p.level.includes('A2')).length,
        B1: dele.filter(p => p.level.includes('B1')).length,
        B2: dele.filter(p => p.level.includes('B2')).length,
      },
      siele: {
        all: siele.length,
        A2: siele.filter(p => p.level.includes('A2')).length,
        B1: siele.filter(p => p.level.includes('B1')).length,
        B2: siele.filter(p => p.level.includes('B2')).length,
      },
      drill: {
        all: drill.length,
        subjunctive: drill.filter(p => p.category === '虚拟式时态与句式专项').length,
        conjugation: drill.filter(p => p.category === '动词变位与时态辨析').length,
        pronoun: drill.filter(p => p.category === '双代词与固定前置词').length,
        reading: drill.filter(p => p.category === '长篇读解与社科文化').length,
      }
    };
  }, []);

  // 根据 activeTrack 与各赛道子筛选筛选试卷列表（法语风格统一赛道架构）
  const filteredPapers = useMemo(() => {
    return SPANISH_EXAM_PAPERS.filter(p => {
      // 赛道匹配
      if (activeTrack === 'kaoyan') {
        if (p.track !== 'kaoyan' && p.track !== 'kaoyan_mock') return false;
        if (kaoyanSubFilter === 'beiwai' && !p.schoolOrOrg.includes('北京外国语大学')) return false;
        if (kaoyanSubFilter === 'shisu' && !p.schoolOrOrg.includes('上海外国语大学')) return false;
        if (kaoyanSubFilter === 'gdufs' && !p.schoolOrOrg.includes('广东外语外贸大学')) return false;
        if (kaoyanSubFilter === 'others985' && !(
          p.schoolOrOrg.includes('北京大学') || p.schoolOrOrg.includes('南京大学') ||
          p.schoolOrOrg.includes('复旦') || p.schoolOrOrg.includes('武汉大学') ||
          p.schoolOrOrg.includes('四川外国语大学')
        )) return false;
        if (kaoyanSubFilter === 'sprint' && !(p.schoolOrOrg.includes('仿真') || p.schoolOrOrg.includes('教研组'))) return false;
      } else if (activeTrack === 'tem4') {
        if (p.track !== 'tem4') return false;
        if (tem4SubFilter === 'latest' && !(p.yearSession.includes('2024') || p.yearSession.includes('2023') || p.yearSession.includes('2022'))) return false;
        if (tem4SubFilter === 'recent' && !(p.yearSession.includes('2021') || p.yearSession.includes('2020') || p.yearSession.includes('2019'))) return false;
        if (tem4SubFilter === 'classic' && !(p.yearSession.includes('2018') || p.yearSession.includes('2017') || p.yearSession.includes('官方'))) return false;
      } else if (activeTrack === 'dele') {
        if (p.track !== 'dele') return false;
        if (deleSubFilter !== 'all' && !p.level.includes(deleSubFilter)) return false;
      } else if (activeTrack === 'siele') {
        if (p.track !== 'siele') return false;
        if (sieleSubFilter !== 'all' && !p.level.includes(sieleSubFilter)) return false;
      } else if (activeTrack === 'drill') {
        if (p.mode !== 'special_drill') return false;
        if (drillSubFilter === 'subjunctive' && p.category !== '虚拟式时态与句式专项') return false;
        if (drillSubFilter === 'conjugation' && p.category !== '动词变位与时态辨析') return false;
        if (drillSubFilter === 'pronoun' && p.category !== '双代词与固定前置词') return false;
        if (drillSubFilter === 'reading' && p.category !== '长篇读解与社科文化') return false;
      }

      // 搜索匹配
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.yearSession.toLowerCase().includes(q) ||
          p.level.toLowerCase().includes(q) ||
          p.schoolOrOrg.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [activeTrack, kaoyanSubFilter, tem4SubFilter, deleSubFilter, sieleSubFilter, drillSubFilter, searchQuery]);

  // 当筛选变化时保持试卷同步
  useEffect(() => {
    if (filteredPapers.length > 0 && !filteredPapers.some(p => p.id === selectedPaperId)) {
      setSelectedPaperId(filteredPapers[0].id);
    }
  }, [filteredPapers, selectedPaperId]);

  const paper: ExamPaper = filteredPapers.find(p => p.id === selectedPaperId) || filteredPapers[0] || SPANISH_EXAM_PAPERS[0];
  const isLocked = !isVip && !paper.isFreePreview;
  const currentQ: ExamQuestion | undefined = paper?.questions[currentQuestionIndex];

  // 动态计算当前试卷的大题板块（Section Tabs），提供一键锚点跳转
  const sectionTabs = useMemo(() => {
    if (!paper || !paper.questions || paper.questions.length === 0) return [];

    const tabs: { key: string; name: string; icon: string; startIndex: number; count: number; isActive: boolean }[] = [];
    const qList = paper.questions;

    let lStart = -1, lCount = 0;
    let gStart = -1, gCount = 0;
    let cStart = -1, cCount = 0;
    let rStart = -1, rCount = 0;

    qList.forEach((q, idx) => {
      if (q.type === 'listening') {
        if (lStart === -1) lStart = idx;
        lCount++;
      } else if (q.type === 'grammar') {
        if (gStart === -1) gStart = idx;
        gCount++;
      } else if (q.type === 'cloze') {
        if (cStart === -1) cStart = idx;
        cCount++;
      } else if (q.type === 'reading') {
        if (rStart === -1) rStart = idx;
        rCount++;
      }
    });

    const curQType = currentQ?.type;

    if (lCount > 0) {
      tabs.push({
        key: 'listening',
        name: '听力理解',
        icon: '🎧',
        startIndex: lStart,
        count: lCount,
        isActive: curQType === 'listening'
      });
    }
    if (gCount > 0) {
      tabs.push({
        key: 'grammar',
        name: '词汇语法',
        icon: '📝',
        startIndex: gStart,
        count: gCount,
        isActive: curQType === 'grammar'
      });
    }
    if (cCount > 0) {
      tabs.push({
        key: 'cloze',
        name: '完型填空',
        icon: '🧩',
        startIndex: cStart,
        count: cCount,
        isActive: curQType === 'cloze'
      });
    }
    if (rCount > 0) {
      tabs.push({
        key: 'reading',
        name: '阅读理解',
        icon: '📖',
        startIndex: rStart,
        count: rCount,
        isActive: curQType === 'reading'
      });
    }

    return tabs;
  }, [paper, currentQuestionIndex, currentQ]);

  // 切换试卷或模式时重置考场
  useEffect(() => {
    setAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setTimeLeftSec((paper?.durationMinutes || 130) * 60);
    setTimerRunning(mainMode !== 'special_drill');
  }, [paper?.id, mainMode]);

  // 倒计时心跳
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && !isSubmitted && timeLeftSec > 0) {
      interval = setInterval(() => {
        setTimeLeftSec(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, isSubmitted, timeLeftSec]);

  const handleSelectOption = (qId: string, optKey: string) => {
    if (isLocked) {
      onOpenVipModal();
      return;
    }
    setAnswers(prev => ({ ...prev, [qId]: optKey }));
  };

  // 智能计算得分与预估评级
  const calculateScore = () => {
    if (!paper) return { earned: 0, total: 100, percentage: 0, gradeEstimate: '' };
    let earned = 0;
    let total = 0;
    paper.questions.forEach(q => {
      total += q.score;
      if (answers[q.id] === q.correctAnswer) {
        earned += q.score;
      }
    });
    const percentage = total > 0 ? Math.round((earned / total) * 100) : 0;
    earned = Math.round(earned);
    total = Math.round(total);

    let gradeEstimate = 'TEM-4 及格 (60分+)';
    if (paper.track === 'tem4') {
      if (percentage >= 85) gradeEstimate = 'TEM-4 优秀 (85分+ · 卓越高分)';
      else if (percentage >= 70) gradeEstimate = 'TEM-4 良好 (70分+ · 稳定发挥)';
      else if (percentage >= 60) gradeEstimate = 'TEM-4 通过及格线 (60分+)';
      else gradeEstimate = '暂未达标及格线 (建议强化语法与长篇阅读)';
    } else if (paper.track === 'kaoyan') {
      if (percentage >= 88) gradeEstimate = '考研二外 90分+ (顶尖名校公费冲刺水准)';
      else if (percentage >= 75) gradeEstimate = '考研二外 80分+ (高分稳固过线)';
      else if (percentage >= 60) gradeEstimate = '考研二外 65分+ (基本达标线)';
      else gradeEstimate = '暂未达标 60分 (建议强化虚拟式与完型填空)';
    } else if (paper.track === 'dele') {
      if (percentage >= 75) gradeEstimate = 'DELE 官方评估: APTO (高分卓越合格)';
      else if (percentage >= 60) gradeEstimate = 'DELE 官方评估: APTO (合格通过认证)';
      else gradeEstimate = 'DELE 官方评估: NO APTO (未达标，需加强听力与长文)';
    } else {
      if (percentage >= 80) gradeEstimate = '专项攻坚评级: 极佳 (熟练掌握该题型)';
      else if (percentage >= 60) gradeEstimate = '专项攻坚评级: 良好 (仍有个别变位盲区)';
      else gradeEstimate = '专项攻坚评级: 需强化 (建议多刷该分类专项卷)';
    }

    return { earned, total, percentage, gradeEstimate };
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setTimerRunning(false);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    // 自动归集错题至错题本
    try {
      const wrongQuestions = paper.questions.filter(
        q => answers[q.id] !== undefined && answers[q.id] !== q.correctAnswer
      );
      wrongQuestions.forEach(wq => {
        onSaveMistake({
          id: `mistake-${Date.now()}-${wq.id}`,
          paperId: paper.id,
          paperTitle: paper.title,
          question: wq,
          wrongUserAnswer: answers[wq.id] || '',
          dateAdded: new Date().toLocaleDateString('zh-CN')
        });
      });
    } catch (e) {
      console.warn('[SpanishExamView] Save mistake warning:', e);
    }
  };

  const resetExam = () => {
    setAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setTimeLeftSec((paper?.durationMinutes || 130) * 60);
    setTimerRunning(mainMode !== 'special_drill');
  };

  const formatTimer = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remainingSecs = secs % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const scoreResult = isSubmitted ? calculateScore() : null;

  const handleSelectPaper = (targetPaper: ExamPaper) => {
    const pIdx = filteredPapers.findIndex(p => p.id === targetPaper.id);
    const isLockedPaper = !isVip && !targetPaper.isFreePreview && pIdx !== 0;

    if (isLockedPaper) {
      onOpenVipModal(`🔒《${targetPaper.title}》为 VIP 专属高频考卷！升级 VIP 终身卡（仅 ¥49.9），即可解锁全部 80 套西班牙语专四 75 题、考研二外 60 题、DELE/SIELE 欧标大卷与四大题型专项攻坚！`);
      return;
    }

    setSelectedPaperId(targetPaper.id);
    resetExam();
  };

  return (
    <div className="w-full space-y-3 sm:space-y-3.5 pb-8 animate-in fade-in duration-300">
      
      {/* Top Hero Banner (法语研习社同款权威大横幅) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
              🏛️ 西班牙国家级与国际官方全真机考大卷库
            </span>
            <span className="text-xs text-stone-500 font-medium">
              80套全国名校历年全卷 · 4,872道官方全真试题 · 100分标准实测评分 · 词汇语法 / 动词变位 / 完形填空 / 实用告示 / 原声听解 / 社科长篇读解
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            西班牙语国家统考与国际认证全真机考大卷库
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            涵盖全国名校考研二外 (北京外国语大学/上海外国语大学/广东外语外贸大学/北大/人大等历年真题)、全国高校西语专四 (TEM-4)、塞万提斯学院 DELE / SIELE 欧标国际认证与四大考点专项突破！
          </p>
        </div>

        {/* 倒计时与重置 */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          {mainMode !== 'special_drill' && (
            <div className="flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-xl shadow-xs font-mono font-bold text-xs">
              <Timer className="w-3.5 h-3.5 text-amber-400" />
              <span>倒计时: {formatTimer(timeLeftSec)}</span>
            </div>
          )}
          <button
            onClick={resetExam}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
            title="清空答题重新开始"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重置</span>
          </button>
        </div>
      </div>

      {/* 📌 赛道官方考纲权威说明横幅 (可折叠，默认收起以节约首屏空间) */}
      <div className="rounded-2xl bg-gradient-to-r from-red-50/50 via-slate-50 to-white border border-slate-200/80 overflow-hidden text-xs">
        <div
          onClick={() => setShowOfficialGuide(!showOfficialGuide)}
          className="p-3.5 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50/60 transition"
        >
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 animate-pulse ${
              activeTrack === 'kaoyan' ? 'bg-blue-600' : activeTrack === 'tem4' ? 'bg-red-600' : activeTrack === 'dele' ? 'bg-emerald-600' : activeTrack === 'siele' ? 'bg-amber-600' : 'bg-slate-700'
            }`} />
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`font-black ${
                activeTrack === 'kaoyan' ? 'text-blue-800' : activeTrack === 'tem4' ? 'text-red-800' : activeTrack === 'dele' ? 'text-emerald-800' : activeTrack === 'siele' ? 'text-amber-800' : 'text-slate-800'
              }`}>
                {activeTrack === 'kaoyan' ? `🎓 全国硕士考研二外西语·历年名校大卷 (${paperCounts.kaoyan.all}套)` 
                  : activeTrack === 'tem4' ? `🔴 全国高校西班牙语专业四级 (TEM-4) 统考大卷 (${tem4Count}套)`
                  : activeTrack === 'dele' ? `🌍 DELE 塞万提斯学院官方权威认证大卷 (${paperCounts.dele.all}套)`
                  : activeTrack === 'siele' ? `🟡 SIELE 国际机考综合与分级大卷 (${paperCounts.siele.all}套)`
                  : `⚡ 西班牙语高频难点四大分类题型专项突破 (${paperCounts.drill.all}套)`}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white text-slate-700 border border-slate-200">
                {activeTrack === 'kaoyan' ? '自主命题 · 60题 · 180分' 
                  : activeTrack === 'tem4' ? '官方考纲 · 75题 · 130分'
                  : activeTrack === 'dele' ? '官方标准 · 60题 · APTO'
                  : activeTrack === 'siele' ? '国际评估 · 60题'
                  : '靶向精练 · 12题'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {onNavigateToWriting && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToWriting();
                }}
                className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] shrink-0 flex items-center gap-1 shadow-2xs transition active:scale-98 cursor-pointer"
              >
                <span>✍️ AI 写作</span>
              </button>
            )}
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
              <span>{showOfficialGuide ? '收起考纲' : '查看考纲'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showOfficialGuide ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>

        {showOfficialGuide && (
          <div className="px-4 pb-3.5 pt-1 text-slate-600 leading-relaxed font-medium border-t border-slate-200/60 bg-white/60">
            {activeTrack === 'kaoyan' && (
              <p>全面收录北京外国语大学、上海外国语大学、广东外语外贸大学、北京大学、南京大学、复旦大学、武汉大学等历年统考真题编年卷，重点考察 <strong>【虚拟式从句·变位时态·双代词连写】</strong> 与 <strong>【社科长篇阅读逻辑】</strong>，满分 100 分。</p>
            )}
            {activeTrack === 'tem4' && (
              <p>全国高校外语指导委员会权威命题，严格按 1:1 官方考卷比例配置：<strong>【听力理解 15题 + 词汇语法 30题 + 完型填空 10题 + 阅读理解 20题】</strong>，满额 75 题客观全真卷。</p>
            )}
            {activeTrack === 'dele' && (
              <p>西班牙塞万提斯学院官方终身认证机考母卷，覆盖 A1、A2、B1、B2 级别，精准配备<strong>考场原声朗读音频</strong>与<strong>逐题深度详析</strong>，满额 60 题大卷。</p>
            )}
            {activeTrack === 'siele' && (
              <p>西班牙语国际评估测试 (SIELE)，涵盖 S1-S4 综合模块与全球自适应冲刺大卷，真实还原线上机考界面与答题流程。</p>
            )}
            {activeTrack === 'drill' && (
              <p>直击中国西语学习者四大高频失分痛点：<strong>【虚拟式时态与句式】</strong>、<strong>【动词变位与时态辨析】</strong>、<strong>【双代词与固定前置词】</strong>、<strong>【长篇读解与社科文化】</strong>，配备做题即时解析！</p>
            )}
          </div>
        )}
      </div>

      {/* Track Switcher & Filter Card (大标签 + 二级子分类 + 卷库卡片网格) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-4">
        
        {/* Track Switcher Tabs (五大赛道大标签) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/70">
          <button
            onClick={() => {
              setActiveTrack('kaoyan');
              setKaoyanSubFilter('all');
              setSelectedPaperId('paper-kaoyan-beiwai-2024');
              resetExam();
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'kaoyan'
                ? 'bg-blue-600 text-white shadow-xs font-black'
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>🎓 考研二外 ({paperCounts.kaoyan.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('tem4');
              setTem4SubFilter('all');
              setSelectedPaperId('paper-tem4-2024');
              resetExam();
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'tem4'
                ? 'bg-red-600 text-white shadow-xs font-black'
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>🔴 专四 TEM-4 ({tem4Count}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('dele');
              setDeleSubFilter('all');
              setSelectedPaperId('paper-dele-a1-01');
              resetExam();
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'dele'
                ? 'bg-emerald-600 text-white shadow-xs font-black'
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <Globe2 className="w-4 h-4" />
            <span>🌍 DELE 欧标 ({paperCounts.dele.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('siele');
              setSieleSubFilter('all');
              setSelectedPaperId('paper-siele-s1-01');
              resetExam();
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'siele'
                ? 'bg-amber-600 text-white shadow-xs font-black'
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>🟡 SIELE 机考 ({paperCounts.siele.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('drill');
              setDrillSubFilter('all');
              setSelectedPaperId('paper-drill-sub-01');
              resetExam();
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'drill'
                ? 'bg-slate-800 text-white shadow-xs font-black'
                : 'text-slate-700 hover:bg-white/60'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>⚡ 专项攻坚突破 ({paperCounts.drill.all}套)</span>
          </button>
        </div>

        {/* Sub-Filters: 分类筛选 */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 shrink-0">
            <span className={`w-1.5 h-3.5 rounded-full ${
              activeTrack === 'kaoyan' ? 'bg-blue-600' : activeTrack === 'tem4' ? 'bg-red-600' : activeTrack === 'dele' ? 'bg-emerald-600' : activeTrack === 'siele' ? 'bg-amber-600' : 'bg-slate-700'
            }`} />
            <span>分类筛选:</span>
          </div>

          {activeTrack === 'kaoyan' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: `全部考研真题 (${paperCounts.kaoyan.all})` },
                { id: 'beiwai', label: `北京外国语大学 (${paperCounts.kaoyan.beiwai})` },
                { id: 'shisu', label: `上海外国语大学 (${paperCounts.kaoyan.shisu})` },
                { id: 'gdufs', label: `广东外语外贸大学 (${paperCounts.kaoyan.gdufs})` },
                { id: 'others985', label: `985名校联盟 (${paperCounts.kaoyan.others985})` },
                { id: 'sprint', label: `全真冲刺大卷 (${paperCounts.kaoyan.sprint})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setKaoyanSubFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    kaoyanSubFilter === f.id
                      ? 'bg-blue-600 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {activeTrack === 'tem4' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: `全部专四真题 (${paperCounts.tem4.all})` },
                { id: 'latest', label: `2024~2022 最新卷 (${paperCounts.tem4.latest})` },
                { id: 'recent', label: `2021~2019 历年真题 (${paperCounts.tem4.recent})` },
                { id: 'classic', label: `经典真题与仿真 (${paperCounts.tem4.classic})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setTem4SubFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tem4SubFilter === f.id
                      ? 'bg-red-600 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {activeTrack === 'dele' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: `全部欧标考卷 (${paperCounts.dele.all})` },
                { id: 'A1', label: `A1 入门级 (${paperCounts.dele.A1})` },
                { id: 'A2', label: `A2 基础级 (${paperCounts.dele.A2})` },
                { id: 'B1', label: `B1 进阶级 (${paperCounts.dele.B1})` },
                { id: 'B2', label: `B2 中高级 (${paperCounts.dele.B2})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setDeleSubFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    deleSubFilter === f.id
                      ? 'bg-emerald-600 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {activeTrack === 'siele' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: `全部机考大卷 (${paperCounts.siele.all})` },
                { id: 'A2', label: `A2 分级卷 (${paperCounts.siele.A2})` },
                { id: 'B1', label: `B1 综合卷 (${paperCounts.siele.B1})` },
                { id: 'B2', label: `B2 高分冲刺卷 (${paperCounts.siele.B2})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSieleSubFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    sieleSubFilter === f.id
                      ? 'bg-amber-600 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          {activeTrack === 'drill' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: `全部专项攻坚 (${paperCounts.drill.all})` },
                { id: 'subjunctive', label: `虚拟式时态与句式 (${paperCounts.drill.subjunctive})` },
                { id: 'conjugation', label: `动词变位与时态 (${paperCounts.drill.conjugation})` },
                { id: 'pronoun', label: `双代词与固定前置词 (${paperCounts.drill.pronoun})` },
                { id: 'reading', label: `长篇读解与社科文化 (${paperCounts.drill.reading})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setDrillSubFilter(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    drillSubFilter === f.id
                      ? 'bg-slate-800 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Paper Selector: Visual Scrollable Cards */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-red-600" />
              <span>当前可作答试卷 ({filteredPapers.length} 套):</span>
            </span>
            <div className="flex items-center gap-3">
              {activeTrack === 'drill' && (
                <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 text-[11px]">做题即时解析:</span>
                  <button
                    onClick={() => setShowInstantExplanation(!showInstantExplanation)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                      showInstantExplanation ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {showInstantExplanation ? '已开启' : '关闭'}
                  </button>
                </div>
              )}
              <span className="text-[11px] text-stone-400">点击卡片直接进入考场</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[230px] overflow-y-auto scrollbar-thin p-1">
            {filteredPapers.map((p, idx) => {
              const isSelected = selectedPaperId === p.id;
              const isFree = p.isFreePreview;
              const isLocked = !isVip && !isFree && idx !== 0;

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPaper(p)}
                  className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between cursor-pointer relative ${
                    isSelected
                      ? 'bg-red-50/70 border-2 border-red-600 shadow-xs'
                      : isLocked
                      ? 'bg-slate-50/70 hover:bg-slate-100/90 border-slate-200/70'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                        isFree || idx === 0
                          ? 'bg-emerald-100 text-emerald-800' 
                          : isVip 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isFree || idx === 0 ? '✓ 免费试考' : isVip ? '★ VIP专享' : '🔒 VIP专属'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium truncate max-w-[140px]">
                        {p.schoolOrOrg}
                      </span>
                    </div>

                    <h4 className={`text-xs font-black line-clamp-1 ${isSelected ? 'text-red-700' : 'text-slate-900'}`}>
                      {p.title}
                    </h4>
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{p.questions.length} 题 · 满分 {p.totalScore || 100}分</span>
                    <span>{p.durationMinutes} 分钟</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Locked Paper Barrier Screen for Non-VIP */}
      {!isVip && !paper.isFreePreview && filteredPapers.indexOf(paper) !== 0 ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-red-200 shadow-xl text-center space-y-4 max-w-xl mx-auto my-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-black text-slate-900">《{paper.title}》为 VIP 专属高分真题考场</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            该套试卷包含 {paper.questions.length} 道全真试题、听力原声音频与逐题双语名师拆解。免费学员仅开放首套体验卷。升级 VIP 终身卡（仅 ¥49.9），立享全站 {SPANISH_EXAM_PAPERS.length} 套大卷无限次实战刷题、原声调速精听与错题本自动归集！
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenVipModal(`🔒《${paper.title}》为 VIP 会员专享试卷！升级 VIP 终身卡（仅 ¥49.9），即可畅刷 ${SPANISH_EXAM_PAPERS.length} 套官方全真满额大卷与专项突破！`)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-xs shadow-lg shadow-red-500/25 transition cursor-pointer"
            >
              立即升级 VIP 解锁全套真题 (¥49.9)
            </button>
            <button
              onClick={() => setSelectedPaperId(filteredPapers[0].id)}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
            >
              返回免费体验卷
            </button>
          </div>
        </div>
      ) : currentQ ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left 8 Cols: Question Details */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-md space-y-6">
            
            {/* 考卷各大板块快速直达 (听力理解 / 词汇语法 / 完型填空 / 阅读理解 / 主观写作) */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold text-slate-500 pl-2 shrink-0">考卷板块:</span>
              {sectionTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setCurrentQuestionIndex(tab.startIndex)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    tab.isActive
                      ? 'bg-red-600 text-white shadow-xs font-black'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/60'
                  }`}
                  title={`直接跳转到【${tab.name}】首题`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${tab.isActive ? 'bg-white/25 text-white font-black' : 'bg-slate-100 text-slate-600'}`}>
                    {tab.count}题
                  </span>
                </button>
              ))}

              {onNavigateToWriting && (
                <button
                  onClick={onNavigateToWriting}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs ml-auto cursor-pointer"
                  title="前往西语专属 AI 写作与翻译实验室"
                >
                  <span>✍️</span>
                  <span>主观写作工坊</span>
                  <ChevronRight className="w-3 h-3 text-amber-700" />
                </button>
              )}
            </div>

            {/* Question Tag & Audio Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-extrabold text-xs">
                  第 {currentQ.questionNumber} 题 / 共 {paper.questions.length} 题
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">
                  {currentQ.categoryTag}
                </span>
                <span className="text-[11px] text-slate-400">
                  [{currentQ.score}分]
                </span>
              </div>

              {/* Audio Player & Speed Controller */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[11px] font-bold">
                  {[0.8, 1.0, 1.2].map((s) => (
                    <button
                      key={s}
                      onClick={() => setAudioSpeed(s)}
                      className={`px-1.5 py-0.5 rounded transition cursor-pointer ${
                        audioSpeed === s ? 'bg-red-600 text-white shadow-2xs font-black' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => speakSpanish(currentQ.audioScript || currentQ.passage || currentQ.questionText, audioSpeed)}
                  className="px-2.5 py-1 rounded-xl bg-red-50 hover:bg-red-100 text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1 transition shadow-2xs cursor-pointer"
                  title="朗读题目西班牙语音频"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>朗读原音 ({audioSpeed}x)</span>
                </button>
              </div>
            </div>

            {/* Official Question Title Headline */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400">
                [Pregunta Oficial] Lee atentamente y selecciona la opción correcta:
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {currentQ.title}
              </h3>
            </div>

            {/* Reading Passage / Context Box - Authentic Spanish Exam Layout */}
            {currentQ.passage && (
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/40 border-2 border-amber-200/80 text-sm sm:text-base font-medium text-slate-900 leading-loose whitespace-pre-line select-text shadow-xs relative">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-200/60">
                  <span className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-red-600" />
                    <span>[Texto de Lectura · 官方全真篇章材料]</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-amber-800 border border-amber-200">
                    西语原汁原味权威语料
                  </span>
                </div>
                <div className="font-serif sm:text-[15px] text-slate-900 leading-relaxed tracking-wide">
                  {currentQ.passage}
                </div>
              </div>
            )}

            {/* Question sentence */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base font-bold text-slate-900">
              {currentQ.questionText}
            </div>

            {/* Options List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 block">
                [Opciones · 4选1单项选择]：
              </span>
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.key;
                const isCorrect = currentQ.correctAnswer === opt.key;
                const userAnswered = answers[currentQ.id] !== undefined;
                // 只对【用户实际作答过的题目】才展示对错反馈，未作答题目即使交卷也不显示正确答案
                const showFeedback = userAnswered && (isSubmitted || (mainMode === 'special_drill' && showInstantExplanation));

                let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
                if (isSelected) {
                  optionStyle = 'bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20 font-bold';
                }
                if (showFeedback) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500 text-white border-emerald-500 shadow-md font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-500 text-white border-rose-500 shadow-md font-bold';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(currentQ.id, opt.key)}
                    className={`w-full p-4 rounded-2xl border text-left transition flex items-center justify-between gap-3 text-sm cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        isSelected || (showFeedback && isCorrect)
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="font-medium">{opt.text}</span>
                    </div>

                    {showFeedback && (
                      <span className="shrink-0">
                        {isCorrect ? <CheckCircle className="w-5 h-5" /> : isSelected ? <XCircle className="w-5 h-5" /> : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant / Post-Submit Explanation Card — 只对已作答题目显示，不泄露未作答题的正确答案 */}
            {answers[currentQ.id] !== undefined && (isSubmitted || (mainMode === 'special_drill' && showInstantExplanation)) && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between font-bold text-amber-900 border-b border-amber-200/60 pb-2">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>官方教研答案解析与考点拆解</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-extrabold text-[11px]">
                    正确答案: 选项 {currentQ.correctAnswer}
                  </span>
                </div>

                <div className="space-y-1.5 text-slate-700">
                  <strong className="text-amber-950 block">💡 考点深度剖析：</strong>
                  <p className="leading-relaxed">
                    {currentQ.explanationDetail?.analysis || currentQ.explanation}
                  </p>
                </div>

                {currentQ.explanationDetail?.translation && (
                  <div className="space-y-1.5 text-slate-700">
                    <strong className="text-amber-950 block">📖 全文/原句中文翻译：</strong>
                    <p className="leading-relaxed text-slate-600">{currentQ.explanationDetail.translation}</p>
                  </div>
                )}

                {/* Audio Script Review Box if available */}
                {currentQ.audioScript && (
                  <div className="bg-white p-3.5 rounded-xl border border-amber-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-900 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-red-600" />
                        <span>🎧 官方听力对话录音原文大纲 (Transcripción de Audio)</span>
                      </span>
                      <button
                        onClick={() => speakSpanish(currentQ.audioScript || '', audioSpeed)}
                        className="px-2 py-0.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] flex items-center gap-1 transition shadow-2xs cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>精听重播 ({audioSpeed}x)</span>
                      </button>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-800 font-medium leading-relaxed font-mono text-[11px] whitespace-pre-line border border-slate-200/60">
                      {currentQ.audioScript}
                    </div>
                  </div>
                )}

                {currentQ.explanationDetail?.vocabList && currentQ.explanationDetail.vocabList.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <strong className="text-amber-950 block">🔑 核心考点高频词：</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {currentQ.explanationDetail.vocabList.map((v, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-amber-200 text-amber-900 font-mono text-[11px]">
                          <strong>{v.word}</strong>: {v.meaning}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Question Prev/Next Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                  currentQuestionIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>上一题</span>
              </button>

              <span className="text-xs text-slate-400 font-mono">
                {currentQuestionIndex + 1} / {paper.questions.length}
              </span>

              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(paper.questions.length - 1, prev + 1))}
                disabled={currentQuestionIndex === paper.questions.length - 1}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                  currentQuestionIndex === paper.questions.length - 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-500/20 cursor-pointer'
                }`}
              >
                <span>下一题</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right 4 Cols: Answer Sheet & Score Report */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Answer Sheet Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-sm text-slate-900">
                  全真答题卡 ({paper.questions.length} 题)
                </h4>
                <span className="text-xs text-slate-400 font-mono">
                  已做 {Object.keys(answers).length}/{paper.questions.length}
                </span>
              </div>

              {/* Number Matrix (60~75 题矩阵自适应) */}
              <div className="grid grid-cols-5 sm:grid-cols-4 gap-1.5 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
                {paper.questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = answers[q.id] !== undefined;
                  const isCorrect = isSubmitted && answers[q.id] === q.correctAnswer;
                  const isWrong = isSubmitted && isAnswered && answers[q.id] !== q.correctAnswer;

                  let boxClass = 'bg-slate-50 text-slate-700 border-slate-200';
                  if (isAnswered) boxClass = 'bg-red-50 text-red-700 border-red-300 font-bold';
                  if (isCurrent) boxClass = 'ring-2 ring-red-600 font-black';
                  if (isSubmitted) {
                    if (isCorrect) boxClass = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                    else if (isWrong) boxClass = 'bg-rose-500 text-white border-rose-500 font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-8 rounded-lg border text-[11px] flex items-center justify-center transition font-mono cursor-pointer ${boxClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Submit Button */}
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitExam}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-xs shadow-lg shadow-red-500/25 transition active:scale-98 cursor-pointer"
                >
                  交卷并生成评估报告
                </button>
              ) : (
                <button
                  onClick={resetExam}
                  className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition cursor-pointer"
                >
                  重新作答本科目
                </button>
              )}
            </div>

            {/* Exam Result Report Board (When Submitted) */}
            {scoreResult && (
              <div className="bg-gradient-to-br from-amber-50/90 via-red-50/40 to-white text-slate-900 rounded-3xl p-5 border border-amber-200/90 shadow-md space-y-3 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h4 className="font-extrabold text-sm text-slate-900">
                    西班牙语模考成绩评估单
                  </h4>
                </div>

                <div className="p-3 bg-white rounded-2xl border border-amber-100 space-y-1 shadow-2xs">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">得分/总分:</span>
                    <span className="text-xl font-black text-red-600 font-mono">
                      {scoreResult.earned} / {scoreResult.total} 分
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-slate-500">正确率:</span>
                    <span className="font-bold text-emerald-600">{scoreResult.percentage}%</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-100/60 border border-amber-200 rounded-2xl space-y-1">
                  <span className="text-[11px] text-amber-900 font-bold block">📊 官方预估等级：</span>
                  <p className="text-sm font-black text-amber-800">{scoreResult.gradeEstimate}</p>
                </div>

                {/* Free User VIP Upgrade Card */}
                {!isVip && (
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white space-y-2 shadow-lg shadow-red-500/25">
                    <div className="flex items-center gap-1.5 text-xs font-black">
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span>诊断完成！开启考前满分冲刺</span>
                    </div>
                    <p className="text-[11px] text-white/90 leading-relaxed">
                      开通 VIP 终身卡（仅 ¥49.9），立即解锁剩余 <strong>{SPANISH_EXAM_PAPERS.length - 1} 套</strong> 官方全真专四、考研大卷、DELE/SIELE 认证大卷与四大题型专项攻坚！
                    </p>
                    <button
                      onClick={() => onOpenVipModal(`🏆 您已完成免费试考卷评测！升级 VIP 终身卡（仅 ¥49.9），畅刷 ${SPANISH_EXAM_PAPERS.length} 套官方全真大卷与专项突破！`)}
                      className="w-full py-2 bg-white text-red-700 hover:bg-red-50 font-black rounded-xl text-xs shadow-xs transition active:scale-98 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>立即解锁全部 {SPANISH_EXAM_PAPERS.length - 1} 套考前真题 (¥49.9)</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      ) : null}

    </div>
  );
};
