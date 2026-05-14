import CloseSvgIcon from "./CloseSvgIcon";

type ThandleClearFilters = {
  handleClearFilters: () => void;
};

export default function ClearFilterButton({
  handleClearFilters,
}: ThandleClearFilters) {
  return (
    <div className="mt-4 flex justify-end">
      <button
        id="clear-filters-btn"
        className="text-sepia-600 hover:text-sepia-800 hover:bg-sepia-100 flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all"
        onClick={handleClearFilters}
      >
        <CloseSvgIcon />
        Clear Filters
      </button>
    </div>
  );
}
