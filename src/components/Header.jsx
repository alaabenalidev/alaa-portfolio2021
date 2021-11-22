import {MoonIcon, MenuAlt3Icon} from '@heroicons/react/outline'
import {
    UilBriefcase,
    UilEstate,
    UilFile, UilGithubAlt, UilInstagram, UilLinkedinAlt,
    UilMessage,
    UilMoon,
    UilScenery,
    UilSun,
    UilUser
} from '@iconscout/react-unicons'

const Header = () => {
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

            <nav id="navbar_top" className="navbar navbar-expand-lg bg-primary navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="javascript(0):void;">Brand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuAlt3Icon
                            className="h-7 w-7 text-primary-color cursor-pointer m-2"/>
                    </button>
                    <div className="collapse navbar-collapse bg-gray-300" id="main_nav">


                        <ul className="navbar-nav ms-auto">
                            {/*<li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                   aria-expanded="false"> Dropdown right </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                                </ul>
                            </li>*/}
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
                                <a href="javascript(0):void;"
                                   className="nav-link">
                                <UilMoon className="h-5 w-5 text-purple-700 hover:text-blue-700 cursor-pointer"/>
                                <UilSun className="h-5 w-5 text-purple-700 hover:text-blue-700 cursor-pointer"/>
                            </a></li>
                            {/*<a href=""*/}
                            {/*   className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log*/}
                            {/*    In</a>*/}
                            {/*<a href=""*/}
                            {/*   className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign*/}
                            {/*    Up</a>*/}
                        </ul>

                    </div>
                </div>
            </nav>

            {/*Navbar goes here */}
            {/*<nav className="bg-gray-300 full shadow-sm fixed w-full z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/*Website Logo */}
            {/*<a href="javascript(0):void;" className="flex items-center justify-center py-4 px-2">
                                    <span
                                        className="font-semibold text-gray-500 text-lg tracking-widest">Alaa Eddine</span>
                                </a>
                            </div>*/}
            {/*Primary Navbar items*/}
            {/*<div className="hidden md:flex items-center space-x-1">*/}
            {/*    <a href=""*/}
            {/*       className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>*/}
            {/*    <a href=""*/}
            {/*       className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>*/}
            {/*    <a href=""*/}
            {/*       className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>*/}
            {/*    <a href=""*/}
            {/*       className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact*/}
            {/*        Us</a>*/}
            {/*</div>*/}
            {/*</div>
                        {/*Secondary Navbar items*/}
            {/*<div className="hidden md:flex items-center space-x-3 ">
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-purple-700 font-bold flex active">
                                <UilEstate className=" w-5 h-5 uil uil-estate mr-1"/> Home
                            </a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex">
                                <UilUser className="w-5 h-5 uil uil-estate mr-1"/> About</a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex">
                                <UilFile className=" w-5 h-5 uil uil-estate mr-1"/> Skills</a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex">
                                <UilBriefcase className=" w-5 h-5 uil uil-estate mr-1"/> Services</a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex">
                                <UilScenery className=" w-5 h-5 uil uil-estate mr-1"/> Portfolio
                            </a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex">
                                <UilMessage className=" w-5 h-5 uil uil-estate mr-1"/> ContactMe
                            </a>
                            <a href="javascript(0):void;"
                               className="py-4 px-2 text-purple-700 font-semibold hover:text-purple-700 transition duration-300">
                                <UilMoon className="h-5 w-5 text-purple-700 hover:text-blue-700 cursor-pointer"/>
                                <UilSun className="h-5 w-5 text-purple-700 hover:text-blue-700 cursor-pointer"/>
                            </a>
                            {/*<a href=""*/}
            {/*   className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log*/}
            {/*    In</a>*/}
            {/*<a href=""*/}
            {/*   className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign*/}
            {/*    Up</a>*/}
            {/*</div>
                        {/*Mobile menu button*/}
            {/*<div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <MoonIcon className="h-6 w-6 text-gray-500 hover:text-purple-700 cursor-pointer m-2"/>
                            </button>
                            <button className="outline-none mobile-menu-button">
                                <MenuAlt3Icon
                                    className="h-6 w-6 text-gray-500 hover:text-purple-700 cursor-pointer m-2"/>
                            </button>
                        </div>
                    </div>
                </div>
                {/*mobile menu*/}
            {/*<div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active">
                            <a href="index.html"
                               className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                                <i className="uil uil-estate"></i>Home
                            </a>
                        </li>
                        <li><a href="#services"
                               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>
                        </li>
                        <li><a href="#about"
                               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a>
                        </li>
                        <li><a href="#contact"
                               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact
                            Us</a>
                        </li>
                    </ul>
                </div>
            {/* </nav>*/}
        </header>
    )
}

export default Header
