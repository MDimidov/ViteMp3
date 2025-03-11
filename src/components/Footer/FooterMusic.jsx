import {
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
  Repeat1Icon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SquareMenuIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
} from "lucide-react";
import testImg from "../../assets/vite.svg";
import { btnClass } from "../../utils/utils";
import { useEffect, useRef, useState } from "react";
import { usePlaylistContext } from "../../contexts/PlaylistContext";

export default function FooterMusic() {
  const { isPlaylistOn, setIsPlaylistOnHandler } = usePlaylistContext();

  // State за текущото време на песента, ще се обновява от аудио елемента
  const [currentTime, setCurrentTime] = useState(0);

  // State за силата на звука (0 до 1)
  const [volume, setVolume] = useState(0.6);
  const [lastVolume, setLastVolume] = useState(volume);

  // State за collapse/expand на FooterMusic
  const [isCollapsed, setIsCollapsed] = useState(false);

  // State за drag на progress knob
  const [isDragging, setIsDragging] = useState(false);

  // State за пускане/спиране на песента
  const [isPlaying, setIsPlaying] = useState(false);

  // Задаваме фиксирана продължителност (напр. 180 секунди => 3 минути)
  // (Може да използвате audioRef.current.duration, ако аудиото е заредено)
  const duration = 180;

  // Реф за progress бара, за да засечем клик и drag върху него
  const progressBarRef = useRef(null);

  // Реф за аудио елемента – задайте правилния път към аудио файла
  const audioRef = useRef(new Audio("C:/DISK-D/Music/sober.mp3"));

  // Обновяване на currentTime чрез аудио събитие (timeupdate)
  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Управление на пускането/спирането на аудио при промяна на isPlaying
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Обновяване на силата на звука
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Функция за форматиране на времето във формат mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Когато кликнем върху progress бара, пресмятаме новото време според позицията на клик
  const handleProgressClick = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Функции за drag на progress knob
  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const handleDrag = (eMove) => {
      if (!progressBarRef.current) return;
      const rect = progressBarRef.current.getBoundingClientRect();
      const clientX =
        eMove.clientX || (eMove.touches && eMove.touches[0].clientX);
      const newTime = Math.min(
        Math.max(((clientX - rect.left) / rect.width) * duration, 0),
        duration
      );
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("touchend", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);
  };

  // Функция за пускане/спиране на песента
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  function toggleVolumeHandler() {
    if (volume !== 0) {
      setLastVolume(volume);
      setVolume(0);
    } else {
      setVolume(lastVolume);
    }
  }

  return (
    <>
      {/* Стрелките за скриване/показване */}
      {!isCollapsed && (
        // Когато не е collapse, се показва стрелка над футъра за скриване
        <button
          onClick={() => setIsCollapsed(true)}
          className={`fixed bottom-[72px] left-4 z-10 ${btnClass} hover:scale-110 transition-transform duration-200`}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      )}
      {isCollapsed && (
        // При collapse остава само един Play/Pause бутон в долния десен ъгъл,
        // който при клик отново разкрива футъра
        <>
          <button
            onClick={() => setIsCollapsed(false)}
            className={`fixed bottom-4 left-4 z-10 ${btnClass} hover:scale-110 transition-transform duration-200`}
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>

          <button
            onClick={handlePlayPause}
            className={`fixed bottom-4 right-4 z-10 ${btnClass} hover:scale-110 transition-transform duration-200`}
          >
            {isPlaying ? (
              <PauseIcon width="36" height="36" />
            ) : (
              <PlayIcon width="36" height="36" />
            )}
          </button>
        </>
      )}

      {/* FooterMusic – плавно се скрива/показва с transform */}
      <footer
        className={`fixed bottom-0 w-full h-[72px] rounded-3xl bg-(--bg-light-footer) dark:bg-(--bg-dark-footer) dark:text-white flex items-center justify-between px-2 sm:px-4 md:px-6 ring drop-shadow-3xl-footer ring-gray-900/5 transform transition-transform duration-300 ${isCollapsed ? "translate-y-full" : "translate-y-0 z-999"
          }`}
      >
        <div className="flex items-center gap-4 min-w-[120px]">
          <img
            className="w-10 h-10 rounded-2xl transition-transform duration-200 hover:scale-105"
            src={testImg}
            alt=""
          />
          <div className="font-medium dark:text-white text-xs sm:text-sm">
            <div className="hover:underline cursor-pointer">Jese Leos</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs hover:underline cursor-pointer">
              Joined in August 2014
            </div>
          </div>
          <button className={`${btnClass} hover:text-red-500 hover:scale-105 active:scale-90 transition-colors`}>
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center relative w-[40%] sm:w-[50%] md:w-[60%] max-w-[500px]">
          <div className="w-full flex justify-center space-x-2 sm:space-x-3 max-sm:space-x-0 max-sm:mr-3">
            <button
              className={`${btnClass} text-xs sm:text-sm hover:scale-105 active:scale-90 transition-transform duration-200 max-sm:hidden`}
            >
              <ShuffleIcon width={18} height={18} />
            </button>
            <button
              className={`${btnClass} text-xs sm:text-sm hover:scale-105 active:scale-90 transition-transform duration-200 max-sm:p-0`}
            >
              <SkipBackIcon width={18} height={18} />
            </button>
            <button
              onClick={handlePlayPause}
              className={`${btnClass} text-lg sm:text-xl hover:scale-110 active:scale-100 transition-transform duration-200 max-sm:p-0 max-sm:mx-2`}
            >
              {isPlaying ? (
                <PauseIcon width="36" height="36" />
              ) : (
                <PlayIcon width="36" height="36" />
              )}
            </button>
            <button
              className={`${btnClass} text-xs sm:text-sm hover:scale-105 active:scale-90 transition-transform duration-200 max-sm:p-0`}
            >
              <SkipForwardIcon width={18} height={18} />
            </button>
            <button
              className={`${btnClass} text-xs sm:text-sm hover:scale-105 active:scale-90 transition-transform duration-200 max-sm:hidden max-sm:p-0`}
            >
              <Repeat1Icon width={18} height={18} />
            </button>
          </div>

          <div className="absolute -bottom-3 left-0 right-0 px-2 sm:px-6 max-sm:hidden">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs sm:text-sm mr-1.5">
                {formatTime(currentTime)}
              </span>
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 relative cursor-pointer"
              >
                <div
                  className="bg-blue-600 h-1 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                {/* Топче за drag (knob) */}
                <div
                  className="absolute -top-1 w-3 h-3 bg-blue-500 rounded-full cursor-pointer"
                  style={{
                    left: `${(currentTime / duration) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                />
              </div>
              <span className="text-xs sm:text-sm ml-1.5">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 max-sm:hidden sm:space-x-3 min-w-[120px]">
          <button className={`${btnClass} hover:scale-105 active:scale-90`} onClick={toggleVolumeHandler}>
            {volume === 0 && <VolumeXIcon className="w-6 h-6" />}
            {volume > 0 && volume < 1 / 3 && (
              <VolumeIcon className="w-6 h-6" />
            )}
            {volume >= 1 / 3 && volume < 2 / 3 && (
              <Volume1Icon className="w-6 h-6" />
            )}
            {volume >= 2 / 3 && <Volume2Icon className="w-6 h-6" />}
          </button>

          <div className="min-w-[100px] sm:min-w-[160px] max-w-[200px]">
            {/* Контрол за силата на звука */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full mt-1 h-1 rounded-full cursor-pointer"
            />
          </div>

          <button
            onClick={setIsPlaylistOnHandler}
            className={`${btnClass} hover:scale-105 active:scale-90 transition-transform duration-200 max-md:hidden`}
          >
            <SquareMenuIcon
              color={isPlaylistOn ? "#155dfc" : "currentColor"}
              className="w-5 h-5"
            />
          </button>
        </div>
      </footer>
    </>
  );
}
