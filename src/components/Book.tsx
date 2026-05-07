// Static image;
import cover from "../cover.jpg";

// Types
import type { BookProps } from "../types/types";

export default function Book({ book }: BookProps) {
  return (
    <article className="animate-fade-in animate-de cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1">
      <div className="bg-sepia-100 relative aspect-3/4 overflow-hidden">
        <img
          src={cover}
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <span className="rounded bg-[#212121] px-2 py-0.5 text-xs font-medium text-[#fafafa] uppercase">
            en
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 leading-tight font-bold text-[#212121]">
          {book.title}
        </h3>
        <p className="text-black-80 mb-3 line-clamp-1 text-sm">
          {book.authors[0] ? book.authors[0]?.name : "Unknown Author"}
        </p>
        <div className="flex items-center text-[14px] text-black/80">
          <svg
            className="mr-1.5 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          {book.download_count.toLocaleString()} downloads
        </div>
      </div>
    </article>
  );
}
