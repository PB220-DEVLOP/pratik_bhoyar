import './App.css';
import Home from './potfolio_container/Home/Home';
import About_us from './potfolio_container/AboutMe/About_us';
import Achivements from './potfolio_container/AboutMe/Certification/Achivements';
import ContactUs  from './potfolio_container/AboutMe/ContactMe/Contact';
import Footer_bot from './potfolio_container/footer/Footer_bot';
function App() {
  return (
    <div className="App">
      <Home/>
      <About_us/>
      <Achivements/>
      <ContactUs/>
      <Footer_bot/>
    </div>
  );
}

export default App;
