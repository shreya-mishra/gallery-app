import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/screens/homeScreen";

function App() {
  return (
    <div className='App'>
      <Header />
      <main style={{ height: "93vh" }}>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
