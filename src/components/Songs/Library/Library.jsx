import { LibrarySquareIcon, PlusIcon } from "lucide-react";
import LibraryItem from "./LibraryItem";
import { btnClass } from "../../../utils/utils";

export default function Library() {
  return (
    <aside
      className={`fixed left-0 bottom-18 w-1/4 bg-white dark:bg-[var(--bg-dark-footer)] rounded-xl shadow-lg border border-amber-600 max-h-[calc(100vh-8.5rem)] flex flex-col overflow-hidden transform transition-transform duration-300 max-md:hidden`}
    >
      {/* Header – винаги видим */}
      <div className="p-4 flex-none">
        <div className="flex gap-4 items-center justify-between">
          <LibrarySquareIcon className="w-6 h-6" />
          <p className="flex-1">Your Library</p>
          <button className={`${btnClass} text-gray-600 transition-colors`}>
            <PlusIcon />
          </button>
        </div>
      </div>

      {/* Scrollable съдържание */}
      <div className="flex-1 scrollable-container overflow-x-hidden overflow-y-auto transform transition-transform duration-300">
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
      </div>
    </aside>
  );
}
