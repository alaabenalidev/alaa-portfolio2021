import {UilNavigator} from "@iconscout/react-unicons";

const ContactBanner = () => {
    return (
        <section className={"w-100 h-full my-auto py-4 container section__block"}>
            <div className={"row w-75 rounded bannerContact"}>
                <div className={"col-12 col-md-7 p-5"}>
                    <p className={"banner__contact-title"}>You have a new project</p>
                    <p className={"banner__contact-description"}>Contact me now and get a 30% discount on your new project</p>
                    <button type={"button"} className={"btn btn-secondary btn-rounded"}>Contact Me <UilNavigator/></button>
                </div>
                <div className={"col-12 col-md-5 pb-0"}>
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="firstImage"
                        className={"w-75"}/>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner;
