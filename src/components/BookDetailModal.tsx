// Type;
import type { TModal } from "../types/types";

// Static cover;
import img from "../cover.jpg";

// Svg icon;
import DownloadSvgIcon from "./DownloadSvgIcon";
import CloseSvgIcon from "./CloseSvgIcon";

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
      className={`$ fixed inset-0 z-50 flex h-full w-full items-center justify-center`}
    >
      {/* <--- Backdrop --> */}
      <div
        id="modal-backdrop"
        onClick={() => setIsModalOpen(false)}
        className={`${isModalOpen ? "block" : "hidden"} absolute inset-0 bg-black/70 backdrop-blur-xs`}
      ></div>

      {/* Modal Content */}
      <main className="animate-fade-in-scale bg-cream shadow-modal relative mx-4 flex h-75 w-full max-w-150 rounded-lg">
        {/*----  Close button ----*/}
        <button
          onClick={() => setIsModalOpen(false)}
          className="ease absolute top-2 right-4 z-10 cursor-pointer rounded-full transition duration-200 hover:opacity-70"
        >
          <CloseSvgIcon height={5} width={5} />
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
            <DownloadSvgIcon textColor="text-black/80" />
          </div>
        </div>
      </main>
    </section>
  );
}
