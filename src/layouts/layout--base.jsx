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
        </Fragment>
    )
}

export default BaseLayout
