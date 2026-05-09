import type { TModal } from "../types/types";

// Static cover;
import img from "../cover.jpg";

export default function BookDetailisModalOpen({
  isModalOpen,
  selectedBook,
  setIsModalOpen,
}: TModal) {
  // Authors;
  const authors =
    selectedBook.authors.length > 0
      ? selectedBook.authors.map((author) => author.name).join(", ")
      : "unknown author";

  return (
    <section
      onClick={() => setIsModalOpen(false)}
      className={`fixed inset-0 z-50 ${isModalOpen ? "block" : "hidden"} flex h-full w-full items-center justify-center bg-black/70 backdrop-blur-xs`}
    >
      <main className="relative mx-4 flex h-75 w-full max-w-150 rounded-lg bg-white/90 shadow-sm">
        {/*----  Close button ----*/}
        <button
          onClick={() => setIsModalOpen(false)}
          className="ease absolute top-2 right-4 z-10 cursor-pointer rounded-full transition duration-200 hover:opacity-70"
        >
          <svg
            className="h-6 w-6"
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
        </button>

        {/*Book Cover  */}
        <div className="h-full w-60">
          <img
            className="h-full w-full rounded-lg object-center"
            src={img}
            alt={`Cover of ${selectedBook.title}`}
          />
        </div>

        {/* Book Details */}
        <div className="flex w-full flex-col justify-evenly p-2 pt-7">
          {/* Title */}
          <h1 className="text-sm tracking-tight">
            Book Title:{" "}
            <span className="text-black/80 italic">{selectedBook.title}</span>
          </h1>

          {/* Authors */}
          <p className="text-sm tracking-tight">
            Author(s): <span className="text-black/80 italic">{authors}</span>
          </p>

          {/* Summariesa */}
          <p className="h-auto text-sm tracking-tight">
            Summaries:{" "}
            <span className="block h-26 overflow-scroll text-black/80 italic">
              {selectedBook.summaries?.[0]}
            </span>
          </p>

          {/* languages */}
          <p className="text-sm tracking-tight">
            Language(s):{" "}
            <span className="text-black/80 italic">
              {selectedBook.languages.join(",")}
            </span>
          </p>

          {/* Downloaded Count */}
          <div className="flex items-center gap-1 text-sm tracking-tight">
            downloads:{" "}
            <span className="text-black/80 italic">
              {selectedBook.download_count.toLocaleString()}
            </span>
            <svg
              className="mr-1.5 h-4 w-4 text-black/80"
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
          </div>
        </div>
      </main>
    </section>
  );
}
