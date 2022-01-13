
import parse from 'html-react-parser'
import React from 'react'



const PortfolioCarouselItem = ({data}) => {
    const imgItem= "../asstes/imgs/"+data.img
    return (
        <article className="postcard dark blue">
            <a className="postcard__img_link" href={data.url}
               target={"_blank"}>
                <img className="postcard__img"
                     src={require("../../../../asstes/imgs/"+data.img).default}
                     alt="Image Title"/>
            </a>
            <div className="postcard__text t-dark">
                <h1 className="postcard__title blue"><a
                    href={"https://alaa-dev-old.vercel.app/"} target={"_blank"}>{data.title}</a></h1>
                <div className="postcard__subtitle small">
                    <time dateTime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2"></i>{data.release_date}
                    </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{data.description}
                </div>
                <p className="postcard__tagbox">
                    Used language:{data.languages.map((lang,key)=>{
                            return(<span key={key}>{lang} ,</span>)
                    })}
                </p>
            </div>
        </article>
    )
}

export default PortfolioCarouselItem;
