import {Tabs} from 'antd';
import {UilBriefcase, UilGraduationCap} from "@iconscout/react-unicons";

const {TabPane} = Tabs;
const state = {size: 'large'};

const Demo = () => (
    <Tabs defaultActiveKey="Education" centered>
        <TabPane tab={
            <span className={"d-flex"}>
              <UilGraduationCap className={"text-primary-color"} style={{"height": "100%", "width": "1.8em","justifyContent":"center"}}/>
              <h4 className={"m-0 d-flex align-items-center"}>Education</h4>
            </span>
        } size={state.size} key="Education">
            <div className="elementor-element elementor-element-47441a70 extra-width elementor-widget elementor-widget-coco-timeline">
                <div className="elementor-widget-container">
                    <ul className="timeline-holder global-background-color">
                        <li>
                            <span className="date">2016</span>
                            <p>
                                <b>2015 - 2016</b> placerat in massa consectetur
                                quisque. Nunc ac fames lectus in libero aliquet est setera nunc.
                            </p>
                        </li>
                        <li>
                            <span className="date">2017</span>
                            <p>
                                <b>2016 - 2017</b> Turpis metus sit diam purus leo in
                                variusquam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim
                                aliquam
                                euismod mauris in vitae viverra blandit lectus diam feugiat.
                            </p>
                        </li>
                        <li>
                            <span className="date">2019</span>
                            <p>
                                <b>2017 - 2019</b> Nunc amet tristique volutpat
                                adipiscing vulputate phasellus. Eget enim aliquam euismod.
                            </p>
                        </li>
                        <li>
                            <span className="date">2023</span>
                            <p>
                                <b>2019 - 2023</b> Eget enim aliquam euismod mauris in
                                vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sit diam
                                purus
                                leo in varius.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </TabPane>
        <TabPane tab={
            <span className={"d-flex"}>
              <UilGraduationCap className={"text-primary-color"} style={{"height": "100%", "width": "1.8em"}}/>
              <h4 className={"m-0 d-flex align-items-center"}>Internship</h4>
            </span>
        } key="Internship">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab={
            <span className={"d-flex"}>
              <UilBriefcase className={"text-primary-color"} style={{"height": "100%", "width": "1.8em"}}/>
              <h4 className={"m-0 d-flex align-items-center"}>Word</h4>
            </span>
        } key="Work">
            Content of Tab Pane 2
        </TabPane>
    </Tabs>
);

const Qualification = () => {
    return (
        <section className="w-100 h-full my-auto py-4 container section__block">
            <h1 className="d-flex justify-content-center section__title">Qualification</h1>
            <h3 className="d-flex justify-content-center section__subtitle">My technical level</h3>
            <div className={"container"}>
                <Demo/>
            </div>

        </section>
    )
}

export default Qualification;
