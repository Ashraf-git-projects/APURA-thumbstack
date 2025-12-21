import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import Signup from "./sections/Signup";
import Ecosystem from "./sections/Ecosystem";
import Products from "./sections/Products";
import About from "./sections/About";
import Roadmap from "./sections/Roadmap";
import Support from "./sections/Support";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

function App() {
  return <>
  <Navbar />
  <Hero />
  <Signup />
  <Ecosystem />
  <Products/>
  <About />
  <Roadmap />
  <Support />
<Newsletter />
<Footer />
  </>
}
export default App;