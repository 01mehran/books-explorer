export default function Header() {
  return (
    <header
      className="bg-linear-to-r from-teal-700 to-teal-600 px-4 py-8 text-white shadow-lg"
      style={{ background: "linear-gradient(135deg, #00695c, #009688)" }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="font-display mb-3 text-4xl font-bold tracking-wide md:text-5xl">
          📚 Gutendex Books Explorer
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#b2dfdb] md:text-xl">
          Discover thousands of free public domain books from Project Gutenberg
        </p>
      </div>
    </header>
  );
}
