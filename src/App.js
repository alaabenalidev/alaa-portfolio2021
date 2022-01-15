import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import 'antd/dist/antd.css';
import BaseLayout from './layouts/layout--base'
import {useState} from "react";
function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark-theme' : '');
    return (

            <div className={'App ' + theme}>
                <BaseLayout/>
            </div>
    );
}

export default App;
