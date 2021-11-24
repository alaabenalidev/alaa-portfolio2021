import {Tabs} from 'antd';
import {UilBriefcase, UilGraduationCap} from "@iconscout/react-unicons";

const {TabPane} = Tabs;
const state = {size: 'large'};

const Demo = () => (
    <Tabs defaultActiveKey="Education" centered>
        <TabPane tab={
            <span className={"d-flex"}>
              <UilGraduationCap className={"text-primary-color"} style={{"height": "100%", "width": "1.8em"}}/>
              <h4 className={"m-0 d-flex align-items-center"}>Education</h4>
            </span>
        } size={state.size} key="Education">
            <div className={"qualification__tabs mb-2"}>
                <div className={"qualification__data"}>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
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
        <section className="w-100 h-full my-auto py-4 bg-gray-300 container">
            <h1 className="d-flex text-primary-color fw-bold justify-content-center">Qualification</h1>
            <h4 className="text-secondary d-flex justify-content-center">My technical level</h4>
            <div className={"container"}>
                <Demo/>
            </div>
            <div className={"qualification__tabs mb-2"}>
                <div className={"qualification__data"}>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
                    <div>
                        <h4>sqfsf</h4>
                        <p>sqfdsqfqds</p>
                        <p>2021/01/13</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
