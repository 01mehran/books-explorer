
export default function ClearFilterButton() {
  return (
    <div className="mt-4 flex justify-end">
      <button
        id="clear-filters-btn"
        className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium text-black transition-all hover:text-black/70"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Clear Filters
      </button>
    </div>
  );
}
