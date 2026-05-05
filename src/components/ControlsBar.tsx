import ClearFilterButton from "./ClearFilterButton";

export default function ControlsBar() {
  return (
    <section id="controls" className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* ---- Search Input ---- */}
        <div className="lg:col-span-2">
          <label
            htmlFor="search-input"
            className="mb-2 block text-sm font-medium text-[#424242]"
          >
            Search by title or author
          </label>
          <div className="relative">
            <input
              type="text"
              id="search-input"
              placeholder="e.g., Pride and Prejudice, Jane Austen..."
              className="w-full rounded-lg border border-[#e0e0e0] bg-white px-4 py-3 pl-11 placeholder-[#9e9e9e] outline-0 transition-all focus:border-[#009688] focus:ring-1 focus:ring-[#009688]"
            />
            <svg
              className="absolute top-3.5 left-3.5 h-5 w-5 text-[#9e9e9e]"
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
        <div>
          <label
            htmlFor="language-filter"
            className="mb-2 block text-sm font-medium text-[#424242]"
          >
            Language
          </label>
          <div className="rounded-lg border border-[#e0e0e0] bg-[#f5f5f5] px-2 transition-all focus-within:ring-2 focus-within:ring-[#009688]">
            <select
              id="language-filter"
              className="w-full cursor-pointer rounded-lg px-4 py-3 text-[#212121] outline-0"
            >
              <option value="">All Languages</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
            </select>
          </div>
        </div>

        {/* ---- Sort Dropdown ---- */}
        <div>
          <label
            htmlFor="sort-select"
            className="mb-2 block text-sm font-medium text-[#424242]"
          >
            Sort by
          </label>
          <div className="rounded-lg border border-[#e0e0e0] bg-[#f5f5f5] px-2 transition-all focus-within:ring-2 focus-within:ring-[#009688]">
            <select
              id="sort-select"
              className="w-full cursor-pointer px-4 py-3 text-[#212121] outline-0"
            >
              <option value="downloads">Most Downloaded</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* ---- Clear Filters Button ---- */}
      <ClearFilterButton />
    </section>
  );
}
