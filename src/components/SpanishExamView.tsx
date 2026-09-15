import React, { useState, useEffect, useMemo } from 'react';
import { 
  FileCheck2, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  BookMarked, 
  Sparkles, 
  Award, 
  Search, 
  Play, 
  Pause, 
  Check, 
  Layers, 
  GraduationCap, 
  Globe2, 
  Laptop, 
  ShieldCheck, 
  Lightbulb,
  Lock,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPANISH_EXAM_PAPERS, ExamPaper, ExamQuestion, ExamTrack } from '../data/examData';
import { WrongRecord } from './MistakesView';

interface SpanishExamViewProps {
  onSaveMistake: (record: WrongRecord) => void;
  onGoToMistakes: () => void;
  isVip: boolean;
  onOpenVipModal: () => void;
  onOpenExamModal?: () => void;
}

export const SpanishExamView: React.FC<SpanishExamViewProps> = ({
  onSaveMistake,
  onGoToMistakes,
  isVip,
  onOpenVipModal,
  onOpenExamModal
}) => {
  // 当前选择的大考赛道 (默认：塞万提斯 DELE 欧标机考)
  const [activeTrack, setActiveTrack] = useState<ExamTrack>('dele');
  const [selectedPaperId, setSelectedPaperId] = useState<string>('paper-dele-b1-01');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  // 考场交互状态
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showInstantExplanation, setShowInstantExplanation] = useState<boolean>(true);

  // 计时器状态
  const [secondsRemaining, setSecondsRemaining] = useState<number>(2700);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // 赛道统计计数
  const trackCounts = useMemo(() => {
    return {
      dele: SPANISH_EXAM_PAPERS.filter(p => p.track === 'dele').length,
      siele: SPANISH_EXAM_PAPERS.filter(p => p.track === 'siele').length,
      tem4: SPANISH_EXAM_PAPERS.filter(p => p.track === 'tem4').length,
      kaoyan: SPANISH_EXAM_PAPERS.filter(p => p.track === 'kaoyan').length,
      kaoyan_mock: SPANISH_EXAM_PAPERS.filter(p => p.track === 'kaoyan_mock').length,
    };
  }, []);

  // 赛道试卷过滤
  const filteredPapers = useMemo(() => {
    return SPANISH_EXAM_PAPERS.filter(p => {
      if (p.track !== activeTrack) return false;
      if (levelFilter !== 'all' && p.level !== levelFilter) return false;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.spanishTitle.toLowerCase().includes(q) ||
        p.schoolOrOrg.toLowerCase().includes(q)
      );
    });
  }, [activeTrack, levelFilter, searchQuery]);

  // 当前选中试卷
  const activePaper: ExamPaper = useMemo(() => {
    return SPANISH_EXAM_PAPERS.find(p => p.id === selectedPaperId) || filteredPapers[0] || SPANISH_EXAM_PAPERS[0];
  }, [selectedPaperId, filteredPapers]);

  // 当切换赛道时，自动设置默认第一张试卷
  useEffect(() => {
    if (filteredPapers.length > 0 && !filteredPapers.some(p => p.id === selectedPaperId)) {
      setSelectedPaperId(filteredPapers[0].id);
    }
  }, [activeTrack, filteredPapers, selectedPaperId]);

  // 倒计时核心循环
  useEffect(() => {
    let interval: any = null;
    if (isExamMode && isTimerRunning && !isSubmitted && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitPaper();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamMode, isTimerRunning, isSubmitted, secondsRemaining]);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 进入考场
  const handleStartExam = (paper: ExamPaper) => {
    setSelectedPaperId(paper.id);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setSecondsRemaining(paper.durationMinutes * 60);
    setIsTimerRunning(true);
    setIsExamMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 退出考场返回试卷列表
  const handleExitExamMode = () => {
    if (!isSubmitted && Object.keys(userAnswers).length > 0) {
      if (!window.confirm('您尚未交卷，确定要退出当前模考吗？已答题目进度不会丢失。')) {
        return;
      }
    }
    setIsTimerRunning(false);
    setIsExamMode(false);
  };

  // 选项点击
  const handleSelectOption = (qId: string, optKey: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optKey }));
  };

  // 交卷评分
  const handleSubmitPaper = () => {
    let totalEarned = 0;
    const questions = activePaper.questions;

    questions.forEach(q => {
      const userAns = userAnswers[q.id];
      if (userAns === q.correctAnswer) {
        totalEarned += q.score;
      } else {
        onSaveMistake({
          id: `${activePaper.id}_${q.id}_${Date.now()}`,
          paperId: activePaper.id,
          paperTitle: activePaper.title,
          question: q,
          wrongUserAnswer: userAns || '未作答',
          dateAdded: new Date().toISOString()
        });
      }
    });

    setScore(totalEarned);
    setIsSubmitted(true);
    setIsTimerRunning(false);

    if (totalEarned >= 60) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 重置/重练当前试卷
  const handleRetakeExam = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSecondsRemaining(activePaper.durationMinutes * 60);
    setIsTimerRunning(true);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const currentQuestion: ExamQuestion | undefined = activePaper.questions[currentQuestionIndex];
  const isApto = score >= 60;

  // ================= 视图 A: 考场全真作答与评分视图 (Immersive Exam Room) =================
  if (isExamMode) {
    return (
      <div className="w-full space-y-4 pb-16 animate-in fade-in duration-300">
        
        {/* 1. 考场顶部常驻操作条 (倒计时 + 题目进度 + 交卷) */}
        <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-amber-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 sticky top-2 z-20 backdrop-blur-md bg-white/95">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={handleExitExamMode}
              className="px-2.5 py-1 rounded-xl bg-[#FAF8F5] hover:bg-amber-100 text-slate-700 font-bold text-xs transition flex items-center gap-1 border border-amber-200 shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>退出考场</span>
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10.5px] px-2 py-0.2 rounded-md bg-[#FEF2F2] text-[#B82E24] font-black border border-[#B82E24]/20">
                  {activePaper.track.toUpperCase()} 考场
                </span>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 truncate max-w-xs sm:max-w-md">
                  {activePaper.title}
                </h2>
              </div>
            </div>
          </div>

          {/* 计时器 + 即时解析开关 + 交卷按钮 */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0 flex-wrap">
            {/* 倒计时 */}
            <div className={`px-3 py-1 rounded-xl border text-xs font-mono font-black flex items-center gap-1.5 shadow-2xs ${
              secondsRemaining < 300 
                ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' 
                : 'bg-amber-50 text-amber-900 border-amber-200'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(secondsRemaining)}</span>
              <button
                type="button"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="hover:opacity-75 cursor-pointer ml-1"
                title={isTimerRunning ? '暂停计时' : '继续计时'}
              >
                {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
              </button>
            </div>

            {/* 即时看解析开关 */}
            <button
              type="button"
              onClick={() => setShowInstantExplanation(!showInstantExplanation)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer border ${
                showInstantExplanation 
                  ? 'bg-amber-100 text-amber-900 border-amber-300' 
                  : 'bg-[#FAF8F5] text-slate-500 border-amber-200 hover:text-slate-900'
              }`}
              title="开启后每做一题即可即时查看权威考点解析"
            >
              <Lightbulb className={`w-3.5 h-3.5 ${showInstantExplanation ? 'text-amber-700' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">即时解析</span>
            </button>

            {/* 交卷 / 重新作答 */}
            {!isSubmitted ? (
              <button
                onClick={() => {
                  if (answeredCount < activePaper.questions.length) {
                    if (window.confirm(`您还有 ${activePaper.questions.length - answeredCount} 道题未作答，确定现在提前交卷吗？`)) {
                      handleSubmitPaper();
                    }
                  } else {
                    handleSubmitPaper();
                  }
                }}
                className="px-4 py-1 rounded-xl bg-gradient-to-r from-[#B82E24] to-[#D97706] hover:from-[#991B1B] hover:to-[#B82E24] text-white font-black text-xs shadow-xs transition cursor-pointer active:scale-95"
              >
                交卷评分 ➔
              </button>
            ) : (
              <button
                onClick={handleRetakeExam}
                className="px-3.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs transition cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重新作答</span>
              </button>
            )}
          </div>
        </div>

        {/* 2. 交卷后成绩报告卡 (对标 DELE 官方 APTO 准绳) */}
        {isSubmitted && (
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 rounded-3xl p-5 sm:p-6 border-2 border-amber-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-black shadow-md shrink-0 ${
                isApto 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-emerald-600/20' 
                  : 'bg-gradient-to-br from-[#B82E24] to-red-700 text-white shadow-red-600/20'
              }`}>
                <span className="text-xl leading-none">{score}</span>
                <span className="text-[10px] font-bold opacity-90 mt-0.5">/ 100分</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                    isApto 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {isApto ? '🎖️ 官方判定：APTO (及格通过)' : '⚠️ 官方判定：NO APTO (未通过)'}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">
                    正确率: {Math.round((score / activePaper.totalScore) * 100)}%
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900">
                  {isApto ? '¡Enhorabuena! 恭喜您通过本次西班牙语模考测试！' : '仍有部分语法点与时态配合需强化，错题已归集至错题本！'}
                </h3>
                <p className="text-xs text-slate-500">
                  共计 {activePaper.questions.length} 题，答对 {activePaper.questions.filter(q => userAnswers[q.id] === q.correctAnswer).length} 题。请向下查阅各题官方考点深度剖析。
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onGoToMistakes}
                className="px-4 py-2 rounded-xl bg-white border border-amber-300 text-[#B82E24] font-black text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <BookMarked className="w-4 h-4" />
                <span>进入错题本巩固</span>
              </button>
            </div>
          </div>
        )}

        {/* 3. 互动答题卡序号栏 (Answer Sheet Matrix) */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-amber-200/80 shadow-xs flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1.5">题号导航:</span>
            {activePaper.questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isAnswered = !!userAns;
              const isCurrent = idx === currentQuestionIndex;
              const isCorrect = isSubmitted && userAns === q.correctAnswer;
              const isWrong = isSubmitted && userAns && userAns !== q.correctAnswer;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-8 h-8 rounded-xl font-mono text-xs font-black transition cursor-pointer flex items-center justify-center relative ${
                    isCurrent ? 'ring-2 ring-[#B82E24] ring-offset-1 scale-105 z-10' : ''
                  } ${
                    isSubmitted
                      ? isCorrect
                        ? 'bg-emerald-500 text-white'
                        : isWrong
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                      : isAnswered
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'bg-[#FAF8F5] text-slate-700 border border-amber-200/70 hover:bg-amber-50'
                  }`}
                  title={`第 ${idx + 1} 题 (${isAnswered ? '已作答' : '未答'})`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold text-slate-400">
            进度: <strong className="text-slate-800">{answeredCount}</strong> / {activePaper.questions.length} 题
          </div>
        </div>

        {/* 4. 当前核心试题呈现卡片 */}
        {currentQuestion && (
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-200/90 shadow-xs space-y-5">
            
            {/* 试题标头 */}
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-lg bg-[#FAF8F5] text-slate-700 border border-amber-200 text-xs font-black font-mono">
                  第 {currentQuestionIndex + 1} 题 / 共 {activePaper.questions.length} 题
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
                  {currentQuestion.type === 'reading' ? '📖 阅读理解' : currentQuestion.type === 'cloze' ? '📝 完形填空' : '⚡ 语法词汇'}
                </span>
                <span className="text-xs font-black text-[#B82E24] bg-[#FEF2F2] px-2 py-0.5 rounded-lg border border-[#B82E24]/20">
                  {currentQuestion.categoryTag}
                </span>
              </div>

              <span className="text-xs font-bold text-slate-400">
                本题分值: <strong className="text-amber-700">{currentQuestion.score} 分</strong>
              </span>
            </div>

            {/* 阅读/完形上下文短文 (如果有) */}
            {currentQuestion.passage && (
              <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-amber-200/70 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <span>📄 Texto de Lectura (阅读原文):</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif text-justify indent-6">
                  {currentQuestion.passage}
                </p>
              </div>
            )}

            {/* 题干 Prompt */}
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                {currentQuestion.questionText}
              </h3>
            </div>

            {/* 四个单选选项 (A, B, C, D) */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQuestion.options.map(opt => {
                const isChosen = userAnswers[currentQuestion.id] === opt.key;
                const isThisCorrect = opt.key === currentQuestion.correctAnswer;
                const showAnalysisNow = isSubmitted || (showInstantExplanation && isChosen);

                let optStyle = 'border-amber-200/80 bg-white hover:border-amber-400 hover:bg-amber-50/40 text-slate-800';
                if (isChosen && !showAnalysisNow) {
                  optStyle = 'border-[#B82E24] bg-amber-50/70 ring-2 ring-[#B82E24]/20 font-bold text-slate-900';
                } else if (showAnalysisNow) {
                  if (isThisCorrect) {
                    optStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20 text-emerald-950 font-bold';
                  } else if (isChosen && !isThisCorrect) {
                    optStyle = 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-500/20 text-rose-950 font-bold';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectOption(currentQuestion.id, opt.key)}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-3 ${optStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 ${
                        showAnalysisNow && isThisCorrect
                          ? 'bg-emerald-600 text-white'
                          : showAnalysisNow && isChosen && !isThisCorrect
                          ? 'bg-rose-600 text-white'
                          : isChosen
                          ? 'bg-[#B82E24] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {opt.text}
                      </span>
                    </div>

                    {showAnalysisNow && isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {showAnalysisNow && isChosen && !isThisCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 即时解析卡片 (提交后或开启即时解析并作答后呈现) */}
            {(isSubmitted || (showInstantExplanation && userAnswers[currentQuestion.id])) && (
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/90 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-amber-500 text-white">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-black text-amber-950">官方试题考点深度剖析：</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded-md">
                    正确答案: 选项 {currentQuestion.correctAnswer}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* 底部前后题切换 */}
            <div className="flex items-center justify-between pt-3 border-t border-amber-100">
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 rounded-xl bg-white border border-amber-200 text-slate-700 font-bold text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-1 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>上一题</span>
              </button>

              <span className="text-xs font-bold text-slate-400">
                {currentQuestionIndex + 1} / {activePaper.questions.length}
              </span>

              <button
                type="button"
                onClick={() => setCurrentQuestionIndex(prev => Math.min(activePaper.questions.length - 1, prev + 1))}
                disabled={currentQuestionIndex === activePaper.questions.length - 1}
                className="px-4 py-2 rounded-xl bg-white border border-amber-200 text-slate-700 font-bold text-xs hover:bg-amber-50 transition cursor-pointer flex items-center gap-1 disabled:opacity-40"
              >
                <span>下一题</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    );
  }

  // ================= 视图 B: 试卷总览与四大赛道目录 (Paper Catalog Mode) =================
  return (
    <div className="w-full space-y-4 pb-16 animate-in fade-in duration-300">
      
      {/* 1. 顶部大考题库展台卡片 */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs space-y-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B82E24] via-[#D97706] to-[#B45309] text-white flex items-center justify-center shadow-xs shrink-0 font-black text-sm">
              EX
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  四大官方大考真题赛道
                </span>
                <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  西班牙语官方全真模考大卷库 (Exámenes Oficiales)
                </h1>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                塞万提斯 DELE 欧标机考 · SIELE 在线综合 · 高校西语专四 (EEE-4) · 考研二外历届真题 (240) · 考研二外全真模拟
              </p>
            </div>
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

        {/* 官方报考与考期全景指引通栏 (集成于模考模块内) */}
        {onOpenExamModal && (
          <div
            onClick={onOpenExamModal}
            className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#FEF2F2] via-[#FFFDF9] to-amber-50/60 border border-[#B82E24]/20 flex items-center justify-between gap-2.5 cursor-pointer hover:border-[#B82E24]/50 transition group shadow-2xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="p-1 rounded-lg bg-[#B82E24] text-white shrink-0">
                <Calendar className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-black text-slate-900 shrink-0">
                官方报考全景通道：
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-600 truncate">
                <span className="hidden sm:inline">2026 DELE 统考 · 2027 高校专四 (EEE-4) · SIELE 在线机考日历已校准</span>
                <span className="inline sm:hidden">考期日历、报名入口与避坑 SOP</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-black text-[#B82E24] shrink-0 group-hover:translate-x-0.5 transition-transform">
              <span>查看指南</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        {/* 五大权威大考与考研赛道选择 Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-2 border-t border-amber-100">
          {[
            { id: 'dele' as ExamTrack, label: '塞万提斯 DELE 欧标机考', icon: Globe2, desc: 'A1-B2 终身认证真题卷', count: trackCounts.dele },
            { id: 'siele' as ExamTrack, label: 'SIELE 国际在线机考', icon: Laptop, desc: '四大顶尖大学机考', count: trackCounts.siele },
            { id: 'tem4' as ExamTrack, label: '高校西语专四 (EEE-4)', icon: ShieldCheck, desc: '全国专业本科水平统考', count: trackCounts.tem4 },
            { id: 'kaoyan' as ExamTrack, label: '名校考研二外历届真题', icon: GraduationCap, desc: '北外/上外/广外等真题卷', count: trackCounts.kaoyan },
            { id: 'kaoyan_mock' as ExamTrack, label: '考研二外全真模拟冲刺', icon: Sparkles, desc: '全国统考模拟 & 专项攻坚', count: trackCounts.kaoyan_mock },
          ].map(track => {
            const Icon = track.icon;
            const isSelected = activeTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track.id);
                  setLevelFilter('all');
                }}
                className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between space-y-1.5 ${
                  isSelected
                    ? 'border-[#B82E24] bg-[#FEF2F2]/60 shadow-xs ring-2 ring-[#B82E24]/20'
                    : 'border-amber-200/80 bg-white hover:border-amber-300 hover:bg-amber-50/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                    <span className={`text-xs font-black ${isSelected ? 'text-[#B82E24]' : 'text-slate-800'}`}>
                      {track.label}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-[#B82E24] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {track.count} 套
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {track.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. 试卷级别子过滤 & 搜索 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap mr-1">分类过滤:</span>
          {(['all', 'A1', 'A2', 'B1', 'B2', 'TEM-4', '考研二外', '考研模拟'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                levelFilter === lvl
                  ? 'bg-[#B82E24] text-white shadow-2xs font-black'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-200/80'
              }`}
            >
              {lvl === 'all' 
                ? '全部试卷' 
                : (lvl === 'TEM-4' 
                    ? '专四(EEE-4)' 
                    : (lvl === '考研二外' 
                        ? '二外真题' 
                        : (lvl === '考研模拟' 
                            ? '二外模拟冲刺' 
                            : lvl)))}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索试卷标题、机构或题型..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-amber-200/80 bg-white text-xs font-medium text-slate-800 outline-none focus:ring-2 focus:ring-[#B82E24]/20"
          />
        </div>
      </div>

      {/* 3. 试卷大卡片网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredPapers.map(paper => {
          return (
            <div
              key={paper.id}
              className="bg-white rounded-3xl p-5 border border-amber-200/90 shadow-xs hover:shadow-md transition space-y-3.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20 text-[10.5px] font-black">
                      {paper.level}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-[10.5px] font-bold">
                      {paper.schoolOrOrg}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {paper.durationMinutes} 分钟 · 满分 {paper.totalScore}分
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-serif text-slate-500 italic">
                    {paper.spanishTitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                  {paper.summary}
                </p>
              </div>

              {/* 试题信息与开始模考按钮 */}
              <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <Layers className="w-3.5 h-3.5 text-amber-600" />
                  <span>共 {paper.questions.length} 道全真试题</span>
                </div>

                <button
                  onClick={() => handleStartExam(paper)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1.5 active:scale-95 hover:scale-102"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>进入全真考场 ➔</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPapers.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-amber-200/80 space-y-3">
          <FileCheck2 className="w-12 h-12 text-amber-300 mx-auto" />
          <h3 className="text-base font-black text-slate-800">未找到相关试卷</h3>
          <p className="text-xs text-slate-500">请尝试更换搜索关键词或切换上方大考赛道。</p>
          <button
            onClick={() => { setSearchQuery(''); setLevelFilter('all'); }}
            className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-xl transition cursor-pointer border border-amber-200"
          >
            重置筛选条件
          </button>
        </div>
      )}

    </div>
  );
};
