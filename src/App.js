import './App.css';
import EmpowerPart from './components/EmpowerPart/EmpowerPart';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import GetInTouch from './components/getintouch/GetInTouch';
import Header from './components/header/Header';
import Home from './components/home/Home';
import More from './components/more/More';
import Services from './components/services/Services';
import Subscribe from './components/subscribe/Subscribe';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
        <Services />
        <More />
        <Testimonials />
        <EmpowerPart />
        <Subscribe />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

export default App;
