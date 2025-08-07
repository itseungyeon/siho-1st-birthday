import React from "react";

const DayGridSection = () => {
  const eventDate = new Date("2025-09-27");
  const dateStr = `${eventDate.getFullYear()}년 ${eventDate.getMonth() + 1}월 ${eventDate.getDate()}일`;

  // 9월 달력 정보
  //const startDay = 1; // 1일
  const totalDays = 30; // 9월
  const firstWeekday = 1; // 2025.09.01 = 월요일 (0:일, 1:월, ...)

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold text-[#f4c2c2] mb-2">📅 시호의 돌잔치 일정</h2>
      <p className="text-lg mb-6">{dateStr} (토)</p>

      <div className="grid grid-cols-7 gap-2 max-w-xs mx-auto text-sm">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, idx) => (
          <div key={idx} className="font-bold text-gray-600">{day}</div>
        ))}

        {/* 앞쪽 공백 (월요일 시작이니까 일요일 한 칸 비움) */}
        {Array.from({ length: firstWeekday }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}

        {/* 1일부터 30일까지 */}
        {Array.from({ length: totalDays }).map((_, i) => {
          const date = i + 1;
          const isEvent = date === 27;
          return (
            <div
              key={date}
              className={`p-2 rounded-full text-center ${
                isEvent
                  ? "bg-[#f4c2c2] text-white font-extrabold shadow-lg"
                  : "text-gray-800"
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DayGridSection;