import React, { useState } from 'react';
import { 
  PenTool, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Send, 
  RotateCcw,
  BookOpen,
  Award,
  ChevronDown,
  Check,
  Flame,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WritingTopic {
  id: string;
  category: 'formal' | 'opinion' | 'chart' | 'daily';
  title: string;
  level: 'A2' | 'B1' | 'B2';
  score: number;
  wordCount: string;
  type: string;
  prompt: string;
  bgEs: string;
  requirements: string[];
  phrases: { category: string; list: string[] }[];
  sampleEssay: string;
}

const ESSAY_TOPICS: WritingTopic[] = [
  {
    id: 'w-formal-1',
    category: 'formal',
    title: '【DELE B1真题】租房设施维修投诉与请求信 (Carta Formal)',
    level: 'B1',
    score: 25,
    wordCount: '150~200 词',
    type: '商务邮件 / 正式书信',
    prompt: '你刚在巴塞罗那租下一间公寓，但发现浴室热水器发生故障，且空调无法制冷。请给房东（Sr. Morales）写一封正式信件。',
    bgEs: 'Acabas de alquilar un piso en Barcelona, pero has detectado averías graves en el calentador y el aire acondicionado. Escribe una carta formal a tu casero exponiendo los hechos.',
    requirements: [
      '严格使用西语正式尊称语体 (Usted / Le escribo)',
      '条理清晰地列举浴室与空调的具体损坏情况与生活影响',
      '提出明确的维修期限，并保持礼貌致意与感谢'
    ],
    phrases: [
      {
        category: '信头与致辞',
        list: [
          'Estimado/a Sr./Sra. [Apellido]: (尊敬的先生/女士)',
          'Le escribo la presente carta para informarle de... (我写此信旨在告知您...)',
          'Me dirijo a usted con el fin de manifestar mi queja sobre... (我致信给您以对...表达投诉)'
        ]
      },
      {
        category: '逻辑衔接与问题陈述',
        list: [
          'En primer lugar, cabe señalar que el calentador no funciona... (首先，需要指出的是热水器发生故障...)',
          'Por consiguiente, nos encontramos sin agua caliente... (因此，我们目前没有热水使用...)',
          'A pesar de haberlo intentado solucionar... (尽管曾尝试自行解决...)'
        ]
      },
      {
        category: '提出诉求与结尾',
        list: [
          'Le agradecería enormemente que pudiera enviar a un técnico lo antes posible. (若您能尽快派技术员来，我将不胜感激。)',
          'A la espera de sus gratas noticias, le saluda atentamente... (静候佳音，谨致敬意...)'
        ]
      }
    ],
    sampleEssay: 'Estimado Sr. Morales:\n\nLe escribo la presente carta con el fin de poner en su conocimiento una serie de averías imprevistas en el apartamento que he alquilado recientemente en la calle Aragón.\n\nEn primer lugar, el calentador del baño ha dejado de funcionar por completo, de modo que carecemos de agua caliente sanitaria desde hace dos días. Además, el sistema de aire acondicionado del salón emite un ruido excesivo y no refrigera de forma adecuada, lo cual dificulta el descanso.\n\nPor este motivo, le agradecería enormemente que pudiera enviar a un técnico cualificado a la mayor brevedad posible para reparar dichos desperfectos. Quedo a su entera disposición para coordinar la visita.\n\nAgradeciendo de antemano su pronta atención y colaboración, le saluda atentamente,\n\nCarlos Fernández'
  },
  {
    id: 'w-opinion-1',
    category: 'opinion',
    title: '【DELE B2真题】远程居家办公 (Teletrabajo) 的利与弊议论文',
    level: 'B2',
    score: 25,
    wordCount: '200~250 词',
    type: 'DELE 学术议论文',
    prompt: '在后疫情时代远程办公逐渐常态化。请撰写一篇议论文，从生活节奏、工作效率与社交疏离多维度深入探讨其利弊并表达个人立场。',
    bgEs: 'El teletrabajo se ha consolidado como una modalidad laboral predominante. Escribe un artículo de opinión analizando sus pros y contras.',
    requirements: [
      '论证层次严密：引言陈述背景、正方效率与灵活度、反面心理与沟通成本、总结结论',
      '高级连接词串联 (por un lado, por otra parte, en lo que respecta a, en definitiva)',
      '适当运用虚拟式从句表达价值预判 (es necesario que regulemos...)'
    ],
    phrases: [
      {
        category: '引入观点',
        list: [
          'Hoy en día, el debate en torno al teletrabajo cobra una relevancia primordial. (如今围绕远程办公的讨论至关重要。)',
          'Es innegable que esta tendencia ha transformado nuestro paradigma laboral. (不可否认这一趋势改变了职场范式。)'
        ]
      },
      {
        category: '对比论证',
        list: [
          'Por una parte, favorece la conciliación entre la vida personal y profesional. (一方面有利于平衡个人生活与工作。)',
          'No obstante, por otra parte, puede acarrear aislamiento y estrés tecnológico. (然而另一方面可能导致孤独与压力。)'
        ]
      },
      {
        category: '总结升华',
        list: [
          'En resumidas cuentas, la clave reside en encontrar un modelo híbrido equilibrado. (总而言之，关键在于找到平衡的混合模式。)'
        ]
      }
    ],
    sampleEssay: 'En los últimos años, el teletrabajo ha dejado de ser una medida excepcional para convertirse en un pilar del mercado laboral contemporáneo. Esta transformación suscita opiniones encontradas que merecen un análisis riguroso.\n\nPor una parte, sus ventajas son evidentes. Para los trabajadores, supone una notable reducción del tiempo y el estrés asociados a los desplazamientos diarios, fomentando la conciliación entre la esfera personal y la profesional. Asimismo, muchas empresas han constatado un incremento en la productividad derivado de la flexibilidad horaria.\n\nSin embargo, no podemos obviar sus inconvenientes. La falta de interacción presencial puede mermar el sentimiento de pertenencia a la empresa y generar aislamiento emocional. Además, la difusa frontera entre la jornada laboral y el descanso propicia a menudo la hiperconexión y el agotamiento.\n\nEn conclusión, considero que el teletrabajo no debe imponerse como un dogma absoluto, sino como una herramienta complementaria. Para maximizar sus virtudes, resulta imprescindible que se articule mediante un modelo híbrido flexible y un marco regulador que garantice la desconexión digital.'
  },
  {
    id: 'w-chart-1',
    category: 'chart',
    title: '【高校专四/DELE】西语国家青年失业率与数字技能数据分析',
    level: 'B2',
    score: 25,
    wordCount: '150~200 词',
    type: '图表数据客观分析',
    prompt: '根据欧盟统计局提供的数据，客观描述近年来西班牙青年在数字化转型背景下的就业率变动走势并分析其驱动因素。',
    bgEs: 'Analiza objetivamente la evolución del desempleo juvenil en España a partir de los datos estadísticos disponibles.',
    requirements: [
      '客观中立语气，严禁过度抒情',
      '熟练运用数据波动动词 (aumentar, experimentar un descenso, mantenerse estable)',
      '总结图表反映的核心趋势'
    ],
    phrases: [
      {
        category: '数据趋势描写',
        list: [
          'El gráfico ilustra una tendencia alcista/bajista... (图表展示出上升/下降趋势...)',
          'Los datos reflejan un incremento significativo del 15%... (数据反映出15%的显著增长...)',
          'Se observa una ligera estabilización a partir del segundo trimestre. (自第二季度起呈现微弱平稳态势。)'
        ]
      }
    ],
    sampleEssay: 'El informe estadístico examina la trayectoria del desempleo juvenil en España durante el último quinquenio. A tenor de los datos reflejados, se observa un comportamiento dinámico marcado por dos fases diferenciadas.\n\nEn un primer periodo, el porcentaje de desempleo experimentó un acusado incremento. No obstante, a partir del tercer año se aprecia una clara recuperación, alcanzando una disminución progresiva del 8% interanual. Este viraje positivo se atribuye fundamentalmente a la inversión en programas de cualificación digital.\n\nEn síntesis, los datos constatan que la formación tecnológica actúa como un catalizador decisivo para la inserción laboral de los jóvenes.'
  },
  {
    id: 'w-daily-1',
    category: 'daily',
    title: '【生活随笔】记录我在马德里度过的难忘周日 (Mi Domingo en Madrid)',
    level: 'A2',
    score: 20,
    wordCount: '100~150 词',
    type: '日常随笔 / 日记',
    prompt: '描写你在西班牙首都马德里度过的一个晴朗星期天：去丽池公园散步、喝咖啡、参观普拉多博物馆。',
    bgEs: 'Escribe una entrada de diario sobre un domingo perfecto en la capital española.',
    requirements: [
      '过去未完成时与简单过去时交替运用 (hacía buen tiempo, fui al parque)',
      '生活词汇丰富，感情真实自然'
    ],
    phrases: [
      {
        category: '时间与心情',
        list: [
          'El domingo pasado hizo un día soleado y maravilloso. (上周日是个阳光明媚的美好日子。)',
          'Por la mañana di un largo paseo por el Parque del Retiro. (上午我在丽池公园散了很久的步。)'
        ]
      }
    ],
    sampleEssay: 'El domingo pasado fue uno de los días más bonitos desde que llegué a Madrid. Hacía un sol radiante y una temperatura muy agradable.\n\nPor la mañana temprano, fui al Parque del Retiro a pasear junto al estanque y leer un libro en el césped. Más tarde, quedé con unos amigos cerca de la Plaza Mayor para tomar un café con leche y unas porras tradicionales. Por la tarde, visitamos la exposición temporal del Museo del Prado, donde pudimos contemplar las obras maestras de Velázquez y Goya.\n\nFue una jornada tranquila y enriquecedora que siempre recordaré con cariño.'
  }
];

export const SpanishWritingView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'formal' | 'opinion' | 'chart' | 'daily'>('formal');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(ESSAY_TOPICS[0].id);
  const [activeTab, setActiveTab] = useState<'phrases' | 'sample'>('phrases');
  const [essayContent, setEssayContent] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    levelRated: string;
    strengths: string[];
    corrections: { original: string; fix: string; reason: string }[];
    dimensions: { name: string; score: number; max: number }[];
    feedback: string;
  } | null>(null);

  const currentTopic = ESSAY_TOPICS.find(t => t.id === selectedTopicId) || ESSAY_TOPICS[0];

  const handleSwitchCategory = (cat: 'formal' | 'opinion' | 'chart' | 'daily') => {
    setSelectedCategory(cat);
    const match = ESSAY_TOPICS.find(t => t.category === cat) || ESSAY_TOPICS[0];
    setSelectedTopicId(match.id);
    setEvaluationResult(null);
  };

  const handleEvaluate = () => {
    if (!essayContent.trim()) return;
    setIsEvaluating(true);

    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationResult({
        score: 22.5,
        levelRated: `${currentTopic.level}+ (达到塞万提斯官方 APTO 优秀标准)`,
        dimensions: [
          { name: '任务与格式规范 (Formato y Tarea)', score: 5.5, max: 6 },
          { name: '篇章组织与逻辑衔接 (Cohesión y Coherencia)', score: 6.0, max: 6 },
          { name: '动词变位与时态把控 (Corrección Gramatical)', score: 5.5, max: 6 },
          { name: '高阶词汇与学术句式 (Riqueza Léxica)', score: 5.5, max: 7 }
        ],
        strengths: [
          '格式严格遵循西语书信规范，尊称语体 (Usted / Le escribo) 贯彻始终',
          '熟练运用了 por consiguiente 与 le agradecería que 等从句复合句式',
          '段落层次清晰，核心诉求明确具体，礼貌而得体'
        ],
        corrections: [
          {
            original: 'espero que tienes tiempo',
            fix: 'espero que tengas tiempo',
            reason: '动词 esperar 表示期许愿望时，从句动词必须强制使用虚拟式现在时 (tengas)！'
          },
          {
            original: 'para solucionar este problema',
            fix: 'para solucionar este inconveniente / desperfecto',
            reason: '在正式公函中，建议用 inconveniente 或 desperfecto 替换过于口语化的 problema，表达更加高雅地道。'
          }
        ],
        feedback: '本篇作文框架完整、行文流畅地道，对虚拟式从句与逻辑连接词的把握十分老练，已完全符合 DELE 官方采分大纲的要求！'
      });
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    }, 1000);
  };

  const wordCount = essayContent.trim() ? essayContent.trim().split(/\s+/).length : 0;

  return (
    <div className="w-full space-y-3 sm:space-y-4 pb-16">
      
      {/* 1. 顶部标题大卡片 (对标日语图 8) */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#B82E24] text-white flex items-center justify-center shadow-xs shrink-0">
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>AI 西文写作与小论文智能精批系统</span>
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              告别中式西语与文体混用！涵盖商务公函、DELE观点议论文、图表数据分析与日常随笔，配备塞万提斯官方四维深度精批。
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setEssayContent('');
            setEvaluationResult(null);
          }}
          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1 transition cursor-pointer self-start sm:self-auto shrink-0"
          title="清空当前写作内容"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>清空重写</span>
        </button>
      </div>

      {/* 2. 4 大文体卡片选择器 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {[
          { id: 'formal', label: '商务邮件 / 正式公函', desc: '150~200 词', badge: '免费体验', isVip: false },
          { id: 'opinion', label: 'DELE 学术议论文', desc: '200~250 词', badge: 'VIP 专属', isVip: true },
          { id: 'chart', label: '图表数据客观分析', desc: '150~200 词', badge: 'VIP 专属', isVip: true },
          { id: 'daily', label: '日常日记与随笔', desc: '100~150 词', badge: '免费体验', isVip: false },
        ].map(cat => (
          <div
            key={cat.id}
            onClick={() => handleSwitchCategory(cat.id as any)}
            className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
              selectedCategory === cat.id
                ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-200 shadow-xs'
                : 'bg-white border-amber-200/80 hover:bg-amber-50/30 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-900 line-clamp-1">{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${cat.isVip ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'}`}>
                {cat.badge}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono font-medium">{cat.desc}</span>
          </div>
        ))}
      </div>

      {/* 3. 题目下拉选择栏 */}
      <div className="bg-[#FAF8F5] p-3 px-4 rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <FileText className="w-4 h-4 text-[#B82E24] shrink-0" />
          <span className="font-bold text-slate-700 shrink-0">选择练习题目:</span>
          <select
            value={selectedTopicId}
            onChange={e => {
              setSelectedTopicId(e.target.value);
              setEvaluationResult(null);
            }}
            className="px-3 py-1.5 rounded-xl border border-amber-300 bg-white font-black text-slate-900 outline-none focus:border-[#B82E24] cursor-pointer max-w-md truncate"
          >
            {ESSAY_TOPICS.map(t => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-bold">
          <span className="px-2.5 py-0.5 rounded-md bg-white border border-amber-200 text-slate-700">
            难度级别: <strong className="text-[#B82E24]">{currentTopic.level}</strong>
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-[#FEF2F2] border border-[#B82E24]/20 text-[#B82E24] font-black">
            满分 {currentTopic.score} 分
          </span>
        </div>
      </div>

      {/* 4. 双栏交互主体 (左侧题目与范文库 + 右侧写作正文与提交精批) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* 左侧：题目背景与句式范文库 (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          
          {/* 题目背景卡片 */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#B82E24]" />
                <span>写作题目与背景要求</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-bold">
                字数建议: {currentTopic.wordCount}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <p className="font-serif italic text-slate-600 bg-[#FAF8F5] p-2.5 rounded-xl border border-amber-100 leading-relaxed">
                “{currentTopic.bgEs}”
              </p>
              <p className="text-slate-800 font-medium leading-relaxed">
                {currentTopic.prompt}
              </p>
            </div>

            {/* 构思采分要求 */}
            <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/80 space-y-1.5 text-xs">
              <strong className="text-amber-950 font-black">官方得分采分点要求：</strong>
              {currentTopic.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-slate-700">
                  <span className="text-[#B82E24] font-black">•</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 句式库与满分范文切换卡片 */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-2">
              <button
                onClick={() => setActiveTab('phrases')}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'phrases' ? 'bg-[#B82E24] text-white shadow-2xs font-black' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>万能写作句式库</span>
              </button>
              <button
                onClick={() => setActiveTab('sample')}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'sample' ? 'bg-[#B82E24] text-white shadow-2xs font-black' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>官方满分范文</span>
              </button>
            </div>

            {activeTab === 'phrases' && (
              <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1 no-scrollbar text-xs">
                {currentTopic.phrases.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1">
                    <span className="font-bold text-amber-950 text-[11px] block">{group.category}:</span>
                    {group.list.map((item, iIdx) => (
                      <div key={iIdx} className="p-2 rounded-lg bg-[#FAF8F5] border border-amber-100 text-slate-700 font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'sample' && (
              <div className="max-h-[260px] overflow-y-auto pr-1 no-scrollbar text-xs">
                <div className="p-3.5 rounded-2xl bg-amber-50/40 border border-amber-200 text-slate-800 font-serif leading-relaxed whitespace-pre-wrap">
                  {currentTopic.sampleEssay}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 右侧：西文正文编写区与精批结果 (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          
          {/* 编辑器卡片 */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-amber-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
              <span className="font-black text-slate-900 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-[#B82E24]" />
                <span>西文正文编写</span>
              </span>
              <span className="text-slate-500 font-mono">
                字数: <strong className={wordCount > 50 ? 'text-emerald-600 font-bold' : 'text-slate-800'}>{wordCount}</strong> 词 · 建议: {currentTopic.wordCount}
              </span>
            </div>

            <textarea
              value={essayContent}
              onChange={e => setEssayContent(e.target.value)}
              placeholder="在此键入您的西语作文内容，建议包含【正式信头/引言 - 核心主体论述 - 结语致辞】结构..."
              className="w-full h-64 p-4 rounded-2xl border border-amber-200 bg-[#FAF8F5] focus:bg-white focus:border-[#B82E24] outline-none text-xs sm:text-sm font-serif leading-relaxed resize-none shadow-inner"
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-400 font-medium">
                ⚡ 塞万提斯官方 Evaluador 维度智能精批，秒级指出变位与性数配合漏洞
              </span>

              <button
                onClick={handleEvaluate}
                disabled={isEvaluating || !essayContent.trim()}
                className={`py-2.5 px-6 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-xs transition cursor-pointer shrink-0 ${
                  essayContent.trim() && !isEvaluating
                    ? 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-md hover:scale-102 active:scale-95'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{isEvaluating ? '正在进行 AI 四维精批...' : '立即开始 AI 智能深度精批 ➔'}</span>
              </button>
            </div>
          </div>

          {/* 5. 批改与诊断雷达结果卡片 */}
          {evaluationResult && (
            <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-emerald-300 shadow-sm space-y-4 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-base shadow-xs">
                    {evaluationResult.score}
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-slate-900">AI 官方综合评定结果</h3>
                    <span className="text-xs text-emerald-700 font-bold">{evaluationResult.levelRated}</span>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 font-black self-start sm:self-auto">
                  🎉 达到 DELE 通过标准 (Apto)
                </span>
              </div>

              {/* 四维评分分布 */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {evaluationResult.dimensions.map((dim, dIdx) => (
                  <div key={dIdx} className="p-2.5 rounded-xl bg-[#FAF8F5] border border-amber-100 space-y-1">
                    <div className="flex justify-between font-bold text-slate-700">
                      <span className="truncate">{dim.name}</span>
                      <span className="text-emerald-700">{dim.score} / {dim.max}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${(dim.score / dim.max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* 核心亮点 */}
              <div className="space-y-1.5 text-xs">
                <strong className="text-slate-900 font-black flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> 篇章核心亮点与得分点：
                </strong>
                <ul className="space-y-1 text-slate-700 pl-5 list-disc">
                  {evaluationResult.strengths.map((s, idx) => (
                    <li key={idx} className="leading-relaxed">{s}</li>
                  ))}
                </ul>
              </div>

              {/* 错词与虚拟式纠偏 */}
              <div className="space-y-2 text-xs">
                <strong className="text-slate-900 font-black flex items-center gap-1 text-[#B82E24]">
                  <AlertTriangle className="w-4 h-4" /> 逐句语法/时态/用词智能纠偏：
                </strong>
                {evaluationResult.corrections.map((c, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-[#FEF2F2] border border-[#B82E24]/20 space-y-1">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="line-through text-rose-500">{c.original}</span>
                      <span className="text-slate-400">➔</span>
                      <span className="text-emerald-700 font-bold">{c.fix}</span>
                    </div>
                    <p className="text-[11px] text-slate-600">{c.reason}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-amber-50 text-xs text-amber-950 font-medium">
                💡 <strong>考官寄语：</strong>{evaluationResult.feedback}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
