import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";
import photo9 from "../assets/images/photo9.jpg";

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export default function GalleryGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    setFade(true);
  };

  const closeModal = () => setModalOpen(false);

  const changeImage = useCallback((newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  }, []);

  const prevImage = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  }, [currentIndex, changeImage]);

  const nextImage = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  }, [currentIndex, changeImage]);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
      if (e.key === "ArrowLeft" && modalOpen) {
        prevImage();
      }
      if (e.key === "ArrowRight" && modalOpen) {
        nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage, modalOpen]);

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-[#f4c2c2] mb-8 text-center tracking-wide">
        추억 갤러리
      </h2>

      {/* 모바일 포함 전체 화면 3열 격자, 최대 너비 400px 정도로 제한, 중앙정렬 */}
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => openModal(idx)}
            className="focus:outline-none rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            aria-label={`사진 ${idx + 1} 보기`}
          >
            {/* 정사각형 유지 및 object-cover */}
            <img
              src={img}
              alt={`사진 ${idx + 1}`}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {modalOpen && (
        <div
          {...handlers}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="사진 확대 보기 모달"
        >
          <div
            className="relative max-w-4xl w-full mx-4 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`사진 ${currentIndex + 1}`}
              className={`w-full h-auto max-h-[80vh] object-contain bg-black transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 transition text-white text-2xl select-none"
              aria-label="이전 이미지"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 transition text-white text-2xl select-none"
              aria-label="다음 이미지"
            >
              ›
            </button>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-3xl font-thin hover:text-[#f4c2c2] transition select-none"
              aria-label="닫기"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}