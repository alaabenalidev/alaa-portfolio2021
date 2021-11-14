import {ChevronDoubleDownIcon, MenuAlt3Icon, MoonIcon} from "@heroicons/react/outline";
import {
    UilGithubAlt,
    UilInstagram,
    UilLinkedinAlt,
    UilMessage
} from "@iconscout/react-unicons";


const Welcoming = () => {
    return (
        // lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2
        <section className="w-full h-screen bg-gray-300">
            <div className="flex grid grid-cols-6 gap-x-4 h-full">
                <div className="flex order-1 justify-center items-center col-span-1">
                    <div className="block">
                        <a href="" target="_blank" className="text-secondary_color">
                            <UilLinkedinAlt
                                className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7 mx-3 my-3 hover:text-primary_color"/>
                        </a>
                        <a href="" target="_blank" className="text-secondary_color ">
                            <UilGithubAlt className="h-7 w-7 mx-3 my-3 hover:text-primary_color"/>
                        </a>
                        <a href="" target="_blank" className="text-secondary_color">
                            <UilInstagram className="h-7 w-7 mx-3 my-3 hover:text-primary_color"/>
                        </a>
                    </div>
                    {/*<UilGithubAlt className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
                    {/*<UilInstagram className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
                </div>


                <div className="flex order-3 lg:order-2 items-center justify-center col-span-6 lg:col-span-2">
                    <div className="block text-left">
                        <h1 className="text-3xl font-semibold md:text-3xl lg:text-5xl text-primary_color">Hi, I'am Alaa
                            Eddine</h1>
                        <h3 className="text-xl text-gray-500">Frontend developer</h3>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                            tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href=""
                           className="flex bg-secondary_color text-white_sc_color font-semibold py-2 px-4 rounded-md inline-flex items-center hover:text-black_pr_color hover:bg-secondary_color">Contact
                            Me <UilMessage className="w-5 h-5 ml-2"/></a>
                    </div>
                </div>

                <div
                    className="flex order-2 lg:order-3 block justify-center items-center col-span-5 lg:col-span-3">
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        className="w-8/12"/>
                </div>
            </div>
            {/*<div className="flex justify-center items-end">
                    <a className="bg-transparent text-secondary_color hover:text-black_pr_color items-center rounded-md font-thin md:font-semibold lg:font-semibold  py-1 px-2 my-2 inline-flex cursor-pointer"><span className="hidden sm:inline-block">Scroll
                        Down </span> <ChevronDoubleDownIcon className="h-6 w-6 sm:h-4 sm:w-4 my-2 mx-2"/></a>
                </div>
                <div className=" flex justify-center items-center">
                </div>
            </div>*/}

        </section>
    )
}

export default Welcoming
