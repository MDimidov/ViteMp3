import PlaylistItem from "./PlaylistItem";
import { usePlaylistContext } from "../../../contexts/PlaylistContext";

export function Playlist() {
  const { isPlaylistOn } = usePlaylistContext();

  return (
    // <div className="absolute right-0 max-top-16 bottom-19 w-1/4 bg-white dark:bg-(--bg-dark-footer) rounded-xl shadow-lg border border-amber-600">
    <div
      className={`fixed right-0 bottom-19 w-1/4 bg-white dark:bg-[var(--bg-dark-footer)] rounded-xl shadow-lg border border-amber-600 max-h-[calc(100vh-9rem)] overflow-x-hidden overflow-y-auto scrollable-container  transform transition-transform duration-300 ${isPlaylistOn ? "translate-y-0" : "translate-y-full"}`}
    >
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
  );
}
