import './App.css';
import Home from './potfolio_container/Home/Home';
import About_us from './potfolio_container/AboutMe/About_us';
import Achivements from './potfolio_container/AboutMe/Certification/Achivements';
import ContactUs  from './potfolio_container/AboutMe/ContactMe/Contact';
import Footer_bot from './potfolio_container/footer/Footer_bot';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='#Home' element={<Home/>}/>
      <Route path='#About_us' element={<About_us/>}/>
      <Route path='#Achivements' element={<Achivements/>}/>
      <Route path='#ContactUs' element={<ContactUs/>}/>
      <Route path='#Footer' element={<Footer_bot/>}/>
     </Routes>
     </BrowserRouter>
      <Home/>
      <About_us/>
      <Achivements/>
      <ContactUs/>
      <Footer_bot/>
    </div>
  );
}

export default App;
