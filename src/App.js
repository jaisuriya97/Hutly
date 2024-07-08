import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GridOne from "./components/GridOne";
import GridTwo from "./components/GridTwo";
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <GridOne/>
      <GridTwo/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
