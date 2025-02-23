import {
    AlignVerticalJustifyStartIcon,
    ClockIcon,
    EllipsisIcon,
    HeartIcon,
    PlayIcon,
} from "lucide-react";
import { btnClass } from "../../utils/utils";

export default function Songs() {
    const trClass = "border-y group";
    const tdClass = "py-4";
    return (
        <div className="w-full flex-center justify-items-start">
            <table className="w-full text-xs text-left">
                <thead className="text-xs">
                    <tr className="py-7">
                        <th className="py-6">#</th>
                        <th></th>
                        <th>Title</th>
                        <th>Artists</th>
                        <th>Album</th>
                        <th></th>
                        <th></th>
                        <th>
                            <ClockIcon />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${trClass}`}>
                        <td className={tdClass}>
                            <span className="group-hover:hidden">1</span>
                            <span className="hidden group-hover:block">
                                <button className={btnClass}>
                                    <PlayIcon width={12} height={12} fill="currentColor" />
                                </button>
                            </span>
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
                            <button className={btnClass}>
                                <HeartIcon />
                            </button>{" "}
                        </td>
                        <td className={tdClass}>
                            <span>04:11</span>
                        </td>
                    </tr>
                    <tr className={trClass}>
                        <td className={tdClass}>
                            <span className="group-hover:hidden">1</span>
                            <span className="hidden group-hover:block">
                                <button className={btnClass}>
                                    <PlayIcon width={12} height={12} fill="currentColor" />
                                </button>
                            </span>
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
                            <button className={btnClass}>
                                <HeartIcon />
                            </button>{" "}
                        </td>
                        <td className={tdClass}>
                            <span>04:11</span>
                        </td>
                    </tr>
                    <tr className={trClass}>
                        <td className={tdClass}>
                            <span className="group-hover:hidden">1</span>
                            <span className="hidden group-hover:block">
                                <button className={btnClass}>
                                    <PlayIcon width={12} height={12} fill="currentColor" />
                                </button>
                            </span>
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
                            <button className={btnClass}>
                                <HeartIcon />
                            </button>{" "}
                        </td>
                        <td className={tdClass}>
                            <span>04:11</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
