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
            <footer className="h-[72px] dark:bg-[#18181A] text-white bottom-0 w-full fixed flex-center-between px-0.5">
                <div className="flex items-center gap-4">
                    <img
                        className="w-10 h-10 rounded-2xl"
                        src={testImg}
                        alt=""
                    />
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Joined in August 2014
                        </div>
                    </div>
                </div>

                <div>

                    <div className='min-w-1/5 max-w-1/3 flex-center justify-between space-x-1.5'>
                        <button className={btnClass}>
                            <ShuffleIcon />
                        </button>
                        <button className={btnClass}>
                            <SkipBackIcon />
                        </button>
                        <button className={btnClass}>
                            {/* <PlayIcon width="36" height="36" /> */}
                            <PauseIcon width="36" height="36" />
                        </button>
                        <button className={btnClass}>
                            <SkipForwardIcon />
                        </button>
                        <button className={btnClass}>
                            <RepeatIcon />
                            <Repeat1Icon />
                        </button>
                    </div>
                    <div className='max-w-full min-w-1/5'>
                        <div className='min-w-[160px] '>
                            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 flex-center">
                                <div className="bg-blue-600 h-1 rounded-full w-[60%]" />
                                <CircleIcon fill="currentColor" width='12px' height='12px' className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-center justify-end space-x-1.5 min-w-1/4'>
                    <div>
                        <button className={btnClass}>
                            <VolumeIcon />
                            <Volume1Icon />
                            <Volume2Icon />
                            <VolumeXIcon />
                        </button>
                        <button className={btnClass}>
                        </button>
                    </div>

                    <div className='min-w-[160px] max-w-[300px]'>
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 flex-center">
                            <div className="bg-blue-600 h-1 rounded-full w-[60%]" />
                            <CircleIcon fill="currentColor" width='12px' height='12px' className='cursor-pointer' />
                        </div>
                    </div>

                    <div>
                        <button className={btnClass}>
                            <SquareMenuIcon />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    );
}
