import {UilNavigator} from "@iconscout/react-unicons";
import {Link, animateScroll as scroll} from "react-scroll";

const ContactBanner = () => {
    return (
        <section className={"w-100 h-full my-auto py-4 container"}>
            <div className={"row w-100 w-sm-75 w-md-75 w-lg-75 rounded bannerContact"}>
                <div className={"col-12 col-md-7 p-5"}>
                    <p className={"banner__contact-title"}>You have a new project</p>
                    <p className={"banner__contact-description"}>Contact me now and get a 30% discount on your new project</p>
                    <Link to="ContactMe" spy={true} smooth={true} offset={-45} duration={500} className={"btn btn-secondary btn-rounded"}>Contact Me <UilNavigator/></Link>
                </div>
                <div className={"col-12 col-md-5 pb-0 d-flex justify-content-end"}>
                    <img
                        src={require("../asstes/imgs/contact_banner.png").default}
                        alt="firstImage"
                        className={"w-75"}/>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner;
