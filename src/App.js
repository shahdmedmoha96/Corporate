import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import Works from './Component/Works';
import Teams from './Component/Teams';
import Testimonials from './Component/Testimonials';
import Pricing from './Component/Pricing';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <header id ="header">
      <Header/>
     </header>

     <main >
      <Hero />
      <About />
     <hr/>
     <Services/>
     <hr className='mt-5'/>
     <Works/>
     <hr className='mt-5'/>
     <Teams/>
     <Testimonials/>
     <Pricing/>
     <Blog/>
     <Contact/>
     </main>
     <footer id="footer">
      <Footer/>
     </footer>
    
    
     
    </div>
  );
}

export default App;
