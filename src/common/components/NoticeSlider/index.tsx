'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { Text } from '..';

const setting = {
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type NoticeSliderProp = {
  images: string[];
  url?: string;
};

export const NoticeSlider = ({ images, url }: NoticeSliderProp) => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <Slider
        ref={slider}
        className="w-full"
        {...setting}
        afterChange={(index) => handleAfterChange(index + 1)}
      >
        {images?.map((imageSrc) => (
          <a
            key={imageSrc}
            target="_blank"
            rel="noreferrer noopener"
            href={url}
            className="h-auto rounded-12px"
          >
            <img
              className="aspect-w-3 aspect-h-1 z-0 h-auto w-full rounded-12px"
              alt="notice banner"
              src={imageSrc}
            />
          </a>
        ))}
      </Slider>
      {images.length > 1 && (
        <span className="absolute bottom-12px right-12px z-10 w-fit rounded-100px bg-gray-120 px-12px py-8px opacity-50">
          <Text typo="caption">
            {currentSlide}/{images.length}
          </Text>
        </span>
      )}
    </div>
  );
};
