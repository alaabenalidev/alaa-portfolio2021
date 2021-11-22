//import logo from './logo.svg';
//import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header'
import Welcoming from './blocks/Welcoming'
import AboutMe from "./blocks/AboutMe";
import Skills from "./blocks/Skills";
import Footer from "./blocks/Footer";
import Portfolio from "./blocks/Portfolio";

// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",

function App() {
  return (
      <div className="App">
          <Header/>
          <Welcoming/>
          <AboutMe/>
          <Skills/>
          {/*<Portfolio/>*/}
          <Footer/>
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo"/>*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*      className="App-link"*/}
          {/*      href="https://reactjs.org"*/}
          {/*      target="_blank"*/}
          {/*      rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
      </div>
  );
}

export default App;
