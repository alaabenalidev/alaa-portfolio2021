import {
    UilMessage
} from "@iconscout/react-unicons";

import WelcomeData from "../data/welcoming.json";
import SidebarProfiles from "../components/Welcoming/sidebar-profiles/index"


const Welcoming = () => {
    const iconsData = WelcomeData[0].icons
    return (
        <section className="w-100 h-100 container" style={{"paddingTop": "30px"}}>
            <div className="row w-100 align-items-center">
                <div className="col-2 col-sm-2 d-flex flex-column align-self-center order-1 welcoming-icons">
                    {iconsData.map((single,key) => {
                        return (
                                <SidebarProfiles key={key} data={{single}}/>
                        )
                    })}
                </div>
                <div className="col-12 col-sm-6 order-3 order-sm-2 d-flex flex-column">
                    <h1 className="home__title">{WelcomeData[0].title}<span className={"home__title-name"}>{WelcomeData[0].title_name}</span>
                        <img src={WelcomeData[0].title_img_src}
                                          alt={"waving-hand"}/></h1>
                    <h3 className="text-secondary home__subtitle">{WelcomeData[0].subtitle}</h3>
                    <p className="welcoming__description">{WelcomeData[0].description}</p>
                    <a href="javascript(0):void;"
                       className="w-50 btn bg-primary-color text-primary flex bg-purple-500 text-purple-700 font-semibold py-2 px-4 mt-1 rounded-md">Contact
                        Me <UilMessage className="w-5 h-5 ml-2"/></a>
                </div>
                <div className="col-10 col-sm-4 d-flex flex-column order-2 order-sm-3">
                    <img
                        src={require("../asstes/imgs/profile_welcoming.svg").default}
                        alt="firstImage"
                        className="w-11/12 md:w-8/12"/>
                </div>
            </div>

        </section>
    )
}

export default Welcoming
