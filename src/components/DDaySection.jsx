import React from "react";

// 돌잔치 날짜 (예시: 2025년 09월 27일)
const targetDate = new Date("2025-09-27");

const getDDay = () => {
  const today = new Date();
  // 시차 보정용 - 시간 0시로 고정
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diff = targetDate - today;
  const dayCount = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return dayCount >= 0 ? `D-${dayCount}` : `D+${Math.abs(dayCount)}`;
};

const DDaySection = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold text-primary">시호의 돌잔치</h2>
      <p className="text-lg mt-2">2025년 9월 27일</p>
      <div className="text-3xl font-bold mt-4 text-black">{getDDay()}</div>
    </section>
  );
};

export default DDaySection;