import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  Sparkles, 
  Check, 
  KeyRound, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  ExternalLink, 
  Copy,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LicenseInfo } from '../data/auth/cardKeys';
import { api } from '../services/api';
import { getDeviceFingerprint } from '../utils/fingerprint';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
  isVip?: boolean;
  license?: LicenseInfo | null;
  onSuccess: (info: LicenseInfo) => void;
  reason?: string;
}

export const VipModal: React.FC<VipModalProps> = ({ 
  isOpen, 
  onClose, 
  isVip = false,
  license,
  onSuccess, 
  reason 
}) => {
  const [inputKey, setInputKey] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedXianyu, setCopiedXianyu] = useState(false);

  // 闲鱼官方拍下链接 (支持通过商品 ID 动态跳转)
  const XIANYU_ITEM_URL = 'https://m.tb.cn/h.gxXXXXX'; // 闲鱼官方商品直通车

  if (!isOpen) return null;

  const copyXianyuPrompt = async () => {
    try {
      await navigator.clipboard.writeText('我想开通西班牙语研习社【全真机考·30天通行证】或【终身卡】');
      setCopiedXianyu(true);
      setTimeout(() => setCopiedXianyu(false), 2000);
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    const cleanKey = inputKey.trim().toUpperCase();

    if (!cleanKey) {
      setErrorMsg('请输入您的专属卡密');
      return;
    }

    setIsSubmitting(true);

    try {
      const device = getDeviceFingerprint();
      const res = await api.verifyCardKey(cleanKey, device);
      setIsSubmitting(false);

      if (res.success && res.license) {
        setSuccessMsg(res.message);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        onSuccess(res.license);
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        setErrorMsg(res.message || '卡密无效，请检查后重新输入');
      }
    } catch {
      setIsSubmitting(false);
      setErrorMsg('网络连接异常，请检查网络或稍后重试');
    }
  };

  const is30dActive = isVip && license?.tier === '30d';
  const isLifetimeActive = isVip && license?.tier === 'lifetime';

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* 顶部主视觉横幅 (西班牙经典深红渐变) */}
        <div className="bg-gradient-to-r from-[#C8102E] via-[#B82E24] to-[#8F141B] text-white p-4 sm:p-5 relative pr-12 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/25 hover:bg-black/45 active:scale-90 flex items-center justify-center text-white transition cursor-pointer border border-white/20"
            aria-label="关闭"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center shadow-md shrink-0">
              <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-black tracking-tight truncate">
                CS313 西班牙语研习社 · 权限中心
              </h2>
              <p className="text-[11px] sm:text-xs text-rose-100 mt-0.5 line-clamp-1">
                DELE / 考研二外 243 / 专四真题在线模考 · 靴子法则动词变位器
              </p>
            </div>
          </div>
        </div>

        {/* 弹窗内容滚动区 */}
        <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto flex-1">
          {/* 触发来源提示 */}
          {reason && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200/80 flex items-start gap-2 text-xs text-[#B82E24]">
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="font-bold leading-relaxed">{reason}</span>
            </div>
          )}

          {/* 1. 若当前已是终身卡用户 */}
          {isLifetimeActive ? (
            <div className="space-y-3 text-center py-2">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-xs font-black">
                  <Check className="w-3.5 h-3.5" />
                  <span>已解锁：【终身研习·黑金永久VIP】</span>
                </div>
                <p className="text-xs text-slate-600">
                  授权卡密：<span className="font-mono font-bold text-slate-900">{license?.key || license?.cardKey}</span>
                </p>
                <p className="text-[11px] text-emerald-700">✔ 全真机考全量解锁 ✔ 终身享受新考期免费更新 ✔ 2台设备授权</p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white font-black text-sm shadow-md transition cursor-pointer"
              >
                🚀 立即开始刷题与背变位
              </button>
            </div>
          ) : is30dActive ? (
            /* 2. 若当前是 30 天通行证用户：突出展示【补 40 元升终身】通道 */
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-900">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>【全真机考·30天通行证】生效中</span>
                  </div>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    剩余有效期：<strong className="text-[#B82E24] text-xs font-black">{license?.remainingDays ?? 30} 天</strong>
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-200/90 text-amber-900 text-[10px] font-black">
                  正常使用中
                </span>
              </div>

              {/* 补差价升级终身卡专区 */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#B82E24] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-[#B82E24]" />
                    <span>升单特权：已付 9.9 元 100% 全额抵扣！</span>
                  </span>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    仅需补 ¥40.0
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  升级为<strong>【终身研习·黑金永久VIP】</strong>后，免除过期限制，永久买断，随每年新考期持续免费云更新！
                </p>

                <div className="pt-1 space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    输入补差价获得的【终身VIP卡密】立即激活升级：
                  </label>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={inputKey}
                      onChange={e => setInputKey(e.target.value)}
                      placeholder="在此粘贴补差价获得的专属卡密"
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-300 focus:border-[#B82E24] outline-none text-xs font-mono uppercase"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white text-xs font-black shrink-0 transition cursor-pointer"
                    >
                      {isSubmitting ? '核验中...' : '立即升级'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            /* 3. 未激活用户：展示双规格选择与全额补差价承诺 */
            <div className="space-y-3">
              {/* 双规格对比卡片 */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 规格 1: 30天通行证 */}
                <div className="p-3 rounded-2xl border-2 border-amber-300 bg-amber-50/50 flex flex-col justify-between relative shadow-2xs">
                  <div className="space-y-1">
                    <div className="inline-block px-1.5 py-0.2 rounded-md bg-amber-200 text-amber-900 text-[9.5px] font-black">
                      考前冲刺首选
                    </div>
                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight">
                      【全真机考·30天通行证】
                    </h4>
                    <p className="text-[10.5px] text-slate-500 leading-tight pt-0.5">
                      全真题机考 + 动词变位 + 西影精听（30天全开放）
                    </p>
                  </div>
                  <div className="pt-2 flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-black text-[#B82E24]">¥9.9</span>
                    <span className="text-[10px] text-slate-400">/ 30天畅学</span>
                  </div>
                </div>

                {/* 规格 2: 终身卡 */}
                <div className="p-3 rounded-2xl border-2 border-[#B82E24] bg-rose-50/50 flex flex-col justify-between relative shadow-2xs">
                  <div className="space-y-1">
                    <div className="inline-block px-1.5 py-0.2 rounded-md bg-[#B82E24] text-white text-[9.5px] font-black">
                      高性价比买断
                    </div>
                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-tight">
                      【终身研习·黑金永久VIP】
                    </h4>
                    <p className="text-[10.5px] text-slate-500 leading-tight pt-0.5">
                      终身不限时 + 2台设备授权 + 后续新真题免费云更
                    </p>
                  </div>
                  <div className="pt-2 flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-black text-[#B82E24]">¥49.9</span>
                    <span className="text-[10px] text-slate-400">/ 永久买断</span>
                  </div>
                </div>
              </div>

              {/* 核心升级承诺 Banner */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-100/80 to-rose-100/80 border border-amber-300/80 text-center">
                <p className="text-[11px] sm:text-xs font-black text-[#B82E24]">
                  🔥【良心承诺】：已购 9.9 通行证支持 100% 全额抵扣，补 40 元即可升终身！
                </p>
              </div>

              {/* 卡密输入激活表单 */}
              <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
                <label className="block text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <KeyRound className="w-3.5 h-3.5 text-[#B82E24]" />
                    <span>输入激活卡密 (闲鱼拍下后系统自动发货)：</span>
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputKey}
                    onChange={e => setInputKey(e.target.value)}
                    placeholder="在此粘贴或输入您的专属激活卡密"
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#B82E24] focus:ring-2 focus:ring-[#B82E24]/20 outline-none text-xs sm:text-sm font-mono uppercase tracking-wide"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-black transition shadow-xs cursor-pointer shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? '核验中...' : '立即激活'}
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-xs text-[#B82E24] font-bold bg-rose-50 p-2 rounded-lg border border-rose-200 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </p>
                )}

                {successMsg && (
                  <p className="text-xs text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>{successMsg}</span>
                  </p>
                )}
              </form>
            </div>
          )}

          {/* 底部保障与官方说明 */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 
              <span>闲鱼官方担保交易 · 即拍即练</span>
            </span>
            <span>CS313 官方教研平台</span>
          </div>
        </div>
      </div>
    </div>
  );
};
