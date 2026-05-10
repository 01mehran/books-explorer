import CloseSvgIcon from "./CloseSvgIcon";

export default function ClearFilterButton() {
  return (
    <div className="mt-4 flex justify-end">
      <button
        id="clear-filters-btn"
        className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium text-black transition-all hover:text-black/70"
      >
        <CloseSvgIcon />
        Clear Filters
      </button>
    </div>
  );
}
