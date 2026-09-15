import React from 'react';
import { Sparkles, Image as ImageIcon, Flame } from 'lucide-react';

interface WallpaperBannerProps {
  streakCount: number;
  onOpenModal: () => void;
}

export const WallpaperBanner: React.FC<WallpaperBannerProps> = ({ streakCount, onOpenModal }) => {
  return (
    <div 
      onClick={onOpenModal}
      className="cursor-pointer group relative overflow-hidden rounded-2xl p-4 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xs">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-wide">西班牙与拉美风情 · 4K 每日壁纸激励</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-bold border border-white/30 flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-300 fill-amber-300" /> 连击 {streakCount} 天
              </span>
            </div>
            <p className="text-xs text-white/85">每日金句打卡免费解锁圣家堂、阿尔罕布拉宫、马丘比丘高清艺术壁纸！</p>
          </div>
        </div>

        <button className="px-3.5 py-1.5 rounded-xl bg-white text-[#B82E24] font-black text-xs shadow-xs group-hover:bg-amber-50 transition flex items-center gap-1 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 立即查看
        </button>
      </div>
    </div>
  );
};
