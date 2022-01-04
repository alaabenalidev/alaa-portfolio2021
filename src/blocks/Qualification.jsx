import {Tabs} from 'antd';
import {UilBriefcase, UilGraduationCap} from "@iconscout/react-unicons";
import QualificationData from '../data/qualifications.json'
import SidebarProfiles from "../components/Welcoming/sidebar-profiles";
import TabInfo from "../components/Qualification/TabInfo";
import parse from "html-react-parser";
import React from "react";

const {TabPane} = Tabs;
const state = {size: 'large'};

const MainData = QualificationData;


const Qualification = () => {
    return (
        <section className="w-100 h-full my-auto py-4 container">
            <h1 className="d-flex justify-content-center section__title">Qualification</h1>
            <h3 className="d-flex justify-content-center section__subtitle">My technical level</h3>
            <div className={"container"}>
                <TabInfo/>
            </div>

        </section>
    )
}

export default Qualification;
