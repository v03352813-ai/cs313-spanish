import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Flame, 
  ExternalLink, 
  Lightbulb, 
  Calculator, 
  Globe2,
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';
import { SPANISH_EXAM_REGISTRATION_DATA } from '../data/examRegistrationData';
import { getSpanishExamCountdownStatus } from '../utils/examCountdown';

interface ExamRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToExam?: () => void;
}

export const ExamRegistrationModal: React.FC<ExamRegistrationModalProps> = ({
  isOpen,
  onClose,
  onNavigateToExam
}) => {
  const [activeTab, setActiveTab] = useState<'gateways' | 'timeline' | 'tips' | 'scoring'>('gateways');
  const [expandedStep, setExpandedStep] = useState<string | null>('02');

  // DELE 算分器状态 (阅读25/写作25/听力25/口语25)
  const [readingScore, setReadingScore] = useState<number>(18);
  const [writingScore, setWritingScore] = useState<number>(17);
  const [listeningScore, setListeningScore] = useState<number>(16);
  const [speakingScore, setSpeakingScore] = useState<number>(16);

  const countdown = getSpanishExamCountdownStatus();
  const { deleSession, sieleSession, temSession, deleTimeline, snatchTips, scoringRules } = SPANISH_EXAM_REGISTRATION_DATA;

  const tabsRef = useRef<HTMLDivElement>(null);
  const scrollTabs = (offset: number) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 算分逻辑: Grupo 1 (阅读+写作) >= 30, Grupo 2 (听力+口语) >= 30, 总分 >= 60
  const grupo1 = Number(readingScore) + Number(writingScore);
  const grupo2 = Number(listeningScore) + Number(speakingScore);
  const totalScore = grupo1 + grupo2;
  const isApto = grupo1 >= 30 && grupo2 >= 30 && totalScore >= 60;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-amber-200/80 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* 顶部标题栏：阳光金与西班牙红渐变 */}
        <div className="px-5 sm:px-6 py-4 bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#991B1B] text-white flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 text-white flex items-center justify-center shrink-0 backdrop-blur-md border border-white/20 font-black shadow-xs">
              <Calendar className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10.5px] font-black tracking-wide">
                  官方报考直通
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight">
                  2026 西班牙语 DELE / SIELE 欧标与专四报考全景指南
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1 shadow-2xs">
                  <Flame className="w-3.5 h-3.5 text-rose-700" />
                  {countdown.displayText}
                </span>
              </div>
              <p className="text-xs text-amber-100 font-medium mt-0.5">
                教育部考试院 (dele.neea.cn) · 塞万提斯学院 (cervantes.es) · 官方机考 (siele.org)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
            title="关闭窗口 (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 导航标签页 (全显平铺 + 真实滑块 + 左右滑动控制器) */}
        <div className="relative border-b border-amber-200/80 bg-amber-50/70 shrink-0 flex items-center">
          {/* 左翻按钮 */}
          <button
            type="button"
            onClick={() => scrollTabs(-200)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-amber-100 transition shrink-0 z-10 hidden sm:flex items-center justify-center cursor-pointer h-full border-r border-amber-200/60"
            title="向左滚动导航"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 导航标签槽：电脑端平铺全显，窄屏带明显可见滑块与拖拽 */}
          <div 
            ref={tabsRef}
            className="flex-1 flex items-center overflow-x-auto px-2 sm:px-3 py-1.5 gap-1.5 w-full [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-amber-50 [&::-webkit-scrollbar-thumb]:bg-amber-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-amber-400 cursor-pointer"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#fcd34d #fffbeb' }}
          >
            <button
              onClick={() => setActiveTab('gateways')}
              className={`flex-1 min-w-[140px] md:min-w-0 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center ${
                activeTab === 'gateways'
                  ? 'bg-white text-[#B82E24] shadow-xs border border-amber-200 font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5 text-[#B82E24] shrink-0" />
              <span>🌐 官方报名入口</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex-1 min-w-[140px] md:min-w-0 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center ${
                activeTab === 'timeline'
                  ? 'bg-white text-[#B82E24] shadow-xs border border-amber-200 font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>📅 DELE 考期日历</span>
            </button>

            <button
              onClick={() => setActiveTab('tips')}
              className={`flex-1 min-w-[140px] md:min-w-0 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center ${
                activeTab === 'tips'
                  ? 'bg-white text-[#B82E24] shadow-xs border border-amber-200 font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>💡 抢考位避坑 SOP</span>
            </button>

            <button
              onClick={() => setActiveTab('scoring')}
              className={`flex-1 min-w-[140px] md:min-w-0 py-2 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center ${
                activeTab === 'scoring'
                  ? 'bg-white text-[#B82E24] shadow-xs border border-amber-200 font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>📊 100分及格测算</span>
            </button>
          </div>

          {/* 右翻按钮 */}
          <button
            type="button"
            onClick={() => scrollTabs(200)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-amber-100 transition shrink-0 z-10 hidden sm:flex items-center justify-center cursor-pointer h-full border-l border-amber-200/60"
            title="向右滚动导航"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 内容主体 */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FAF8F5]">
          {activeTab === 'gateways' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#B82E24]" />
                  <strong className="text-sm font-black text-[#B82E24]">
                    关于国家正规西班牙语考试官方报考渠道的重要说明
                  </strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  我国所有 DELE 塞万提斯学院官方统考及 SIELE 国际机考，均须由考生在教育部教育考试院或国际官方系统以实名认证方式完成网上报名与缴费。任何第三方机构均无权代办代发。本研习社为您梳理官方通道，请点击前往官网安全报考：
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 网关 1: DELE 统考 */}
                <div className="p-5 rounded-3xl bg-white border-2 border-amber-200 hover:border-[#B82E24] shadow-xs hover:shadow-md transition space-y-3.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] text-xs font-black border border-[#B82E24]/20">
                        🇪🇸 塞万提斯官方统考
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">dele.neea.cn</span>
                    </div>
                    <h4 className="text-base font-black text-slate-900">{deleSession.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>适用群体：</strong>{deleSession.targetAudience}<br/>
                      <strong>考试日期：</strong>{deleSession.examDate}<br/>
                      <strong>报名周期：</strong>{deleSession.registerDate}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={deleSession.neeaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                    >
                      <span>前往 NEEA 官网报名</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 网关 2: SIELE 在线机考 */}
                <div className="p-5 rounded-3xl bg-white border-2 border-amber-200 hover:border-amber-400 shadow-xs hover:shadow-md transition space-y-3.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 text-xs font-black border border-amber-200">
                        ⚡ 随报随测·快速出分
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">siele.org</span>
                    </div>
                    <h4 className="text-base font-black text-slate-900">{sieleSession.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>适用群体：</strong>{sieleSession.targetAudience}<br/>
                      <strong>考试周期：</strong>{sieleSession.examDate}<br/>
                      <strong>报名要求：</strong>{sieleSession.registerDate}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={sieleSession.neeaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                    >
                      <span>前往 SIELE 官网选期</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-3">
              {deleTimeline.map(step => {
                const isExpanded = expandedStep === step.step;
                return (
                  <div 
                    key={step.step}
                    className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-2.5 transition"
                  >
                    <div 
                      className="flex items-center justify-between cursor-pointer select-none"
                      onClick={() => setExpandedStep(isExpanded ? null : step.step)}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-[#FEF2F2] text-[#B82E24] font-black text-xs flex items-center justify-center border border-[#B82E24]/20">
                          {step.step}
                        </span>
                        <strong className="text-sm font-black text-slate-900">{step.title}</strong>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                          {step.dateRange}
                        </span>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>

                    {isExpanded && (
                      <div className="pl-8 pt-1 space-y-2 text-xs text-slate-600">
                        <p>{step.desc}</p>
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100 space-y-1">
                          <strong className="text-amber-900 font-bold">考务秘籍：</strong>
                          {step.tips.map((t, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-slate-700">
                              <span className="text-[#B82E24] font-black">•</span>
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {snatchTips.map((tip, idx) => (
                <div key={idx} className="p-5 rounded-3xl bg-white border border-amber-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-sm text-slate-900">{tip.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] font-bold border border-[#B82E24]/20">
                      {tip.tag}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {tip.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'scoring' && (
            <div className="space-y-4">
              <div className="p-5 rounded-3xl bg-white border border-amber-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-sm text-slate-900">DELE A1~B2 及格算分计算器</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Grupo 1 (阅读+写作) ≥ 30分 且 Grupo 2 (听力+口语) ≥ 30分 且 总分 ≥ 60 即可获得 APTO！
                    </p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-xl font-black text-xs border ${isApto ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-rose-50 text-rose-700 border-rose-300'}`}>
                    {isApto ? '🎉 测算判定：APTO (及格通过)' : '⚠️ 测算判定：NO APTO (未及格)'}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-3">
                    <strong className="text-xs font-black text-amber-950">Grupo 1 (阅读 25分 + 写作 25分 = 50分)</strong>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>阅读理解得分:</span>
                        <input
                          type="number"
                          min="0"
                          max="25"
                          value={readingScore}
                          onChange={e => setReadingScore(Math.min(25, Math.max(0, Number(e.target.value))))}
                          className="w-16 px-2 py-1 bg-white border border-amber-300 rounded-lg text-center font-bold"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>书面表达得分:</span>
                        <input
                          type="number"
                          min="0"
                          max="25"
                          value={writingScore}
                          onChange={e => setWritingScore(Math.min(25, Math.max(0, Number(e.target.value))))}
                          className="w-16 px-2 py-1 bg-white border border-amber-300 rounded-lg text-center font-bold"
                        />
                      </div>
                      <div className="pt-2 border-t border-amber-200 flex justify-between font-bold">
                        <span>Grupo 1 小计:</span>
                        <span className={grupo1 >= 30 ? 'text-emerald-600' : 'text-rose-600'}>{grupo1} / 50 (要求≥30)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-3">
                    <strong className="text-xs font-black text-amber-950">Grupo 2 (听力 25分 + 口语 25分 = 50分)</strong>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>听力理解得分:</span>
                        <input
                          type="number"
                          min="0"
                          max="25"
                          value={listeningScore}
                          onChange={e => setListeningScore(Math.min(25, Math.max(0, Number(e.target.value))))}
                          className="w-16 px-2 py-1 bg-white border border-amber-300 rounded-lg text-center font-bold"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>口语表达得分:</span>
                        <input
                          type="number"
                          min="0"
                          max="25"
                          value={speakingScore}
                          onChange={e => setSpeakingScore(Math.min(25, Math.max(0, Number(e.target.value))))}
                          className="w-16 px-2 py-1 bg-white border border-amber-300 rounded-lg text-center font-bold"
                        />
                      </div>
                      <div className="pt-2 border-t border-amber-200 flex justify-between font-bold">
                        <span>Grupo 2 小计:</span>
                        <span className={grupo2 >= 30 ? 'text-emerald-600' : 'text-rose-600'}>{grupo2} / 50 (要求≥30)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">总分成绩：<strong className="text-base text-slate-900">{totalScore}</strong> / 100</span>
                  <button
                    onClick={() => {
                      onClose();
                      if (onNavigateToExam) onNavigateToExam();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white font-bold transition shadow-xs cursor-pointer"
                  >
                    前往真题模考实战 ➔
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
