// Type;
import type { TCloseSvgIconProps } from "../types/types";

export default function CloseSvgIcon({
  height = 4,
  width = 4,
}: TCloseSvgIconProps) {
  return (
    <svg
      className={`h-${height} w-${width}`}
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
  );
}
