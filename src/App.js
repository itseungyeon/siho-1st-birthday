import React from "react";
import CoverSection from "./components/CoverSection";
import GreetingSection from "./components/GreetingSection";

function App() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-md mx-auto px-4 py-6 grid gap-8">
        <CoverSection />
        <GreetingSection />
      </div>
    </div>
  );
}

export default App;