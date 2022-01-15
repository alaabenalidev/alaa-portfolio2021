import { Fragment} from "react";

import Header from '../components/Header'
import Welcoming from '../blocks/Welcoming'
import AboutMe from "../blocks/AboutMe";
import Skills from "../blocks/Skills";
import Footer from "../blocks/Footer";
import Portfolio from "../blocks/Portfolio";
import Qualification from "../blocks/Qualification";
import Services from "../blocks/Services";
import ContactBanner from "../blocks/ContactBanner";
import ContactMe from "../blocks/ContactMe";
import ScrollToTop from "react-scroll-to-top";
import {UilAngleUp} from "@iconscout/react-unicons";

function BaseLayout() {
    return (
        <Fragment>
            <Header/>
            <Welcoming/>
            <AboutMe/>
            <Skills/>
            <Qualification/>
            <Services/>
            <Portfolio/>
            <ContactBanner/>
            <ContactMe/>
            <Footer/>
            <ScrollToTop smooth component={<UilAngleUp className={"scrollTop-icon"}/>} />
        </Fragment>
    )
}

export default BaseLayout
