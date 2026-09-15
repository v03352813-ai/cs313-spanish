import React from 'react';
import { X, Globe2, Sparkles, ExternalLink } from 'lucide-react';

interface MultiLangModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MultiLangModal: React.FC<MultiLangModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const languages = [
    {
      name: '🇪🇸 西班牙语研习社',
      desc: 'DELE/SIELE 欧标机考 · 动词变位神器 · 大舌音诊所 · 纸钞屋精听',
      port: 5176,
      current: true,
      tag: '当前站点',
      bgClass: 'border-[#B82E24] bg-[#FEF2F2]/60'
    },
    {
      name: '🇫🇷 法语研习社',
      desc: '考研二外241/242 · DELF全真考级 · 动词变位器 · 35音联诵',
      port: 5175,
      current: false,
      tag: '矩阵分支',
      bgClass: 'border-slate-200 hover:border-[#80142A] hover:bg-rose-50/40'
    },
    {
      name: '🇯🇵 日语研习社',
      desc: 'JLPT N5-N1 全真模考 · 五十音图 · 动词活用推导器 · 动漫日剧台词',
      port: 5174,
      current: false,
      tag: '矩阵分支',
      bgClass: 'border-slate-200 hover:border-red-400 hover:bg-red-50/40'
    },
    {
      name: '🇰🇷 韩语研习社',
      desc: 'TOPIK I/II 历年真题机考 · 40音收音 · 经典韩剧 30 部切片台词精学',
      port: 5173,
      current: false,
      tag: '矩阵分支',
      bgClass: 'border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-amber-100 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#FEF2F2] text-[#B82E24] flex items-center justify-center border border-[#B82E24]/20 shadow-xs">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              CS313 小语种研习矩阵
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-200">
                4大王牌语种
              </span>
            </h3>
            <p className="text-xs text-slate-500">统一极速学习框架 · 零边际成本多语种自由切换</p>
          </div>
        </div>

        <div className="space-y-3 my-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition flex items-center justify-between ${lang.bgClass}`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm text-slate-900">{lang.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                    lang.current ? 'bg-[#B82E24] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {lang.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{lang.desc}</p>
              </div>

              {lang.current ? (
                <span className="text-xs font-bold text-[#B82E24] bg-white px-3 py-1.5 rounded-xl border border-[#B82E24]/30 shadow-2xs">
                  正在研习
                </span>
              ) : (
                <a
                  href={`http://localhost:${lang.port}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs transition"
                >
                  直达 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#FFFBEB] p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
          <p>
            凡开通任意语种终身 VIP 会员，均可在矩阵平台享受全套终身专属学习资源与持续更新权益！
          </p>
        </div>
      </div>
    </div>
  );
};
