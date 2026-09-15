import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  HelpCircle, 
  CheckCircle2, 
  Lock, 
  Flame, 
  BookOpen, 
  ChevronRight,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  SPANISH_PHONETICS, 
  SPANISH_PRONUNCIATION_RULES, 
  RRR_PRACTICE_STEPS,
  SpanishPhoneticItem 
} from '../data/phoneticsData';
import { speakSpanish } from '../utils/speech';

interface PhoneticsViewProps {
  isVip?: boolean;
  onOpenVipModal?: (reason?: string) => void;
}

export const PhoneticsView: React.FC<PhoneticsViewProps> = ({
  isVip = false,
  onOpenVipModal
}) => {
  const [activeModule, setActiveModule] = useState<'soundboard' | 'rules'>('soundboard');
  const [activeCategory, setActiveCategory] = useState<'all' | 'vowel' | 'consonant' | 'special' | 'contrast'>('all');
  const [selectedItem, setSelectedItem] = useState<SpanishPhoneticItem>(SPANISH_PHONETICS[0]);
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [showGoldenRule, setShowGoldenRule] = useState<boolean>(true);
  const [rrrStep, setRrrStep] = useState<number>(2); // 默认高亮齿龈搭桥

  const categories = [
    { id: 'all', label: '全部 30 字母与音素' },
    { id: 'vowel', label: '5 大核心元音 (5个)' },
    { id: 'consonant', label: '核心辅音系统 (19个)' },
    { id: 'special', label: '灵魂特色音 (Ñ / RR / CH / LL)' },
    { id: 'contrast', label: '易混对决 (b/v, c/z, g/j, r/rr)' },
  ];

  // 筛选音素
  const filteredItems = SPANISH_PHONETICS.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'contrast') {
      return ['b', 'v', 'c', 'z', 'g', 'j', 'r_single', 'rr_multi'].includes(item.id);
    }
    return item.category === activeCategory;
  });

  // 播放发音
  const handlePlaySpeech = (text: string) => {
    setPlayingWord(text);
    speakSpanish(text).finally(() => {
      setPlayingWord(null);
    });
  };

  // 连续播放全部例词
  const handlePlayAllExamples = (item: SpanishPhoneticItem) => {
    const allWords = item.examples.map(e => e.word).join(', ');
    handlePlaySpeech(allWords);
  };

  return (
    <div className="space-y-3 sm:space-y-3.5 pb-8">
      
      {/* 顶栏 Hero Banner (对齐日法小语种矩阵标准) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF2F2] text-[#B82E24] text-xs font-bold border border-[#B82E24]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>塞万提斯学院发音大纲 · 西班牙语纯正发音规范</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            西班牙语 27 官方字母 & 4 大核心发音拼读铁律
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-medium">
            点击任意字母收听正统马德里与拉美原声、透视嘴型指南与高频词汇；切换规则精析攻克 RRR 大舌颤音与重音戴帽铁律。
          </p>
        </div>
      </div>

      {/* 🎯 塞万提斯教授铁律：西语「拼写即发音」黄金法则看板 */}
      <div className="bg-gradient-to-r from-amber-50/90 via-orange-50/40 to-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span>
            <h2 className="text-sm sm:text-base font-black text-slate-900">
              塞万提斯教授铁律：西语「拼写即发音」黄金拼读法则 & RRR 气流连缀搭桥绝技
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black border border-amber-200">
              彻底告别乱读
            </span>
          </div>
          <button
            onClick={() => setShowGoldenRule(!showGoldenRule)}
            className="text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
          >
            {showGoldenRule ? '收起铁律' : '展开铁律'}
          </button>
        </div>

        {showGoldenRule && (
          <div className="space-y-3 pt-1 animate-in fade-in duration-200">
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              西班牙语是全球最规整的拼音语言之一，具有极强的<strong>「所见即所读」</strong>规律（无复杂暗号，除 H 全发音）；<br className="hidden sm:inline" />
              牢记四大黄金拼读法则，<strong>无需国际音标也能一眼看懂生词并脱口而出</strong>！
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              
              {/* 铁律 1: 5 纯元音绝不溜音 */}
              <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-amber-950 font-mono">5 纯元音 (A E I O U)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">口型紧绷</span>
                </div>
                <div className="space-y-1">
                  {[
                    { word: 'amor', ipa: '[aˈmoɾ]', meaning: '爱' },
                    { word: 'estrella', ipa: '[esˈtɾeʎa]', meaning: '星星' },
                    { word: 'luna', ipa: '[ˈluna]', meaning: '月亮' },
                  ].map(item => (
                    <div 
                      key={item.word}
                      onClick={() => handlePlaySpeech(item.word)}
                      className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 cursor-pointer transition"
                    >
                      <span className="font-bold text-slate-900 font-serif">{item.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{item.ipa}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${playingWord === item.word ? 'text-[#B82E24]' : 'text-slate-400 hover:text-amber-800'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-amber-900 font-bold bg-amber-50 p-1 rounded">
                  ⚠️ 绝不拖出英语 /eɪ/、/oʊ/ 滑动尾音！
                </p>
              </div>

              {/* 铁律 2: 除 H 外见字即读 */}
              <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-amber-950 font-mono">见字即读 · 除H全读</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">无暗号</span>
                </div>
                <div className="space-y-1">
                  {[
                    { word: 'hola', ipa: '[ˈola]', meaning: '你好 (H不发音)' },
                    { word: 'hombre', ipa: '[ˈombɾe]', meaning: '男人 (H不发音)' },
                    { word: 'hasta', ipa: '[ˈasta]', meaning: '直到 (H不发音)' },
                  ].map(item => (
                    <div 
                      key={item.word}
                      onClick={() => handlePlaySpeech(item.word)}
                      className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 cursor-pointer transition"
                    >
                      <span className="font-bold text-slate-900 font-serif">{item.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{item.ipa}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${playingWord === item.word ? 'text-[#B82E24]' : 'text-slate-400 hover:text-amber-800'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-amber-900 font-bold bg-amber-50 p-1 rounded">
                  H 永远静默，其余辅音与元音组合 100% 规则拼读
                </p>
              </div>

              {/* 铁律 3: B 与 V 发音完全同一 */}
              <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-amber-950 font-mono">B 与 V 读音同一化</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">严禁咬唇</span>
                </div>
                <div className="space-y-1">
                  {[
                    { word: 'vino', ipa: '[ˈbino]', meaning: '红酒 (读b)' },
                    { word: 'vaca', ipa: '[ˈbaka]', meaning: '奶牛 (读b)' },
                    { word: 'saber', ipa: '[saˈβeɾ]', meaning: '知道 (双唇碰)' },
                  ].map(item => (
                    <div 
                      key={item.word}
                      onClick={() => handlePlaySpeech(item.word)}
                      className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 cursor-pointer transition"
                    >
                      <span className="font-bold text-slate-900 font-serif">{item.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{item.ipa}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${playingWord === item.word ? 'text-[#B82E24]' : 'text-slate-400 hover:text-amber-800'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-amber-900 font-bold bg-amber-50 p-1 rounded">
                  切忌咬下唇发英语 v！词首[b]，元音间轻擦[β]
                </p>
              </div>

              {/* 铁律 4: RRR 气流连缀搭桥绝技 */}
              <div className="p-3 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-amber-950 font-mono">RRR 气流搭桥口诀</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">被动振颤</span>
                </div>
                <div className="space-y-1">
                  {[
                    { word: 'tren', ipa: '[tɾen]', meaning: '火车 (T带响)' },
                    { word: 'tres', ipa: '[tɾes]', meaning: '三 (齿龈蓄压)' },
                    { word: 'perro', ipa: '[ˈpero]', meaning: '狗 (双颤大舌)' },
                  ].map(item => (
                    <div 
                      key={item.word}
                      onClick={() => handlePlaySpeech(item.word)}
                      className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 cursor-pointer transition"
                    >
                      <span className="font-bold text-slate-900 font-serif">{item.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{item.ipa}</span>
                      <Volume2 className={`w-3.5 h-3.5 ${playingWord === item.word ? 'text-[#B82E24]' : 'text-slate-400 hover:text-amber-800'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-amber-900 font-bold bg-amber-50 p-1 rounded">
                  借力 [t]/[d] 辅音连缀蓄压，舌尖被动振动
                </p>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* 关键：两大核心发音模块选择卡片 (100% 对齐日法语小语种矩阵架构) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        
        {/* 模块 1: 27 字母与音标交互发音台 */}
        <div
          onClick={() => setActiveModule('soundboard')}
          className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 relative ${
            activeModule === 'soundboard'
              ? 'bg-gradient-to-br from-[#FFF9FA] via-[#FEF2F2] to-[#FCECEF]/80 border-[#B82E24] shadow-md ring-2 ring-[#B82E24]/20'
              : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
          }`}
        >
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-2xs ${
            activeModule === 'soundboard' ? 'bg-[#B82E24] text-white' : 'bg-slate-100 text-slate-700'
          }`}>
            🎙️
          </div>
          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className={`text-base sm:text-lg font-black ${activeModule === 'soundboard' ? 'text-[#B82E24]' : 'text-slate-800'}`}>
                27 字母与音标交互发音台
              </h3>
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                activeModule === 'soundboard' ? 'bg-[#B82E24] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
              }`}>
                27 字母 + 核心音素全收录
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              左侧点按字母音标、右侧透视嘴型指南与高频词汇。掌握 5 大核心元音、辅音系统、特色字母 Ñ 与 RR。
            </p>
          </div>
          {activeModule === 'soundboard' && (
            <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#B82E24] text-white flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* 模块 2: 4 大核心发音与重音规则精析 */}
        <div
          onClick={() => setActiveModule('rules')}
          className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 relative ${
            activeModule === 'rules'
              ? 'bg-gradient-to-br from-[#FFFDF7] via-[#FAF4E2] to-[#F6EDD0]/70 border-[#D97706] shadow-md ring-2 ring-[#D97706]/20'
              : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
          }`}
        >
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-2xs ${
            activeModule === 'rules' ? 'bg-[#D97706] text-white' : 'bg-slate-100 text-slate-700'
          }`}>
            📖
          </div>
          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className={`text-base sm:text-lg font-black ${activeModule === 'rules' ? 'text-[#B45309]' : 'text-slate-800'}`}>
                4 大核心发音与重音规则精析
              </h3>
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                activeModule === 'rules' ? 'bg-[#B45309] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
              }`}>
                重中之重 · 4大规则
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              搞清重音自然天性与强制戴帽法则、RRR 大舌音伯努利模型、倒置情绪符号 ¿¡、分音节与连音 (Sinalefa)。
            </p>
          </div>
          {activeModule === 'rules' && (
            <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

      </div>

      {/* 模块 1 呈现区: Interactive Soundboard + Sticky Detail Inspector */}
      {activeModule === 'soundboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
        
          {/* 左侧 7 列：音素选择键盘与分类标签 */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#B82E24] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sound Cards Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
              {filteredItems.map(item => {
                const isSelected = selectedItem.id === item.id;
                const isSpecial = item.category === 'special';
                const isVowel = item.category === 'vowel';

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item);
                      if (item.examples.length > 0) {
                        handlePlaySpeech(item.examples[0].word);
                      }
                    }}
                    className={`relative p-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-150 border cursor-pointer ${
                      isSelected
                        ? 'bg-[#B82E24] text-white border-[#B82E24] shadow-md scale-[1.04] z-10'
                        : isSpecial
                        ? 'bg-[#FEF2F2] text-[#B82E24] border-[#B82E24]/30 hover:bg-[#FCECEF] hover:scale-[1.02]'
                        : isVowel
                        ? 'bg-amber-50/50 text-amber-950 border-amber-200 hover:bg-amber-100/50 hover:scale-[1.02]'
                        : 'bg-white text-slate-800 border-slate-200/80 hover:bg-slate-50 hover:border-[#B82E24]/30 hover:scale-[1.02]'
                    }`}
                  >
                    <span className={`text-lg sm:text-xl font-black font-serif ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {item.letter}
                    </span>
                    <span className={`text-[11px] mt-0.5 font-bold font-mono ${isSelected ? 'text-white/90' : 'text-[#B82E24]'}`}>
                      {item.ipa}
                    </span>
                    <span className={`text-[10px] font-medium truncate max-w-full ${isSelected ? 'text-white/70' : 'text-slate-400'}`}>
                      {item.name}
                    </span>
                    {isSpecial && !isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#B82E24]" title="西语特色灵魂音"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Audio Hint */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>点击上方任意卡片即可发音，右侧可查看嘴型口诀与高频例词。</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                共 {filteredItems.length} 个音项
              </span>
            </div>
          </div>

          {/* 右侧 5 列：Sticky Detail Inspector (精美透视卡片) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-5">
              
              {/* Header of Inspector */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
                      {selectedItem.letter}
                    </span>
                    <span className="text-xl font-mono text-[#B82E24] font-bold">
                      {selectedItem.ipa}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25 text-xs font-bold">
                      {selectedItem.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedItem.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handlePlayAllExamples(selectedItem)}
                  className="w-11 h-11 rounded-2xl bg-[#B82E24] hover:bg-[#991B1B] text-white flex items-center justify-center shadow-xs hover:scale-105 transition cursor-pointer"
                  title="朗读全部例词"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* 拼写与音变说明 */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-700 block">拼读铁律与发音特性:</span>
                <ul className="text-xs text-slate-600 space-y-1 bg-amber-50/40 p-3 rounded-2xl border border-amber-200/60 font-medium">
                  {selectedItem.spellingRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#B82E24] font-black">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 发音嘴型与技巧指南 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <HelpCircle className="w-4 h-4 text-[#D97706]" />
                  <span>发音嘴型与技巧指南</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 leading-relaxed font-medium">
                  {selectedItem.mouthTips}
                </p>
              </div>

              {/* 权威考纲核心例词与发音对照 */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-800">
                  <span>权威考纲核心例词与发音对照</span>
                </div>
                <div className="space-y-2">
                  {selectedItem.examples.map(ex => (
                    <div
                      key={ex.word}
                      onClick={() => handlePlaySpeech(ex.word)}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/70 hover:border-[#B82E24]/30 flex items-center justify-between cursor-pointer transition group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-[#B82E24]">
                            {ex.word}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {ex.phonetic}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                          {ex.meaning}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-2xs border transition ${
                        playingWord === ex.word
                          ? 'bg-[#B82E24] text-white border-[#B82E24]'
                          : 'bg-white group-hover:bg-[#B82E24] text-slate-400 group-hover:text-white border-slate-200/70'
                      }`}>
                        <Volume2 className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* 模块 2 呈现区: 5 大核心发音与重音规则精析 */}
      {activeModule === 'rules' && (
        <section className="space-y-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25 font-bold text-xs">
                重中之重
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                4 大核心发音与重音规则精析
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              搞清重音自然天性与强制戴帽法则、RRR 大舌音伯努利模型、倒置情绪符号 ¿¡、分音节与连音 (Sinalefa)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SPANISH_PRONUNCIATION_RULES.map((rule, idx) => {
              const isLocked = !isVip && idx >= 2;
              const isLastOdd = idx === SPANISH_PRONUNCIATION_RULES.length - 1 && SPANISH_PRONUNCIATION_RULES.length % 2 !== 0;
              const isRrrClinic = rule.id === 'rrr_clinic';

              return (
                <div
                  key={rule.id}
                  onClick={() => {
                    if (isLocked) {
                      onOpenVipModal?.(`🔒【${rule.title}】为西语 DELE 考级与考研二外重点发音避坑高频考点！输入卡密激活 VIP 终身卡即可解锁全部发音与联音规则！`);
                    }
                  }}
                  className={`p-5 rounded-3xl bg-white border shadow-xs space-y-3.5 transition relative ${
                    isLastOdd ? 'md:col-span-2' : ''
                  } ${
                    isLocked 
                      ? 'border-amber-200/80 hover:border-[#B82E24]/40 cursor-pointer bg-slate-50/60' 
                      : 'border-slate-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                        <span>{rule.title}</span>
                        {isLocked && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center gap-0.5">
                            <Lock className="w-2.5 h-2.5" />
                            <span>VIP专属</span>
                          </span>
                        )}
                      </h3>
                      <span className="text-xs font-serif italic text-[#B82E24] font-bold">
                        {rule.spanishTitle}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] text-[11px] font-bold border border-[#B82E24]/25">
                      {rule.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {rule.summary}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 text-slate-800 font-mono text-xs font-bold border border-slate-200/70">
                    {rule.formula}
                  </div>

                  {/* 特别内嵌：RRR 大舌音三阶梯实战训练台 */}
                  {isRrrClinic && (
                    <div className="p-3.5 bg-gradient-to-br from-red-50/70 to-orange-50/50 rounded-2xl border border-red-200/70 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#B82E24]">
                          <Flame className="w-4 h-4 text-red-600" />
                          <span>大舌音 3 阶梯突破工作台</span>
                        </div>
                        <div className="flex gap-1">
                          {RRR_PRACTICE_STEPS.map(s => (
                            <button
                              key={s.step}
                              onClick={(e) => {
                                e.stopPropagation();
                                setRrrStep(s.step);
                              }}
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer transition ${
                                rrrStep === s.step
                                  ? 'bg-[#B82E24] text-white shadow-2xs'
                                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              阶梯 {s.step}
                            </button>
                          ))}
                        </div>
                      </div>

                      {(() => {
                        const curStep = RRR_PRACTICE_STEPS.find(s => s.step === rrrStep)!;
                        return (
                          <div className="space-y-2 text-xs">
                            <p className="font-bold text-slate-900">{curStep.title}</p>
                            <p className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-red-100">
                              {curStep.guide}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {curStep.syllables.map(syl => (
                                <button
                                  key={syl}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlaySpeech(syl.split(' ')[0].replace('...', ''));
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-red-50 text-[#B82E24] border border-red-200 hover:border-[#B82E24] font-bold text-[11px] flex items-center gap-1 cursor-pointer transition shadow-2xs"
                                >
                                  <Volume2 className="w-3 h-3" />
                                  <span>{syl}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 例句例词列表 */}
                  <div className={`pt-1 ${isLastOdd ? 'grid grid-cols-1 md:grid-cols-2 gap-2' : 'space-y-1.5'}`}>
                    {rule.examples.map(ex => (
                      <div 
                        key={ex.phrase}
                        onClick={(e) => {
                          if (isLocked) {
                            e.stopPropagation();
                            onOpenVipModal?.(`🔒【${rule.title}】为西语 DELE 考级与考研二外重点发音避坑高频考点！输入卡密激活 VIP 终身卡即可解锁全部发音与联音规则！`);
                            return;
                          }
                          handlePlaySpeech(ex.phrase.split(' ')[0]);
                        }}
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/70 flex items-center justify-between cursor-pointer transition text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{ex.phrase}</span>
                            <span className="text-slate-400 font-mono">{ex.ipa}</span>
                            <span className="text-slate-600">({ex.meaning})</span>
                          </div>
                          <p className="text-[11px] text-[#B82E24] mt-0.5 font-medium">{ex.explanation}</p>
                        </div>
                        <Volume2 className="w-3.5 h-3.5 text-slate-400 hover:text-[#B82E24] shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 未激活学员提示横幅 (100% 对齐日法语小语种矩阵二级页面底部 VIP 转化引导) */}
      {!isVip && (
        <div className="bg-gradient-to-r from-[#B82E24] via-[#991B1B] to-[#59100B] rounded-2xl sm:rounded-3xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-[#B82E24]/20">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-1.5 justify-center sm:justify-start font-black text-sm">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>当前正在体验【西班牙语 27 字母与基础发音 · 免费体验】</span>
            </div>
            <p className="text-xs text-white/90 leading-relaxed">
              开通 VIP 终身卡（仅 ¥49.9），立享<strong>全部 4 大高阶重音戴帽与 RRR 极速突破法</strong>、30部西影精学课、36套国家级模考全真大卷与 5000+ 核心词库！
            </p>
          </div>
          <button
            onClick={() => onOpenVipModal?.('🔒 开通 VIP 终身卡（仅 ¥49.9），即可解锁全部高阶重音与大舌音突破法则与全真机考大卷！')}
            className="px-5 py-2.5 rounded-2xl bg-white text-[#B82E24] hover:bg-[#FEF2F2] font-black text-xs shadow-md transition active:scale-98 shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-[#B82E24]" />
            <span>输入卡密解锁全量特权 →</span>
          </button>
        </div>
      )}

    </div>
  );
};
