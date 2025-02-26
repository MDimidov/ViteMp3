import PlaylistItem from "./PlaylistItem";
import styles from './PlaylistStyles.module.css'

export function Playlist() {
  return (
    // <div className="absolute right-0 max-top-16 bottom-19 w-1/4 bg-white dark:bg-(--bg-dark-footer) rounded-xl shadow-lg border border-amber-600">
    <div className={`absolute right-0 bottom-20 w-1/4 bg-white dark:bg-[var(--bg-dark-footer)] rounded-xl shadow-lg border border-amber-600 max-h-[calc(100vh-9rem)] overflow-x-hidden overflow-y-auto ${styles['playlist-scroll']}`}>
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
