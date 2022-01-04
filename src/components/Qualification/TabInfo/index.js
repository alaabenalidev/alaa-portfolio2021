import React from 'react'
import {Tabs} from 'antd';
import parse from 'html-react-parser'
import QualificationData from "../../../data/qualifications.json";

const {TabPane} = Tabs;

const MainData = QualificationData;
const size="large"

const tabInfo = ({}) => {
    return (
        <Tabs defaultActiveKey={MainData[0].tabTitle} centered>
            {MainData.map((single, key) => {
                return (
                    <TabPane tab={
                        <span className={"d-flex"}>
                        <i className={"text-primary-color uil " + single.tabIcon}
                           style={{"height": "100%", "font-size": "1.8em", "justifyContent": "center","fontWeight":"400 !important"}}></i>
                      <h4 className={"m-0 d-flex align-items-center"}>{single.tabTitle}</h4>
                    </span>
                    } size={size} key={single.tabTitle}>
                        <div
                            className="elementor-element elementor-element-47441a70 extra-width elementor-widget elementor-widget-coco-timeline">
                            <div className="elementor-widget-container">
                                <ul className="timeline-holder global-background-color">
                                    {single.tabInfo.map((singleTabInfo, key) => {
                                        return (
                                            <li key={key}>
                                                <span className="date">{parse(singleTabInfo.title)}</span>
                                                <p>
                                                    {parse(singleTabInfo.description)}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                )
            })}
        </Tabs>
    )
}
export default tabInfo;
