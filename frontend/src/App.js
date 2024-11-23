import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/Main/HomePage'
import About from './containers/Main/About';
import './styles/tailwind.css';
import Services from './containers/Main/ServicePage';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Routes>
        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
