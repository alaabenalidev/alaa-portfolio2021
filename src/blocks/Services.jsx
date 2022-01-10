import {UilTimes} from "@iconscout/react-unicons";
import ServicesData from "../data/services.json";
import ServiceCard from "../container/services/card/index";
import React, {useState} from "react";


const Services = () => {

    const [serviceDataModal, setServiceDataModal] = useState({
        modalData: [],
        icon: {component: ''}
    });

    function handleCallback(childData) {
        setServiceDataModal(childData);
        console.log(childData)
    }

    return (
        <section className="w-100 h-full my-auto py-4 container">
            <h1 className="d-flex justify-content-center section__title">Services</h1>
            <h3 className="d-flex justify-content-center section__subtitle">My technical level</h3>
            <div className={"container"}>
                <div className={"row w-sm-75 w-md-75 w-lg-75"} style={{"margin": "0 auto"}}>
                    {ServicesData.map((single, key) => {
                        return (
                            <div className={"col-sm-12 col-md-6 col-12"}>
                                <ServiceCard key={key} data={single} parentCallback={handleCallback}/>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <i className={"uil " + serviceDataModal.icon.component + " me-2"}></i>
                                {serviceDataModal.modalTitle}
                            </h5>
                            <UilTimes className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {serviceDataModal.modalData.map((datax, key) => {
                                    return (
                                        <p className={'data--services'} key={key}>
                                            {datax.text}
                                        </p>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
