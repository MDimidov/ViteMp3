import {
    AlignVerticalJustifyStartIcon,
    EllipsisIcon,
    HeartIcon,
    PlayIcon,
} from "lucide-react";
import { btnClass } from "../../utils/utils";

const trClass = "border-y group hover:bg-black/5 dark:hover:bg-white/5 transform transition hover:scale-102 group";
const tdClass = "py-4";
export default function SongItem() {

    return (
        <tr className={`${trClass}`}>
            <td className={`${tdClass} max-w-4`}>
                <button className={`${btnClass} group-hover:hidden`}> 1</button>
                <button className={`${btnClass} hidden group-hover:block`}>
                    <PlayIcon width={12} height={12} fill="currentColor" />
                </button>
            </td>
            <td className={tdClass}>
                <button className={btnClass}>
                    <AlignVerticalJustifyStartIcon />
                </button>
            </td>
            <td className={tdClass}>Die with a smile</td>

            <td className={tdClass}>Bruno mars, Lady Gaga</td>

            <td className={tdClass}>Die with a smile</td>

            <td className={tdClass}>
                <button className={btnClass}>
                    <EllipsisIcon />
                </button>
            </td>

            <td className={tdClass}>
                <button className={`${btnClass} hover:text-red-500 transition-colors`}>
                    <HeartIcon className="w-5 h-5" />
                </button>{" "}
            </td>
            <td className={tdClass}>
                <span>04:11</span>
            </td>
        </tr>
    )
}