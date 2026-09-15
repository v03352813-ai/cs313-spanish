import React, { useState } from 'react';
import { X, Crown, Sparkles, Check, KeyRound, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { verifyCardKey, LicenseInfo } from '../data/auth/cardKeys';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (info: LicenseInfo) => void;
  reason?: string;
}

export const VipModal: React.FC<VipModalProps> = ({ isOpen, onClose, onSuccess, reason }) => {
  const [inputKey, setInputKey] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      const res = verifyCardKey(inputKey);
      setIsSubmitting(false);

      if (res.success) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        onSuccess({ isVip: true, key: inputKey.trim().toUpperCase() });
        onClose();
      } else {
        setErrorMsg(res.message);
      }
    }, 400);
  };

  const vipPerks = [
    '解锁 1,000+ 高频动词全时态变位推导与靴子法则闯关自测',
    '解锁 DELE / SIELE / 专四历年全真模考机考与题解归因',
    '解锁《纸钞屋》《寻梦环游记》全部影视金句双语精学切片',
    '解锁 AI 西语口语考官模拟面试与 DELE 大小作文智能批改',
    '解锁 4K 西班牙/拉美风情壁纸每日打卡无限制下载'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-amber-100 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 shadow-xs">
            <Crown className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              开通西班牙语研习社 · 终身 VIP
            </h3>
            <p className="text-xs text-amber-700">一次性买断 · 永久更新 · 闲鱼/小红书自动发货</p>
          </div>
        </div>

        {reason && (
          <div className="mb-4 p-3 bg-red-50 text-[#B82E24] rounded-xl text-xs flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{reason}</span>
          </div>
        )}

        <div className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-red-50/30 p-4 rounded-2xl border border-amber-200/60 my-4 space-y-2.5">
          <p className="text-xs font-black text-amber-900 uppercase tracking-wider">🌟 终身专属 VIP 特权清单</p>
          {vipPerks.map((perk, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{perk}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-slate-500" />
              请输入您的激活卡密 (闲鱼/小红书下单自动获取):
            </label>
            <input
              type="text"
              value={inputKey}
              onChange={e => setInputKey(e.target.value)}
              placeholder="例如: ESVIP-7A9B-4C2E-8F1A 或体验码"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#B82E24] focus:ring-2 focus:ring-[#B82E24]/20 outline-none text-sm font-mono tracking-wide"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-red-600 font-bold bg-red-50 p-2 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white font-black text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? '正在验证激活卡密...' : '立即激活终身 VIP 权限'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 离线/在线双重校验保障
          </span>
          <span className="text-slate-400">CS313 小语种学习矩阵生态认证</span>
        </div>
      </div>
    </div>
  );
};
