import { ClockIcon } from "lucide-react";
import SongItem from "./SongItem";

export default function Songs() {
    return (
        <div className="w-full mt-20 mb-20">
            <table className="w-full text-xs text-left ">
                <thead className="text-xs">
                    <tr className="py-7 ">
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
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                </tbody>
            </table>

        </div>
    );
}
