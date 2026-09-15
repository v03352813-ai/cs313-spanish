import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { HomePortal } from './components/HomePortal';
import { PhoneticsView } from './components/PhoneticsView';
import { ConjugationView } from './components/ConjugationView';
import { VocabView } from './components/VocabView';
import { GrammarView } from './components/GrammarView';
import { SpanishGrammarVisualMindMap } from './components/SpanishGrammarVisualMindMap';
import { CinemaView } from './components/CinemaView';
import { SpanishExamView } from './components/SpanishExamView';
import { MistakesView, WrongRecord } from './components/MistakesView';
import { AISpeakingView } from './components/AISpeakingView';
import { SpanishWritingView } from './components/SpanishWritingView';
import { VipModal } from './components/VipModal';
import { AdminKeyGeneratorModal } from './components/AdminKeyGeneratorModal';
import { WallpaperRewardModal } from './components/WallpaperRewardModal';
import { WallpaperBanner } from './components/WallpaperBanner';
import { MultiLangModal } from './components/MultiLangModal';
import { ExamRegistrationModal } from './components/ExamRegistrationModal';
import { getLocalLicense, LicenseInfo } from './data/auth/cardKeys';
import { getStudyStreak } from './data/cloudSync';
import { api } from './services/api';
import { ArrowUp, AlertTriangle, Sparkles, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[ErrorBoundary - ${this.props.name}] Caught error:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-xl mx-auto my-12 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <p className="font-bold text-slate-800 text-base">学习模块加载异常</p>
          <p className="text-xs text-slate-500 font-mono">{this.state.error?.message}</p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              if (this.props.onReset) this.props.onReset();
            }}
            className="px-5 py-2 rounded-xl bg-[#B82E24] text-white text-xs font-bold cursor-pointer hover:bg-[#991B1B] transition shadow-xs"
          >
            返回首页重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [license, setLicense] = useState<LicenseInfo | null>(() => getLocalLicense());
  const [isVipModalOpen, setIsVipModalOpen] = useState<boolean>(false);
  const [vipModalReason, setVipModalReason] = useState<string>('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isWallpaperModalOpen, setIsWallpaperModalOpen] = useState<boolean>(false);
  const [isMultiLangModalOpen, setIsMultiLangModalOpen] = useState<boolean>(false);
  const [isExamModalOpen, setIsExamModalOpen] = useState<boolean>(false);
  const [isMindMapOpen, setIsMindMapOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const streak = getStudyStreak();

  const handleOpenVipModal = (reason?: string) => {
    setVipModalReason(reason || '');
    setIsVipModalOpen(true);
    api.trackEvent('vip_intent', { reason: reason || 'direct_click' });
  };

  useEffect(() => {
    api.trackEvent('page_view', { path: window.location.hash || '#home' });
  }, []);

  // 错题本持久化
  const [mistakes, setMistakes] = useState<WrongRecord[]>(() => {
    try {
      const raw = localStorage.getItem('cs313_es_mistakes_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cs313_es_mistakes_v1', JSON.stringify(mistakes));
    } catch {}
  }, [mistakes]);

  // 返回顶部监听
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash 路由监听
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ActiveTab;
      if (['home', 'phonetics', 'conjugation', 'vocab', 'grammar', 'cinema', 'speaking', 'writing', 'exam', 'mistakes'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveMistake = (record: WrongRecord) => {
    setMistakes(prev => {
      const exists = prev.some(m => m.paperId === record.paperId && m.question.id === record.question.id);
      if (exists) return prev;
      return [record, ...prev];
    });
  };

  const handleRemoveMistake = (id: string) => {
    setMistakes(prev => prev.filter(m => m.id !== id));
  };

  const handleClearAllMistakes = () => {
    if (window.confirm('确定要清空全部错题记录吗？')) {
      setMistakes([]);
    }
  };

  const isVip = !!license?.isVip;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 selection:bg-[#FEF2F2] selection:text-[#B82E24]">
      {/* 顶部导航 */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isVip={isVip}
        license={license}
        onOpenVipModal={() => handleOpenVipModal('导航栏开通')}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        onOpenWallpaperModal={() => setIsWallpaperModalOpen(true)}
        onOpenMultiLangModal={() => setIsMultiLangModalOpen(true)}
        onOpenExamModal={() => setIsExamModalOpen(true)}
      />

      {/* VIP 试学横幅提示条 (未激活前全站统一呈现，激活后自动隐藏) */}
      {!isVip && (
        <div className="max-w-6xl mx-auto px-4 pt-2.5 sm:pt-3 w-full min-w-0 animate-fade-in">
          <div className="bg-gradient-to-r from-[#8F141B] via-[#B82E24] to-[#6B0F15] text-white py-2.5 px-4 sm:px-6 rounded-2xl text-xs font-semibold shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border border-rose-900/30 min-w-0">
            <div className="flex items-start sm:items-center gap-2.5 min-w-0">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-300 mt-0.5 sm:mt-0 animate-pulse" />
              <span className="leading-snug break-words min-w-0">
                当前为<strong>【免费试学模式】</strong> · 拍下激活码即享 DELE/SIELE 欧标机考全真大卷、5,000+ 核心词库与经典西影原声精听
              </span>
            </div>
            <button
              onClick={() => handleOpenVipModal('拍下激活码即享 DELE/SIELE 欧标机考全真大卷、5,000+ 核心词库与经典西影原声精听！')}
              className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-white text-[#B82E24] font-extrabold hover:bg-rose-50 transition shadow-xs text-xs cursor-pointer shrink-0 text-center flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
            >
              <span>输入卡密解锁 ➔</span>
            </button>
          </div>
        </div>
      )}

      {/* 主体学习内容区 */}
      <main className="flex-1 w-full pb-4 sm:pb-6">
        {activeTab === 'home' && (
          <HomePortal
            onSelectTab={handleTabChange}
            onOpenWallpaperModal={() => setIsWallpaperModalOpen(true)}
            onOpenMultiLangModal={() => setIsMultiLangModalOpen(true)}
            onOpenVipModal={() => handleOpenVipModal('首页解锁')}
            onOpenExamModal={() => setIsExamModalOpen(true)}
            isVip={isVip}
          />
        )}

        {activeTab !== 'home' && (
          <div className="max-w-6xl mx-auto px-4 pt-1.5 sm:pt-2 space-y-2.5 sm:space-y-3">
            <ErrorBoundary name={activeTab} onReset={() => handleTabChange('home')}>
              {activeTab === 'phonetics' && (
                <PhoneticsView
                  isVip={isVip}
                  onOpenVipModal={() => handleOpenVipModal('解锁全部西语发音与重音戴帽规则')}
                />
              )}

              {activeTab === 'conjugation' && (
                <ConjugationView
                  isVip={isVip}
                  onOpenVipModal={() => handleOpenVipModal('解锁千词变位题库')}
                />
              )}

              {activeTab === 'vocab' && (
                <VocabView
                  isVip={isVip}
                  onOpenVipModal={() => handleOpenVipModal('解锁全量5000+核心词库与考点精讲')}
                />
              )}

              {activeTab === 'grammar' && (
                <GrammarView 
                  isVip={isVip}
                  onOpenVipModal={() => handleOpenVipModal('解锁考研二外与DELE高阶文法全量精讲与避坑题库')}
                  onOpenMindMap={() => setIsMindMapOpen(true)} 
                />
              )}

              {activeTab === 'cinema' && (
                <CinemaView
                  isVip={isVip}
                  onOpenVipModal={(reason) => handleOpenVipModal(reason || '解锁全部西语与拉美影史原声精听与影子跟读')}
                />
              )}

              {activeTab === 'speaking' && <AISpeakingView />}

              {activeTab === 'writing' && <SpanishWritingView />}

              {activeTab === 'exam' && (
                <SpanishExamView
                  onSaveMistake={handleSaveMistake}
                  onGoToMistakes={() => handleTabChange('mistakes')}
                  isVip={isVip}
                  onOpenVipModal={() => handleOpenVipModal('模考全真试卷权限')}
                  onOpenExamModal={() => setIsExamModalOpen(true)}
                />
              )}

              {activeTab === 'mistakes' && (
                <MistakesView
                  mistakes={mistakes}
                  onRemoveMistake={handleRemoveMistake}
                  onClearAll={handleClearAllMistakes}
                  onGoToExam={() => handleTabChange('exam')}
                />
              )}
            </ErrorBoundary>

            {/* 二级页面底部壁纸福利横幅 */}
            <div className="pt-2 pb-0">
              <WallpaperBanner streakCount={streak.count} onOpenModal={() => setIsWallpaperModalOpen(true)} />
            </div>
          </div>
        )}
      </main>

      {/* 悬浮返回首页与返回顶部按钮 */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-2">
        {activeTab !== 'home' && (
          <button
            onClick={() => handleTabChange('home')}
            className="w-10 h-10 rounded-full bg-white text-[#B82E24] shadow-md border border-amber-200 hover:bg-amber-50 flex items-center justify-center transition cursor-pointer"
            title="返回首页"
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-[#B82E24] text-white shadow-md hover:bg-[#991B1B] flex items-center justify-center transition cursor-pointer"
            title="回到顶部"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 弹窗集合 */}
      <VipModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        onSuccess={info => setLicense(info)}
        reason={vipModalReason}
      />

      <AdminKeyGeneratorModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      <WallpaperRewardModal
        isOpen={isWallpaperModalOpen}
        onClose={() => setIsWallpaperModalOpen(false)}
        streakCount={streak.count}
        isVip={isVip}
        onOpenVipModal={() => handleOpenVipModal('壁纸一键全解锁')}
      />

      <MultiLangModal
        isOpen={isMultiLangModalOpen}
        onClose={() => setIsMultiLangModalOpen(false)}
      />

      <ExamRegistrationModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
        onNavigateToExam={() => handleTabChange('exam')}
      />

      <SpanishGrammarVisualMindMap
        isOpen={isMindMapOpen}
        onClose={() => setIsMindMapOpen(false)}
      />
    </div>
  );
};
