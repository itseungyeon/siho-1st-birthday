import React from "react";
import CoverSection from "./components/CoverSection";
import GreetingSection from "./components/GreetingSection";
import DDaySection from "./components/DDaySection";
import DayGridSection from "./components/DayGridSection";
import MapSection from "./components/MapSection";
import AccountSection from "./components/AccountSection";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-md mx-auto px-4 py-6 grid gap-8">
        <CoverSection />    {/*커버*/}
        <GreetingSection /> {/*인삿말*/}
        <DDaySection />    {/*디데이*/}
        <DayGridSection /> {/*달력*/}
        <MapSection />     {/*지도*/}
        <AccountSection /> {/*계좌*/}
        <GallerySection /> {/*갤러리*/}
      </div>
    </div>
  );
}

export default App;