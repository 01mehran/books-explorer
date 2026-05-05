export default function Footer() {
  return (
    <footer className="mt-auto bg-[#212121] px-4 py-8 text-[#bdbdbd]">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2">
          Data provided by{" "}
          <a
            href="https://gutendex.com/"
            target="_blank"
            rel="noopener"
            className="text-[#26a69a] underline"
          >
            Gutendex API
          </a>
        </p>
        <p className="text-sm text-[#757575]">
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
