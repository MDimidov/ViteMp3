import { EllipsisIcon, HeartIcon, PlayIcon } from "lucide-react";

export default function PictureSongItem() {
    const btnClassCircle = 'hover:bg-black/40 dark:hover:bg-white/10 cursor-pointer w-10 h-10 rounded-full active:scale-90 hover:scale-110 text-gray-300';
    return (
        <div>
            <div className="h-50 w-50 rounded-2xl overflow-hidden group transform transition ">
                <img
                    src="https://t3.ftcdn.net/jpg/12/85/10/50/1000_F_1285105074_WokvIntOeNb395MfdRWEgkklpNFFn3b3.jpg"
                    alt="test"
                    className="w-full h-full relative object-cover group-hover:brightness-80 dark:group-hover:brightness-50 duration-300"
                />

                <div className="-top-14 px-2 relative flex items-center justify-between w-full">
                    <button className={btnClassCircle}>
                        <PlayIcon className="m-auto" fill="currentColor"/>
                    </button>

                    <div className="hidden items-center justify-between gap-2 r-0 group-hover:flex transform transition duration-1000">
                        <button className={btnClassCircle}>
                            <EllipsisIcon className="m-auto" />
                        </button>
                        <button className={`${btnClassCircle} hover:text-red-500 transition-colors`}>
                            <HeartIcon className="m-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <p className="hover:underline cursor-pointer">Die with a smile</p>
            <p className="text-xs text-gray-500 hover:underline cursor-pointer mb-4">
                Bruno mars, Gaga
            </p>
        </div>
    )
}