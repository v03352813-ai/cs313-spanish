import React, { useState, useRef } from 'react';
import { 
  Network, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  ArrowRight,
  X,
  BookOpen
} from 'lucide-react';

export interface SpanishMindMapNode {
  id: string;
  label: string;
  subLabel?: string;
  grammarId?: string;
  tabTarget?: 'library' | 'conjugation';
  color: 'amber' | 'rose' | 'indigo' | 'emerald';
  children?: SpanishMindMapNode[];
}

export const SPANISH_MIND_MAP_TREE_DATA: SpanishMindMapNode = {
  id: 'root',
  label: '🇪🇸 西班牙语核心文法全景思维导图',
  subLabel: 'Árbol Gramatical Panorámico (DELE / 专四 / 考研二外 48大核心考点全景大树)',
  color: 'rose',
  children: [
    // ==================== 主干 1: 冠词、名词与性数配合系统 ====================
    {
      id: 'branch-articles-nouns',
      label: '① 冠词、名词与性数配合系统 (Artículos, Sustantivos y Género)',
      subLabel: '西语句法基石：名词阴阳性双重天性，冠词与限定词性数配合贯穿全语言骨架',
      color: 'amber',
      children: [
        {
          id: 'sub-articles',
          label: '三大冠词体系与缩合规则',
          color: 'amber',
          children: [
            { id: 'leaf-art-def', label: '定冠词 (el, la, los, las)', subLabel: '特指已知事物 / 类别全体概括', color: 'amber' },
            { id: 'leaf-art-indef', label: '不定冠词 (un, una, unos, unas)', subLabel: '泛指个体初提 · unos/unas 表“大约”', color: 'amber' },
            { id: 'leaf-art-neutral-lo', label: '中性定冠词 LO 名词化', subLabel: 'lo bueno / lo difícil 抽象特质神器', color: 'amber' },
            { id: 'leaf-art-contraction', label: '必考缩合冠词 al / del', subLabel: 'a + el ➔ al; de + el ➔ del (专名不缩)', color: 'amber' }
          ]
        },
        {
          id: 'sub-nouns-gender',
          label: '名词阴阳性铁律与特异陷阱',
          color: 'amber',
          children: [
            { id: 'leaf-n-regular', label: '基本规律 (-o 阳 / -a 阴)', subLabel: 'libertad 阴性 · mano (阴) / día (阳)', color: 'amber' },
            { id: 'leaf-n-greek-ma', label: '希腊词根 -ma 反常阳性', subLabel: 'el problema, el tema, el idioma, el clima', color: 'amber' },
            { id: 'leaf-n-dad-cion', label: '-dad / -ción 100% 阴性', subLabel: 'la ciudad, la canción, la universidad', color: 'amber' },
            { id: 'leaf-n-stress-a', label: '重读 a-/ha- 首字单数用 el', subLabel: 'el agua, el águila ➔ 复数回归 las aguas', color: 'amber' }
          ]
        },
        {
          id: 'sub-adjectives',
          label: '形容词位置、性数与短截',
          color: 'amber',
          children: [
            { id: 'leaf-adj-accord', label: '形容词性数后置配合', subLabel: '修饰名词性数一致 · 一阳多阴全归阳', color: 'amber' },
            { id: 'leaf-adj-apocope', label: '三大短截前置词 (Apócope)', subLabel: 'buen/mal/gran (gran hombre 伟大 vs grande 巨大)', color: 'amber' },
            { id: 'leaf-adj-demonstrative', label: '指示与物主限定词', subLabel: 'este/ese/aquel 空间三段 · mi/tu/su 性数', color: 'amber' }
          ]
        }
      ]
    },

    // ==================== 主干 2: 动词大厦：三大变位门派与时态全景 ====================
    {
      id: 'branch-verbs-tenses',
      label: '② 动词大厦：三大变位门派与时态全景 (Sistema Verbal y Modos)',
      subLabel: '动词是全句的心脏：-ar/-er/-ir 三大变位规则、靴子法则与过去时态对决',
      color: 'rose',
      children: [
        {
          id: 'sub-verb-families',
          label: '三大规则门派与靴子法则',
          color: 'rose',
          children: [
            { id: 'leaf-vf-ar', label: '第 1 组 -ar 规则现在时变位', subLabel: '-o, -as, -a, -amos, -áis, -an (hablar)', tabTarget: 'conjugation', color: 'rose' },
            { id: 'leaf-vf-er-ir', label: '第 2/3 组 -er/-ir 对照变位', subLabel: 'comer / vivir 仅复数一二人称分道', tabTarget: 'conjugation', color: 'rose' },
            { id: 'leaf-vf-boot', label: '靴子法则音变动词 (Bota)', subLabel: 'e➔ie, o➔ue, e➔i 重音核爆位变音', tabTarget: 'conjugation', color: 'rose' },
            { id: 'leaf-vf-ser-estar', label: 'Ser vs Estar 双璧辨析', subLabel: '出厂天性属性 (ser) vs 阶段临时状态 (estar)', color: 'rose' }
          ]
        },
        {
          id: 'sub-past-tenses',
          label: '直陈式三大过去时态对决',
          color: 'rose',
          children: [
            { id: 'leaf-t-indefinido', label: '简单过去时 (Indefinido)', subLabel: '彻底终结断点动作 · 历史坐标点 (hablé, comí)', tabTarget: 'conjugation', color: 'rose' },
            { id: 'leaf-t-imperfecto', label: '过去未完成时 (Imperfecto)', subLabel: '-aba / -ía 过去习惯/背景描写/持续状态', tabTarget: 'conjugation', color: 'rose' },
            { id: 'leaf-t-duel', label: '过去双轨篇章对决', subLabel: '考研必考大题：背景状态 (未完) vs 突发介入 (简过)', color: 'rose' },
            { id: 'leaf-t-perfecto', label: '现在完成时 (Pretérito Perfecto)', subLabel: 'haber现在时 + 过去分词 · 今日近距离影响', color: 'rose' }
          ]
        },
        {
          id: 'sub-future-conditional',
          label: '将来时、条件式与完成时态',
          color: 'rose',
          children: [
            { id: 'leaf-t-futuro', label: '简单将来时 (Futuro Simple)', subLabel: '动词原形+é,ás,á,emos,éis,án · 预测与当前猜测', color: 'rose' },
            { id: 'leaf-t-condicional', label: '简单条件式 (Condicional)', subLabel: '动词原形+ía,ías,ía... · 委婉请求与过去将来', color: 'rose' },
            { id: 'leaf-t-pluscuam', label: '过去完成时 (Pluscuamperfecto)', subLabel: 'había + 分词 · 过去的过去先行发生', color: 'rose' }
          ]
        }
      ]
    },

    // ==================== 主干 3: 代词全景、自复动词与宾语排位 ====================
    {
      id: 'branch-pronouns-system',
      label: '③ 代词全景、自复动词与宾语排位 (Pronombres y Clíticos)',
      subLabel: '西语考试失分重灾区：直宾/间宾代词、防音爆变身 Se 法则与后挂合写律',
      color: 'indigo',
      children: [
        {
          id: 'sub-pr-direct-indirect',
          label: '直接宾语与间接宾语代词',
          color: 'indigo',
          children: [
            { id: 'leaf-pr-cod', label: '直宾代词 (me, te, lo/la...)', subLabel: '替代及物动词承受客体 · 置于变位动词前', color: 'indigo' },
            { id: 'leaf-pr-coi', label: '间宾代词 (me, te, le, nos, les)', subLabel: '必须前置复指！a Juan le gusta...', color: 'indigo' },
            { id: 'leaf-pr-double', label: '双宾语排位律 (间宾 + 直宾)', subLabel: '先人后物：me lo das, te la presento', color: 'indigo' },
            { id: 'leaf-pr-se-rule', label: '防音爆变身 SE 铁律', subLabel: 'le/les 遇到 lo/la 强制化身 se (se lo doy)', color: 'indigo' }
          ]
        },
        {
          id: 'sub-pr-position',
          label: '代词前后位置与重音符规律',
          color: 'indigo',
          children: [
            { id: 'leaf-pr-front', label: '变位动词前分写', subLabel: 'lo veo / no me lo digas (否定词与代词不拆)', color: 'indigo' },
            { id: 'leaf-pr-enclitic', label: '原形/副动词/肯定命令后连写', subLabel: 'comprártelo / diciéndotelo 必须补戴重音符', color: 'indigo' },
            { id: 'leaf-pr-verb-structure', label: '动词短语双位置任选', subLabel: 'Lo voy a ver = Voy a verlo', color: 'indigo' }
          ]
        },
        {
          id: 'sub-pr-se-types',
          label: '多面魔王 SE 的 5 种用法',
          color: 'indigo',
          children: [
            { id: 'leaf-se-reflexive', label: '真自复与相互动作 Se', subLabel: 'levantarse (起床), mirarse (对视)', color: 'indigo' },
            { id: 'leaf-se-passive', label: '被动 Se 与无人称 Se', subLabel: 'Se habla español / Se vive bien aquí', color: 'indigo' },
            { id: 'leaf-se-unintentional', label: '无意志意外 Se (Se me cayó)', subLabel: '非我故意打碎，乃杯子自己掉落！', color: 'indigo' }
          ]
        }
      ]
    },

    // ==================== 主干 4: 虚拟式灵魂、三大从句与条件句 ====================
    {
      id: 'branch-subjunctive',
      label: '④ 虚拟式灵魂、三大从句与条件句 (El Modo Subjuntivo)',
      subLabel: '西班牙语高级语法的灵魂之巅：主观意愿/情感/怀疑断裂，条件句虚拟大阵',
      color: 'emerald',
      children: [
        {
          id: 'sub-sub-present',
          label: '虚拟式现在时与触发罗盘',
          color: 'emerald',
          children: [
            { id: 'leaf-sb-conjugation', label: '灵魂互换变位心法', subLabel: '-ar 穿 E 系列衣服，-er/-ir 穿 A 系列衣服', color: 'emerald' },
            { id: 'leaf-sb-weirdo', label: 'W-E-I-R-D-O 六角星触发罗盘', subLabel: '意愿/情感/非人称/请求/怀疑/Ojalá', color: 'emerald' },
            { id: 'leaf-sb-doubt', label: '确定 vs 怀疑 (Creo vs No creo)', subLabel: 'Creo que (直陈) vs No creo que (虚拟)', color: 'emerald' }
          ]
        },
        {
          id: 'sub-sub-clauses',
          label: '名词性与定语从句虚拟判定',
          color: 'emerald',
          children: [
            { id: 'leaf-sb-subject-switch', label: '主语相同时用原形动词', subLabel: 'Quiero salir vs Quiero que salgas', color: 'emerald' },
            { id: 'leaf-sb-relative-unknown', label: '先行词未知/不存在必用虚拟', subLabel: 'Busco un libro que sea fácil (未买到)', color: 'emerald' },
            { id: 'leaf-sb-time-clause', label: 'Cuando + 将来动作必用虚拟', subLabel: 'Cuando tenga tiempo, iré a verte', color: 'emerald' }
          ]
        },
        {
          id: 'sub-sub-conditionals',
          label: '虚拟式过去未完成时与条件句',
          color: 'emerald',
          children: [
            { id: 'leaf-sb-imperfect', label: '虚拟式过去未完成时 (-ra/-se)', subLabel: '简过第3人称复数 -ron 蜕变推导 (hablara/hablase)', color: 'emerald' },
            { id: 'leaf-si-real', label: '真实条件句 (Si + 现在时)', subLabel: 'Si tengo dinero, viajo. (可能发生)', color: 'emerald' },
            { id: 'leaf-si-hypothetical', label: '与现在相反/虚拟可能 (Si + 虚过未 + 条件式)', subLabel: 'Si tuviera dinero, viajaría por España. (核心考点)', color: 'emerald' },
            { id: 'leaf-si-past', label: '与过去相反 (Si + 虚过完 + 复合条件式)', subLabel: 'Si hubiera sabido, te habría llamado.', color: 'emerald' }
          ]
        }
      ]
    }
  ]
};

interface SpanishGrammarVisualMindMapProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGrammar?: (id: string) => void;
  onNavigateConjugation?: () => void;
}

export const SpanishGrammarVisualMindMap: React.FC<SpanishGrammarVisualMindMapProps> = ({
  isOpen,
  onClose,
  onSelectGrammar,
  onNavigateConjugation
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [collapsedBranchIds, setCollapsedBranchIds] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  const toggleCollapse = (branchId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedBranchIds(prev => 
      prev.includes(branchId) 
        ? prev.filter(id => id !== branchId) 
        : [...prev, branchId]
    );
  };

  const expandAllBranches = () => {
    setCollapsedBranchIds([]);
  };

  const collapseAllBranches = () => {
    if (SPANISH_MIND_MAP_TREE_DATA.children) {
      setCollapsedBranchIds(SPANISH_MIND_MAP_TREE_DATA.children.map(c => c.id));
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(130, Math.max(70, prev + delta)));
  };

  const resetZoom = () => {
    setZoomLevel(100);
  };

  const handleLeafClick = (leaf: SpanishMindMapNode) => {
    if (leaf.tabTarget === 'conjugation' && onNavigateConjugation) {
      onNavigateConjugation();
      onClose();
      return;
    }
    if (leaf.grammarId && onSelectGrammar) {
      onSelectGrammar(leaf.grammarId);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden border border-amber-200/90 shadow-2xl relative flex flex-col">
        
        {/* Header Controls Bar (对齐日韩法全功能工具栏) */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 border-b border-amber-100 bg-white/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B82E24] via-[#D97706] to-[#B45309] text-white flex items-center justify-center shadow-md shadow-amber-950/10">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2 flex-wrap">
                <span>西班牙语核心文法全景思维导图 (Árbol Gramatical)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-extrabold">
                  4 大主干 · 48 考点拓扑树
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                严格对标欧标 DELE (A1~B2)、全国高校专四与考研二外核心文法架构，支持点按分支自由伸缩
              </p>
            </div>
          </div>

          {/* Action Buttons & Zoom */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-100 rounded-xl border border-slate-200 p-1">
              <button
                onClick={() => handleZoom(-10)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white transition cursor-pointer"
                title="缩小视图"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono font-bold px-2 text-slate-700 select-none">
                {zoomLevel}%
              </span>
              <button
                onClick={() => handleZoom(10)}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white transition cursor-pointer"
                title="放大视图"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={resetZoom}
                className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white transition ml-0.5 cursor-pointer"
                title="重置缩放"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center bg-slate-100 rounded-xl border border-slate-200 p-1 text-xs">
              <button
                onClick={expandAllBranches}
                className="px-2.5 py-1 rounded-lg font-bold text-slate-700 hover:text-slate-900 hover:bg-white transition cursor-pointer"
              >
                展开全部
              </button>
              <button
                onClick={collapseAllBranches}
                className="px-2.5 py-1 rounded-lg font-bold text-slate-700 hover:text-slate-900 hover:bg-white transition cursor-pointer"
              >
                收起分支
              </button>
            </div>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              title="关闭思维导图"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- Main Interactive Tree Canvas --- */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6 relative scrollbar-thin bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF6EE]/40"
        >
          {/* Background Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px), radial-gradient(#e2e8f0 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }} 
          />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

          <div 
            className="min-w-[1020px] sm:min-w-[1140px] flex items-stretch gap-0 transition-transform duration-200 origin-top-left relative z-10"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          >
            
            {/* 1. Central Root Node (中心总根节点 - 垂直居中) */}
            <div className="shrink-0 flex flex-col items-center justify-center my-auto z-10 w-[210px] sm:w-[240px]">
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#B82E24] via-[#D97706] to-[#991B1B] text-white shadow-xl shadow-amber-950/20 border border-amber-300 text-center w-full space-y-2 select-none ring-4 ring-amber-100 relative">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-white/20 flex items-center justify-center text-xl font-bold backdrop-blur-md shadow-inner">
                  🌳
                </div>
                <h2 className="text-sm sm:text-base font-black tracking-tight leading-snug">
                  {SPANISH_MIND_MAP_TREE_DATA.label}
                </h2>
                <p className="text-[10.5px] text-amber-100 font-medium opacity-95 leading-tight">
                  {SPANISH_MIND_MAP_TREE_DATA.subLabel}
                </p>
                <div className="pt-1">
                  <span className="text-[9.5px] px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold inline-block">
                    4 大主干 · 48 核心考点
                  </span>
                </div>

                {/* Root Node Right Branch Port Anchor Dot */}
                <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#B82E24] border-2 border-white shadow-md ring-2 ring-amber-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* 2. Middle Connector Gutter */}
            <div className="shrink-0 w-10 sm:w-12 relative flex items-center justify-center self-stretch pointer-events-none">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-amber-400 via-[#B82E24] to-amber-500 rounded-full shadow-xs" />
            </div>

            {/* 3. 4 Primary Branches Container */}
            <div className="flex-1 space-y-6 relative">
              {SPANISH_MIND_MAP_TREE_DATA.children?.map((branch, branchIdx, arr) => {
                const isBranchCollapsed = collapsedBranchIds.includes(branch.id);
                const isFirst = branchIdx === 0;
                const isLast = branchIdx === arr.length - 1;
                
                const themeStyles = 
                  branch.color === 'amber' ? {
                    border: 'border-amber-200',
                    bg: 'bg-white hover:border-amber-300',
                    headerBg: 'from-amber-50 via-amber-50/70 to-orange-50/30',
                    pill: 'bg-amber-100 text-amber-900 border-amber-200',
                    nodeBg: 'bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-900 border-slate-200 hover:border-amber-300',
                    stemColor: 'border-amber-300 group-hover/sub:border-amber-400',
                    branchLine: 'bg-amber-400',
                    spineSegment: 'from-amber-400 to-[#B82E24]',
                    dot: 'bg-amber-600',
                    dotRing: 'ring-amber-100'
                  } :
                  branch.color === 'rose' ? {
                    border: 'border-[#B82E24]/30',
                    bg: 'bg-white hover:border-[#B82E24]/50',
                    headerBg: 'from-[#FEF2F2] via-[#FFF5F5] to-amber-50/30',
                    pill: 'bg-[#FEF2F2] text-[#B82E24] border-[#B82E24]/25',
                    nodeBg: 'bg-white hover:bg-[#FEF2F2] text-slate-800 hover:text-[#B82E24] border-slate-200 hover:border-[#B82E24]/30',
                    stemColor: 'border-[#B82E24]/40 group-hover/sub:border-[#B82E24]',
                    branchLine: 'bg-[#B82E24]',
                    spineSegment: 'from-[#B82E24] to-indigo-400',
                    dot: 'bg-[#B82E24]',
                    dotRing: 'ring-red-100'
                  } :
                  branch.color === 'indigo' ? {
                    border: 'border-indigo-200',
                    bg: 'bg-white hover:border-indigo-300',
                    headerBg: 'from-indigo-50 via-indigo-50/70 to-slate-50',
                    pill: 'bg-indigo-100 text-indigo-700 border-indigo-200',
                    nodeBg: 'bg-white hover:bg-indigo-50 text-slate-800 hover:text-indigo-900 border-slate-200 hover:border-indigo-300',
                    stemColor: 'border-indigo-300 group-hover/sub:border-indigo-400',
                    branchLine: 'bg-indigo-400',
                    spineSegment: 'from-indigo-400 to-emerald-400',
                    dot: 'bg-indigo-600',
                    dotRing: 'ring-indigo-100'
                  } : {
                    border: 'border-emerald-200',
                    bg: 'bg-white hover:border-emerald-300',
                    headerBg: 'from-emerald-50 via-emerald-50/70 to-teal-50/30',
                    pill: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                    nodeBg: 'bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border-slate-200 hover:border-emerald-300',
                    stemColor: 'border-emerald-300 group-hover/sub:border-emerald-400',
                    branchLine: 'bg-emerald-400',
                    spineSegment: 'from-emerald-400 to-amber-400',
                    dot: 'bg-emerald-600',
                    dotRing: 'ring-emerald-100'
                  };

                return (
                  <div 
                    key={branch.id}
                    className={`rounded-2xl border ${themeStyles.border} ${themeStyles.bg} transition-all duration-300 shadow-xs relative`}
                  >
                    {/* Vertical Tree Spine Segment */}
                    <div 
                      className={`absolute -left-5 sm:-left-6 w-1 bg-gradient-to-b ${themeStyles.spineSegment} pointer-events-none z-0 ${
                        isFirst 
                          ? 'top-7 -bottom-6 rounded-t-full' 
                          : isLast 
                            ? '-top-6 h-[calc(1.5rem+1.75rem)] rounded-b-full' 
                            : '-top-6 -bottom-6'
                      }`} 
                    />

                    {/* Left Entrance Horizontal Branch Line connecting to Tree Spine */}
                    <div className="absolute -left-5 sm:-left-6 top-7 w-5 sm:w-6 flex items-center pointer-events-none z-10">
                      <div className={`w-full h-1 ${themeStyles.branchLine} rounded-full shadow-xs`} />
                      <div className={`w-2.5 h-2.5 rounded-full ${themeStyles.dot} -mr-1 ring-4 ${themeStyles.dotRing} shrink-0`} />
                    </div>

                    {/* Primary Branch Header (Click to collapse/expand) */}
                    <div 
                      onClick={(e) => toggleCollapse(branch.id, e)}
                      className={`p-3.5 sm:p-4 bg-gradient-to-r ${themeStyles.headerBg} border-b border-amber-100/80 flex items-center justify-between cursor-pointer select-none transition hover:opacity-95 rounded-t-2xl`}
                    >
                      <div className="flex items-center gap-3">
                        <button className="p-1 rounded-lg bg-white/90 text-slate-700 shadow-2xs border border-amber-200/70 transition">
                          {isBranchCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <div>
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2 flex-wrap">
                            <span>{branch.label}</span>
                            <span className={`text-[10px] px-2 py-0.2 rounded-full border font-bold ${themeStyles.pill}`}>
                              {branch.children?.reduce((acc, c) => acc + (c.children?.length || 0), 0)} 个核心考点
                            </span>
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {branch.subLabel}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                        {isBranchCollapsed ? '点击展开分支' : '点击收起'}
                      </span>
                    </div>

                    {/* Secondary Branches & Leaf Nodes */}
                    {!isBranchCollapsed && (
                      <div className="p-4 space-y-4 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                          {branch.children?.map((subCat) => {
                            return (
                              <div 
                                key={subCat.id}
                                className="bg-[#FAF8F5]/80 rounded-2xl p-4 border border-amber-200/70 shadow-2xs space-y-3 flex flex-col justify-between group/sub hover:bg-white transition"
                              >
                                {/* Subcategory Header Label */}
                                <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                                  <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${themeStyles.dot} ring-4 ${themeStyles.dotRing}`} />
                                    <span className="text-xs font-bold text-slate-800">{subCat.label}</span>
                                  </div>
                                  <span className="text-[10px] text-slate-500 font-mono px-2 py-0.5 rounded-full bg-white border border-amber-200/80 font-semibold shadow-2xs">
                                    {subCat.children?.length || 0} 考点
                                  </span>
                                </div>

                                {/* Mind Map Tree Branch Connector Line & Nodes */}
                                <div className={`flex-1 flex flex-col justify-center my-auto py-1 pl-3.5 relative border-l-2 border-dashed ${themeStyles.stemColor} space-y-2 transition-colors`}>
                                  {subCat.children?.map((leaf) => (
                                    <div key={leaf.id} className="relative flex items-center">
                                      {/* Mind Map Horizontal Branch Connector Line */}
                                      <div className={`absolute -left-3.5 w-3.5 h-0.5 ${themeStyles.branchLine}`} />
                                      
                                      {/* Leaf Node Button */}
                                      <button
                                        onClick={() => handleLeafClick(leaf)}
                                        className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center justify-between gap-2 cursor-pointer shadow-2xs active:scale-[0.98] group/leaf ${themeStyles.nodeBg}`}
                                        title={`点击了解知识点：${leaf.label} (${leaf.subLabel || ''})`}
                                      >
                                        <div className="flex items-center gap-1.5 min-w-0">
                                          <span className="font-bold text-slate-900 group-hover/leaf:text-[#B82E24] tracking-wide shrink-0">
                                            {leaf.label}
                                          </span>
                                          {leaf.subLabel && (
                                            <span className="text-[11px] text-slate-500 group-hover/leaf:text-slate-700 truncate font-normal">
                                              · {leaf.subLabel}
                                            </span>
                                          )}
                                        </div>
                                        <ArrowRight className="w-3 h-3 text-slate-400 opacity-0 group-hover/leaf:opacity-100 group-hover/leaf:text-[#B82E24] group-hover/leaf:translate-x-0.5 transition shrink-0" />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Hint Footer */}
        <div className="relative z-20 px-5 py-3 border-t border-amber-100 bg-white/95 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Sparkles className="w-3.5 h-3.5 text-[#B82E24]" />
            <span>全体系覆盖：名词冠词基石 (11) · 动词变位与时态 (12) · 代词与宾语系统 (10) · 虚拟式与条件从句 (11)</span>
          </div>
          <span className="text-slate-400">支持拖拽滚动与缩放，点击知识点快速浏览考点详情</span>
        </div>

      </div>
    </div>
  );
};
