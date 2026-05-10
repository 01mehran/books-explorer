// Hooks;
import { useEffect } from "react";

// Static cover;
import cover from "../cover.jpg";

// Types
import type { TBookCardProps } from "../types/types";
import DownloadSvgIcon from "./DownloadSvgIcon";

export default function BookCard({
  book,
  setIsModalOpen,
  setSelectedBook,
  isModalOpen,
}: TBookCardProps) {
  // Hidden body scroll when modal box is open;
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <article
      onClick={() => {
        setSelectedBook(book);
        setIsModalOpen(true);
      }}
      className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1"
    >
      <div className="bg-sepia-100 relative aspect-3/4 overflow-hidden">
        <img
          src={cover}
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <span className="rounded bg-[#212121] px-2 py-0.5 text-xs font-medium text-[#fafafa] uppercase">
            {book.languages}
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
          <DownloadSvgIcon />
          {book.download_count.toLocaleString()} downloads
        </div>
      </div>
    </article>
  );
}
