import React from "react";

const GreetingSection = () => {
  return (
    <section className="text-center py-6">
      <p className="text-lg leading-relaxed">
        귀한 걸음 해주셔서 감사합니다. <br />
        연락은 아래로 주시면 됩니다 😊
      </p>
      <div className="mt-4">
        <p>
          📞 아빠:{" "}
          <a href="tel:010-1234-5678" className="text-blue-600 underline">
            010-1234-5678
          </a>
        </p>
        <p>
          📞 엄마:{" "}
          <a href="tel:010-8765-4321" className="text-blue-600 underline">
            010-8765-4321
          </a>
        </p>
      </div>
    </section>
  );
};

export default GreetingSection;