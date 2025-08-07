import { useEffect } from "react";

const MapSection = () => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c38e883511c754b03620ed4d6239d8e5";
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    }

    function initMap() {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
            center: new window.kakao.maps.LatLng(37.551131, 127.075726),
            level: 3,
        };
        
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(37.551131, 127.075726);

        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
        });
        
        marker.setMap(map);
      });
    }
  }, []);

  return (
    <section className="max-w-md mx-auto p-6 bg-[#fff0f0] rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-4 text-[#d77c7c]">
        오시는 길
      </h2>
      <p className="text-center text-gray-700 text-sm mb-3 leading-relaxed">
        서울 광진구 능동로 209<br />
        세종대학교 대양AI센터 2층 빅베어8
      </p>
      <div className="text-center text-gray-600 text-sm mb-6 space-y-1">
        <p>🚇 7호선 어린이대공원역 6번 출구 도보 5분</p>
        <p>🚗 세종대학교 정문 주차장 이용 가능 (유료)</p>
      </div>

      <div
        id="map"
        className="w-full h-80 rounded-lg shadow-inner border border-[#f4c2c2]"
      />
    </section>
  );
};

export default MapSection;