import React, { useState } from 'react';
import { 
  RotateCcw, 
  Search, 
  Sparkles, 
  Volume2, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Zap,
  Info,
  Layers,
  Crown
} from 'lucide-react';
import { SPANISH_VERBS, PERSON_LABELS, VerbConjugation } from '../data/verbsData';
import { speakSpanish } from '../utils/speech';

interface ConjugationViewProps {
  isVip: boolean;
  onOpenVipModal: () => void;
}

export const ConjugationView: React.FC<ConjugationViewProps> = ({ isVip, onOpenVipModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVerb, setSelectedVerb] = useState<VerbConjugation>(SPANISH_VERBS[8]); // 默认选中 pensar (靴子法则标杆)
  const [activeTense, setActiveTense] = useState<'presente' | 'indefinido' | 'imperfecto' | 'futuro' | 'condicional' | 'subjuntivo'>('presente');
  const [showBootHighlight, setShowBootHighlight] = useState(true); // 靴子法则高亮开关
  const [filterGroup, setFilterGroup] = useState<'all' | '-ar' | '-er' | '-ir' | 'boot'>('all');

  // 变位随机自测状态
  const [quizPersonIdx, setQuizPersonIdx] = useState<number>(0);
  const [userGuess, setUserGuess] = useState('');
  const [quizResult, setQuizResult] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const filteredVerbs = SPANISH_VERBS.filter(v => {
    const matchSearch = v.infinitive.toLowerCase().includes(searchQuery.toLowerCase()) || v.meaning.includes(searchQuery);
    if (!matchSearch) return false;
    if (filterGroup === 'all') return true;
    if (filterGroup === 'boot') return v.isBootVerb;
    return v.group === filterGroup;
  });

  const handleStartQuiz = () => {
    const randomIdx = Math.floor(Math.random() * 6);
    setQuizPersonIdx(randomIdx);
    setUserGuess('');
    setQuizResult('idle');
  };

  const handleCheckQuiz = () => {
    const correct = selectedVerb.tenses[activeTense][quizPersonIdx];
    if (userGuess.trim().toLowerCase() === correct.toLowerCase()) {
      setQuizResult('correct');
      speakSpanish(correct);
    } else {
      setQuizResult('wrong');
    }
  };

  return (
    <div className="w-full space-y-4 pb-16">
      {/* 顶部自研教学法速查顶栏 */}
      <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#B82E24] flex items-center justify-center border border-[#B82E24]/20">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                动词变位神器 ·【靴子法则 & 灵魂互换】
              </h2>
              <p className="text-xs text-slate-500">
                收录 1,000+ 高频动词 · 告别死记硬背 · 1分钟秒懂变位核爆与避险逻辑
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowBootHighlight(!showBootHighlight)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-2 shadow-xs ${
                showBootHighlight
                  ? 'bg-[#B82E24] text-white ring-2 ring-[#B82E24]/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              {showBootHighlight ? '👢 靴子法则高亮：已开启' : '👢 开启靴子高亮'}
            </button>
          </div>
        </div>

        {/* 教学法核心卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 border-t border-slate-100">
          <div className="p-3.5 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200/80 text-xs text-slate-700 space-y-1">
            <p className="font-bold text-[#B82E24] flex items-center gap-1.5">
              <span>👢</span> 独家心法 1：【靴子法则 (La Regla de la Bota)】
            </p>
            <p className="leading-relaxed text-[11px]">
              6 个人称表格构成一只靴子：<strong>Yo, Tú, Él, Ellos</strong> 重音砸在词根上，发生<strong>词根核爆 (e➔ie, o➔ue)</strong>；而靴子外的 <strong>Nosotros / Vosotros</strong> 重音滑向词尾，<strong>避开冲击保全原形</strong>！
            </p>
          </div>

          <div className="p-3.5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200/80 text-xs text-slate-700 space-y-1">
            <p className="font-bold text-amber-900 flex items-center gap-1.5">
              <span>🔄</span> 独家心法 2：【虚拟式 A⇄E 灵魂互换法则】
            </p>
            <p className="leading-relaxed text-[11px]">
              进入虚拟式无需重记！<strong>-ar 动词改穿 -er/-ir 的 E 系列衣服</strong>（hable, hables...）；<strong>-er/-ir 动词改穿 -ar 的 A 系列衣服</strong>（coma, comas...）！
            </p>
          </div>
        </div>
      </div>

      {/* 动词选择与变位展示区 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 左侧：动词检索列表 */}
        <div className="lg:col-span-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜索动词原形或中文 (如 pensar)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#B82E24] outline-none text-xs"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { key: 'all', label: '全部' },
              { key: 'boot', label: '👢 靴子音变' },
              { key: '-ar', label: '-ar' },
              { key: '-er', label: '-er' },
              { key: '-ir', label: '-ir' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilterGroup(tab.key as any)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                  filterGroup === tab.key
                    ? 'bg-[#B82E24] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {filteredVerbs.map(verb => {
              const isSelected = selectedVerb.infinitive === verb.infinitive;
              return (
                <div
                  key={verb.infinitive}
                  onClick={() => {
                    setSelectedVerb(verb);
                    setQuizResult('idle');
                    setUserGuess('');
                  }}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-[#B82E24] bg-[#FEF2F2] shadow-xs'
                      : 'border-slate-100 bg-slate-50/70 hover:bg-slate-100/70'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-sm text-slate-900">{verb.infinitive}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-mono">
                        {verb.group}
                      </span>
                      {verb.isBootVerb && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">
                          👢 {verb.bootVowelChange}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{verb.meaning}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakSpanish(verb.infinitive);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#B82E24] hover:bg-white"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右侧：变位大舞台 */}
        <div className="lg:col-span-8 space-y-6">
          {/* 动词详情卡片 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-black text-slate-900 font-serif tracking-tight">
                    {selectedVerb.infinitive}
                  </h3>
                  <button
                    onClick={() => speakSpanish(selectedVerb.infinitive)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-[#FEF2F2] text-[#B82E24] transition"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-600 mt-1">{selectedVerb.meaning}</p>
              </div>

              <div className="text-right space-y-1 text-xs">
                <div>
                  <span className="text-slate-400">过去分词: </span>
                  <span className="font-bold text-slate-800 font-mono">{selectedVerb.pastParticiple}</span>
                </div>
                <div>
                  <span className="text-slate-400">副动词 (进行时): </span>
                  <span className="font-bold text-slate-800 font-mono">{selectedVerb.gerund}</span>
                </div>
              </div>
            </div>

            {/* 时态切换 Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {[
                { key: 'presente', label: '直陈式现在时' },
                { key: 'indefinido', label: '简单过去时' },
                { key: 'imperfecto', label: '过去未完成时' },
                { key: 'futuro', label: '将来未完成时' },
                { key: 'condicional', label: '条件式' },
                { key: 'subjuntivo', label: '✨ 虚拟式现在时 (灵魂互换)' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => {
                    setActiveTense(t.key as any);
                    setQuizResult('idle');
                    setUserGuess('');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeTense === t.key
                      ? 'bg-[#B82E24] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* 6 个人称变位展示舞台 (靴子法则视觉网格) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
              {PERSON_LABELS.map((p, idx) => {
                const conjValue = selectedVerb.tenses[activeTense][idx];
                const inBoot = p.inBoot && selectedVerb.isBootVerb && activeTense === 'presente';

                return (
                  <div
                    key={p.code}
                    onClick={() => speakSpanish(conjValue)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      showBootHighlight && inBoot
                        ? 'border-red-400 bg-gradient-to-b from-red-50 to-orange-50/50 shadow-xs'
                        : 'border-slate-200 bg-slate-50/80 hover:border-slate-300'
                    }`}
                  >
                    {showBootHighlight && inBoot && (
                      <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.2 rounded-md bg-[#B82E24] text-white font-bold">
                        👢 靴内受力音变
                      </span>
                    )}
                    {showBootHighlight && !p.inBoot && selectedVerb.isBootVerb && activeTense === 'presente' && (
                      <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                        🛡️ 靴外避险
                      </span>
                    )}

                    <span className="text-[11px] font-bold text-slate-400 block mb-1">{p.label}</span>
                    <span className="text-lg font-black text-slate-900 font-serif tracking-tight block">
                      {conjValue}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 动词推导故事 */}
            <div className="p-4 bg-[#FFFBEB] rounded-2xl border border-amber-200/70 text-xs text-amber-950 space-y-1">
              <p className="font-bold flex items-center gap-1 text-amber-800">
                <Sparkles className="w-3.5 h-3.5" />
                名师因果推导秘籍:
              </p>
              <p className="leading-relaxed pl-5">{selectedVerb.derivationStory}</p>
            </div>
          </div>

          {/* 互动自测：6秒变位闪电打卡 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                <h4 className="font-black text-sm text-slate-900">变位闪电打卡自测</h4>
              </div>
              <button
                onClick={handleStartQuiz}
                className="text-xs font-bold text-[#B82E24] hover:underline cursor-pointer"
              >
                换一道随机人称题
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-xl">
                请写出 <strong>{selectedVerb.infinitive}</strong> 在 <strong>{PERSON_LABELS[quizPersonIdx].label}</strong> 的变位:
              </div>

              <input
                type="text"
                value={userGuess}
                onChange={e => setUserGuess(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheckQuiz()}
                placeholder="键入变位形式后按回车..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#B82E24] outline-none text-xs font-mono"
              />

              <button
                onClick={handleCheckQuiz}
                className="px-5 py-2.5 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                验证答案
              </button>
            </div>

            {quizResult === 'correct' && (
              <p className="text-xs text-emerald-700 font-bold bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                <Check className="w-4 h-4" /> 太棒了！回答完全正确！发音已自动跟读！
              </p>
            )}
            {quizResult === 'wrong' && (
              <p className="text-xs text-red-700 font-bold bg-red-50 p-3 rounded-xl border border-red-200">
                ⚠️ 回答有误，正确答案是：<strong>{selectedVerb.tenses[activeTense][quizPersonIdx]}</strong>，请牢记推导规律！
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
