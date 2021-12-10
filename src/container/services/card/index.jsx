import { UilArrowRight } from "@iconscout/react-unicons";
import parse from 'html-react-parser'
import React from 'react'

const ServiceCard = ({data}) => {
    return (
        <div className={"services-content m-2"}>
            <div>
                <i className={"uil "+data.icon.component+ " "+data.icon.className} ></i>
                <h3 className={"services__title h3 mb-1 fw-normal"}>{parse(data.name)}</h3>
            </div>
            <span className={"btn d-flex btn-sm btn-link services__button"} data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                View More <UilArrowRight className={"button__icon"}/>
            </span>
        </div>
    )
}

export default ServiceCard;
