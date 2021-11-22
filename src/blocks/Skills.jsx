import {UilBracketsCurly, UilServerNetwork} from "@iconscout/react-unicons";
import {SiAngular, SiHtml5, SiCss3, SiJavascript, SiReact, SiPhp, SiSymfony, SiLaravel, SiNodedotjs, SiExpress, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from 'react-icons/si'
import {Progress} from 'antd';

const Skills = () => {
    return (
        <section className="w-100 h-full my-auto py-4 bg-gray-300 container">
            <h1 className="d-flex text-primary-color fw-bold justify-content-center">Skills</h1>
            <h4 className="text-secondary d-flex justify-content-center">My technical level</h4>
            <div className={"row h-auto g-4 "}>
                <div className={"col-12 col-sm-6"}>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseOne">
                                    <UilBracketsCurly className={"h-100 icon-accordion align-self-baseline mt-1"}/>
                                    <div className={"accordion-title d-flex flex-column align-self-start ms-2"}>
                                        <h4 className={"text-primary-color mb-1"}>Frontend</h4>
                                        <p className={"text-secondary m-0"}>More then 4 years</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <p className={"m-0 p-0"}>HTML<SiHtml5 className={"mx-1"}
                                                                          style={{"color": "#F16529"}}/></p>
                                    <Progress percent={90} size="default" showInfo={true} strokeColor={{
                                        '0%': '#9f7aea',
                                        '100%': '#6b46c1',
                                    }}/>
                                    <p className={"m-0 p-0"}>CSS<SiCss3 className={"mx-1"}
                                                                        style={{"color": "#1C88C7"}}/></p>
                                    <Progress percent={80} size="default" showInfo={true} strokeColor={{
                                        '0%': '#9f7aea',
                                        '100%': '#6b46c1',
                                    }}/>
                                    <p className={"m-0 p-0"}>Javascript<SiJavascript className={"mx-1"}
                                                                                     style={{"color": "#F7DF1E"}}/></p>
                                    <Progress percent={65} size="default" showInfo={true} strokeColor={{
                                        '0%': '#9f7aea',
                                        '100%': '#6b46c1',
                                    }}/>
                                    <p className={"m-0 p-0"}>Angular<SiAngular className={"mx-1"}
                                                                               style={{"color": "#DE3641"}}/></p>
                                    <Progress percent={75} size="default" showInfo={true} strokeColor={{
                                        '0%': '#9f7aea',
                                        '100%': '#6b46c1',
                                    }}/>
                                    <p className={"m-0 p-0"}>ReactJs<SiReact className={"mx-1"}
                                                                             style={{"color": "#61DBFB"}}/></p>
                                    <Progress percent={60} size="default" showInfo={true} strokeColor={{
                                        '0%': '#9f7aea',
                                        '100%': '#6b46c1',
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"col-12 col-sm-6"}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                <UilServerNetwork className={"h-100 icon-accordion align-self-baseline mt-1"}/>
                                <div className={"accordion-title d-flex flex-column align-self-start ms-2"}>
                                    <h4 className={"text-primary-color mb-1"}>Backend</h4>
                                    <p className={"text-secondary m-0"}>More then 4 years</p>
                                </div>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <p className={"m-0 p-0"}>PHP<SiPhp className={"mx-1"}
                                                                      style={{"color": "#8993C1"}}/></p>
                                <Progress percent={87} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>Symfony<SiSymfony className={"mx-1"}
                                                                    style={{"color": "#000000"}}/></p>
                                <Progress percent={63} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>Laravel<SiLaravel className={"mx-1"}
                                                                                 style={{"color": "#FD2E1F"}}/></p>
                                <Progress percent={69} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>NodeJs<SiNodedotjs className={"mx-1"}
                                                                           style={{"color": "#569B4A"}}/></p>
                                <Progress percent={85} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>ExpressJs<SiExpress className={"mx-1"}
                                                                         style={{"color": "#000000"}}/></p>
                                <Progress percent={87} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"col-12 col-sm-6"}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                <UilServerNetwork className={"h-100 icon-accordion align-self-baseline mt-1"}/>
                                <div className={"accordion-title d-flex flex-column align-self-start ms-2"}>
                                    <h4 className={"text-primary-color mb-1"}>Designer</h4>
                                    <p className={"text-secondary m-0"}>More then 2 years</p>
                                </div>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <p className={"m-0 p-0"}>Photoshop<SiAdobephotoshop className={"mx-1"}
                                                                   style={{"color": "#001833"}}/></p>
                                <Progress percent={55} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>Illustrator<SiAdobeillustrator className={"mx-1"}
                                                                           style={{"color": "#330000"}}/></p>
                                <Progress percent={67} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                                <p className={"m-0 p-0"}>Adobe Xd<SiAdobexd className={"mx-1"}
                                                                           style={{"color": "#2E001F"}}/></p>
                                <Progress percent={34} size="default" showInfo={true} strokeColor={{
                                    '0%': '#9f7aea',
                                    '100%': '#6b46c1',
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;
