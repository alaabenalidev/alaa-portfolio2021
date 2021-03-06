import AboutMeData from '../data/aboutMe.json'

const AboutMe = () => {
    const pageData = AboutMeData[0];
    return (
        <section className="w-100 h-full my-auto py-4 container" name={"About"}>
            <h1 className="d-flex section__title justify-content-center">{pageData.pageTitle}</h1>
            <h3 className="text-secondary section__subtitle d-flex justify-content-center">{pageData.pageSubtitle}</h3>
            <div className={"row h-auto w-100 gx-4"}>
                <div className={"col-12 col-sm-5 d-flex align-self-center justify-content-center"}>
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="secondImage"
                        className="w-75"/>
                </div>
                <div className={"col d-block align-self-center m-3"}>
                    <div className="row">
                        <p className={"about__description"}>{pageData.description}</p>
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
