import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header'
import Welcoming from './blocks/Welcoming'

// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",

function App() {
  return (
      <div className="App">
          <Header/>
          <Welcoming/>
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
