import React, { useState } from 'react';
import { BookOpenCheck, Sparkles, Volume2, ArrowRight, ShieldAlert, Check, HelpCircle, Network } from 'lucide-react';
import { SPANISH_GRAMMAR_TOPICS, GrammarTopic } from '../data/grammarData';
import { speakSpanish } from '../utils/speech';

interface GrammarViewProps {
  onOpenMindMap: () => void;
}

export const GrammarView: React.FC<GrammarViewProps> = ({ onOpenMindMap }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(SPANISH_GRAMMAR_TOPICS[0].id);

  const currentTopic = SPANISH_GRAMMAR_TOPICS.find(t => t.id === selectedTopicId) || SPANISH_GRAMMAR_TOPICS[0];

  return (
    <div className="w-full space-y-6 pb-20">
      {/* 顶栏与全景思维导图入口 */}
      <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#B82E24] flex items-center justify-center border border-[#B82E24]/20">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                西班牙语核心微专题宝典 (Gramática Esencial)
              </h2>
              <p className="text-xs text-slate-500">
                直击四大高频死穴 · 出厂与状态对决 · 虚拟式六角星 · 拒绝抽象教条
              </p>
            </div>
          </div>

          <button
            onClick={onOpenMindMap}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition flex items-center gap-2 cursor-pointer self-start md:self-center"
          >
            <Network className="w-4 h-4 text-amber-400" /> 打开全景西语语法思维导图
          </button>
        </div>

        {/* 专题切换 Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-slate-100">
          {SPANISH_GRAMMAR_TOPICS.map(t => {
            const isSelected = t.id === selectedTopicId;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTopicId(t.id)}
                className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                  isSelected
                    ? 'border-[#B82E24] bg-[#FEF2F2] shadow-xs ring-2 ring-[#B82E24]/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-slate-100 text-slate-600">
                  {t.tag}
                </span>
                <h4 className="font-bold text-xs text-slate-900 mt-1 line-clamp-1">{t.title.split('：')[1] || t.title}</h4>
                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{t.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 专题核心内容舞台 */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#B82E24] text-white font-bold">
              {currentTopic.level} 权威专题
            </span>
            <span className="text-xs text-slate-400">{currentTopic.tag}</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">{currentTopic.title}</h3>
          <p className="text-sm font-bold text-amber-800 mt-1">{currentTopic.subtitle}</p>
        </div>

        {/* 独家突破口诀 */}
        <div className="p-4 bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 rounded-2xl border border-red-200 text-xs text-slate-800 space-y-1.5 shadow-2xs">
          <p className="font-black text-[#B82E24] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            名师独家秒懂破局心法:
          </p>
          <p className="leading-relaxed font-bold text-slate-900 pl-5 text-sm">
            {currentTopic.breakthroughFormula}
          </p>
        </div>

        {/* 核心语言学规则 */}
        <div className="space-y-2">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">【底层语言学正规定义】</h4>
          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {currentTopic.coreRule}
          </p>
        </div>

        {/* 对比表格 (Ser vs Estar / Por vs Para) */}
        {currentTopic.comparisonTable && (
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">【经典对决切片矩阵】</h4>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">语境场景</th>
                    <th className="p-3 text-[#B82E24]">{currentTopic.comparisonTable.itemA}</th>
                    <th className="p-3 text-amber-800">{currentTopic.comparisonTable.itemB}</th>
                    <th className="p-3">本质差异说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {currentTopic.comparisonTable.differences.map((diff, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3 font-bold text-slate-600">{diff.context}</td>
                      <td className="p-3 font-medium text-[#B82E24] font-serif">{diff.expA}</td>
                      <td className="p-3 font-medium text-amber-800 font-serif">{diff.expB}</td>
                      <td className="p-3 text-slate-500">{diff.zhExample}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 经典示范例句与发音 */}
        <div className="space-y-3">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">【典型场景真实例句】</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentTopic.examples.map((ex, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-start justify-between">
                  <p className="font-black text-sm text-slate-900 font-serif">{ex.es}</p>
                  <button
                    onClick={() => speakSpanish(ex.es)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#B82E24] hover:bg-white"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-600">{ex.zh}</p>
                <p className="text-[11px] text-amber-900 bg-amber-100/60 p-2 rounded-xl border border-amber-200/50">
                  <strong>💡 点评：</strong>{ex.analysis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
