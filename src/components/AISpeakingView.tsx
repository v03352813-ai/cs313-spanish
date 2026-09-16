import React, { useState, useRef, useEffect } from 'react';
import { 
  Mic, 
  Send, 
  Volume2, 
  Sparkles, 
  MessageSquare, 
  Bot, 
  User, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Flame,
  ArrowRight,
  Headphones,
  Award
} from 'lucide-react';
import { speakSpanish } from '../utils/speech';

interface Message {
  sender: 'ai' | 'user';
  textEs: string;
  textZh: string;
  feedback?: {
    score: number;
    grammarTip: string;
    betterExpression: string;
  };
}

interface Scenario {
  id: string;
  title: string;
  category: 'all' | 'new' | 'dele' | 'life' | 'career' | 'cinema';
  level: string;
  tag: string;
  partnerName: string;
  partnerRole: string;
  starterAi: string;
  starterZh: string;
  hints: string[];
}

export const AISpeakingView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'new' | 'dele' | 'life' | 'career' | 'cinema'>('all');
  const [activeScenarioId, setActiveScenarioId] = useState<string>('free-talk');
  const [inputText, setInputText] = useState('');
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const SCENARIOS: Scenario[] = [
    {
      id: 'free-talk',
      title: '自由随心畅聊 · 马德里语伴 1v1 畅聊',
      category: 'new',
      level: '初级 (A1~A2)',
      tag: '自由畅聊',
      partnerName: '索菲亚 (Sofía)',
      partnerRole: '马德里本土西语语伴 · 阳光耐心的口语导师',
      starterAi: '¡Hola! ¡Qué alegría saludarte! Soy Sofía, de Madrid. ¿Cómo te llamas y cómo va tu día?',
      starterZh: '你好！很高兴和你打招呼！我是来自马德里的索菲亚。你叫什么名字，今天过得怎么样呀？',
      hints: ['¡Hola! Me llamo...', 'Todo va muy bien, gracias.', 'Estoy aprendiendo español.']
    },
    {
      id: 'tapas-bar',
      title: '马德里传统小吃吧点 Tapas · Bar Madrid',
      category: 'life',
      level: '生活实用 (A2)',
      tag: '生活实用',
      partnerName: '哈维尔 (Javier)',
      partnerRole: '老字号小吃酒吧老板 · 热情地道的老马德里人',
      starterAi: '¡Buenas tardes! Bienvenidos al Bar Madrid. ¿Qué le gustaría tomar para beber y picar algo?',
      starterZh: '下午好！欢迎光临马德里酒吧。您想喝点什么，来点什么下酒小吃呢？',
      hints: ['Una copa de vino tinto, por favor.', '¿Qué tapas me recomienda?', 'Una ración de tortilla de patatas.']
    },
    {
      id: 'dele-b1-oral',
      title: 'DELE B1 官方考官模拟口试 · Tarea 2 观点阐述',
      category: 'dele',
      level: '考级官方 (B1)',
      tag: 'DELE必考',
      partnerName: '卡洛斯 考官 (Carlos)',
      partnerRole: '塞万提斯学院官方 DELE 口试主考官',
      starterAi: 'Buenos días. En esta tarea vamos a hablar sobre la vida en la ciudad o en el campo. ¿Dónde prefieres vivir y por qué?',
      starterZh: '早上好。在这一任务中我们将探讨城市生活与乡村生活。你更喜欢住在哪里，为什么呢？',
      hints: ['Prefiero vivir en la ciudad porque...', 'En mi opinión, el campo es más tranquilo.', 'Por un lado... pero por otro lado...']
    },
    {
      id: 'hotel-checkin',
      title: '巴塞罗那海景酒店前台 · 办理入住与咨询',
      category: 'life',
      level: '旅行应急 (A1)',
      tag: '旅行应急',
      partnerName: '埃莱娜 (Elena)',
      partnerRole: '五星级海滨酒店前台经理',
      starterAi: '¡Buenas noches! Bienvenido a Barcelona. ¿Tiene una reserva con nosotros?',
      starterZh: '晚上好！欢迎来到巴塞罗那。请问您在我们这里有预订吗？',
      hints: ['Sí, tengo una reserva a nombre de...', 'Aquí tiene mi pasaporte.', '¿A qué hora se sirve el desayuno?']
    },
    {
      id: 'apartment-rent',
      title: '萨拉曼卡留学生公寓 · 找房看房与设施报修',
      category: 'life',
      level: '留学日常 (B1)',
      tag: '留学生活',
      partnerName: '莫拉莱斯 房东 (Sr. Morales)',
      partnerRole: '大学城学生公寓房东',
      starterAi: 'Hola, buenas. Te enseño el piso. Tiene dos habitaciones, calefacción y Wi-Fi. ¿Para cuántos meses lo necesitas?',
      starterZh: '你好。我带你看看这套公寓。两室一厅，带暖气和网络。你需要租几个月呢？',
      hints: ['Lo necesito para el curso académico.', '¿Están incluidos los gastos de agua y luz?', 'El agua caliente no funciona bien.']
    },
    {
      id: 'supermarket',
      title: 'Mercadona 超市生鲜区 · 采购蔬果与称重问价',
      category: 'new',
      level: '生活基础 (A1)',
      tag: '高频日常',
      partnerName: '佩德罗 (Pedro)',
      partnerRole: '超市果蔬生鲜区理货员',
      starterAi: '¡Hola! ¿Le ayudo en algo? Hoy tenemos naranjas de Valencia y jamón serrano en oferta.',
      starterZh: '您好！有什么需要我帮您的吗？今天瓦伦西亚橙和塞拉诺火腿在搞特价哦。',
      hints: ['¿Cuánto cuesta el kilo de naranjas?', 'Póngame medio kilo de queso, por favor.', '¿Dónde puedo pesar la fruta?']
    },
    {
      id: 'job-interview',
      title: '西班牙跨国企业商务面试 · 自我介绍与职业经历',
      category: 'career',
      level: '职场商务 (B2)',
      tag: '职场外企',
      partnerName: '劳拉 人力总监 (Laura)',
      partnerRole: '马德里外企人力资源面试官',
      starterAi: 'Hola, bienvenida a la entrevista. Hemos revisado tu currículum. ¿Podrías hablarnos de tu trayectoria profesional?',
      starterZh: '您好，欢迎参加面试。我们审阅了您的简历。能请您谈谈您的职业经历与核心优势吗？',
      hints: ['Tengo experiencia en comercio internacional.', 'Considero que mis puntos fuertes son...', 'Me gustaría aportar valor a su equipo.']
    },
    {
      id: 'cinema-lacasa',
      title: '《纸钞屋》经典对戏 · 教授的终极谈判艺术',
      category: 'cinema',
      level: '影视对戏 (B1)',
      tag: '高光对戏',
      partnerName: '教授 (El Profesor)',
      partnerRole: '马德里造币厂世纪劫案总指挥',
      starterAi: 'La nostalgia es una debilidad. Recuerda la regla de oro: pase lo que pase, seguimos el plan al pie de la letra. ¿Entendido?',
      starterZh: '怀旧是一种软弱。记住黄金法则：无论发生什么，都要不折不扣执行预定计划。明白了吗？',
      hints: ['Entendido, profesor.', 'Pero si la policía entra...', 'Confío plenamente en el plan.']
    }
  ];

  const currentScenario = SCENARIOS.find(s => s.id === activeScenarioId) || SCENARIOS[0];

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      textEs: currentScenario.starterAi,
      textZh: currentScenario.starterZh
    }
  ]);

  const handleSwitchScenario = (scId: string) => {
    setActiveScenarioId(scId);
    const target = SCENARIOS.find(s => s.id === scId) || SCENARIOS[0];
    setMessages([
      {
        sender: 'ai',
        textEs: target.starterAi,
        textZh: target.starterZh
      }
    ]);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const raw = textToSend !== undefined ? textToSend : inputText;
    if (!raw.trim()) return;

    const userText = raw.trim();
    setInputText('');

    // 添加用户消息
    const newMsg: Message = {
      sender: 'user',
      textEs: userText,
      textZh: '（您的回答已发送）',
      feedback: {
        score: Math.floor(Math.random() * 8) + 92,
        betterExpression: userText.includes('gracias') ? '¡Muchas gracias por su amable atención!' : 'Me complace enormemente compartir este punto de vista.',
        grammarTip: '动词虚拟式与时态配合精准，建议在衔接处适当增加连词以增强地道口语语感。'
      }
    };

    setMessages(prev => [...prev, newMsg]);

    // AI 拟真回复
    setTimeout(() => {
      let replyEs = '¡Muy interesante lo que dices! Cuéntame un poco más sobre eso.';
      let replyZh = '非常有趣的观点！能再跟我多聊聊相关的细节吗？';

      if (currentScenario.id === 'free-talk') {
        replyEs = '¡Qué bien! A mí me encanta pasear por la Gran Vía y tomar un café. ¿Y a ti qué te gusta hacer en tu tiempo libre?';
        replyZh = '太棒了！我非常喜欢在格兰大道散步喝杯咖啡。你平时空闲时间喜欢做些什么呢？';
      } else if (currentScenario.id === 'dele-b1-oral') {
        replyEs = 'Muy bien argumentado. ¿Qué ventajas cree que aporta vivir en una gran ciudad para los estudiantes?';
        replyZh = '非常精彩的论述。那你认为城市给年轻学生的学习和生活带来了哪些优势呢？';
      } else if (currentScenario.id === 'cinema-lacasa') {
        replyEs = 'Exacto. Mantengamos la calma. El tiempo corre a nuestro favor. Tokio, prepárate.';
        replyZh = '没错。保持冷静。时间站在我们这边。东京，做好准备。';
      }

      setMessages(prev => [...prev, { sender: 'ai', textEs: replyEs, textZh: replyZh }]);
      speakSpanish(replyEs);
    }, 700);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // 仅在对话过程中产生新消息时平滑滚动聊天卡片内部，绝不滚动整个页面
    if (messages.length > 1 && chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const filteredScenarios = SCENARIOS.filter(s => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'new') return s.category === 'new';
    return s.category === activeCategory;
  });

  return (
    <div className="w-full space-y-3 sm:space-y-4 pb-16">
      
      {/* 1. 顶部权威 Hero Banner (对标法语图3标准规范，移除 06 步骤圈) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
              🎙️ 塞万提斯官方口试大纲 · 沉浸实战对练
            </span>
            <span className="text-xs text-stone-500 font-medium">
              马德里正统发音 · 真实场景角色扮演 · 实时交互反馈 · 1v1 纯正语料
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            AI 智能西语口语实战对练 · 马德里腔角色扮演工坊
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            DELE 实用口语对话对练 · 马德里生活实操 · 西班牙外企面试 · 经典影视名场面对戏，随时随地开口脱敏！
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-black text-xs flex items-center gap-2 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI 对练就绪</span>
          </span>
        </div>
      </div>

      {/* 2. 本周特推跑马灯横幅 */}
      <div className="bg-gradient-to-r from-amber-50 via-[#FFFDF9] to-white p-3 px-4 rounded-2xl border border-amber-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="px-2 py-0.5 rounded-md bg-[#B82E24] text-white font-black text-[10px] shrink-0">
            特推
          </span>
          <span className="font-bold text-slate-800 shrink-0">第 35 期特推：</span>
          <span className="text-slate-600 truncate">
            《纸钞屋》教授谈判对戏、马德里 Tapas 小吃点单、萨拉曼卡留学生公寓租房报修
          </span>
        </div>
        <button
          onClick={() => setActiveCategory('new')}
          className="text-[#B82E24] font-bold text-xs hover:underline flex items-center gap-0.5 shrink-0 ml-2 cursor-pointer"
        >
          <span>看本周新推 (3)</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* 3. 场景分类多级 Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {[
          { id: 'all', label: '全部场景', count: 8 },
          { id: 'new', label: '本周新推', count: 3 },
          { id: 'dele', label: 'DELE 考官面试', count: 1 },
          { id: 'life', label: '生活实用', count: 4 },
          { id: 'career', label: '职场与外企', count: 1 },
          { id: 'cinema', label: '影视角色对戏', count: 1 },
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCategory === cat.id
                ? 'bg-slate-900 text-white shadow-xs font-black'
                : 'bg-white text-slate-600 hover:bg-amber-50 border border-amber-200/80'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* 4. 双栏交互主体 (左侧剧本库 + 右侧沉浸式语伴对话主舞台) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* 左侧：选择口语实战剧本 (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#B82E24]" />
              <span>选择口语实战剧本</span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono font-bold">
              共 {filteredScenarios.length} 个
            </span>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-0.5 no-scrollbar">
            {filteredScenarios.map(sc => {
              const isSelected = activeScenarioId === sc.id;
              return (
                <div
                  key={sc.id}
                  onClick={() => handleSwitchScenario(sc.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-white border-[#B82E24] shadow-sm ring-1 ring-[#B82E24]/30'
                      : 'bg-white/80 border-amber-200/80 hover:bg-white hover:border-amber-400 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1.5">
                    <h4 className={`text-xs font-black leading-snug line-clamp-2 ${isSelected ? 'text-[#B82E24]' : 'text-slate-900'}`}>
                      {sc.title}
                    </h4>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-50 text-amber-900 font-bold border border-amber-200 shrink-0">
                      {sc.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-500 font-medium">{sc.tag}</span>
                    <span className={`font-bold flex items-center gap-0.5 ${isSelected ? 'text-[#B82E24]' : 'text-slate-400'}`}>
                      <span>开始实练</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右侧：沉浸式语伴交互主舞台 (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-amber-200/90 shadow-xs flex flex-col justify-between h-[640px] overflow-hidden">
          
          {/* 对话顶部栏 */}
          <div className="p-3.5 sm:p-4 border-b border-amber-100 bg-[#FAF8F5] flex items-center justify-between shrink-0">
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-black text-slate-900 truncate">
                  ☀️ {currentScenario.title}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-black border border-emerald-200">
                  ● 无限多轮在线交互 (第 {messages.length} 轮)
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate font-medium">
                语伴：{currentScenario.partnerName} · {currentScenario.partnerRole}
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setShowTranslation(prev => !prev)}
                className="p-2 rounded-xl bg-white hover:bg-amber-50 text-slate-600 border border-amber-200 shadow-2xs transition cursor-pointer"
                title={showTranslation ? '隐藏中文翻译' : '显示中文翻译'}
              >
                {showTranslation ? <Eye className="w-4 h-4 text-[#B82E24]" /> : <EyeOff className="w-4 h-4 text-slate-400" />}
              </button>
              <button
                onClick={() => handleSwitchScenario(currentScenario.id)}
                className="p-2 rounded-xl bg-white hover:bg-amber-50 text-slate-600 border border-amber-200 shadow-2xs transition cursor-pointer"
                title="重新开始本对话"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 对话消息滚动流 */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF8F5]/40">
            {messages.map((msg, idx) => {
              const isAi = msg.sender === 'ai';
              return (
                <div key={idx} className={`flex items-start gap-2.5 ${isAi ? '' : 'flex-row-reverse'}`}>
                  {/* 头像 */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0 shadow-2xs ${
                    isAi ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white' : 'bg-slate-800 text-white'
                  }`}>
                    {isAi ? 'ES' : '我'}
                  </div>

                  {/* 消息气泡主体 */}
                  <div className={`space-y-1.5 max-w-[82%] sm:max-w-[75%] ${isAi ? '' : 'items-end flex flex-col'}`}>
                    <div className={`p-3 sm:p-3.5 rounded-2xl shadow-2xs space-y-1 ${
                      isAi
                        ? 'bg-white border border-amber-200/80 text-slate-900 rounded-tl-none'
                        : 'bg-[#B82E24] text-white rounded-tr-none'
                    }`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm sm:text-base font-serif font-black leading-snug">
                          {msg.textEs}
                        </p>
                        <button
                          onClick={() => speakSpanish(msg.textEs)}
                          className={`p-1 rounded-lg transition shrink-0 cursor-pointer ${
                            isAi ? 'text-slate-400 hover:text-[#B82E24] hover:bg-amber-50' : 'text-white/80 hover:text-white'
                          }`}
                          title="发音朗读"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {showTranslation && (
                        <p className={`text-xs ${isAi ? 'text-slate-500 font-medium' : 'text-amber-100'}`}>
                          {msg.textZh}
                        </p>
                      )}
                    </div>

                    {/* 用户表达反馈卡片 */}
                    {msg.feedback && (
                      <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-xs space-y-1 shadow-2xs">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>AI 诊断打分: {msg.feedback.score}分 · {msg.feedback.grammarTip}</span>
                        </div>
                        <p className="text-[11px] text-slate-600">
                          推荐表达：<strong className="text-slate-800 font-mono">{msg.feedback.betterExpression}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 底部输入与灵感提示栏 */}
          <div className="p-3 sm:p-4 border-t border-amber-100 bg-white space-y-2.5 shrink-0">
            {/* 灵感快捷句型气泡 */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
              <span className="text-slate-400 text-[11px] whitespace-nowrap font-bold">💡 灵感回答:</span>
              {currentScenario.hints.map((hint, hIdx) => (
                <button
                  key={hIdx}
                  onClick={() => handleSendMessage(hint)}
                  className="px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-[11px] font-medium whitespace-nowrap transition cursor-pointer"
                >
                  {hint}
                </button>
              ))}
            </div>

            {/* 输入表单 */}
            <form onSubmit={e => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsRecording(prev => !prev)}
                className={`p-2.5 rounded-xl border transition cursor-pointer shrink-0 ${
                  isRecording
                    ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
                }`}
                title={isRecording ? '点击停止麦克风' : '点击开启语音录制'}
              >
                <Mic className="w-4 h-4" />
              </button>

              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="用西班牙语输入回答，或点击上方灵感气泡..."
                className="flex-1 px-4 py-2 rounded-xl border border-amber-200 bg-[#FAF8F5] focus:bg-white focus:border-[#B82E24] outline-none text-xs sm:text-sm font-medium"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition cursor-pointer shrink-0 ${
                  inputText.trim()
                    ? 'bg-[#B82E24] hover:bg-[#991B1B] text-white shadow-md'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>发送</span>
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
