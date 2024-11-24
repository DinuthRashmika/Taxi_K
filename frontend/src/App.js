import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/Main/HomePage'
import About from './containers/Main/About';
import './styles/tailwind.css';
import Services from './containers/Main/ServicePage';
import ContactForm from './containers/Main/ContactForm'
import AboutUs from './containers/Main/AboutUs';
import Nowform from './containers/Main/Reservation/Nowform';
import Google from './containers/Main/Reservation/googe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
      </Routes>

      <Routes>
        <Route path="/ContactPage" element={<ContactForm/>} />
      </Routes>

      <Routes>
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
      <Routes>
        <Route path="/form" element={<Nowform/>} />
      </Routes>
      <Routes>
        <Route path="/goo" element={<Google/>} />
      </Routes>


    </Router>

  );
}

export default App;
