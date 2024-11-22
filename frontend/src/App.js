import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/Main/HomePage'
import ContactForm from './containers/Main/ContactForm'
import AboutUs from './containers/Main/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage/>} />
      </Routes>

      <Routes>
        <Route path="/ContactPage" element={<ContactForm/>} />
      </Routes>

      <Routes>
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>

    </Router>

  );
}

export default App;
