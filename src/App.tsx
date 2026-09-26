import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
