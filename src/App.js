import Navbar from './components/navbar/Navbar';
import './App.scss';
import Hero from './components/hero/Hero';
//import Test from './components/Test';


function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
      <section id='About'>About</section>
      {/* <Test /> */}

    </div>
  );
}

export default App;
