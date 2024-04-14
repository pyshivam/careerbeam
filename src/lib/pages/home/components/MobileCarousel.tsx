import type React from 'react';
import { useState } from 'react';

type CarouselProps = {
  items: React.ReactNode[];
};

const MobileCarousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item?.toString()}
          className={`absolute left-0 top-0 h-full w-full transform transition-transform duration-500 ${
            // eslint-disable-next-line no-nested-ternary
            index === currentIndex
              ? 'translate-x-0 opacity-100'
              : index === currentIndex - 1 ||
                  (currentIndex === 0 && index === items.length - 1)
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
          }`}
        >
          {item}
        </div>
      ))}
      <button
        type="button"
        className="absolute bottom-0 left-0 top-0"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        type="button"
        className="absolute bottom-0 right-0 top-0"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default MobileCarousel;
