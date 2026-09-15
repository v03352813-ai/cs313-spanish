import React, { useState, useMemo, useEffect } from 'react';
import { 
  FileCheck2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Volume2, 
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  GraduationCap,
  Globe2,
  Award,
  Target,
  BookOpen,
  Laptop,
  Calendar,
  BookMarked,
  ShieldCheck,
  Play,
  Pause,
  Clock,
  Headphones
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPANISH_EXAM_PAPERS, ExamPaper, ExamQuestion } from '../data/examData';
import { WrongRecord } from './MistakesView';
import { speakSpanish } from '../utils/speech';

export type MainTrack = 'kaoyan' | 'tem4' | 'dele' | 'siele';

interface SpanishExamViewProps {
  onSaveMistake: (record: WrongRecord) => void;
  onGoToMistakes: () => void;
  isVip: boolean;
  onOpenVipModal: (reason?: string) => void;
  onOpenExamModal?: () => void;
  initialTrack?: MainTrack;
  onTrackChange?: (track: MainTrack) => void;
}

// 判定是否为免费试考卷 (首套或2024真题免费预览)
export const isFreePreviewPaper = (paper: ExamPaper): boolean => {
  return (
    paper.id.includes('-01') ||
    paper.id.includes('2024') ||
    paper.id.includes('a1') ||
    paper.id.includes('s1') ||
    paper.id === 'paper-kaoyan-bfsu-2024' ||
    paper.id === 'paper-eee4-2024' ||
    paper.id === 'paper-dele-a1-01' ||
    paper.id === 'paper-siele-s1-01'
  );
};

export const SpanishExamView: React.FC<SpanishExamViewProps> = ({
  onSaveMistake,
  onGoToMistakes,
  isVip,
  onOpenVipModal,
  onOpenExamModal,
  initialTrack = 'kaoyan',
  onTrackChange
}) => {
  const [activeTrack, setActiveTrack] = useState<MainTrack>(initialTrack);

  // 子分类过滤器状态
  const [kaoyanFilter, setKaoyanFilter] = useState<string>('all');
  const [tem4Filter, setTem4Filter] = useState<string>('all');
  const [deleFilter, setDeleFilter] = useState<string>('all');
  const [sieleFilter, setSieleFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 考场交互状态
  const [selectedPaperId, setSelectedPaperId] = useState<string>(() => {
    if (initialTrack === 'tem4') return 'paper-eee4-2024';
    if (initialTrack === 'dele') return 'paper-dele-a1-01';
    if (initialTrack === 'siele') return 'paper-siele-s1-01';
    return 'paper-kaoyan-bfsu-2024';
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showInstantExplanation, setShowInstantExplanation] = useState<boolean>(true);

  // 听力音频播放器状态
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [showListeningScript, setShowListeningScript] = useState<boolean>(false);

  const handlePlayAudio = async (text: string) => {
    if (isPlayingAudio) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    await speakSpanish(text, audioSpeed);
    setIsPlayingAudio(false);
  };

  // 动态计算各赛道与各高校历年真题套数 (严格实时反映真实 64 套试卷题库)
  const paperCounts = useMemo(() => {
    const kaoyanPapers = SPANISH_EXAM_PAPERS.filter(p => p.track === 'kaoyan' || p.track === 'kaoyan_mock');
    const tem4Papers = SPANISH_EXAM_PAPERS.filter(p => p.track === 'tem4');
    const delePapers = SPANISH_EXAM_PAPERS.filter(p => p.track === 'dele');
    const sielePapers = SPANISH_EXAM_PAPERS.filter(p => p.track === 'siele');

    return {
      kaoyan: {
        all: kaoyanPapers.length,
        beiwai: kaoyanPapers.filter(p => p.schoolOrOrg.includes('北京外国语')).length,
        shisu: kaoyanPapers.filter(p => p.schoolOrOrg.includes('上海外国语')).length,
        gdufs: kaoyanPapers.filter(p => p.schoolOrOrg.includes('广东外语')).length,
        others: kaoyanPapers.filter(p => p.track === 'kaoyan' && !p.schoolOrOrg.includes('北京外国语') && !p.schoolOrOrg.includes('上海外国语') && !p.schoolOrOrg.includes('广东外语')).length,
        mock: kaoyanPapers.filter(p => p.track === 'kaoyan_mock').length,
      },
      tem4: {
        all: tem4Papers.length,
        real: tem4Papers.filter(p => /\d{4}年/.test(p.title)).length,
        spec: tem4Papers.filter(p => p.title.includes('语法专项') || p.title.includes('词汇与前置词')).length,
        mock: tem4Papers.filter(p => p.title.includes('仿真大卷')).length,
      },
      dele: {
        all: delePapers.length,
        A1: delePapers.filter(p => p.level === 'A1').length,
        A2: delePapers.filter(p => p.level === 'A2').length,
        B1: delePapers.filter(p => p.level === 'B1').length,
        B2: delePapers.filter(p => p.level === 'B2').length,
      },
      siele: {
        all: sielePapers.length,
        global: sielePapers.filter(p => p.title.includes('全球综合')).length,
        biz: sielePapers.filter(p => p.title.includes('商务') || p.title.includes('社评')).length,
        spec: sielePapers.filter(p => p.title.includes('专项')).length,
        adapt: sielePapers.filter(p => p.title.includes('自适应') || p.title.includes('快速阅读') || p.title.includes('学术综述')).length,
      }
    };
  }, []);

  // 过滤试卷列表
  const filteredPapers = useMemo(() => {
    return SPANISH_EXAM_PAPERS.filter(p => {
      // 赛道与子标签联动过滤
      if (activeTrack === 'kaoyan') {
        if (p.track !== 'kaoyan' && p.track !== 'kaoyan_mock') return false;
        if (kaoyanFilter === 'beiwai' && !p.schoolOrOrg.includes('北京外国语')) return false;
        if (kaoyanFilter === 'shisu' && !p.schoolOrOrg.includes('上海外国语')) return false;
        if (kaoyanFilter === 'gdufs' && !p.schoolOrOrg.includes('广东外语')) return false;
        if (kaoyanFilter === 'others' && (p.track !== 'kaoyan' || p.schoolOrOrg.includes('北京外国语') || p.schoolOrOrg.includes('上海外国语') || p.schoolOrOrg.includes('广东外语'))) return false;
        if (kaoyanFilter === 'mock' && p.track !== 'kaoyan_mock') return false;
      } else if (activeTrack === 'tem4') {
        if (p.track !== 'tem4') return false;
        if (tem4Filter === 'real' && !/\d{4}年/.test(p.title)) return false;
        if (tem4Filter === 'spec' && !p.title.includes('语法专项') && !p.title.includes('词汇与前置词')) return false;
        if (tem4Filter === 'mock' && !p.title.includes('仿真大卷')) return false;
      } else if (activeTrack === 'dele') {
        if (p.track !== 'dele') return false;
        if (deleFilter !== 'all' && p.level !== deleFilter) return false;
      } else if (activeTrack === 'siele') {
        if (p.track !== 'siele') return false;
        if (sieleFilter === 'global' && !p.title.includes('全球综合')) return false;
        if (sieleFilter === 'biz' && !p.title.includes('商务') && !p.title.includes('社评')) return false;
        if (sieleFilter === 'spec' && !p.title.includes('专项')) return false;
        if (sieleFilter === 'adapt' && !p.title.includes('自适应') && !p.title.includes('快速阅读') && !p.title.includes('学术综述')) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.spanishTitle.toLowerCase().includes(q) ||
          p.schoolOrOrg.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [activeTrack, kaoyanFilter, tem4Filter, deleFilter, sieleFilter, searchQuery]);

  // 当切换赛道或过滤后，自动校准选中的试卷
  useEffect(() => {
    if (filteredPapers.length > 0 && !filteredPapers.some(p => p.id === selectedPaperId)) {
      setSelectedPaperId(filteredPapers[0].id);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setIsSubmitted(false);
    }
  }, [filteredPapers, selectedPaperId]);

  const currentPaper: ExamPaper = useMemo(() => {
    return SPANISH_EXAM_PAPERS.find(p => p.id === selectedPaperId) || filteredPapers[0] || SPANISH_EXAM_PAPERS[0];
  }, [selectedPaperId, filteredPapers]);

  const currentQuestion: ExamQuestion | undefined = currentPaper?.questions[currentQuestionIndex];

  // 计算当前试卷三大核心大板块（词汇文法、长篇读解、听解交际）的题量与起始位置
  const sectionTabs = useMemo(() => {
    if (!currentPaper || !currentPaper.questions || currentPaper.questions.length === 0) return [];

    let vocabStart = -1, vocabCount = 0;
    let readingStart = -1, readingCount = 0;
    let listeningStart = -1, listeningCount = 0;

    currentPaper.questions.forEach((q, idx) => {
      const isReading = q.type === 'reading' || Boolean(q.passage) || q.categoryTag.includes('读解') || q.categoryTag.includes('阅读');
      const isListening = q.type === 'listening' || Boolean(q.audioScript) || q.categoryTag.includes('听力') || q.categoryTag.includes('交际') || q.categoryTag.includes('广播');

      if (isReading) {
        if (readingStart === -1) readingStart = idx;
        readingCount++;
      } else if (isListening) {
        if (listeningStart === -1) listeningStart = idx;
        listeningCount++;
      } else {
        if (vocabStart === -1) vocabStart = idx;
        vocabCount++;
      }
    });

    const curQ = currentPaper.questions[currentQuestionIndex];
    const curIsReading = curQ && (curQ.type === 'reading' || Boolean(curQ.passage) || curQ.categoryTag.includes('读解') || curQ.categoryTag.includes('阅读'));
    const curIsListening = curQ && (curQ.type === 'listening' || Boolean(curQ.audioScript) || curQ.categoryTag.includes('听力') || curQ.categoryTag.includes('交际') || curQ.categoryTag.includes('广播'));
    const curIsVocab = curQ && !curIsReading && !curIsListening;

    const list: { key: string; name: string; icon: string; startIndex: number; count: number; isActive: boolean }[] = [];

    if (vocabCount > 0) {
      list.push({
        key: 'vocab',
        name: '词汇与文法结构',
        icon: '📝',
        startIndex: vocabStart,
        count: vocabCount,
        isActive: Boolean(curIsVocab)
      });
    }
    if (readingCount > 0) {
      list.push({
        key: 'reading',
        name: '实用告示与长篇读解',
        icon: '📖',
        startIndex: readingStart,
        count: readingCount,
        isActive: Boolean(curIsReading)
      });
    }
    if (listeningCount > 0) {
      list.push({
        key: 'listening',
        name: '听解原声与交际辨析',
        icon: '🎧',
        startIndex: listeningStart,
        count: listeningCount,
        isActive: Boolean(curIsListening)
      });
    }

    return list;
  }, [currentPaper, currentQuestionIndex]);

  // 选择选项
  const handleSelectOption = (optKey: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optKey
    }));
  };

  // 重置作答
  const handleResetExam = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // 提交答卷与收集错题
  const handleSubmitPaper = () => {
    setIsSubmitted(true);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (currentPaper) {
      currentPaper.questions.forEach((q, idx) => {
        const uAns = answers[idx];
        if (uAns !== q.correctAnswer) {
          onSaveMistake({
            id: `${currentPaper.id}_${q.id}_${Date.now()}`,
            paperId: currentPaper.id,
            paperTitle: currentPaper.title,
            question: q,
            wrongUserAnswer: uAns || '未作答',
            dateAdded: new Date().toLocaleDateString('zh-CN')
          });
        }
      });
    }

    // 庆祝彩带
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  // 点击选择试卷
  const handleSelectPaper = (paper: ExamPaper) => {
    const isFree = isFreePreviewPaper(paper);
    const isLocked = !isVip && !isFree;

    if (isLocked) {
      onOpenVipModal(`🔒《${paper.title}》为 VIP 专属高频考卷！开通 VIP 即可解锁全部 64 套西班牙语考研二外、高校专四与 DELE/SIELE 官方机考大卷及名师深度题解！`);
      return;
    }

    setSelectedPaperId(paper.id);
    handleResetExam();
  };

  // 成绩报告
  const scoreReport = useMemo(() => {
    if (!currentPaper || !isSubmitted) return null;
    let totalScore = 0;
    let earnedScore = 0;
    let correctCount = 0;

    let vocabTotal = 0, vocabEarned = 0, vocabCorrect = 0, vocabCount = 0;
    let readingTotal = 0, readingEarned = 0, readingCorrect = 0, readingCount = 0;
    let listeningTotal = 0, listeningEarned = 0, listeningCorrect = 0, listeningCount = 0;

    currentPaper.questions.forEach((q, idx) => {
      totalScore += q.score;
      const isCorrect = answers[idx] === q.correctAnswer;
      if (isCorrect) {
        earnedScore += q.score;
        correctCount += 1;
      }

      const isListening = q.type === 'listening' || q.categoryTag.includes('听解') || q.categoryTag.includes('原声');
      const isReading = !isListening && (q.type === 'reading' || Boolean(q.passage) || q.categoryTag.includes('读解') || q.categoryTag.includes('阅读'));

      if (isListening) {
        listeningTotal += q.score;
        listeningCount += 1;
        if (isCorrect) {
          listeningEarned += q.score;
          listeningCorrect += 1;
        }
      } else if (isReading) {
        readingTotal += q.score;
        readingCount += 1;
        if (isCorrect) {
          readingEarned += q.score;
          readingCorrect += 1;
        }
      } else {
        vocabTotal += q.score;
        vocabCount += 1;
        if (isCorrect) {
          vocabEarned += q.score;
          vocabCorrect += 1;
        }
      }
    });

    const scaledScore = totalScore > 0 ? Math.round((earnedScore / totalScore) * 100) : 0;
    const scaledVocab = vocabTotal > 0 ? Math.round((vocabEarned / vocabTotal) * 100) : 0;
    const scaledReading = readingTotal > 0 ? Math.round((readingEarned / readingTotal) * 100) : 0;
    const scaledListening = listeningTotal > 0 ? Math.round((listeningEarned / listeningTotal) * 100) : 0;

    const isDele = currentPaper.track === 'dele';
    const isPassed = scaledScore >= 60;

    return {
      earnedScore,
      totalScore,
      correctCount,
      totalQuestions: currentPaper.questions.length,
      scaledScore,
      isPassed,
      isDele,
      vocab: { score: scaledVocab, earned: vocabEarned, total: vocabTotal, count: vocabCount, correct: vocabCorrect },
      reading: { score: scaledReading, earned: readingEarned, total: readingTotal, count: readingCount, correct: readingCorrect },
      listening: { score: scaledListening, earned: listeningEarned, total: listeningTotal, count: listeningCount, correct: listeningCorrect }
    };
  }, [currentPaper, isSubmitted, answers]);

  return (
    <div className="space-y-3 sm:space-y-3.5 pb-0 animate-in fade-in duration-200">
      
      {/* 1. 顶部大考题库展台 Banner (对标法语国家级与国际官方全真机考大卷库) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20 text-xs font-bold">
              🏛️ 西班牙国家级与国际官方全真机考大卷库
            </span>
            <span className="text-xs text-stone-500 font-medium">
              64套全国名校历年全卷 · 1,536道官方全真试题 · 100分标准实测评分 · 动词变位 / 虚拟式配合 / 关系从句 / 介词辨析 / 实用告示 / 社科长篇读解
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#29354A] tracking-tight">
            西班牙语国家统考与国际认证全真机考大卷库
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            涵盖全国名校考研二外 (北京外国语大学/上海外国语大学/广东外语外贸大学/北大/南大/复旦/武大/川外等历年真题及全真模拟冲刺)、高校西语专四 (EEE-4)、塞万提斯 DELE 欧标 (A1~B2) 与 SIELE 国际在线机考大卷！
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
          {onOpenExamModal && (
            <button
              onClick={onOpenExamModal}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
              title="查看 2026 西班牙语官方报考全景指南与考期日历"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>官方报考指南 & 考期</span>
            </button>
          )}
          <button
            onClick={onGoToMistakes}
            className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#B82E24] border border-amber-200 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <BookMarked className="w-4 h-4" />
            <span>查看错题本</span>
          </button>
        </div>
      </div>

      {/* 2. 四大赛道官方考纲权威说明横幅 */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FEF2F2]/50 via-slate-50 to-white border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 animate-pulse ${
            activeTrack === 'kaoyan' ? 'bg-[#B82E24]' : activeTrack === 'tem4' ? 'bg-indigo-600' : activeTrack === 'dele' ? 'bg-amber-600' : 'bg-slate-700'
          }`} />
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-black text-[#29354A]">
              <span className={activeTrack === 'kaoyan' ? 'text-[#B82E24]' : activeTrack === 'tem4' ? 'text-indigo-800' : activeTrack === 'dele' ? 'text-amber-800' : 'text-slate-800'}>
                {activeTrack === 'kaoyan' ? `🎓 全国硕士考研二外西语·历年名校大卷与仿真专项 (${paperCounts.kaoyan.all}套)` 
                  : activeTrack === 'tem4' ? `🏛️ 全国高校西班牙语专业四级 (EEE-4) 统考历年真题 (${paperCounts.tem4.all}套)`
                  : activeTrack === 'dele' ? `🌍 塞万提斯学院 DELE 欧标国际认证 (A1-B2) 官方考卷 (${paperCounts.dele.all}套)`
                  : `💻 SIELE 国际在线机考官方试题与自适应大卷 (${paperCounts.siele.all}套)`}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-white text-[#29354A] border border-slate-200">
                {activeTrack === 'kaoyan' ? '全国名校自主命题 & 仿真专项 · 100分制' 
                  : activeTrack === 'tem4' ? '教育部高校外语指导委 · 100分制'
                  : activeTrack === 'dele' ? '塞万提斯学院官方标准 · APTO认证制'
                  : '四大名校联合在线机考 · 自适应出分'}
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed font-medium">
              {activeTrack === 'kaoyan' && (
                <span>全面收录北京外国语大学、上海外国语大学、广东外语外贸大学、北京大学、南京大学、武汉大学、复旦大学等历年统考初试试卷，结合全国统考仿真卷与重点攻坚专项，重点考查 <strong>【动词变位·时态配合·双代词位置·虚拟式触发】</strong> 与 <strong>【拉美社科长文读解】</strong>，满分 100 分。</span>
              )}
              {activeTrack === 'tem4' && (
                <span>高校西语专业四级 (EEE-4) 为全国高校西语专业最权威统一测试，全面考核 <strong>【动词时态配合·前置词搭配·自反被动句·完形填空·篇章读解】</strong>，精准检验本科阶段西语综合运用水平。</span>
              )}
              {activeTrack === 'dele' && (
                <span>塞万提斯学院官方终身有效国际认证，覆盖 A1-B2 真实机考卷，严格采用 <strong>【APTO (合格) 双大组 60% 认证规则】</strong>，总分 100 分满分需达到 60 分且两大组各拿 30 分以上，终身免审！</span>
              )}
              {activeTrack === 'siele' && (
                <span>塞万提斯学院、墨西哥国立自治大学、萨拉曼卡大学和布宜诺斯艾利斯大学联合创办，涵盖 <strong>【全球综合大卷·商务与社评·语法词汇专项·自适应冲顶卷】</strong>，快速机考出分。</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 3. 赛道切换与试卷选择卡片 (Track Switcher & Filter Card) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-4">
        
        {/* 四大赛道主切换 Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/70">
          <button
            onClick={() => {
              setActiveTrack('kaoyan');
              setKaoyanFilter('all');
              setSelectedPaperId('paper-kaoyan-bfsu-2024');
              handleResetExam();
              onTrackChange?.('kaoyan');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'kaoyan'
                ? 'bg-[#B82E24] text-white shadow-xs font-black'
                : 'text-[#29354A] hover:bg-white/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>🎓 考研二外 ({paperCounts.kaoyan.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('tem4');
              setTem4Filter('all');
              setSelectedPaperId('paper-eee4-2024');
              handleResetExam();
              onTrackChange?.('tem4');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'tem4'
                ? 'bg-[#B82E24] text-white shadow-xs font-black'
                : 'text-[#29354A] hover:bg-white/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>🏛️ 高校西语专四 ({paperCounts.tem4.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('dele');
              setDeleFilter('all');
              setSelectedPaperId('paper-dele-a1-01');
              handleResetExam();
              onTrackChange?.('dele');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'dele'
                ? 'bg-[#B82E24] text-white shadow-xs font-black'
                : 'text-[#29354A] hover:bg-white/60'
            }`}
          >
            <Globe2 className="w-4 h-4" />
            <span>🌍 DELE 欧标 ({paperCounts.dele.all}套)</span>
          </button>

          <button
            onClick={() => {
              setActiveTrack('siele');
              setSieleFilter('all');
              setSelectedPaperId('paper-siele-s1-01');
              handleResetExam();
              onTrackChange?.('siele');
            }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTrack === 'siele'
                ? 'bg-[#B82E24] text-white shadow-xs font-black'
                : 'text-[#29354A] hover:bg-white/60'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>💻 SIELE 国际机考 ({paperCounts.siele.all}套)</span>
          </button>
        </div>

        {/* 分类筛选子标签 (高校 / 级别 / 专题分类) */}
        <div className="flex items-center gap-2 flex-wrap pt-1">
          <div className="flex items-center gap-1.5 text-xs font-black text-[#29354A] shrink-0">
            <span className={`w-1.5 h-3.5 rounded-full ${
              activeTrack === 'kaoyan' ? 'bg-[#B82E24]' : activeTrack === 'tem4' ? 'bg-indigo-600' : activeTrack === 'dele' ? 'bg-amber-600' : 'bg-slate-700'
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
                { id: 'others', label: `985名校联盟 (${paperCounts.kaoyan.others})` },
                { id: 'mock', label: `全国统考综合与专项 (${paperCounts.kaoyan.mock})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setKaoyanFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    kaoyanFilter === f.id
                      ? 'bg-[#B82E24] text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-[#29354A] hover:bg-slate-100 border border-slate-200/70'
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
                { id: 'real', label: `2017-2024统考真题 (${paperCounts.tem4.real})` },
                { id: 'spec', label: `语法词汇专项 (${paperCounts.tem4.spec})` },
                { id: 'mock', label: `考前金牌全真仿真 (${paperCounts.tem4.mock})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setTem4Filter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    tem4Filter === f.id
                      ? 'bg-[#B82E24] text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-[#29354A] hover:bg-slate-100 border border-slate-200/70'
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
                { id: 'all', label: `全部 DELE 欧标 (${paperCounts.dele.all})` },
                { id: 'A1', label: `DELE A1 入门级 (${paperCounts.dele.A1})` },
                { id: 'A2', label: `DELE A2 基础级 (${paperCounts.dele.A2})` },
                { id: 'B1', label: `DELE B1 独立级 (${paperCounts.dele.B1})` },
                { id: 'B2', label: `DELE B2 高阶级 (${paperCounts.dele.B2})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setDeleFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    deleFilter === f.id
                      ? 'bg-[#B82E24] text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-[#29354A] hover:bg-slate-100 border border-slate-200/70'
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
                { id: 'all', label: `全部 SIELE 机考 (${paperCounts.siele.all})` },
                { id: 'global', label: `全球综合大卷 (${paperCounts.siele.global})` },
                { id: 'biz', label: `商务与文化社评 (${paperCounts.siele.biz})` },
                { id: 'spec', label: `语法词汇专项 (${paperCounts.siele.spec})` },
                { id: 'adapt', label: `自适应与阅读 (${paperCounts.siele.adapt})` }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSieleFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    sieleFilter === f.id
                      ? 'bg-[#B82E24] text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-[#29354A] hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 试卷列表: 3 列平铺带滚动条 (完全参照法语模板 Paper Selector) */}
        <div className="space-y-2 pt-1 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-[#B82E24]" />
              <span>当前可作答试卷 ({filteredPapers.length} 套):</span>
            </span>
            <span className="text-[11px] text-stone-400">点击卡片直接进入考场</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto scrollbar-thin p-1">
            {filteredPapers.map((paper) => {
              const isSelected = selectedPaperId === paper.id;
              const isFree = isFreePreviewPaper(paper);
              const isLocked = !isVip && !isFree;

              return (
                <button
                  key={paper.id}
                  onClick={() => handleSelectPaper(paper)}
                  className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#FEF2F2] border-2 border-[#B82E24] shadow-xs'
                      : isLocked
                      ? 'bg-slate-50/70 hover:bg-slate-100/90 border-slate-200/70'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                        isFree 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : isVip 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isFree ? '✓ 免费试考' : isVip ? '★ VIP专享' : '🔒 VIP专属'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium truncate">
                        {paper.schoolOrOrg}
                      </span>
                    </div>

                    <h4 className={`text-xs font-black line-clamp-1 ${isSelected ? 'text-[#B82E24]' : 'text-[#29354A]'}`}>
                      {paper.title}
                    </h4>
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{paper.questions.length} 题 · 满分 {paper.totalScore}分</span>
                    <span>{paper.durationMinutes} 分钟</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* 4. 考场核心交互区域 (Main Exam Arena: 左侧试题展示 + 右侧考场答题卡) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 左侧 8 列: 试题展示 */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4 sm:space-y-5">
          {currentQuestion ? (
            <div className="space-y-5">
              
              {/* 板块快速直达 (词汇语法 / 实用读解) */}
              {sectionTabs.length > 1 && (
                <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/70 overflow-x-auto no-scrollbar">
                  <span className="text-[11px] font-bold text-stone-500 pl-2 shrink-0">题型直达:</span>
                  {sectionTabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setCurrentQuestionIndex(tab.startIndex)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                        tab.isActive
                          ? 'bg-[#B82E24] text-white shadow-xs font-black'
                          : 'bg-white text-[#29354A] hover:bg-slate-50 border border-slate-200/80'
                      }`}
                      title={`直接跳转到【${tab.name}】`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${tab.isActive ? 'bg-white/25 text-white font-black' : 'bg-slate-50 text-slate-600'}`}>
                        {tab.count}题
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* 试题标头 */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-xl text-white font-mono text-xs font-black bg-[#B82E24]">
                    第 {currentQuestionIndex + 1} 题
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-50 text-[#29354A] border border-slate-200/70 text-xs font-bold">
                    {currentQuestion.categoryTag}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">
                    分值: {currentQuestion.score} 分
                  </span>
                </div>

                <button
                  onClick={() => speakSpanish(currentQuestion.passage || currentQuestion.questionText)}
                  className="p-1.5 rounded-lg bg-[#FEF2F2] text-[#B82E24] hover:bg-[#FEF2F2]/70 transition cursor-pointer"
                  title="标准卡斯蒂利亚西班牙语朗读题目"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* 阅读篇章文本 (如有) */}
              {currentQuestion.passage && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-2.5 select-text shadow-2xs relative">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                    <span className="text-xs font-black text-[#29354A] flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>【读解分析 · 官方全真西文阅读文本材料】</span>
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#B82E24] border border-amber-300/40 shadow-2xs">
                      西文原汁原味语料
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#29354A] leading-relaxed font-medium whitespace-pre-line font-serif">
                    {currentQuestion.passage}
                  </div>
                </div>
              )}

              {/* 听力播放器 (如有音频或原文脚本) */}
              {(currentQuestion.audioScript || currentQuestion.type === 'listening') && (
                <div className="p-4 rounded-2xl bg-slate-50/60 border border-[#B82E24]/30 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => currentQuestion.audioScript && handlePlayAudio(currentQuestion.audioScript)}
                        className="w-10 h-10 rounded-full bg-[#B82E24] hover:bg-[#991B1B] text-white flex items-center justify-center shadow-md shadow-[#B82E24]/25 transition cursor-pointer shrink-0"
                        title={isPlayingAudio ? '暂停听力' : '播放原声听力'}
                      >
                        {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <div>
                        <div className="text-xs font-bold text-[#B82E24] flex items-center gap-1.5">
                          <Headphones className="w-3.5 h-3.5 text-[#B82E24]" />
                          <span>考场原声听力播放器 (Comprensión auditiva)</span>
                        </div>
                        <p className="text-[11px] text-stone-600">
                          {isPlayingAudio ? '正在播放卡斯蒂利亚西班牙语官方录音...' : '点击播放西班牙官方原声场景材料'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-stone-600 bg-white px-2 py-1 rounded-xl border border-slate-200/70">
                        <span>语速:</span>
                        {[0.8, 1.0, 1.2].map(speed => (
                          <button
                            key={speed}
                            onClick={() => setAudioSpeed(speed)}
                            className={`px-1.5 py-0.5 rounded text-[10px] ${
                              audioSpeed === speed ? 'bg-[#B82E24] text-white font-bold' : 'hover:bg-white'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowListeningScript(prev => !prev)}
                        className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-white text-[#B82E24] border border-[#B82E24]/30 hover:bg-[#FEF2F2]/60 transition cursor-pointer"
                      >
                        {showListeningScript ? '隐藏原文' : '查看原文大纲'}
                      </button>
                    </div>
                  </div>

                  {/* 折叠听力原文 */}
                  {showListeningScript && currentQuestion.audioScript && (
                    <div className="pt-2 border-t border-[#B82E24]/20 text-xs font-serif italic text-[#29354A] leading-relaxed bg-white p-3 rounded-xl border border-slate-200/70">
                      <div className="font-bold text-[#29354A] text-[11px] not-italic pb-1">
                        【听力原声材料大纲】：
                      </div>
                      {currentQuestion.audioScript}
                    </div>
                  )}
                </div>
              )}

              {/* 题干文本 */}
              <h3 className="text-sm sm:text-base font-bold text-[#29354A] whitespace-pre-line leading-relaxed">
                {currentQuestion.questionText}
              </h3>

              {/* 选项列表 */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestionIndex] === opt.key;
                  const isCorrect = currentQuestion.correctAnswer === opt.key;
                  const showResult = isSubmitted || (showInstantExplanation && answers[currentQuestionIndex] !== undefined);

                  let optStyle = 'bg-slate-50/70 hover:bg-white text-[#29354A] border-slate-200/80';
                  if (isSelected) {
                    optStyle = 'bg-[#FEF2F2] border-[#B82E24] text-[#B82E24] shadow-2xs font-bold';
                  }
                  if (showResult) {
                    if (isCorrect) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition duration-150 flex items-center justify-between gap-3 text-xs sm:text-sm cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                          isSelected && !showResult
                            ? 'bg-[#B82E24] text-white'
                            : 'bg-white border border-slate-200/80 text-[#29354A]'
                        }`}>
                          {opt.key}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </div>

                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 即时权威解析卡片 */}
              {(isSubmitted || (showInstantExplanation && answers[currentQuestionIndex] !== undefined)) && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 text-xs">
                  <div className="flex items-center gap-1.5 text-[#B82E24] font-black">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>考点权威名师解析</span>
                  </div>
                  <p className="text-[#29354A] leading-relaxed font-medium whitespace-pre-line">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* 翻题导航 */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 disabled:opacity-40 text-[#29354A] text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>上一题</span>
                </button>

                <span className="text-xs text-stone-500 font-mono">
                  {currentQuestionIndex + 1} / {currentPaper?.questions.length || 0}
                </span>

                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min((currentPaper?.questions.length || 1) - 1, prev + 1))}
                  disabled={currentQuestionIndex === (currentPaper?.questions.length || 1) - 1}
                  className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 disabled:opacity-40 text-[#29354A] text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <span>下一题</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            <div className="text-center py-12 text-stone-400 text-sm">
              暂无试卷题目
            </div>
          )}
        </div>

        {/* 右侧 4 列: 考场答题卡与评分 */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* 答题卡 */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <h4 className="text-sm font-black text-[#29354A] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#B82E24]" />
                <span>考场答题卡</span>
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-400 font-mono">
                  已答 {Object.keys(answers).length} / {currentPaper?.questions.length || 0}
                </span>
                {Object.keys(answers).length > 0 && !isSubmitted && (
                  <button
                    onClick={handleResetExam}
                    className="text-[11px] text-stone-500 hover:text-[#B82E24] transition flex items-center gap-0.5 cursor-pointer font-bold px-1.5 py-0.5 rounded bg-slate-50 hover:bg-rose-50 border border-slate-200/70"
                    title="清空当前试卷已选答案"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>清空作答</span>
                  </button>
                )}
              </div>
            </div>

            {/* 答题气泡网格 */}
            <div className="grid grid-cols-5 gap-2">
              {currentPaper?.questions.map((q, idx) => {
                const isAnswered = answers[idx] !== undefined;
                const isCurrent = currentQuestionIndex === idx;
                const isCorrect = answers[idx] === q.correctAnswer;

                let bubbleStyle = 'bg-slate-50 text-[#29354A] hover:bg-slate-100 border border-slate-200/80';
                if (isCurrent) {
                  bubbleStyle = 'ring-2 ring-[#B82E24] font-bold bg-white border-slate-200/80';
                }
                if (isSubmitted) {
                  bubbleStyle = isCorrect ? 'bg-emerald-500 text-white font-bold' : 'bg-rose-500 text-white font-bold';
                } else if (isAnswered) {
                  bubbleStyle = 'bg-[#B82E24] text-white font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-xl text-xs flex items-center justify-center transition cursor-pointer ${bubbleStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* 即时解析开关 */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#29354A]">
              <span>做完即时显示解析</span>
              <button
                onClick={() => setShowInstantExplanation(prev => !prev)}
                className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                  showInstantExplanation
                    ? 'bg-[#B82E24]'
                    : 'bg-stone-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                  showInstantExplanation ? 'left-5' : 'left-1'
                }`} />
              </button>
            </div>

            {/* 提交答卷按钮 */}
            {!isSubmitted ? (
              <button
                onClick={handleSubmitPaper}
                className="w-full py-3 rounded-2xl bg-[#B82E24] hover:bg-[#991B1B] shadow-[#B82E24]/25 text-white font-black text-sm shadow-md active:scale-98 transition cursor-pointer"
              >
                提交答卷 · 生成成绩单
              </button>
            ) : (
              <button
                onClick={handleResetExam}
                className="w-full py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-[#29354A] font-bold text-xs border border-slate-200/80 transition cursor-pointer"
              >
                再考一次
              </button>
            )}
          </div>

          {/* 成绩单面板 (提交后呈现) */}
          {scoreReport && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-black text-[#29354A]">官方综合评分结果</span>
                <span className={`px-2 py-0.5 rounded-md text-xs font-black ${
                  scoreReport.isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {scoreReport.isDele 
                    ? (scoreReport.isPassed ? 'APTO (合格认证)' : 'NO APTO (未通过)') 
                    : (scoreReport.isPassed ? '合格通过' : '未达及格线')}
                </span>
              </div>

              <div className="text-center py-2 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-[#B82E24]">
                  {scoreReport.scaledScore} <span className="text-xs font-normal text-slate-500">/ 100 分</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  答对 {scoreReport.correctCount} 题 / 共 {scoreReport.totalQuestions} 题
                </p>
              </div>

              {/* 各题型得分率 */}
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-slate-700 mb-1">
                    <span>词汇与文法结构</span>
                    <span>{scoreReport.vocab.score}% ({scoreReport.vocab.correct}/{scoreReport.vocab.count}题)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#B82E24] rounded-full transition-all duration-500" 
                      style={{ width: `${scoreReport.vocab.score}%` }} 
                    />
                  </div>
                </div>

                {scoreReport.reading.count > 0 && (
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>实用告示与长篇读解</span>
                      <span>{scoreReport.reading.score}% ({scoreReport.reading.correct}/{scoreReport.reading.count}题)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                        style={{ width: `${scoreReport.reading.score}%` }} 
                      />
                    </div>
                  </div>
                )}

                {scoreReport.listening && scoreReport.listening.count > 0 && (
                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>听解原声与交际辨析</span>
                      <span>{scoreReport.listening.score}% ({scoreReport.listening.correct}/{scoreReport.listening.count}题)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                        style={{ width: `${scoreReport.listening.score}%` }} 
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={onGoToMistakes}
                className="w-full py-2 bg-amber-50 hover:bg-amber-100 text-[#B82E24] border border-amber-200 font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1"
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>进入错题本逐题复盘</span>
              </button>
            </div>
          )}

          {/* 考场须知与官方评分指引 (未提交时展示，填补右侧下方空白保持左右对齐) */}
          {!scoreReport && (
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h5 className="text-xs font-black text-[#29354A]">官方考纲与考场规则</h5>
              </div>
              <div className="space-y-2 text-[11px] text-stone-600 leading-relaxed">
                {activeTrack === 'dele' && (
                  <p>
                    <strong>塞万提斯 DELE 欧标机考</strong>：终身有效国际认证，总分 100 分，及格判定为 <strong>APTO</strong>。试卷重点考查基础交际、叙事时态配合与复杂从句，需两组均达标方可拿证。
                  </p>
                )}
                {activeTrack === 'kaoyan' && (
                  <p>
                    <strong>名校考研二外 (240)</strong>：各大高校自主命题，满分 100 分，及格线通常为 60 分。重点考查【虚拟式各种时态配合】、【代词位置与复指】及【拉美社会科技评论长文读解】。
                  </p>
                )}
                {activeTrack === 'tem4' && (
                  <p>
                    <strong>全国西语专四 (EEE-4)</strong>：全国高校西语专业统考，满分 100 分，及格线为 60 分。重点考查过去未完成时与简单过去时辨析、前置词固定搭配及自反被动句。
                  </p>
                )}
                {activeTrack === 'siele' && (
                  <p>
                    <strong>SIELE 国际在线机考</strong>：塞万提斯学院等四大名校联合认证，采用多维度自适应出分，全面考查日常与学术西语能力。
                  </p>
                )}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
