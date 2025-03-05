import PlaylistItem from "./PlaylistItem";
import { usePlaylistContext } from "../../../contexts/PlaylistContext";
import { ListMusicIcon } from "lucide-react";
import { btnClass } from "../../../utils/utils";

export function Playlists() {
  const { isPlaylistOn } = usePlaylistContext();

  return (
    // <div className="absolute right-0 max-top-16 bottom-19 w-1/4 bg-white dark:bg-(--bg-dark-footer) rounded-xl shadow-lg border border-amber-600">
    <aside
      className={`fixed right-0 bottom-18 w-1/4 bg-white dark:bg-[var(--bg-dark-footer)] rounded-xl shadow-lg border border-amber-600 max-h-[calc(100vh-8.5rem)] flex flex-col overflow-hidden transform transition-transform duration-300 max-md:hidden ${isPlaylistOn ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4 flex-none">
        <div className="flex gap-4 items-center justify-between">
          <ListMusicIcon className="w-6 h-6" />
          <p className="flex-1">Your Library</p>
          <button className={`${btnClass} text-gray-600 transition-colors`}>
            {/* <PlusIcon /> */}
          </button>
        </div>
      </div>

      <div className="flex-1 scrollable-container overflow-x-hidden overflow-y-auto transform transition-transform duration-300">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </div>
    </aside>
  );
}
