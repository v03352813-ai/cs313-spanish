import React from 'react';
import { BookMarked, Trash2, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';
import { ExamQuestion } from '../data/examData';

export interface WrongRecord {
  id: string;
  paperId: string;
  paperTitle: string;
  question: ExamQuestion;
  wrongUserAnswer: string;
  dateAdded: string;
}

interface MistakesViewProps {
  mistakes: WrongRecord[];
  onRemoveMistake: (id: string) => void;
  onClearAll: () => void;
  onGoToExam: () => void;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  mistakes,
  onRemoveMistake,
  onClearAll,
  onGoToExam
}) => {
  return (
    <div className="w-full space-y-4 pb-16">
      {/* 顶部标题栏 */}
      <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#B82E24] flex items-center justify-center border border-[#B82E24]/20">
            <BookMarked className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              西班牙语错题本 (Cuaderno de Errores)
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold">
                {mistakes.length} 道错题
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              全真模考中做错的试题已自动汇聚在此，针对性溯源考点，攻克变位与语法盲区
            </p>
          </div>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={onClearAll}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" /> 清空错题本
          </button>
        )}
      </div>

      {mistakes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-base font-bold text-slate-800">当前没有未解决的错题！太棒了！</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            去【DELE / 专四模考】刷套真题检验一下实力吧，系统会自动记录做错的题目并在此生成深度解析。
          </p>
          <button
            onClick={onGoToExam}
            className="px-5 py-2.5 rounded-xl bg-[#B82E24] hover:bg-[#991B1B] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 mx-auto cursor-pointer"
          >
            进入 DELE 全真模考 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakes.map((record, index) => (
            <div
              key={record.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 relative"
            >
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">#{index + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-bold">
                    {record.paperTitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-red-50 text-red-700 font-bold border border-red-100">
                    考点: {record.question.categoryTag}
                  </span>
                </div>
                <button
                  onClick={() => onRemoveMistake(record.id)}
                  className="text-slate-400 hover:text-red-600 text-xs flex items-center gap-1 transition"
                  title="攻克并移出"
                >
                  <CheckCircle2 className="w-4 h-4" /> 已掌握并移除
                </button>
              </div>

              {record.question.passage && (
                <div className="bg-slate-50 p-4 rounded-2xl text-xs text-slate-700 leading-relaxed border border-slate-100">
                  {record.question.passage}
                </div>
              )}

              <p className="font-bold text-sm text-slate-900">{record.question.questionText}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {record.question.options.map(opt => {
                  const isCorrect = opt.key === record.question.correctAnswer;
                  const isUserWrong = opt.key === record.wrongUserAnswer;
                  return (
                    <div
                      key={opt.key}
                      className={`p-3 rounded-xl border flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                          : isUserWrong
                          ? 'bg-red-50 border-red-300 text-red-900 font-bold line-through'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <span>
                        <strong className="mr-2">{opt.key}.</strong> {opt.text}
                      </span>
                      {isCorrect && <span className="text-[10px] text-emerald-700 bg-white px-2 py-0.5 rounded-md border">正确答案</span>}
                      {isUserWrong && <span className="text-[10px] text-red-700 bg-white px-2 py-0.5 rounded-md border">当时误选</span>}
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  官方解析与教研考点剖析:
                </p>
                <p className="leading-relaxed pl-5">{record.question.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
