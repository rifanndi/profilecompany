import About from "./About";
import Services from "./Services";
//import MyCustomCarousel from "../MyCarousel";
//import MyCustomCarousell from "./produkgrid";
//!import Contact from "./Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Services />

        <About />
      </main>
    </>
  );
}
export default Main;
