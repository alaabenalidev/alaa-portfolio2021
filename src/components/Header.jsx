import {MoonIcon, MenuAlt3Icon} from '@heroicons/react/outline'
import {
    UilBriefcase,
    UilEstate,
    UilFile,
    UilMessage,
    UilMoon,
    UilScenery,
    UilSun,
    UilUser
} from '@iconscout/react-unicons'

const Header = () => {
    return (
        <header>
            {/*Navbar goes here */}
            <nav class="bg-gray-300 full shadow-sm fixed w-full z-10">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-7">
                            <div>
                                {/*Website Logo */}
                                <a href="#" class="flex items-center justify-center py-4 px-2">
                                    {/*<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"/>*/}
                                    <span class="font-semibold text-gray-500 text-lg tracking-widest">Alaa Eddine</span>
                                </a>
                            </div>
                            {/*Primary Navbar items*/}
                            {/*<div class="hidden md:flex items-center space-x-1">*/}
                            {/*    <a href=""*/}
                            {/*       class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>*/}
                            {/*    <a href=""*/}
                            {/*       class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>*/}
                            {/*    <a href=""*/}
                            {/*       class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>*/}
                            {/*    <a href=""*/}
                            {/*       class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact*/}
                            {/*        Us</a>*/}
                            {/*</div>*/}
                        </div>
                        {/*Secondary Navbar items*/}
                        <div class="hidden md:flex items-center space-x-3 ">
                            <a href=""
                               className="py-4 px-2 text-blue-700 border-b-4 border-blue-700 font-semibold flex">
                                <UilEstate className=" w-5 h-5 uil uil-estate mr-1"/> Home
                            </a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300 flex">
                                <UilUser className="w-5 h-5 uil uil-estate mr-1"/> About</a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300 flex">
                                <UilFile className=" w-5 h-5 uil uil-estate mr-1"/> Skills</a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300 flex">
                                <UilBriefcase className=" w-5 h-5 uil uil-estate mr-1"/> Services</a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300 flex">
                                <UilScenery className=" w-5 h-5 uil uil-estate mr-1"/> Portfolio
                            </a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300 flex">
                                <UilMessage className=" w-5 h-5 uil uil-estate mr-1"/> ContactMe
                            </a>
                            <a href=""
                               className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-700 transition duration-300">
                                <UilMoon className="h-5 w-5 text-gray-500 hover:text-blue-700 cursor-pointer"/>
                                <UilSun className="h-5 w-5 text-gray-500 hover:text-blue-700 cursor-pointer"/>
                            </a>
                            {/*<a href=""*/}
                            {/*   class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log*/}
                            {/*    In</a>*/}
                            {/*<a href=""*/}
                            {/*   class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign*/}
                            {/*    Up</a>*/}
                        </div>
                        {/*Mobile menu button*/}
                        <div class="md:hidden flex items-center">
                            <button class="outline-none mobile-menu-button">
                                <MoonIcon className="h-6 w-6 text-gray-500 hover:text-blue-700 cursor-pointer m-2"/>
                            </button>
                            <button className="outline-none mobile-menu-button">
                                <MenuAlt3Icon className="h-6 w-6 text-gray-500 hover:text-blue-700 cursor-pointer m-2"/>
                            </button>
                        </div>
                    </div>
                </div>
                {/*mobile menu*/}
                <div class="hidden mobile-menu">
                    <ul class="">
                        <li class="active">
                            <a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                                <i className="uil uil-estate"></i>Home
                            </a>
                        </li>
                        <li><a href="#services"
                               class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>
                        </li>
                        <li><a href="#about"
                               class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                        <li><a href="#contact"
                               class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
                {/*<script>*/}
                {/*    const btn = document.querySelector("button.mobile-menu-button");*/}
                {/*    const menu = document.querySelector(".mobile-menu");*/}

                {/*    btn.addEventListener("click", () => {*/}
                {/*    menu.classList.toggle("hidden");*/}
                {/*});*/}
                {/*</script>*/}
            </nav>
        </header>
    )
}

export default Header
