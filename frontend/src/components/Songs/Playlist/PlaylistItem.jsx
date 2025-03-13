import { AlignVerticalJustifyStartIcon, EllipsisIcon } from "lucide-react";
import { btnClass } from "../../../utils/utils";

export default function PlaylistItem() {
  return (
    <div className="flex items-center justify-between p-4  transform transition hover:scale-102 group hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
      <AlignVerticalJustifyStartIcon className="text-2xl text-gray-700 dark:text-gray-300" />
      <div className="flex-1 mx-4">
        <p className="text-xl font-semibold text-gray-800 dark:text-white">Die with a Smile</p>
        <p className="text-sm text-gray-600 hover:underline cursor-pointer">Bruno Mars, Lady Gaga</p>
      </div>
      <button className={btnClass + " text-gray-600 hover:text-gray-800 transition-colors"}>
        <EllipsisIcon className="w-6 h-6" />
      </button>
    </div>
  )
}