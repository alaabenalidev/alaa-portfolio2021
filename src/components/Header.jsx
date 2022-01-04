import {
    UilApps,
    UilBriefcase,
    UilEstate,
    UilFile, UilGithubAlt, UilInstagram, UilLinkedinAlt,
    UilMessage,
    UilMoon,
    UilScenery,
    UilSun, UilTimes,
    UilUser
} from '@iconscout/react-unicons'

import jQuery from 'jquery'
import {useState} from "react";

const Header = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultDark ? 'dark-theme' : '');

    const switchTheme = () => {
        const newTheme = theme === '' ? 'dark-theme' : '';
        setTheme(newTheme)
        if (theme === '') {
            setTheme(newTheme)
            jQuery('.App').addClass(newTheme)
        } else {
            setTheme(newTheme)
            jQuery('.App').removeClass(theme)
        }

    }
    return (
        <header>
            <div className="bg-primary-color py-2" id={"top_nav"}>
                <div className="container d-flex justify-content-end text-white">
                    <div className={"d-flex"}>
                        <a href="javascript(0):void;" target="_blank" className="text-white">
                            <UilLinkedinAlt
                                className="w-auto mx-2 my-1 hover:text-purple-900"/>
                        </a>
                        <a href="javascript(0):void;" target="_blank" className="text-white ">
                            <UilGithubAlt className="w-auto mx-2 my-1 hover:text-purple-900"/>
                        </a>
                        <a href="javascript(0):void;" target="_blank" className="text-white">
                            <UilInstagram className="w-auto mx-2 my-1 hover:text-purple-900"/>
                        </a>
                    </div>
                    <div className={"my-1"}>
                        Language:
                    </div>
                </div>
            </div>

            <div className="mobile__navbar-nav collapse p-4 row g-4 rounded-top shadow" id="navbarToggleExternalContent">
                <div className={"d-flex justify-content-end mx-2 gy-0"} data-bs-toggle="collapse"
                     data-bs-target="#navbarToggleExternalContent" aria-expanded="false"
                     aria-label="Toggle navigation">
                    <UilTimes/>
                </div>

                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilEstate/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        Home
                    </div>
                </div>
                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilUser/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        About
                    </div>
                </div>
                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilFile/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        Skills
                    </div>
                </div>
                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilBriefcase/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        Services
                    </div>
                </div>
                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilScenery/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        Portfolio
                    </div>
                </div>
                <div className={"col-4 col-sm-3 nav-link"}>
                    <div className={"d-flex justify-content-center"}>
                        <UilMessage/>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        ContactMe
                    </div>
                </div>

            </div>

            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="javascript(0):void;">
                        <img src={require("../asstes/imgs/logo.png").default} alt={'Website logo'} width={"50%"}/>
                    </a>
                    <button className="navbar-toggler" type="button">
                        <div className={"d-flex"}>
                            <div onClick={switchTheme} className={"mx-2"}>
                                {theme !== 'dark-theme'
                                    ? <UilMoon/>
                                    : <UilSun/>
                                }
                            </div>
                            <UilApps className={"ms-2"} data-bs-toggle="collapse"
                                     data-bs-target="#navbarToggleExternalContent" aria-expanded="false"
                                     aria-label="Toggle navigation"/>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilEstate className=" w-5 h-5 uil uil-estate mr-1"/> Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilUser className="w-5 h-5 uil uil-estate mr-1"/> About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilFile className=" w-5 h-5 uil uil-estate mr-1"/> Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilBriefcase className=" w-5 h-5 uil uil-estate mr-1"/> Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilScenery className=" w-5 h-5 uil uil-estate mr-1"/> Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                    <UilMessage className=" w-5 h-5 uil uil-estate mr-1"/> ContactMe
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href
                                   className={"nav-link"} onClick={switchTheme}>
                                    {theme !== 'dark-theme'
                                        ? <UilMoon/>
                                        : <UilSun/>
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
