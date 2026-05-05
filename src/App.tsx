// Components;
import ControlsBar from "./components/ControlsBar";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* ---- Header ---- */}
      <Header />
      {/* ---- Main Content ---- */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* ---- Controls Bar ---- */}
        <ControlsBar />
      </main>
    </>
  );
}

export default App;
