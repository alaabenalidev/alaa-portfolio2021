import {UilEnvelope, UilMapMarker, UilNavigator, UilPhoneAlt} from "@iconscout/react-unicons";

const ContactMe = () => {
    return (
        <section className="w-100 h-full my-auto py-4 container">
            <h1 className="d-flex justify-content-center section__title mb-1">Contact Me</h1>
            <h3 className="d-flex justify-content-center section__subtitle">Get in touch</h3>
            <div className={"container w-sm-75 w-md-75 w-lg-75 p-3"}>
                <div className={"row"}>
                    <div className={"col-12 col-md-5"}>
                        <div className={"d-flex mb-3"}>
                            <UilPhoneAlt className={"me-1 contactme__icon"}/>
                            <div>
                                <h4 className={"mb-1"}>Call Me</h4>
                                <p>(+216) 26 118 120</p>
                            </div>
                        </div>
                        <div className={"d-flex mb-3"}>
                            <UilEnvelope className={"me-1 contactme__icon"}/>
                            <div>
                                <h4 className={"mb-1"}>Email</h4>
                                <p>alaa.benali.dev@gmail.com</p>
                            </div>
                        </div>
                        <div className={"d-flex mb-3"}>
                            <UilMapMarker className={"me-1 contactme__icon"}/>
                            <div>
                                <h4 className={"mb-1"}>Location</h4>
                                <p>Soukrah, Ariana, Tunisia</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-7"}>
                        <div className={"row g-3 mb-3"}>
                            <div className={"col"}>
                                <div className={"rounded contactme__input p-3"}>
                                    <p className={"mb-1 contactme__input-title"}>Name</p>
                                    <input type={"text"} className={"w-100"} style={{
                                        "backgroundColor": "transparent",
                                        "border": "none",
                                        "outline": "none",
                                        "caretColor": "var(--first-color)"
                                    }}/>
                                </div>
                            </div>
                            <div className={"col"}>
                                <div className={"rounded contactme__input p-3"}>
                                    <p className={"mb-1 contactme__input-title"}>Email</p>
                                    <input type={"text"} className={"w-100"} style={{
                                        "backgroundColor": "transparent",
                                        "border": "none",
                                        "outline": "none",
                                        "caretColor": "var(--first-color)"
                                    }}/>
                                </div>
                            </div>
                        </div>

                        <div className={"rounded contactme__input p-3 mb-3"}>
                            <p className={"mb-1 contactme__input-title"}>Project</p>
                            <input type={"text"} className={"w-100"} style={{
                                "backgroundColor": "transparent",
                                "border": "none",
                                "outline": "none",
                                "caretColor": "var(--first-color)"
                            }}/>
                        </div>

                        <div className={"rounded contactme__input p-3 mb-3"}>
                            <p className={"mb-1 contactme__input-title"}>Message</p>
                            <textarea className={"w-100"} rows={7} style={{
                                "backgroundColor": "transparent",
                                "border": "none",
                                "outline": "none",
                                "caretColor": "var(--first-color)",
                                "resize": "none"
                            }}/>
                        </div>
                        <button type={"submit"} className={"btn btn-rounded btn-primary"}>Send Message <UilNavigator/>
                        </button>
                    </div>
                </div>
            </div>
        </section>)
}

export default ContactMe
