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
import Qualification from "./blocks/Qualification";
import Services from "./blocks/Services";
import ContactBanner from "./blocks/ContactBanner";
import ContactMe from "./blocks/ContactMe";
import {useState} from "react";

// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",



function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark-theme' : '');
  return (
      <div className={'App '+theme}>
          <Header/>
          <Welcoming/>
          <AboutMe/>
          <Skills/>
          <Qualification/>
          <Services/>
          <Portfolio/>
          <ContactBanner/>
          <ContactMe/>
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
