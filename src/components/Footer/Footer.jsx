import { ArrowBigDown, ArrowDown, ArrowDown01Icon, ChevronDownIcon, ChevronUpIcon, CircleIcon, PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, SquareMenuIcon, Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from 'lucide-react';
import testImg from '../../../public/vite.svg';

export function FooterMusic() {
    const btnClass = 'gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl';
    return (
        <>
            <button className={`fixed bottom-[72px] z-10 ${btnClass}`}>
                <ChevronDownIcon />
            </button>
            <button className={`fixed bottom-[0] z-10 ${btnClass}`}>
                <ChevronUpIcon />
            </button>

            <footer className="h-[72px] dark:bg-[#18181A] text-white bottom-0 w-full fixed flex items-center justify-between px-2 sm:px-4 md:px-6">
                <div className="flex items-center gap-4 min-w-[120px]">
                    <img className="w-10 h-10 rounded-2xl" src={testImg} alt="" />
                    <div className="font-medium dark:text-white text-xs sm:text-sm">
                        <div>Jese Leos</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                            Joined in August 2014
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center relative w-[40%] sm:w-[50%] md:w-[60%] max-w-[500px]">
                    <div className="w-full flex justify-center space-x-2 sm:space-x-3">
                        <button className={`${btnClass} text-xs sm:text-sm`}>
                            <ShuffleIcon />
                        </button>
                        <button className={`${btnClass} text-xs sm:text-sm`}>
                            <SkipBackIcon />
                        </button>
                        <button className={`${btnClass} text-lg sm:text-xl`}>
                            <PauseIcon width="36" height="36" />
                            {/* <PlayIcon width="36" height="36" /> */}
                        </button>
                        <button className={`${btnClass} text-xs sm:text-sm`}>
                            <SkipForwardIcon />
                        </button>
                        <button className={`${btnClass} text-xs sm:text-sm`}>
                            {/* <RepeatIcon /> */}
                            <Repeat1Icon />
                        </button>
                    </div>

                    <div className="absolute -bottom-3 left-0 right-0 px-2 sm:px-6">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-xs sm:text-sm mr-1.5">00:00</span>
                            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 relative">
                                <div className="bg-blue-600 h-1 rounded-full w-[60%]" />
                            </div>
                            <span className="text-xs sm:text-sm ml-1.5">03:00</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-2 sm:space-x-3 min-w-[120px]">
                    <button className={btnClass}>
                        <VolumeXIcon />
                        {/* <VolumeIcon />
                        <Volume1Icon />
                        <Volume2Icon /> */}
                    </button>

                    <div className="min-w-[100px] sm:min-w-[160px] max-w-[200px]">
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 flex items-center relative">
                            <div className="bg-blue-600 h-1 rounded-full w-[60%]" />
                            <CircleIcon fill="currentColor" width='12px' height='12px' className='cursor-pointer' />
                        </div>
                    </div>

                    <button className={btnClass}>
                        <SquareMenuIcon />
                    </button>
                </div>
            </footer>
        </>
    );
}

