import PlaylistItem from "../Playlist/PlaylistItem";
import LibraryItem from "./LibraryItem";

export default function Library() {
    return (
         <div
              className={`fixed left-0 bottom-19 w-1/4 bg-white dark:bg-[var(--bg-dark-footer)] rounded-xl shadow-lg border border-amber-600 max-h-[calc(100vh-9rem)] overflow-x-hidden overflow-y-auto scrollable-container  transform transition-transform duration-300`}
            >
              <LibraryItem />
              
            </div>
    )
}