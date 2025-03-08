import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import { useState } from "react";
import PictureSongItem from "../../Discover/PictureSongItem";
export function DragAndSlide() {
  let [current, setCurrent] = useState(0);

  const slides = [
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
    <PictureSongItem />,
  ]

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


  return (
    <div className="overflow-hidden relative group">
      <div
        className={`flex transition ease-out duration-400 gap-8`}
        style={{
          transform: `translateX(-${current * 30}%)`,
        }}
      >
        {slides.map((s, index) => {
          return <div key={index}>{s}</div>;
        })}
      </div>

      <div className="top-0 h-full w-full justify-between items-center flex gap-10 text-white px-10 text-3xl absolute">
        <button onClick={previousSlide}>
          <ChevronLeftCircleIcon />
        </button>
        <button onClick={nextSlide}>
          <ChevronRightCircleIcon />
        </button>
      </div>
    </div>
  );
}