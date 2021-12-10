//import {ChevronDoubleDownIcon, MenuAlt3Icon, MoonIcon} from "@heroicons/react/outline";
import {
    UilGithubAlt,
    UilInstagram,
    UilLinkedinAlt,
    UilMessage
} from "@iconscout/react-unicons";


const Welcoming = () => {
    return (
        // lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2
        <section className="w-100 h-100 section__block" style={{"paddingTop": "30px"}}>
            <div className="row w-100 align-items-center">
                <div className="col-2 col-sm-2 d-flex flex-column align-self-center order-1 welcoming-icons">
                    <a href="javascript(0):void;" target="_blank" className="text-secondary d-block align-self-center">
                        <UilLinkedinAlt
                            className="mx-3 my-3 li"/>
                    </a>
                    <a href="javascript(0):void;" target="_blank" className="text-secondary d-block align-self-center">
                        <UilGithubAlt className="mx-3 my-3 gt"/>
                    </a>
                    <a href="javascript(0):void;" target="_blank" className="text-secondary d-block align-self-center">
                        <UilInstagram className="mx-3 my-3 in"/>
                    </a>
                </div>
                <div className="col-12 col-sm-6 order-3 order-sm-2 d-flex flex-column">
                    <h1 className="home__title">Hi, I'm <span className={"home__title-name"}>Alaa
                        Eddine</span><img src="https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png" alt={"waving-hand"}/></h1>
                    <h3 className="text-xl text-secondary home__subtitle">Frontend developer</h3>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                        tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="javascript(0):void;"
                       className="w-50 btn bg-primary-color text-primary flex bg-purple-500 text-purple-700 font-semibold py-2 px-4 mt-4 rounded-md">Contact
                        Me <UilMessage className="w-5 h-5 ml-2"/></a>
                </div>
                <div className="col-10 col-sm-4 d-flex flex-column order-2 order-sm-3">
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="firstImage"
                        className="w-11/12 md:w-8/12"/>
                </div>
            </div>
            {/*<div className="flex grid grid-cols-6 gap-x-4">
                <div className="flex order-1 justify-center items-center col-span-1">
                    <div className="block">
                        <a href="javascript(0):void;" target="_blank" className="text-purple-700">
                            <UilLinkedinAlt
                                className="h-9 w-9 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                        <a href="javascript(0):void;" target="_blank" className="text-purple-700 ">
                            <UilGithubAlt className="h-9 w-9 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                        <a href="javascript(0):void;" target="_blank" className="text-purple-700">
                            <UilInstagram className="h-9 w-9 mx-3 my-3 hover:text-purple-700"/>
                        </a>
                    </div>
                    {/*<UilGithubAlt className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
            {/*<UilInstagram className="h-6 w-6 mx-3 my-3 text-purple-700"/>*/}
            {/*</div>


                <div className="flex order-3 lg:order-2 items-center justify-center col-span-6 lg:col-span-2">
                    <div className="text-left">
                        <h1 className="text-3xl font-semibold md:text-3xl lg:text-5xl text-purple-700">Hi, I'am Alaa
                            Eddine</h1>
                        <h3 className="text-xl text-gray-500">Frontend developer</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                            tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href="javascript(0):void;"
                           className="flex bg-purple-500 text-purple-700 font-semibold py-2 px-4 mt-4 rounded-md inline-flex items-center hover:text-purple-500 hover:bg-purple-700">Contact
                            Me <UilMessage className="w-5 h-5 ml-2"/></a>
                    </div>
                </div>

                <div
                    className="flex order-2 lg:order-3 block justify-center items-center col-span-5 lg:col-span-3">
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="firstImage"
                        className="w-11/12 md:w-8/12"/>
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
