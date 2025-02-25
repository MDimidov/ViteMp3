import { AlignVerticalJustifyStartIcon, EllipsisIcon } from "lucide-react";
import { btnClass } from "../../utils/utils";

export function Playlist() {

    return (
        <div className="absolute right-0 w-1/4 border-amber-600 border-2">
            <div className="p-2 flex-center justify-around gap-2">
                <div className="inline-block">
                    <AlignVerticalJustifyStartIcon />
                </div>
                <div className="inline-block">
                    <p className="text-xl text-black dark:text-white">Die with a smile</p>
                    <p className="text-xs hover:underline cursor-pointer">Bruno mars, Lady Gaga</p>
                </div>
                <div className="">
                    <button className={btnClass}>
                        <EllipsisIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}