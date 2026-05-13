export default function Footer() {
  return (
    <footer className="bg-sepia-800 text-sepia-300 mt-auto px-4 py-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2">
          Data provided by{" "}
          <a
            href="https://gutendex.com/"
            target="_blank"
            rel="noopener"
            className="text-amber-400 underline"
          >
            Gutendex API
          </a>
        </p>
        <p className="text-sepia-500 text-sm">
          Books from{" "}
          <a
            href="https://www.gutenberg.org/"
            target="_blank"
            rel="noopener"
            className="underline hover:opacity-80"
          >
            {" "}
            Project Gutenberg{" "}
          </a>
          • Public Domain
        </p>
      </div>
    </footer>
  );
}
