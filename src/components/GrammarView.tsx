import React, { useState, useRef, useMemo, useEffect } from 'react';
import { 
  BookOpenCheck, 
  Search, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  Lock, 
  Network,
  GraduationCap,
  Globe2,
  Layers,
  ArrowRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { SPANISH_GRAMMAR_LIST, GrammarPoint } from '../data/grammarData';
import { speakSpanish } from '../utils/speech';
import { SpanishGrammarVisualMindMap } from './SpanishGrammarVisualMindMap';

interface GrammarViewProps {
  isVip?: boolean;
  onOpenVipModal?: (reason?: string) => void;
  onOpenMindMap?: () => void;
}

export const GrammarView: React.FC<GrammarViewProps> = ({
  isVip = false,
  onOpenVipModal,
  onOpenMindMap
}) => {
  const [trackFilter, setTrackFilter] = useState<'kaoyan' | 'dele' | 'all'>('kaoyan');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPoint, setSelectedPoint] = useState<GrammarPoint>(SPANISH_GRAMMAR_LIST[0]);
  const [playingEs, setPlayingEs] = useState<string | null>(null);

  const [showMindMap, setShowMindMap] = useState<boolean>(false);
  const [showBridgesGuide, setShowBridgesGuide] = useState<boolean>(true);

  const detailScrollRef = useRef<HTMLDivElement | null>(null);
  const formulaRef = useRef<HTMLDivElement | null>(null);
  const bridgeRef = useRef<HTMLDivElement | null>(null);
  const rulesRef = useRef<HTMLDivElement | null>(null);
  const trapRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { id: 'all', label: '全部类别', isFree: true },
    { id: '冠词与名词', label: '冠词与名词 · 免费', isFree: true },
    { id: '三大系动词与时态', label: '系动词与时态 (Ser/Estar/时态对决)', isFree: false },
    { id: '代词系统', label: '代词全景 (直宾/间宾/Se变身)', isFree: false },
    { id: '介词与连接词', label: '介词与逻辑连接 (Por/Para)', isFree: false },
    { id: '虚拟式与从句', label: '虚拟式与从句 (WEIRDO六角星)', isFree: false },
  ];

  const kaoyanCount = useMemo(() => {
    return SPANISH_GRAMMAR_LIST.filter(item => item.tracks.includes('kaoyan')).length;
  }, []);

  const deleCount = useMemo(() => {
    return SPANISH_GRAMMAR_LIST.filter(item => item.tracks.includes('dele')).length;
  }, []);

  const filteredPoints = useMemo(() => {
    return SPANISH_GRAMMAR_LIST.filter(item => {
      let matchTrack = true;
      if (trackFilter === 'kaoyan') {
        matchTrack = item.tracks.includes('kaoyan');
      } else if (trackFilter === 'dele') {
        matchTrack = item.tracks.includes('dele');
      }
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch = item.title.includes(searchQuery) ||
                          item.spanishTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.includes(searchQuery);
      return matchTrack && matchCat && matchSearch;
    });
  }, [trackFilter, activeCategory, searchQuery]);

  // Keep selectedPoint valid when filter changes
  useEffect(() => {
    if (filteredPoints.length > 0 && !filteredPoints.some(p => p.id === selectedPoint.id)) {
      setSelectedPoint(filteredPoints[0]);
    }
  }, [filteredPoints, selectedPoint.id]);

  const currentIndex = filteredPoints.findIndex(p => p.id === selectedPoint.id);
  const prevPoint = currentIndex > 0 ? filteredPoints[currentIndex - 1] : null;
  const nextPoint = currentIndex >= 0 && currentIndex < filteredPoints.length - 1 ? filteredPoints[currentIndex + 1] : null;

  const handleSelectPoint = (point: GrammarPoint, idx: number) => {
    const isLockedPoint = !isVip && point.category !== '冠词与名词' && idx >= 2;
    if (isLockedPoint) {
      onOpenVipModal?.(`🔒【${point.title}】为西语高频避坑重点考点（VIP专属）！输入卡密即可解锁全量文法精讲与真题解析！`);
      return;
    }
    setSelectedPoint(point);
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPoint = () => {
    if (prevPoint) {
      handleSelectPoint(prevPoint, currentIndex - 1);
    }
  };

  const handleNextPoint = () => {
    if (nextPoint) {
      handleSelectPoint(nextPoint, currentIndex + 1);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSpeak = async (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingEs(text);
    await speakSpanish(text, 0.9);
    setPlayingEs(null);
  };

  return (
    <div className="space-y-4 sm:space-y-5 pb-8">
      
      {/* ============================================================ */}
      {/* ① 醒目第一级分块：双轨核心架构网关 (Dual-Track Core Gateway) */}
      {/* ============================================================ */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-4">
        
        {/* 顶部标题与动态说明 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#FEF2F2] text-[#B82E24] text-xs font-black border border-[#B82E24]/25 flex items-center gap-1.5">
                <BookOpenCheck className="w-3.5 h-3.5 text-[#D97706]" />
                <span>
                  {trackFilter === 'kaoyan' 
                    ? '🏛️ 全国考研二外重点体系' 
                    : trackFilter === 'dele' 
                    ? '🌍 DELE / SIELE 欧标应用体系' 
                    : '📚 西班牙语全景文法总库'}
                </span>
              </span>
              <span className="text-xs text-[#B82E24] font-bold">
                ★ 独立双轨文法宝典
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {trackFilter === 'kaoyan'
                ? '全国高校考研二外文法避坑与踩分宝典'
                : trackFilter === 'dele'
                ? 'DELE / SIELE 欧标应用文法与交际规范宝典'
                : '西班牙语核心文法高频考点演练场'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {trackFilter === 'kaoyan'
                ? '直击全国各大高校考研二外与专四自命题失分重灾区：Ser vs Estar 终极对决、双重宾格防音爆变身 Se、过去两大时态快门交锋与虚拟式 WEIRDO 六角星避坑。'
                : trackFilter === 'dele'
                ? '聚焦塞万提斯学院 DELE/SIELE A1~C1 官方欧标交际与论述实战能力：论证逻辑连接词（Conectores）、条件式委婉提议、无人称 se 与公函学术句式规范。'
                : '系统建立西班牙语底层逻辑，涵盖 48 考点全景交互思维导图，彻底告别语法死记硬背。'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
            <button
              onClick={() => {
                if (onOpenMindMap) {
                  onOpenMindMap();
                } else {
                  setShowMindMap(!showMindMap);
                }
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-2xs border ${
                showMindMap
                  ? 'bg-[#B82E24] text-white border-[#B82E24] shadow-md ring-2 ring-red-200'
                  : 'bg-red-50 hover:bg-red-100 text-[#B82E24] border-red-200'
              }`}
              title="查看西班牙语核心语法全景思维导图"
            >
              <Network className="w-4 h-4" />
              <span>{showMindMap ? '收起导图大树' : '🌳 全景思维导图'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${showMindMap ? 'bg-white/20 text-white' : 'bg-[#B82E24] text-white'}`}>
                48考点大树
              </span>
            </button>
          </div>
        </div>

        {/* 关键：两大独立核心赛道大卡片（100% 对齐日法小语种矩阵标准） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {/* 赛道卡片 1: 考研二外 */}
          <div
            onClick={() => {
              setTrackFilter('kaoyan');
              setActiveCategory('all');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 relative ${
              trackFilter === 'kaoyan'
                ? 'bg-gradient-to-br from-[#FFF9FA] via-[#FEF2F2] to-[#FCECEF]/70 border-[#B82E24] shadow-md ring-2 ring-[#B82E24]/20'
                : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-2xs ${
              trackFilter === 'kaoyan' ? 'bg-[#B82E24] text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              🏛️
            </div>
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className={`text-base sm:text-lg font-black ${trackFilter === 'kaoyan' ? 'text-[#B82E24]' : 'text-slate-800'}`}>
                  全国高校考研二外体系
                </h3>
                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                  trackFilter === 'kaoyan' ? 'bg-[#B82E24] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                }`}>
                  {kaoyanCount} 核心文法考点
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                专攻北外/上外/广外/武大等自命题题型：Ser与Estar本质对决、代词提前与防音爆变身Se、过去未完成与简单过去快门交锋、虚拟式从句避坑。
              </p>
            </div>
            {trackFilter === 'kaoyan' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#B82E24] text-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>

          {/* 赛道卡片 2: DELE / SIELE 欧标 */}
          <div
            onClick={() => {
              setTrackFilter('dele');
              setActiveCategory('all');
            }}
            className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 relative ${
              trackFilter === 'dele'
                ? 'bg-gradient-to-br from-[#FFFDF7] via-[#FAF4E2] to-[#F6EDD0]/70 border-[#D97706] shadow-md ring-2 ring-[#D97706]/20'
                : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-2xs ${
              trackFilter === 'dele' ? 'bg-[#D97706] text-white' : 'bg-slate-100 text-slate-700'
            }`}>
              🌍
            </div>
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className={`text-base sm:text-lg font-black ${trackFilter === 'dele' ? 'text-[#B45309]' : 'text-slate-800'}`}>
                  DELE / SIELE 欧标应用体系
                </h3>
                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                  trackFilter === 'dele' ? 'bg-[#B45309] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                }`}>
                  {deleCount} 核心应用考点
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                聚焦 A1~C1 欧标交际实战能力：论证逻辑连接词（Conectores discursivos）、条件式委婉提议、无人称 se 与公函学术句式规范。
              </p>
            </div>
            {trackFilter === 'dele' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>

        {/* 底部全览切换器 */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">当前正在研习：</span>
            <span className="font-black px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-800">
              {trackFilter === 'kaoyan' ? '🏛️ 考研二外文法专场' : trackFilter === 'dele' ? '🌍 DELE 欧标应用专场' : '📚 全量文法总库'}
            </span>
          </div>
          {trackFilter !== 'all' ? (
            <button
              onClick={() => setTrackFilter('all')}
              className="text-[#B82E24] hover:underline font-bold cursor-pointer"
            >
              查看不限方向的全部语法列表 ➔
            </button>
          ) : (
            <span className="text-slate-400">已展示全部语法</span>
          )}
        </div>
      </div>

      {/* 🌳 全景思维导图大树 (Visual Tree Graph) */}
      {showMindMap && (
        <SpanishGrammarVisualMindMap
          onSelectGrammar={(id) => {
            const pt = SPANISH_GRAMMAR_LIST.find(p => p.id === id);
            if (pt) {
              setSelectedPoint(pt);
              setShowMindMap(false);
              setTimeout(() => {
                detailScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }
          }}
          onNavigateConjugation={() => {
            window.location.hash = '#conjugation';
          }}
          onClose={() => setShowMindMap(false)}
        />
      )}

      {/* 💡 破壁指南 · 动词变位与文法考点的 4 大灵魂纽带 */}
      <div className="bg-gradient-to-br from-white via-amber-50/20 to-rose-50/20 rounded-2xl sm:rounded-3xl border border-amber-200/80 shadow-xs p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80 flex items-center justify-center text-base shadow-2xs font-bold">
                💡
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>破壁认知指南 · 动词变位与文法考点的 4 大灵魂纽带</span>
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              为什么学了动词变位还是不会做题？因为缺乏<strong>“时态词根加工”</strong>与<strong>“性数贴标签”</strong>的映射思维！以下 4 大纽带直接打通变位器与语法真题：
            </p>
          </div>

          <button
            onClick={() => setShowBridgesGuide(!showBridgesGuide)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer shadow-2xs shrink-0"
          >
            {showBridgesGuide ? '折叠纽带卡片' : '展开 4 大纽带'}
          </button>
        </div>

        {showBridgesGuide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {/* Card 1 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🔄</span>
                  <h3 className="text-xs font-black text-slate-900">桥梁 1 · 虚拟式换乘站</h3>
                </div>
                <div className="text-[11px] font-bold text-amber-800 bg-amber-50/80 px-2 py-0.5 rounded-md border border-amber-100">
                  Swap Vowels 元音互换法则
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  -ar 动词在现在时为 -a，进虚拟式变 <strong className="text-slate-800">-e</strong>；-er/-ir 动词在现在时为 -e，进虚拟式变 <strong className="text-slate-800">-a</strong>！背熟现在时 yo 变位，虚拟式一网打尽！
                </p>
              </div>
              <div className="text-[10px] text-slate-400 font-bold pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>直通文法</span>
                <span className="text-[#B82E24] font-mono">虚拟式 W-E-I-R-D-O</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">💥</span>
                  <h3 className="text-xs font-black text-slate-900">桥梁 2 · 宾语防爆变身</h3>
                </div>
                <div className="text-[11px] font-bold text-rose-800 bg-rose-50/80 px-2 py-0.5 rounded-md border border-rose-100">
                  两 L 相撞必变 Se
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  代词位置铁律：间宾永远在直宾前（人前物后）。当第三人称间宾 le/les 遇到直宾 lo/la 时，为了防止两 L 撞车爆破，le 强制变身 <strong className="text-[#B82E24]">se</strong>！
                </p>
              </div>
              <div className="text-[10px] text-slate-400 font-bold pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>直通文法</span>
                <span className="text-rose-700 font-mono">双重宾代防音爆变身</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">📸</span>
                  <h3 className="text-xs font-black text-slate-900">桥梁 3 · 快门 vs 摄像机</h3>
                </div>
                <div className="text-[11px] font-bold text-blue-800 bg-blue-50/80 px-2 py-0.5 rounded-md border border-blue-100">
                  简单过去时 vs 过去未完成
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  简单过去时 (hablé) 是<strong className="text-slate-800">单次快门闭环</strong>；未完成时 (hablaba) 是<strong className="text-slate-800">长线背景摄像机</strong>！二者交织即构成西语全景叙事画卷！
                </p>
              </div>
              <div className="text-[10px] text-slate-400 font-bold pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>直通文法</span>
                <span className="text-amber-700 font-mono">过去两大时态对决</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🧬</span>
                  <h3 className="text-xs font-black text-slate-900">桥梁 4 · 两个“是”的世界观</h3>
                </div>
                <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-100">
                  DNA 出厂配置 vs 临时读数
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ser 是刻在骨子里的本质（性格、国籍、材质）；Estar 是瞬时心境与地理空间坐标！山川地理再久远也是<strong className="text-[#B82E24]">位置坐标用 Estar</strong>！
                </p>
              </div>
              <div className="text-[10px] text-slate-400 font-bold pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>直通文法</span>
                <span className="text-emerald-700 font-mono">Ser 与 Estar 终极判决</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* ② 主题研习双栏工作台 (左右 50%/50% 严格等高对称)             */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
        
        {/* Left Column (50%): 考点列表检索区 */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 flex flex-col h-[560px] sm:h-[620px]">
          
          {/* Top: 考点检索与清晰分类筛选 */}
          <div className="space-y-2.5 pb-3 border-b border-slate-100 shrink-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="检索考点 (如 Ser vs Estar, 宾代Se变身, 虚拟式, Por/Para...)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#B82E24]/20 transition"
              />
            </div>

            {/* 当前赛道提示与考点数 */}
            <div className="flex items-center justify-between px-1 text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                {trackFilter === 'kaoyan' ? '🏛️ 考研二外重点体系' : trackFilter === 'dele' ? '🌍 DELE 欧标应用体系' : '📚 全量语法总库'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                已收录 <strong className="text-[#B82E24]">{filteredPoints.length}</strong> 项重点考点
              </span>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => {
                const isLocked = !isVip && !cat.isFree;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      if (isLocked) {
                        onOpenVipModal?.(`🔒【${cat.label}】为重点攻坚专区！输入卡密即可解锁虚拟式、双重宾代等全量文法考点！`);
                        return;
                      }
                      setActiveCategory(cat.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? 'bg-[#B82E24] text-white shadow-xs font-black'
                        : isLocked
                        ? 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/80'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                    }`}
                  >
                    {isLocked && <Lock className="w-3 h-3 text-amber-600 shrink-0" />}
                    <span>{cat.label}</span>
                    {isLocked && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 text-amber-800 font-black">
                        VIP
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable List of Grammar Points */}
          <div className="flex-1 overflow-y-auto py-2 space-y-2 pr-1 scrollbar-thin">
            {filteredPoints.map((point, idx) => {
              const isSelected = selectedPoint.id === point.id;
              const isLockedPoint = !isVip && point.category !== '冠词与名词' && idx >= 2;
              return (
                <button
                  key={point.id}
                  onClick={() => handleSelectPoint(point, idx)}
                  className={`w-full p-3.5 rounded-2xl flex items-start justify-between text-left transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#FEF2F2] text-[#B82E24] border-2 border-[#B82E24] shadow-xs'
                      : 'hover:bg-slate-50 border border-slate-100/80 text-slate-800'
                  }`}
                >
                  <div className="space-y-1 flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-[#B82E24] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {point.level}
                      </span>
                      <span className="text-xs font-black truncate">
                        {point.title}
                      </span>
                      {isLockedPoint && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-extrabold flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> VIP
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-serif italic truncate">
                      {point.spanishTitle}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {point.summary}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-2 transition ${
                    isSelected ? 'text-[#B82E24] translate-x-0.5' : 'text-slate-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Bottom Count Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
            <span>支持按考点关键词快捷模糊搜索</span>
            <span>当前赛道共 {filteredPoints.length} 个考点</span>
          </div>

        </div>

        {/* Right Column (50%): 深度考点研习台 (Sticky Inspector) */}
        <div 
          ref={detailScrollRef}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col h-[560px] sm:h-[620px] overflow-y-auto scrollbar-thin space-y-4"
        >
          
          {/* Header of Point */}
          <div className="space-y-2 pb-3 border-b border-slate-100 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-[#B82E24] text-white">
                  {selectedPoint.level} 权威专讲
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {selectedPoint.category}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {selectedPoint.tracks.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                    {t === 'kaoyan' ? '🏛️ 考研必考' : '🌍 DELE高频'}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {selectedPoint.title}
                </h2>
                <p className="text-sm font-serif italic text-[#B82E24] font-bold mt-0.5">
                  {selectedPoint.spanishTitle}
                </p>
              </div>
              <button
                onClick={(e) => handleSpeak(selectedPoint.spanishTitle, e)}
                className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-[#FEF2F2] text-slate-600 hover:text-[#B82E24] flex items-center justify-center transition cursor-pointer shrink-0 shadow-2xs"
                title="朗读西文标题"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              {selectedPoint.summary}
            </p>
          </div>

          {/* Anchor Navigation Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0 scrollbar-none text-xs">
            <button
              onClick={() => scrollToSection(formulaRef)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 font-bold transition cursor-pointer whitespace-nowrap"
            >
              📐 核心公式
            </button>
            {selectedPoint.conjugationBridge && (
              <button
                onClick={() => scrollToSection(bridgeRef)}
                className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold transition cursor-pointer whitespace-nowrap border border-amber-200/60"
              >
                ⚡ 动词纽带
              </button>
            )}
            <button
              onClick={() => scrollToSection(rulesRef)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 font-bold transition cursor-pointer whitespace-nowrap"
            >
              📖 铁律矩阵
            </button>
            <button
              onClick={() => scrollToSection(trapRef)}
              className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-[#B82E24] font-bold transition cursor-pointer whitespace-nowrap border border-rose-200/60"
            >
              🚨 避坑警示
            </button>
          </div>

          {/* Section 1: 核心公式 */}
          <div ref={formulaRef} className="space-y-1.5 pt-1">
            <span className="text-xs font-black text-slate-800 flex items-center gap-1">
              <span>📐 核心速记公式</span>
            </span>
            <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-amber-300 font-mono text-xs font-bold shadow-xs">
              {selectedPoint.formula}
            </div>
          </div>

          {/* Section 2: 动词变位与文法纽带 (若有) */}
          {selectedPoint.conjugationBridge && (
            <div ref={bridgeRef} className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-amber-900 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedPoint.conjugationBridge.bridgeName}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-amber-800 font-bold border border-amber-200">
                  {selectedPoint.conjugationBridge.targetTenseOrRule}
                </span>
              </div>
              <p className="text-xs text-amber-950/90 leading-relaxed font-medium">
                {selectedPoint.conjugationBridge.concept}
              </p>
            </div>
          )}

          {/* Section 3: 对比矩阵表格 (若有，例如 Ser vs Estar, Por vs Para) */}
          {selectedPoint.comparisonTable && (
            <div className="space-y-2 pt-1">
              <span className="text-xs font-black text-slate-800 flex items-center gap-1">
                <span>⚖️ 名师核心对比切片矩阵</span>
              </span>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100/90 text-slate-700 font-black border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">语境场景</th>
                      <th className="p-2.5 text-[#B82E24]">{selectedPoint.comparisonTable.itemA}</th>
                      <th className="p-2.5 text-amber-800">{selectedPoint.comparisonTable.itemB}</th>
                      <th className="p-2.5">本质差异说明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedPoint.comparisonTable.differences.map((diff, i) => (
                      <tr key={i} className="hover:bg-slate-50/70 transition">
                        <td className="p-2.5 font-bold text-slate-800 whitespace-nowrap">{diff.context}</td>
                        <td className="p-2.5 text-[#B82E24] font-medium">{diff.expA}</td>
                        <td className="p-2.5 text-amber-900 font-medium">{diff.expB}</td>
                        <td className="p-2.5 text-slate-500">{diff.zhExample}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 4: 规则与例句精讲 */}
          <div ref={rulesRef} className="space-y-3 pt-1">
            <span className="text-xs font-black text-slate-800 flex items-center gap-1">
              <span>📖 权威语法规则拆解与例句</span>
            </span>
            <div className="space-y-2.5">
              {selectedPoint.rules.map((rule, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <h4 className="text-xs font-black text-slate-900">{rule.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {rule.description}
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {rule.examples.map((ex, exIdx) => (
                      <div 
                        key={exIdx}
                        onClick={(e) => handleSpeak(ex.es, e)}
                        className="p-2 rounded-xl bg-white border border-slate-200/60 flex items-center justify-between cursor-pointer hover:border-[#B82E24]/30 transition group text-xs"
                      >
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-[#B82E24]">
                            {ex.es}
                          </p>
                          <p className="text-slate-500 text-[11px] mt-0.5">
                            {ex.zh}
                          </p>
                        </div>
                        <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#B82E24] shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: 考研二外与 DELE 权威避坑指南 */}
          <div ref={trapRef} className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#B82E24]">
              <AlertTriangle className="w-4 h-4" />
              <span>考研二外与 DELE 权威避坑指南 (高频扣分点)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium pl-5">
              {selectedPoint.examTrap}
            </p>
          </div>

          {/* Bottom Navigation (Prev / Next) */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between shrink-0">
            <button
              onClick={handlePrevPoint}
              disabled={!prevPoint}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
                prevPoint
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer'
                  : 'bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一个考点</span>
            </button>

            <span className="text-xs font-mono text-slate-400">
              {currentIndex + 1} / {filteredPoints.length}
            </span>

            <button
              onClick={handleNextPoint}
              disabled={!nextPoint}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
                nextPoint
                  ? 'bg-[#B82E24] hover:bg-[#991B1B] text-white cursor-pointer shadow-xs'
                  : 'bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
            >
              <span>下一个考点</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* 未激活学员提示横幅 (100% 对齐日法语小语种矩阵二级页面底部 VIP 转化引导) */}
      {!isVip && (
        <div className="bg-gradient-to-r from-[#B82E24] via-[#991B1B] to-[#59100B] rounded-2xl sm:rounded-3xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-[#B82E24]/20">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-1.5 justify-center sm:justify-start font-black text-sm">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>当前正在体验【西班牙语考研二外与 DELE 核心文法 · 基础试学】</span>
            </div>
            <p className="text-xs text-white/90 leading-relaxed">
              开通 VIP 终身卡（仅 ¥49.9），立享<strong>全部 48 考点全景大树、虚拟式全家桶与双重代词高阶避坑</strong>、30部西影精学课与 36 套国家级模考全真大卷！
            </p>
          </div>
          <button
            onClick={() => onOpenVipModal?.('🔒 开通 VIP 终身卡（仅 ¥49.9），即可解锁全部考研二外高阶文法解析与全真机考大卷！')}
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
