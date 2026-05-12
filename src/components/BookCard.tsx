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
      className="shadow-book hover:shadow-book-hover cursor-pointer overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: "0ms" }}
    >
      <div className="bg-sepia-100 relative aspect-3/4 overflow-hidden">
        <img
          src={cover}
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <span className="bg-sepia-800/80 text-cream rounded px-2 py-0.5 text-xs font-medium uppercase">
            {book.languages}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sepia-800 mb-1 line-clamp-2 leading-tight font-bold">
          {book.title}
        </h3>
        <p className="text-sepia-600 mb-3 line-clamp-1 text-sm">
          {book.authors[0] ? book.authors[0]?.name : "Unknown Author"}
        </p>
        <div className="text-sepia-500 flex items-center text-sm">
          <DownloadSvgIcon />
          {book.download_count.toLocaleString()} downloads
        </div>
      </div>
    </article>
  );
}
