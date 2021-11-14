const AboutMe = () => {
    return (
        <section className="w-full h-full my-auto py-4">
            <h1>About Me Page</h1>
            <h3>My introduction</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-5 h-auto ">
                <div className="flex justify-center md:justify-end items-center col-span-2">
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        className="w-8/12"/>
                </div>
                <div className="flex grid gap-4 col-span-3">
                    <div className="flex items-end">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="w-6/12 place-self-center self-start flex grid grid-cols-3 gap-3 items-start justify-center">
                        <h1>test1</h1>
                        <h1>test2</h1>
                        <h1>test3</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
