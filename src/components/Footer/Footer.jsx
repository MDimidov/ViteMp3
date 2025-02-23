import { ArrowBigDown, ArrowDown, ArrowDown01Icon, ChevronDownIcon, ChevronUpIcon, CircleIcon, FacebookIcon, HeartIcon, InstagramIcon, PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, SquareMenuIcon, Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon, YoutubeIcon } from 'lucide-react';
import testImg from '../../assets/vite.svg';
import { btnClass } from '../../utils/utils';


export function FooterMusic() {
    return (
        <>
            <button className={`fixed bottom-[72px] z-10 ${btnClass}`}>
                <ChevronDownIcon />
            </button>
            <button className={`fixed bottom-[0] z-10 ${btnClass}`}>
                <ChevronUpIcon />
            </button>

            <footer className="h-[72px] rounded-3xl bg-(--bg-light-footer) dark:bg-(--bg-dark-footer) dark:text-white bottom-1 w-full fixed flex items-center justify-between px-2 sm:px-4 md:px-6 ring drop-shadow-3xl-footer ring-gray-900/5">
                <div className="flex items-center gap-4 min-w-[120px]">
                    <img className="w-10 h-10 rounded-2xl" src={testImg} alt="" />
                    <div className="font-medium dark:text-white text-xs sm:text-sm">
                        <div>Jese Leos</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                            Joined in August 2014
                        </div>
                    </div>
                    <button className={btnClass}>
                        <HeartIcon />
                    </button>
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
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 flex items-center relative group">
                            <div className="bg-blue-600 h-1 rounded-full w-[60%]" />
                            <CircleIcon fill="currentColor" width='12px' height='12px' className='cursor-pointer hidden group-hover:block' />
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

export function Footer() {

    const divMainClass = 'w-1/5'
    const spanClass = 'dark:text-white z'
    const socialsIconClass = 'hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer px-1 py-1 h-min rounded-xl'
    const liClass = 'text-sm text-gray-600 dark:text-gray-400 hover:underline'
    return (
        <div className='flex w-full gap-3'>
            <div className={divMainClass}>
                <span className={spanClass}>Кампания</span>
                <ul>
                    <li className={liClass}><a href="#">Относно</a></li>
                    <li className={liClass}><a href="#">Работа при нас</a></li>
                    <li className={liClass}><a href="#">For the Records</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>Общности</span>
                <ul>
                    <li className={liClass}><a href="#">За изпълнители</a></li>
                    <li className={liClass}><a href="#">Разработчици</a></li>
                    <li className={liClass}><a href="#">Реклама</a></li>
                    <li className={liClass}><a href="#">Инвеститори</a></li>
                    <li className={liClass}><a href="#">Доставчици</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>Полезни връзки</span>
                <ul>
                    <li className={liClass}><a href="#">Поддръжка</a></li>
                    <li className={liClass}><a href="#">Безплатно мобилно приложение</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>ViteMp3 планове</span>
                <ul>
                    <li className={liClass}><a href="#">Premium Individual</a></li>
                    <li className={liClass}><a href="#">Premium Duo</a></li>
                    <li className={liClass}><a href="#">Premium Family</a></li>
                    <li className={liClass}><a href="#">ViteMp3 Free</a></li>
                </ul>
            </div>
            <div className={`${divMainClass} flex`}>
                <a href='#' className={socialsIconClass}><InstagramIcon /></a>
                <a href='#' className={socialsIconClass}><FacebookIcon /></a>
                <a href='#' className={socialsIconClass}><YoutubeIcon /></a>
            </div>
        </div>
    )
}
