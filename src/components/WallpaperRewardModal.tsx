import React from 'react';
import { X, Download, Lock, CheckCircle2, Sparkles } from 'lucide-react';

interface WallpaperRewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  streakCount: number;
  isVip: boolean;
  onOpenVipModal: () => void;
}

export const WallpaperRewardModal: React.FC<WallpaperRewardModalProps> = ({
  isOpen,
  onClose,
  streakCount,
  isVip,
  onOpenVipModal
}) => {
  if (!isOpen) return null;

  const wallpapers = [
    {
      id: 'wp-1',
      title: '圣家堂夕阳 · La Sagrada Família',
      location: '巴塞罗那，西班牙',
      daysRequired: 1,
      colorGrad: 'from-amber-600 to-rose-700',
      tag: '高迪神迹'
    },
    {
      id: 'wp-2',
      title: '阿尔罕布拉宫水镜 · La Alhambra',
      location: '格拉纳达，西班牙',
      daysRequired: 3,
      colorGrad: 'from-orange-500 to-amber-700',
      tag: '摩尔艺术瑰宝'
    },
    {
      id: 'wp-3',
      title: '马丘比丘云上遗迹 · Machu Picchu',
      location: '库斯科，秘鲁 (拉美印加文明)',
      daysRequired: 7,
      colorGrad: 'from-emerald-600 to-teal-800',
      tag: '新世界七大奇迹'
    },
    {
      id: 'wp-4',
      title: '弗拉门戈赤诚舞步 · El Flamenco',
      location: '塞维利亚，安达卢西亚',
      daysRequired: 14,
      colorGrad: 'from-red-600 to-rose-900',
      tag: '国家非遗之魂'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">西班牙语世界 · 4K 艺术美学壁纸</h3>
            <p className="text-xs text-slate-500">连续打卡即可免费解锁，VIP 会员可永久直接一键下载全部壁纸</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 max-h-[60vh] overflow-y-auto p-1">
          {wallpapers.map(wp => {
            const unlocked = isVip || streakCount >= wp.daysRequired;
            return (
              <div
                key={wp.id}
                className="rounded-2xl border border-slate-200 p-4 flex flex-col justify-between overflow-hidden relative shadow-xs hover:shadow-sm transition"
              >
                <div className={`h-28 rounded-xl bg-gradient-to-br ${wp.colorGrad} p-3 text-white flex flex-col justify-between mb-3 relative`}>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm self-start font-bold">
                    {wp.tag}
                  </span>
                  <div>
                    <h4 className="font-black text-sm drop-shadow-sm">{wp.title}</h4>
                    <p className="text-[11px] text-white/90 drop-shadow-sm">{wp.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">
                    {unlocked ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 已解锁
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-700 font-bold">
                        <Lock className="w-3.5 h-3.5" /> 需打卡 {wp.daysRequired} 天
                      </span>
                    )}
                  </span>

                  {unlocked ? (
                    <button
                      onClick={() => alert(`正在下载 4K 高清壁纸：《${wp.title}》！`)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center gap-1 text-xs cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" /> 下载原图
                    </button>
                  ) : (
                    <button
                      onClick={onOpenVipModal}
                      className="px-3 py-1.5 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white font-bold text-xs cursor-pointer"
                    >
                      VIP 直接解锁
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
