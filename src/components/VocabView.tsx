import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Layers, 
  Search, 
  Volume2, 
  RotateCw, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  EyeOff,
  Shuffle,
  Play,
  Pause,
  List,
  Grid,
  CheckCircle2,
  Lock,
  KeyRound,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPANISH_VOCAB_LIST, SpanishVocab } from '../data/vocabData';
import { speakSpanish } from '../utils/speech';

interface VocabViewProps {
  isVip?: boolean;
  onOpenVipModal?: (reason?: string) => void;
}

export const VocabView: React.FC<VocabViewProps> = ({
  isVip = false,
  onOpenVipModal
}) => {
  const [activeLevel, setActiveLevel] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maskMode, setMaskMode] = useState<'none' | 'hideZh' | 'hideEs'>('none');
  const [viewMode, setViewMode] = useState<'flashcard' | 'list'>('flashcard');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<0.8 | 1.0 | 1.2>(1.0);

  // Mastered Words Tracker (LocalStorage)
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cs313_es_mastered_vocabs');
      if (saved) return JSON.parse(saved);
      const legacy = localStorage.getItem('cs313_es_vocab_mastered');
      return legacy ? JSON.parse(legacy) : [];
    } catch {
      return [];
    }
  });

  // SRS 记忆分级: Record<wordId, 'review' | 'fuzzy' | 'mastered'>
  const [srsRatings, setSrsRatings] = useState<Record<string, 'review' | 'fuzzy' | 'mastered'>>(() => {
    try {
      const saved = localStorage.getItem('cs313_es_srs_ratings');
      if (saved) return JSON.parse(saved);
      const legacy: string[] = JSON.parse(localStorage.getItem('cs313_es_mastered_vocabs') || '[]');
      const initial: Record<string, 'review' | 'fuzzy' | 'mastered'> = {};
      legacy.forEach(id => { initial[id] = 'mastered'; });
      return initial;
    } catch {
      return {};
    }
  });

  // 记忆靶场过滤: 全部 / 待复习(需重练+模糊) / 已吃透
  const [srsFilter, setSrsFilter] = useState<'all' | 'need_review' | 'mastered'>('all');

  const levels = [
    { id: 'all', label: '全部词库', isFree: true },
    { id: 'A1', label: 'A1 入门 · 免费试学', isFree: true },
    { id: 'A2', label: 'A2 基础', isFree: false },
    { id: 'B1', label: 'B1 进阶', isFree: false },
    { id: 'B2', label: 'B2 提升', isFree: false },
    { id: 'TEM4', label: '专四 / 考研二外高频', isFree: false }
  ];

  const filteredVocab = useMemo(() => {
    return SPANISH_VOCAB_LIST.filter(item => {
      const matchLevel = activeLevel === 'all' || item.level === activeLevel;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q || 
        item.spanish.toLowerCase().includes(q) ||
        item.chinese.includes(q) ||
        (item.article && item.article.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q));
      return matchLevel && matchSearch;
    });
  }, [activeLevel, searchQuery]);

  // 根据 SRS 靶场筛选（全部 / 待复习 / 已吃透）
  const displayVocab = useMemo(() => {
    if (srsFilter === 'all') return filteredVocab;
    if (srsFilter === 'need_review') {
      return filteredVocab.filter(item => srsRatings[item.id] === 'review' || srsRatings[item.id] === 'fuzzy');
    }
    return filteredVocab.filter(item => srsRatings[item.id] === 'mastered' || masteredIds.includes(item.id));
  }, [filteredVocab, srsFilter, srsRatings, masteredIds]);

  // 重置索引
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsAutoPlaying(false);
  }, [activeLevel, searchQuery, srsFilter]);

  const currentItem: SpanishVocab | undefined = displayVocab[currentIndex] || displayVocab[0];

  // 磨耳朵自动连读循环
  const autoPlayTimerRef = useRef<any>(null);
  useEffect(() => {
    if (!isAutoPlaying || displayVocab.length === 0) {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      return;
    }

    const item = displayVocab[currentIndex];
    if (item) {
      speakSpanish(`${item.article ? item.article + ' ' : ''}${item.spanish}`, speechRate);
    }

    autoPlayTimerRef.current = setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev >= displayVocab.length - 1) {
          setIsAutoPlaying(false);
          return 0;
        }
        return prev + 1;
      });
      setIsFlipped(false);
    }, 3600);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, currentIndex, displayVocab, speechRate]);

  const handleNext = () => {
    setIsFlipped(false);
    if (displayVocab.length <= 1) return;
    setCurrentIndex(prev => (prev < displayVocab.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (displayVocab.length <= 1) return;
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : displayVocab.length - 1));
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    if (displayVocab.length <= 1) return;
    const rand = Math.floor(Math.random() * displayVocab.length);
    setCurrentIndex(rand);
  };

  const handleRateSrs = (id: string, rating: 'review' | 'fuzzy' | 'mastered', e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSrsRatings(prev => {
      const updated = { ...prev, [id]: rating };
      try {
        localStorage.setItem('cs313_es_srs_ratings', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    setMasteredIds(prev => {
      let updated: string[];
      if (rating === 'mastered') {
        updated = prev.includes(id) ? prev : [...prev, id];
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      } else {
        updated = prev.filter(i => i !== id);
      }
      try {
        localStorage.setItem('cs313_es_mastered_vocabs', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const toggleMastered = (id: string) => {
    const isCurrentlyMastered = srsRatings[id] === 'mastered' || masteredIds.includes(id);
    handleRateSrs(id, isCurrentlyMastered ? 'fuzzy' : 'mastered');
  };

  const needReviewCount = useMemo(() => {
    return filteredVocab.filter(v => srsRatings[v.id] === 'review' || srsRatings[v.id] === 'fuzzy').length;
  }, [filteredVocab, srsRatings]);

  const masteredCount = useMemo(() => {
    return filteredVocab.filter(v => srsRatings[v.id] === 'mastered' || masteredIds.includes(v.id)).length;
  }, [filteredVocab, srsRatings, masteredIds]);

  const playVoice = (e?: React.MouseEvent, text?: string, customRate?: number) => {
    if (e) e.stopPropagation();
    const targetText = text || (currentItem ? `${currentItem.article ? currentItem.article + ' ' : ''}${currentItem.spanish}` : '');
    if (targetText) {
      speakSpanish(targetText, customRate ?? speechRate);
    }
  };

  // 全键盘快捷键监听 (Space / 方向键 / 1 掌握 / 上箭头或 R 朗读)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'Digit1' || e.code === 'KeyM') {
        e.preventDefault();
        if (currentItem) toggleMastered(currentItem.id);
      } else if (e.code === 'ArrowUp' || e.code === 'KeyR') {
        e.preventDefault();
        playVoice();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentItem, filteredVocab, speechRate]);

  return (
    <div className="w-full space-y-3 sm:space-y-3.5 pb-16 animate-in fade-in duration-300">
      
      {/* 1. 顶部权威 Hero Banner (对标法语图3标准规范) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
              ✨ 塞万提斯官方词纲 · 3D 闪卡记忆
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
              已掌握 {masteredIds.length} 词
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            5,000+ 核心词汇 · 阴阳性双标 3D 翻转记忆库
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed">
            背西班牙语单词最忌讳不记阴阳性！严格标定 <strong className="text-amber-800">阳性 (el)</strong> 与 <strong className="text-[#B82E24]">阴性 (la)</strong>，3D 空间翻转查看释义与真题原比例句。
          </p>
        </div>

        {/* 顶部快捷操作群：遮挡模式 + 语速调节 + 磨耳朵连读 + 随机抽词 + 视图切换 */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end shrink-0 flex-wrap pt-2 md:pt-0 border-t md:border-t-0 border-amber-100">
          
          {/* 遮挡测试模式 (看西忆中 / 看中忆西) */}
          <div className="flex items-center bg-[#FAF8F5] p-1 rounded-xl text-xs border border-amber-200/60">
            <button
              onClick={() => setMaskMode('none')}
              className={`px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                maskMode === 'none' ? 'bg-white text-slate-900 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="正常模式"
            >
              全显
            </button>
            <button
              onClick={() => setMaskMode('hideZh')}
              className={`px-2 py-1 rounded-lg font-bold text-xs transition flex items-center gap-1 cursor-pointer ${
                maskMode === 'hideZh' ? 'bg-[#B82E24] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="遮挡中文（看西语忆中文）"
            >
              <EyeOff className="w-3 h-3" />
              <span>遮中文</span>
            </button>
            <button
              onClick={() => setMaskMode('hideEs')}
              className={`px-2 py-1 rounded-lg font-bold text-xs transition flex items-center gap-1 cursor-pointer ${
                maskMode === 'hideEs' ? 'bg-[#B82E24] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="遮挡西文（看中文忆西语）"
            >
              <EyeOff className="w-3 h-3" />
              <span>遮西文</span>
            </button>
          </div>

          {/* 语速调节 */}
          <div className="flex items-center bg-[#FAF8F5] p-1 rounded-xl text-xs gap-0.5 border border-amber-200/60">
            <button
              type="button"
              onClick={() => setSpeechRate(0.8)}
              className={`px-2 py-1 rounded-lg font-bold transition cursor-pointer ${
                speechRate === 0.8 ? 'bg-[#B82E24] text-white shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="慢速磨耳朵 0.8x"
            >
              0.8x
            </button>
            <button
              type="button"
              onClick={() => setSpeechRate(1.0)}
              className={`px-2 py-1 rounded-lg font-bold transition cursor-pointer ${
                speechRate === 1.0 ? 'bg-white text-slate-900 shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="标准原速 1.0x"
            >
              1.0x
            </button>
            <button
              type="button"
              onClick={() => setSpeechRate(1.2)}
              className={`px-2 py-1 rounded-lg font-bold transition cursor-pointer ${
                speechRate === 1.2 ? 'bg-[#B82E24] text-white shadow-2xs font-black' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="快速挑战 1.2x"
            >
              1.2x
            </button>
          </div>

          {/* 自动连读磨耳朵 */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs ${
              isAutoPlaying 
                ? 'bg-amber-400 text-slate-950 font-black animate-pulse' 
                : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
            }`}
            title="自动循环连读当前词汇"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 text-[#B82E24] fill-current" />}
            <span>{isAutoPlaying ? '暂停连读' : '自动连读'}</span>
          </button>

          {/* 随机乱序抽词 */}
          <button
            onClick={handleShuffle}
            className="p-2 bg-[#FAF8F5] hover:bg-amber-100 text-slate-700 rounded-xl transition cursor-pointer border border-amber-200/60 shadow-2xs"
            title="随机抽取一个单词"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-600" />
          </button>

          {/* 视图切换 (3D 闪卡 / 列表清单) */}
          <button
            onClick={() => setViewMode(viewMode === 'flashcard' ? 'list' : 'flashcard')}
            className="p-2 bg-[#FAF8F5] hover:bg-amber-100 text-slate-700 rounded-xl transition cursor-pointer border border-amber-200/60 shadow-2xs"
            title={viewMode === 'flashcard' ? '切换为列表清单视图' : '切换为 3D 闪卡视图'}
          >
            {viewMode === 'flashcard' ? <List className="w-3.5 h-3.5 text-[#B82E24]" /> : <Grid className="w-3.5 h-3.5 text-[#B82E24]" />}
          </button>
        </div>
      </div>

      {/* 2. 词汇级别筛选条 & 搜索框 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {levels.map(lvl => {
            const isLocked = !isVip && !lvl.isFree;
            return (
              <button
                key={lvl.id}
                onClick={() => {
                  if (isLocked) {
                    onOpenVipModal?.(`🔒【${lvl.label}】为 VIP 专属高频词库！拍下激活码即可解锁全部 5,000+ 核心词库与磨耳朵精听！`);
                    return;
                  }
                  setActiveLevel(lvl.id);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                  activeLevel === lvl.id
                    ? 'bg-[#B82E24] text-white shadow-xs font-black'
                    : isLocked
                    ? 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/80'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-200/80'
                }`}
              >
                {isLocked && <Lock className="w-3 h-3 text-amber-600 shrink-0" />}
                <span>{lvl.label}</span>
                {isLocked && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 text-amber-800 font-extrabold">
                    VIP
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="搜索西语或中文释义..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white border border-amber-200/80 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#B82E24]/20 focus:bg-white text-slate-900 font-medium transition shadow-2xs"
          />
        </div>
      </div>

      {/* 3. 核心 3D 空间立体翻转大闪卡模式 (Flashcard Mode) */}
      {viewMode === 'flashcard' && filteredVocab.length > 0 && currentItem ? (
        <div className="max-w-2xl mx-auto space-y-4 w-full">
          
          {/* Progress & SRS Filter */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-bold flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span>
                当前词卡: <strong className="text-slate-900 font-black">{currentIndex + 1}</strong> / {displayVocab.length}
                <span className="text-[#B82E24] ml-2 font-medium">({currentItem.category})</span>
              </span>
            </div>

            {/* SRS 记忆靶场：全部 / 待复习 / 已吃透 */}
            <div className="flex items-center bg-white p-0.5 rounded-xl text-[11px] font-bold border border-amber-200/80 shadow-2xs">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setSrsFilter('all'); }}
                className={`px-2 py-0.5 rounded-lg transition cursor-pointer ${srsFilter === 'all' ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-500 hover:text-slate-900'}`}
              >
                全部
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setSrsFilter('need_review'); }}
                className={`px-2 py-0.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${srsFilter === 'need_review' ? 'bg-rose-500 text-white shadow-2xs' : 'text-slate-500 hover:text-rose-600'}`}
                title="需重练或模糊的词汇"
              >
                <span>待复习</span>
                {needReviewCount > 0 && <span className={`text-[10px] px-1 rounded-full ${srsFilter === 'need_review' ? 'bg-white/20' : 'bg-rose-100 text-rose-700'}`}>{needReviewCount}</span>}
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setSrsFilter('mastered'); }}
                className={`px-2 py-0.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${srsFilter === 'mastered' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-500 hover:text-emerald-700'}`}
                title="已掌握吃透的词汇"
              >
                <span>已吃透</span>
                {masteredCount > 0 && <span className={`text-[10px] px-1 rounded-full ${srsFilter === 'mastered' ? 'bg-white/20' : 'bg-emerald-100 text-emerald-700'}`}>{masteredCount}</span>}
              </button>
            </div>
          </div>

          {/* 免费试学节点拦截：非VIP学员在进阶词库中体验第10词时显示锁卡 */}
          {!isVip && activeLevel !== 'A1' && currentIndex >= 10 ? (
            <div className="w-full min-h-[340px] sm:min-h-[380px] bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B82E24] via-[#D97706] to-[#B45309] flex items-center justify-center text-white shadow-md shadow-[#B82E24]/20">
                <KeyRound className="w-7 h-7" />
              </div>
              <div className="space-y-1.5 max-w-md">
                <span className="px-3 py-1 rounded-full bg-[#FEF2F2] text-[#B82E24] text-xs font-black border border-[#B82E24]/20">
                  ✨ 免费试学已达节点 (已体验前 10 词)
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  输入卡密解锁全部 5,000+ 核心词库
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  当前为【免费试学模式】。拍下激活码，立享欧标 A1-B2 & 专四考研全量词库、阴阳性全景图解与循环磨耳朵连读！
                </p>
              </div>
              <button
                onClick={() => onOpenVipModal?.('输入卡密解锁全量 5000+ 西班牙语核心词库与真题精讲')}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#B82E24] to-[#D97706] hover:from-[#991B1B] hover:to-[#B82E24] text-white text-xs font-black shadow-md shadow-[#B82E24]/20 active:scale-98 transition cursor-pointer flex items-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>输入卡密立即解锁全部词库 →</span>
              </button>
            </div>
          ) : (
            /* 3D Flip Container (空间立体翻转) */
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative w-full min-h-[350px] sm:min-h-[390px] cursor-pointer perspective-1000 select-none group"
            >
              <div className={`relative w-full h-full min-h-[350px] sm:min-h-[390px] duration-500 transform-style-3d transition-transform rounded-3xl ${
                isFlipped ? 'rotate-y-180' : ''
              }`}>
              
                {/* --- FRONT OF CARD (卡片正面: 统一采用暖金奶油白微浮雕大卡片，告别突兀的大蓝框) --- */}
                <div className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-8 border-2 border-amber-200/90 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF6EE]/50 shadow-lg shadow-amber-950/5 flex flex-col justify-between backface-hidden transition-all">
                  
                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-black shadow-2xs ${
                        currentItem.gender === 'feminine'
                          ? 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/30'
                          : currentItem.gender === 'masculine'
                          ? 'bg-amber-50 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {currentItem.gender === 'feminine' ? '♀ 阴性名词 (la / una)' : currentItem.gender === 'masculine' ? '♂ 阳性名词 (el / un)' : currentItem.pos}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold">
                        {currentItem.level} · {currentItem.category}
                      </span>
                      {currentItem.isException && (
                        <span className="px-2 py-0.5 rounded-lg bg-red-100 text-red-700 text-[10.5px] font-black border border-red-200">
                          ⚠️ 反常陷阱
                        </span>
                      )}
                    </div>
                    
                    {/* Mastered checkmark button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMastered(currentItem.id);
                      }}
                      className={`p-2 rounded-xl transition cursor-pointer ${
                        masteredIds.includes(currentItem.id)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-slate-300 hover:text-slate-400 hover:bg-slate-50'
                      }`}
                      title={masteredIds.includes(currentItem.id) ? '已标记为掌握' : '标记为已掌握'}
                    >
                      <CheckCircle2 className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Center Word & Pronunciation */}
                  <div className="text-center py-5 space-y-3">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <h2 className={`text-4xl sm:text-5xl font-black tracking-tight font-serif transition-all text-slate-900 ${maskMode === 'hideEs' && !isFlipped ? 'filter blur-md' : ''}`}>
                        {currentItem.article && (
                          <span className={`mr-2 font-bold opacity-90 ${
                            currentItem.gender === 'feminine' ? 'text-[#B82E24]' : 'text-amber-800'
                          }`}>
                            {currentItem.article}
                          </span>
                        )}
                        {currentItem.spanish}
                      </h2>
                      
                      <div className="flex items-center gap-1 bg-white/95 p-1 rounded-2xl border border-amber-200/90 shadow-2xs">
                        <button
                          type="button"
                          onClick={(e) => playVoice(e, `${currentItem.article ? currentItem.article + ' ' : ''}${currentItem.spanish}`, speechRate)}
                          className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-[#B82E24] text-[#B82E24] hover:text-white transition cursor-pointer flex items-center gap-1 font-bold text-xs"
                          title={`当前语速 (${speechRate}x) 朗读`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>朗读</span>
                        </button>
                        <div className="h-4 w-px bg-slate-200 mx-0.5" />
                        {([0.8, 1.0, 1.2] as const).map((rate) => (
                          <button
                            key={rate}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSpeechRate(rate);
                              playVoice(e, `${currentItem.article ? currentItem.article + ' ' : ''}${currentItem.spanish}`, rate);
                            }}
                            className={`px-2 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                              speechRate === rate
                                ? 'bg-[#B82E24] text-white shadow-2xs'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                            title={`切换并以 ${rate}x 语速朗读`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className={`text-sm font-mono font-bold tracking-wider text-slate-500 ${maskMode === 'hideEs' && !isFlipped ? 'filter blur-md' : ''}`}>
                      {currentItem.phonetic}
                    </p>

                    {/* 西班牙语特殊避坑提示 */}
                    {currentItem.tip && (
                      <div className="text-[11px] font-bold text-amber-950 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl inline-flex items-center gap-1.5 mt-1 shadow-2xs max-w-lg mx-auto">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{currentItem.tip}</span>
                      </div>
                    )}

                    {/* Masked Prompt Hint */}
                    {maskMode === 'hideEs' && !isFlipped && (
                      <p className="text-xs text-[#B82E24] font-bold mt-2 animate-pulse">
                        (已遮挡西文，点击卡片 3D 翻转查看原文)
                      </p>
                    )}
                  </div>

                  {/* Bottom Hint & Keyboard shortcuts */}
                  <div className="text-center space-y-1">
                    <p className="text-xs text-slate-400 font-bold flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>点击卡片 3D 翻转查看【中文释义 · 真题例句 · 性数考点】</span>
                    </p>
                    <div className="hidden sm:flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">Space 翻转</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">← / → 切词</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">1 掌握</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">↑ 朗读</span>
                    </div>
                  </div>
                </div>

                {/* --- BACK OF CARD (卡片背面: 统一暖金奶油白卡片与西班牙红高光) --- */}
                <div className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-8 border-2 border-amber-200/90 bg-gradient-to-br from-[#FFFDF9] via-white to-amber-50/40 shadow-xl shadow-amber-950/5 flex flex-col justify-between rotate-y-180 backface-hidden overflow-y-auto">
                  
                  {/* Top Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                        currentItem.gender === 'feminine' ? 'bg-[#B82E24] text-white' : currentItem.gender === 'masculine' ? 'bg-amber-700 text-white' : 'bg-slate-800 text-white'
                      }`}>
                        {currentItem.article ? currentItem.article + ' ' : ''}{currentItem.spanish}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">{currentItem.phonetic}</span>
                      <span className="text-xs font-bold text-slate-500">
                        ({currentItem.gender === 'feminine' ? '阴性' : currentItem.gender === 'masculine' ? '阳性' : currentItem.pos})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/90 p-1 rounded-xl border border-amber-200 shadow-2xs">
                      <button
                        type="button"
                        onClick={(e) => playVoice(e, `${currentItem.article ? currentItem.article + ' ' : ''}${currentItem.spanish}`, speechRate)}
                        className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-[#B82E24] text-[#B82E24] hover:text-white transition cursor-pointer flex items-center gap-1 font-bold text-xs"
                        title={`以当前语速 (${speechRate}x) 朗读`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{speechRate}x</span>
                      </button>
                    </div>
                  </div>

                  {/* Center Content: Meaning & Example */}
                  <div className="space-y-3.5 my-auto py-2">
                    {/* Meaning */}
                    <div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase ${
                        currentItem.gender === 'feminine' ? 'text-[#B82E24]' : 'text-amber-800'
                      }`}>
                        中文释义
                      </span>
                      <p className={`text-2xl sm:text-3xl font-black text-slate-900 mt-0.5 ${
                        maskMode === 'hideZh' ? 'filter blur-md' : ''
                      }`}>
                        {currentItem.chinese}
                      </p>
                    </div>

                    {/* Example Sentence */}
                    {currentItem.example && (
                      <div className="bg-white/95 p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 space-y-1.5 shadow-2xs">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-relaxed">
                            « {currentItem.example.es} »
                          </p>
                          <button
                            onClick={(e) => playVoice(e, currentItem.example.es)}
                            className="p-1 text-slate-400 hover:text-[#B82E24] shrink-0 cursor-pointer"
                            title="朗读整句例句"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className={`text-xs text-slate-600 leading-relaxed font-medium ${
                          maskMode === 'hideZh' ? 'filter blur-md' : ''
                        }`}>
                          {currentItem.example.zh}
                        </p>
                      </div>
                    )}

                    {/* Tip note on back */}
                    {currentItem.tip && (
                      <div className="text-xs text-slate-600 bg-amber-50/70 border border-amber-200/70 p-2.5 rounded-xl leading-relaxed">
                        <span className="font-black text-amber-900">考点拓展：</span>{currentItem.tip}
                      </div>
                    )}
                  </div>

                  {/* Bottom SRS Rating Buttons */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/70 mt-auto">
                    <span className="text-[11px] text-slate-400 font-bold hidden sm:inline">
                      记忆分级:
                    </span>
                    <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={(e) => handleRateSrs(currentItem.id, 'review', e)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer border ${
                          srsRatings[currentItem.id] === 'review'
                            ? 'bg-rose-500 text-white border-rose-600 shadow-2xs'
                            : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                        }`}
                        title="完全忘记，加入重点复习"
                      >
                        <span>🔴 重练</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleRateSrs(currentItem.id, 'fuzzy', e)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer border ${
                          srsRatings[currentItem.id] === 'fuzzy'
                            ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                            : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                        }`}
                        title="仍需犹豫思考"
                      >
                        <span>🟡 模糊</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleRateSrs(currentItem.id, 'mastered', e)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer border ${
                          srsRatings[currentItem.id] === 'mastered'
                            ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                        }`}
                        title="秒答掌握，完全吃透"
                      >
                        <span>🟢 已吃透</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Bottom Card Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={handlePrev}
              disabled={displayVocab.length <= 1}
              className="px-4 py-2 rounded-2xl bg-white border border-amber-200/90 text-slate-700 font-bold text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-1 shadow-xs disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一个 (←)</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? '看卡片正面' : '翻转查看释义 (Space)'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={displayVocab.length <= 1}
              className="px-4 py-2 rounded-2xl bg-white border border-amber-200/90 text-slate-700 font-bold text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-1 shadow-xs disabled:opacity-40"
            >
              <span>下一个 (→)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : viewMode === 'list' && filteredVocab.length > 0 ? (
        /* --- 4. 列表清单视图 (List View Mode) --- */
        <div className="bg-white rounded-3xl border border-amber-200/90 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-amber-100 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>共检索出 {displayVocab.length} 个词汇</span>
            <span>点击词条发音 · 勾选标记掌握</span>
          </div>

          <div className="divide-y divide-amber-100/60 max-h-[600px] overflow-y-auto">
            {displayVocab.map((item, idx) => {
              const isMastered = masteredIds.includes(item.id);
              return (
                <div 
                  key={item.id}
                  className="p-3.5 sm:p-4 hover:bg-amber-50/50 transition flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono text-slate-400 w-6 shrink-0">{idx + 1}</span>
                    
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-base font-black font-serif ${
                          item.gender === 'feminine' ? 'text-[#B82E24]' : item.gender === 'masculine' ? 'text-amber-950' : 'text-slate-900'
                        }`}>
                          {item.article ? item.article + ' ' : ''}{item.spanish}
                        </span>
                        
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                          item.gender === 'feminine' ? 'bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20' : item.gender === 'masculine' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.gender === 'feminine' ? '阴性' : item.gender === 'masculine' ? '阳性' : item.pos}
                        </span>

                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-amber-900 border border-amber-200">
                          {item.level}
                        </span>

                        {item.isException && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-700">
                            ⚠️ 反常
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 truncate font-medium">
                        {item.chinese}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => speakSpanish(`${item.article ? item.article + ' ' : ''}${item.spanish}`, speechRate)}
                      className="p-2 rounded-xl text-slate-400 hover:text-[#B82E24] hover:bg-amber-50 transition cursor-pointer"
                      title="朗读单词"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => toggleMastered(item.id)}
                      className={`p-2 rounded-xl transition cursor-pointer ${
                        isMastered ? 'text-emerald-600 bg-emerald-50' : 'text-slate-300 hover:text-slate-400'
                      }`}
                      title={isMastered ? '已掌握' : '标记为已掌握'}
                    >
                      <CheckCircle2 className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-amber-200/80 space-y-3">
          <Layers className="w-12 h-12 text-amber-300 mx-auto" />
          <h3 className="text-base font-black text-slate-800">没有检索到符合条件的词汇</h3>
          <p className="text-xs text-slate-500">请尝试清除搜索关键词或切换欧标分类等级。</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveLevel('all'); setSrsFilter('all'); }}
            className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-xl transition cursor-pointer border border-amber-200"
          >
            重置所有筛选条件
          </button>
        </div>
      )}

    </div>
  );
};
