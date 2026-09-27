import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutGrid, 
  Sparkles, 
  Layers, 
  BookMarked, 
  BookOpenCheck, 
  Headphones, 
  FileCheck2, 
  Crown, 
  KeyRound, 
  RotateCcw,
  Globe2,
  Mic,
  PenTool,
  Calendar,
  Gift
} from 'lucide-react';
import { checkAdminSession, LicenseInfo } from '../data/auth/cardKeys';
import { getSpanishExamCountdownStatus } from '../utils/examCountdown';

export type ActiveTab = 
  | 'home' 
  | 'phonetics' 
  | 'conjugation' 
  | 'vocab' 
  | 'cinema'
  | 'speaking'
  | 'writing'
  | 'grammar' 
  | 'exam' 
  | 'mistakes';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isVip: boolean;
  license: LicenseInfo | null;
  onOpenVipModal: () => void;
  onOpenAdminModal: () => void;
  onOpenWallpaperModal?: () => void;
  onOpenMultiLangModal?: () => void;
  onOpenExamModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isVip,
  license,
  onOpenVipModal,
  onOpenAdminModal,
  onOpenWallpaperModal,
  onOpenMultiLangModal,
  onOpenExamModal
}) => {
  const examCountdown = getSpanishExamCountdownStatus();

  // 首页 + 9 大核心教学模块
  const navItems = [
    { id: 'home' as ActiveTab, label: '首页', shortLabel: '首页', icon: LayoutGrid },
    { id: 'phonetics' as ActiveTab, label: '27音·大舌音', shortLabel: '发音', icon: Sparkles },
    { id: 'conjugation' as ActiveTab, label: '动词变位器', shortLabel: '变位', icon: RotateCcw, isHero: true },
    { id: 'vocab' as ActiveTab, label: '词汇闪卡', shortLabel: '闪卡', icon: Layers },
    { id: 'mistakes' as ActiveTab, label: '错题本', shortLabel: '错题', icon: BookMarked },
    { id: 'speaking' as ActiveTab, label: 'AI口语', shortLabel: '口语', icon: Mic, isHero: true },
    { id: 'writing' as ActiveTab, label: 'AI写作', shortLabel: '写作', icon: PenTool, isHero: true },
    { id: 'grammar' as ActiveTab, label: '语法宝典', shortLabel: '语法', icon: BookOpenCheck },
    { id: 'cinema' as ActiveTab, label: '西影精听', shortLabel: '精听', icon: Headphones },
    { id: 'exam' as ActiveTab, label: '真题模考', shortLabel: '模考', icon: FileCheck2 },
  ];

  const currentItem = navItems.find(item => item.id === activeTab) || navItems[0];

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    return checkAdminSession() || urlParams.get('admin') === 'true' || window.location.hash.includes('admin');
  });

  const [logoClickCount, setLogoClickCount] = useState<number>(0);
  const logoClickTimerRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || 
        (e.altKey && (e.key === 'A' || e.key === 'a'))
      ) {
        e.preventDefault();
        setIsAdmin(true);
        onOpenAdminModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenAdminModal]);

  const handleLogoClick = () => {
    setActiveTab('home');
    setLogoClickCount(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setIsAdmin(true);
        onOpenAdminModal();
        return 0;
      }
      clearTimeout(logoClickTimerRef.current);
      logoClickTimerRef.current = setTimeout(() => setLogoClickCount(0), 1200);
      return next;
    });
  };

  // ================= 1. 首页专属旗舰展台 (严格对标法语/韩语，右侧不塞多余图标) =================
  if (activeTab === 'home') {
    return (
      <header className="w-full pt-2.5 sm:pt-3 transition-all">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-[#B82E24]/20 shadow-xs p-3.5 sm:p-5 space-y-3 sm:space-y-3.5 overflow-hidden">
            
            {/* 顶部品牌区与右侧 5 大特色指标方块 */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 min-w-0">
              <div className="space-y-1 min-w-0">
                <div className="flex flex-row items-center gap-1.5 sm:gap-2 flex-wrap">
                  {/* Brand Logo & Name */}
                  <div 
                    onClick={handleLogoClick}
                    className="flex items-center gap-1.5 cursor-pointer select-none group mr-1 shrink-0"
                    title="西班牙语研习社 (点击刷新首页 / 连击5次开启管理员)"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#C8102E] via-[#B82E24] to-[#8F141B] flex items-center justify-center text-white shadow-xs font-black text-xs tracking-tight group-hover:scale-105 transition shrink-0">
                      ES
                    </div>
                    <span className="font-black text-sm sm:text-base tracking-tight text-slate-900">
                      西班牙语研习社
                    </span>
                  </div>

                  {/* 平台定位徽章 */}
                  <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                    <span className="hidden xs:inline-block px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20 text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap">
                      Spanish Pro · 自研平台
                    </span>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/20 text-[10.5px] sm:text-[11px] font-bold items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-2.5 h-2.5 text-[#B82E24]" /> DELE/SIELE双轨全真卷
                    </span>

                    {/* 动态考期呼吸倒计时按钮 */}
                    {onOpenExamModal && (
                      <button
                        onClick={onOpenExamModal}
                        className="px-2 py-0.5 rounded-full border border-[#B82E24]/25 bg-[#FEF2F2] text-[#B82E24] text-[10px] sm:text-[11px] font-black flex items-center gap-1.5 whitespace-nowrap shadow-2xs hover:bg-[#FEF2F2]/80 cursor-pointer transition active:scale-95 group"
                        title="点击查看 2026 西班牙语官方考期全景与报考指南"
                      >
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B82E24] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B82E24]"></span>
                        </span>
                        <span>{examCountdown.badgeText}</span>
                        <span className="text-[9px] sm:text-[9.5px] opacity-75 group-hover:opacity-100 font-bold">指南&gt;</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 核心主标语 (阳光金 Slogan) */}
                <div className="pt-1">
                  <h1 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-slate-900 flex items-center gap-2">
                    <span>西语备考，从未如此简单</span>
                  </h1>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-0.5 max-w-2xl">
                    塞万提斯 DELE (A1~C1) & SIELE 全真机考 + 27音与大舌音透视 + 靴子法则动词变位演练器 + 5,000+ 性数词库 + 经典西影原声精听
                  </p>
                </div>
              </div>

              {/* 右侧：严格对标法语/日韩的 5 大特色指标方块 (无多余冗杂图标) */}
              <div className="flex items-center gap-1.5 sm:gap-2 self-start lg:self-center shrink-0 flex-wrap sm:flex-nowrap">
                {/* 1. 变位神器 */}
                <button
                  onClick={() => setActiveTab('conjugation')}
                  className="px-2.5 py-2 rounded-xl bg-gradient-to-br from-[#C8102E] via-[#B82E24] to-[#8F141B] text-white flex flex-col items-center justify-center min-w-[62px] sm:min-w-[68px] shadow-2xs hover:scale-105 transition cursor-pointer"
                  title="开启靴子法则动词变位推导演练器"
                >
                  <span className="text-[11px] font-black leading-none">变位神器</span>
                  <span className="text-[9px] font-normal text-rose-100 mt-0.5">靴子法则</span>
                </button>

                {/* 2. 全真卷 */}
                <button
                  onClick={() => setActiveTab('exam')}
                  className="px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex flex-col items-center justify-center min-w-[60px] sm:min-w-[64px] hover:bg-slate-100 transition cursor-pointer"
                  title="进入官方全真模考大卷"
                >
                  <span className="text-[11px] font-black leading-none text-slate-900">全真卷</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">DELE/专四</span>
                </button>

                {/* 3. 5000+ 词库 */}
                <button
                  onClick={() => setActiveTab('vocab')}
                  className="px-2.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 flex flex-col items-center justify-center min-w-[60px] sm:min-w-[64px] hover:bg-slate-100 transition cursor-pointer"
                  title="查阅 5,000+ 性数分级闪卡"
                >
                  <span className="text-[11px] font-black leading-none text-slate-900">5000+</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">性数词库</span>
                </button>

                {/* 4. 官方考期 */}
                {onOpenExamModal && (
                  <button
                    onClick={onOpenExamModal}
                    className="px-2.5 py-2 rounded-xl bg-[#FEF2F2] border border-[#B82E24]/20 text-[#B82E24] flex flex-col items-center justify-center min-w-[64px] sm:min-w-[70px] hover:bg-[#FEF2F2]/80 transition cursor-pointer"
                    title="查看权威考期倒计时与报考指南"
                  >
                    <span className="text-[11px] font-black leading-none">官方考期</span>
                    <span className="text-[9px] font-bold mt-0.5">{examCountdown.badgeText}</span>
                  </button>
                )}

                {/* 5. 免费壁纸 */}
                {onOpenWallpaperModal && (
                  <button
                    onClick={onOpenWallpaperModal}
                    className="px-2 py-2 rounded-xl bg-gradient-to-br from-rose-50 to-amber-50/40 border border-[#B82E24]/20 text-[#B82E24] flex flex-col items-center justify-center min-w-[60px] sm:min-w-[64px] hover:bg-rose-100 transition cursor-pointer"
                    title="领取 4K 伴学壁纸福利"
                  >
                    <span className="text-[11px] font-black leading-none flex items-center gap-0.5">
                      🎁 免费壁纸
                    </span>
                    <span className="text-[9px] text-[#B82E24]/80 mt-0.5">4K 伴学视界</span>
                  </button>
                )}
              </div>
            </div>

            {/* 2. 紧随其后的 10 大核心功能平铺导航条 (严格对标日语：灰底胶囊轨道与纯白高亮卡片) */}
            <div className="pt-0.5">
              <nav className="hidden md:grid grid-cols-10 gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 shadow-2xs">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-center gap-1 py-1.5 px-0.5 rounded-lg text-xs lg:text-[13px] font-bold transition-all whitespace-nowrap select-none cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#B82E24] shadow-2xs shadow-slate-200/90 font-black'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Mobile 手机端：2 行平铺紧凑导航栏 (10 项全部清晰可见，无需滑动) */}
              <div className="md:hidden space-y-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/70 shadow-2xs min-w-0">
                {/* Top Row: 5 项 */}
                <div className="grid grid-cols-5 gap-1 min-w-0">
                  {navItems.slice(0, 5).map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`min-w-0 w-full flex items-center justify-center gap-0.5 py-1.5 px-0.5 rounded-xl text-[10.5px] font-bold transition whitespace-nowrap cursor-pointer select-none ${
                          isActive
                            ? 'bg-white text-[#B82E24] shadow-xs font-black'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Icon className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                        <span className="truncate">{item.shortLabel || item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Row: 5 项 */}
                <div className="grid grid-cols-5 gap-1 min-w-0">
                  {navItems.slice(5).map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`min-w-0 w-full flex items-center justify-center gap-0.5 py-1.5 px-0.5 rounded-xl text-[10.5px] font-bold transition whitespace-nowrap cursor-pointer select-none ${
                          isActive
                            ? 'bg-white text-[#B82E24] shadow-xs font-black'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Icon className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                        <span className="truncate">{item.shortLabel || item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }

  // ================= 2. 二级页面专属：标准两层独立展台卡片 (严格对标日语图 2、图 5) =================
  return (
    <header className="w-full pt-2 sm:pt-2.5 transition-all">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-[#B82E24]/20 shadow-xs p-3 sm:p-4 space-y-2.5 overflow-hidden">
          
          {/* 第一行：左侧 Logo + 当前模块标识；右侧 考期 + 壁纸 + 黑金通卡 + 多语 */}
          <div className="flex items-center justify-between gap-2.5 min-w-0">
            {/* 左侧品牌与当前模块胶囊 */}
            <div className="flex items-center gap-2 min-w-0">
              <div 
                onClick={handleLogoClick}
                className="flex items-center gap-1.5 cursor-pointer select-none group shrink-0"
                title="返回首页"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#C8102E] via-[#B82E24] to-[#8F141B] flex items-center justify-center text-white shadow-xs font-black text-xs tracking-tight group-hover:scale-105 transition shrink-0">
                  ES
                </div>
                <span className="font-black text-sm sm:text-base tracking-tight text-slate-900 hidden xs:inline">
                  西班牙语研习社
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FEF2F2] text-[#B82E24] font-black border border-[#B82E24]/20 hidden sm:inline">
                  DELE
                </span>
              </div>

              <span className="text-slate-300 text-xs hidden sm:inline">|</span>

              {/* 当前所在模块高光指示器 (对标日语图 2 图 5) */}
              <div className="flex items-center gap-1 text-xs">
                <span className="text-slate-400 font-medium hidden sm:inline">当前模块:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FEF2F2] text-[#B82E24] border border-[#B82E24]/25 font-black text-xs flex items-center gap-1 shadow-2xs">
                  <currentItem.icon className="w-3 h-3 text-[#B82E24]" />
                  <span>{currentItem.label}</span>
                </span>
              </div>
            </div>

            {/* 右侧全局操作胶囊 (对标日语图 2：官方考期 + 免费壁纸 + 终身通卡/VIP) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* 官方考期 */}
              {onOpenExamModal && (
                <button
                  onClick={onOpenExamModal}
                  className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#B82E24] to-[#8F141B] hover:from-[#8F141B] hover:to-[#B82E24] text-white text-[10.5px] sm:text-[11px] font-black flex items-center gap-1 shadow-2xs transition cursor-pointer active:scale-95"
                  title="查看官方考期全景指南"
                >
                  <Calendar className="w-3 h-3" />
                  <span>官方考期</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-black/20 text-[9.5px]">
                    {examCountdown.buttonSubText}
                  </span>
                </button>
              )}

              {/* 免费壁纸 */}
              {onOpenWallpaperModal && (
                <button
                  onClick={onOpenWallpaperModal}
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF2F2] hover:bg-rose-100 text-[#B82E24] border border-[#B82E24]/20 text-[10.5px] sm:text-[11px] font-bold transition cursor-pointer"
                  title="领取 4K 伴学壁纸福利"
                >
                  <Gift className="w-3 h-3 text-[#B82E24]" />
                  <span>免费壁纸</span>
                </button>
              )}

              {/* 多语矩阵 */}
              {onOpenMultiLangModal && (
                <button
                  onClick={onOpenMultiLangModal}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                  title="切换日/韩/法/西小语种矩阵"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#B82E24]" />
                </button>
              )}

              {/* 管理员入口 */}
              {isAdmin && (
                <button
                  onClick={onOpenAdminModal}
                  className="p-1.5 rounded-full bg-slate-800 text-amber-300 hover:bg-slate-900 transition"
                  title="卡密管理后台"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                </button>
              )}

              {/* VIP Status or Activation Button (严格对标法语/日语：未购买显示卡密激活，购买后显示终身VIP/通卡) */}
              {isVip ? (
                <button
                  onClick={onOpenVipModal}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10.5px] sm:text-[11px] font-black flex items-center gap-1 shadow-2xs transition cursor-pointer hover:opacity-95 active:scale-95"
                  title={license?.planName || 'CS313 终身 VIP'}
                >
                  <Crown className="w-3 h-3 text-amber-200 shrink-0" />
                  <span className="hidden sm:inline whitespace-nowrap">{license?.planName || '终身 VIP'}</span>
                  <span className="inline sm:hidden whitespace-nowrap font-black">终身VIP</span>
                </button>
              ) : (
                <button
                  onClick={onOpenVipModal}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#B82E24] to-[#991B1B] hover:from-[#991B1B] hover:to-[#B82E24] text-white text-[10.5px] sm:text-[11px] font-black flex items-center gap-1 shadow-2xs transition shrink-0 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
                  title="输入卡密激活 VIP 终身卡"
                >
                  <KeyRound className="w-3 h-3 shrink-0" />
                  <span className="whitespace-nowrap">卡密激活</span>
                </button>
              )}
            </div>
          </div>

          {/* 第二行：独立的浅色底槽 Pills 导航条 (严格对标日语：灰底胶囊轨道与纯白高亮卡片) */}
          <div className="pt-0.5">
            <nav className="hidden md:grid grid-cols-10 gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 shadow-2xs">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-xs lg:text-[13px] font-bold transition-all whitespace-nowrap select-none cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#B82E24] shadow-2xs shadow-slate-200/90 font-black ring-1 ring-[#B82E24]/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* 手机端：2 行平铺紧凑导航栏 */}
            <div className="md:hidden space-y-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/70 shadow-2xs min-w-0">
              {/* Top Row: 5 项 */}
              <div className="grid grid-cols-5 gap-1 min-w-0">
                {navItems.slice(0, 5).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`min-w-0 w-full flex items-center justify-center gap-0.5 py-1.5 px-0.5 rounded-xl text-[10.5px] font-bold transition whitespace-nowrap cursor-pointer select-none ${
                        isActive
                          ? 'bg-white text-[#B82E24] shadow-xs font-black'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                      <span className="truncate">{item.shortLabel || item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Row: 5 项 */}
              <div className="grid grid-cols-5 gap-1 min-w-0">
                {navItems.slice(5).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`min-w-0 w-full flex items-center justify-center gap-0.5 py-1.5 px-0.5 rounded-xl text-[10.5px] font-bold transition whitespace-nowrap cursor-pointer select-none ${
                        isActive
                          ? 'bg-white text-[#B82E24] shadow-xs font-black'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#B82E24]' : 'text-slate-400'}`} />
                      <span className="truncate">{item.shortLabel || item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
