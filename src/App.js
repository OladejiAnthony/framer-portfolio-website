import Navbar from './components/navbar/Navbar';
import './App.scss';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
//import Test from './components/Test';


function App() {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="service" />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>  
      
      {/* <Test /> */}

    </div>
  );
}

export default App;
