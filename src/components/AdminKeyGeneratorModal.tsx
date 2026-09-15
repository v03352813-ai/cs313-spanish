import React, { useState } from 'react';
import { X, Shield, Copy, Check, RefreshCw, Key } from 'lucide-react';
import { PRESET_CARD_KEYS } from '../data/auth/cardKeys';

interface AdminKeyGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminKeyGeneratorModal: React.FC<AdminKeyGeneratorModalProps> = ({ isOpen, onClose }) => {
  const [keys, setKeys] = useState<string[]>(() => PRESET_CARD_KEYS.slice(0, 15));
  const [copied, setCopied] = useState(false);
  const [genCount, setGenCount] = useState(10);

  if (!isOpen) return null;

  const handleGenerate = () => {
    const chars = '0123456789ABCDEF';
    const newKeys: string[] = [];
    for (let i = 0; i < genCount; i++) {
      let part1 = '';
      let part2 = '';
      let part3 = '';
      for (let j = 0; j < 4; j++) {
        part1 += chars[Math.floor(Math.random() * chars.length)];
        part2 += chars[Math.floor(Math.random() * chars.length)];
        part3 += chars[Math.floor(Math.random() * chars.length)];
      }
      newKeys.push(`ESVIP-${part1}-${part2}-${part3}`);
    }
    setKeys(newKeys);
    setCopied(false);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(keys.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">管理员发卡中心 · 西语研习社</h3>
            <p className="text-xs text-slate-500">批量生成符合算法与闲鱼发货格式的终身 VIP 卡密</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <label className="text-xs font-bold text-slate-600">生成数量:</label>
          <select
            value={genCount}
            onChange={e => setGenCount(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 outline-none"
          >
            <option value={5}>5 条</option>
            <option value={10}>10 条</option>
            <option value={20}>20 条</option>
            <option value={50}>50 条</option>
          </select>
          <button
            onClick={handleGenerate}
            className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> 重新随机生成
          </button>
          <button
            onClick={handleCopyAll}
            className="ml-auto px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? '已复制到剪贴板' : '一键复制全部'}
          </button>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-h-60 overflow-y-auto font-mono text-xs text-slate-800 space-y-1.5">
          {keys.map((k, idx) => (
            <div key={idx} className="flex items-center justify-between hover:bg-white p-1 rounded px-2">
              <span>{k}</span>
              <span className="text-[10px] text-emerald-600 font-sans font-bold">有效算法卡密</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] text-slate-400">
          * 提示：生成的卡密直接粘贴到千牛/闲鱼第三方自动发货软件后台即可使用。
        </p>
      </div>
    </div>
  );
};
