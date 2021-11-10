import {MenuAlt3Icon, MoonIcon} from "@heroicons/react/outline";
import {Fragment} from "react";
import {UilGithubAlt, UilInstagram, UilLinkedinAlt, UilMessage} from "@iconscout/react-unicons";

const Welcoming = () => {
    return (
        // lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2
        <section className="flex w-full h-screen bg-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                <div className=" md:col-span-1 md:col-span-1 lg:col-span-1 flex order-1 justify-center items-center">
                    <div className="block">
                        <a href="" target="_blank" className=" text-purple-500">
                            <UilLinkedinAlt className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                        <a href="" target="_blank" className="text-purple-500 ">
                            <UilGithubAlt className="h-7 w-7 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                        <a href="" target="_blank" className="text-purple-500">
                            <UilInstagram className="h-7 w-7 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                    </div>
                    {/*<UilGithubAlt className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
                    {/*<UilInstagram className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
                </div>


                <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 flex order-3 lg:order-2 justify-center items-center">
                    <div className="block text-left">
                        <h1 className="text-5xl">Hi, I'am Alaa Eddine</h1>
                        <h3 className="text-xl text-gray-500">Frontend developer</h3>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href=""
                           className="flex bg-purple-700 text-white font-semibold py-2 px-4 rounded-md inline-flex items-center hover:bg-purple-700">Contact
                            Me <UilMessage className="w-5 h-5 ml-2"/></a>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-1 flex order-2 lg:order-3 block justify-center items-center">
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210131212956/Screenshot20210131212921.png"
                        style={{"width": "700px"}} className="block"/>
                </div>

            </div>

        </section>
    )
}

export default Welcoming
