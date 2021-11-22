const AboutMe = () => {
    return (
        <section className="w-100 h-full my-auto py-4 bg-gray-300 container">
            <h1 className="d-flex text-primary-color fw-bold justify-content-center">About Me Page</h1>
            <h4 className="text-secondary d-flex justify-content-center">My introduction</h4>
            <div className={"row h-auto w-100 gx-4"}>
                <div className={"col-12 col-sm-5 d-flex align-self-center justify-content-center"}>
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="secondImage"
                        className="w-75"/>
                </div>
                <div className={"col d-block align-self-center m-3"}>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className={"col d-flex flex-column align-items-center"}>
                            <h5 className={"fw-bold text-primary-color"}>+3 years</h5>
                            <p>Web developement</p>
                        </div>
                        <div className={"col d-flex flex-column align-items-center"}>
                            <h5 className={"fw-bold text-primary-color"}>+3 years</h5>
                            <p>Web developement</p>
                        </div>
                        <div className={"col d-flex flex-column align-items-center"}>
                            <h5 className={"fw-bold text-primary-color"}>+3 years</h5>
                            <p>Web developement</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
