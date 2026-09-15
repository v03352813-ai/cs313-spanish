export interface ExamCountdownStatus {
  phase: 'exam_countdown' | 'exam_day' | 'score_waiting' | 'next_register_countdown';
  badgeText: string;      // 如 "距大考67天"
  displayText: string;    // 如 "距2026年DELE全球统考仅剩 67 天"
  subText: string;        // 如 "欧标冲刺·真题机考"
  buttonSubText: string;  // 如 "距大考67天"
  days: number;
  badgeClass: string;
}

export function getSpanishExamCountdownStatus(customDate?: Date): ExamCountdownStatus {
  const now = customDate || new Date();
  const currentExamDate = new Date(now.getFullYear(), 10, 21, 9, 0, 0); // 2026-11-21 DELE 秋季统考
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysToExam = Math.max(1, Math.ceil((currentExamDate.getTime() - now.getTime()) / msPerDay));

  return {
    phase: 'exam_countdown',
    badgeText: `距大考${daysToExam}天`,
    displayText: `距 2026 DELE 全球统考仅剩 ${daysToExam} 天`,
    subText: '塞万提斯官方大考·欧标冲刺',
    buttonSubText: `距大考${daysToExam}天`,
    days: daysToExam,
    badgeClass: 'bg-[#FEF2F2] text-[#B82E24] border-[#B82E24]/25 hover:bg-[#FEF2F2]/80'
  };
}

export interface ExamTarget {
  name: string;
  code: string;
  targetDate: string; // YYYY-MM-DD
  daysLeft: number;
  badge: string;
  description: string;
}

export function getSpanishExamCountdown(): ExamTarget[] {
  const now = new Date();
  
  // Future dates calculation
  const exams = [
    {
      name: '2026 DELE 全球统考 (秋季大考)',
      code: 'DELE-A1-C2',
      date: new Date(now.getFullYear(), 10, 21), // November
      badge: '官方终身有效',
      description: '塞万提斯学院官方举办，全球权威等级认证'
    },
    {
      name: '2027 全国高校西班牙语专四 (TEM-4)',
      code: 'TEM-4',
      date: new Date(now.getFullYear() + 1, 4, 25), // Next May
      badge: '高校专业必过',
      description: '全国高等学校外语专业教学指导委员会统考'
    },
    {
      name: 'SIELE 国际在线机考 (随报随考)',
      code: 'SIELE-GLOBAL',
      date: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000), // 14 days later as rolling exam
      badge: '机考出分快·3周出证',
      description: '四大顶尖学术机构联合认证，有效期5年'
    }
  ];

  return exams.map(e => {
    let diff = Math.ceil((e.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diff < 0) diff = 30; // fallback if passed
    const year = e.date.getFullYear();
    const month = String(e.date.getMonth() + 1).padStart(2, '0');
    const day = String(e.date.getDate()).padStart(2, '0');
    return {
      name: e.name,
      code: e.code,
      targetDate: `${year}-${month}-${day}`,
      daysLeft: diff,
      badge: e.badge,
      description: e.description
    };
  });
}
