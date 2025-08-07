const AccountSection = () => {
  const accounts = [
    { bank: "우리은행", number: "1002-333-741092", holder: "이현재" },
    { bank: "국민은행", number: "089502-04-113080", holder: "이승연" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다!");
  };

  return (
    <section className="py-8 px-6 bg-white max-w-md mx-auto rounded-md">
      <h2 className="text-xl font-semibold text-[#f4c2c2] mb-3 font-sans">
        축하의 마음 전하기
      </h2>
      <p className="text-[#f4c2c2] mb-6 text-sm font-normal">
        아래 계좌로 축하금을 보내주시면 감사하겠습니다 :)
      </p>

      <div className="space-y-4">
        {accounts.map(({ bank, number, holder }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md border border-[#f4c2c2] p-4 flex justify-between items-center"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-[#f4c2c2]">{bank}</p>
              <p className="font-mono text-sm text-[#f4c2c2] mt-0.5">{number}</p>
              <p className="text-xs text-gray-700 mt-0.5">예금주: {holder}</p>
            </div>
            <button
              onClick={() => copyToClipboard(number)}
              className="border border-[#f4c2c2] text-[#f4c2c2] px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#f4c2c2] hover:text-white transition-colors"
            >
              복사
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountSection;