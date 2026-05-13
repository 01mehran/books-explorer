// Components;
import ClearFilterButton from "./ClearFilterButton";

// Types;
import type { TControlsBarProps } from "../types/types";
import Select from "./select";

export default function ControlsBar({
  value,
  onChange,
  sortOption,
  setSortOption,
  selectedLanguage,
  setSelectedLanguage,
  handleClearFilters,
}: TControlsBarProps) {
  return (
    <section id="controls" className="shadow-book mb-8 rounded-xl bg-white p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* ---- Search Input ---- */}
        <div className="lg:col-span-2">
          <label
            htmlFor="search-input"
            className="text-sepia-700 mb-2 block text-sm font-medium"
          >
            Search by title or author
          </label>
          <div className="relative">
            <input
              type="text"
              id="search-input"
              placeholder="e.g., Pride and Prejudice, Jane Austen..."
              className="border-sepia-200 placeholder-sepia-400 w-full rounded-lg border bg-white px-4 py-3 pl-11 outline-0 transition-all focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
            <svg
              className="text-sepia-400 absolute top-3.5 left-3.5 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* ---- Language Filter ---- */}
        <Select
          id="language-filter"
          label="Language"
          options={[
            { value: "all", label: "All Languages" },
            { value: "en", label: "English" },
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "es", label: "Spanish" },
            { value: "it", label: "Italian" },
            { value: "pt", label: "Portuguese" },
          ]}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
        />

        {/* ---- Sort Dropdown ---- */}
        <Select
          id="sort-select"
          label="Sort by"
          options={[
            { value: "downloads", label: "Most Downloaded" },
            { value: "title", label: "Title A-Z" },
          ]}
          value={sortOption}
          onChange={setSortOption}
        />
      </div>

      {/* ---- Clear Filters Button ---- */}
      <ClearFilterButton handleClearFilters={handleClearFilters} />
    </section>
  );
}
