import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/Main/HomePage'
import ContactForm from './containers/Main/ContactForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage/>} />
      </Routes>

      <Routes>
        <Route path="/ContactPage" element={<ContactForm/>} />
      </Routes>

    </Router>

  );
}

export default App;
