import PortfolioData from '../data/portfolio.json'
import PortfolioCarouselItem from "../container/portfolio/carousel/item";

const Portfolio = () => {
    //console.log(PortfolioData[0].carouselItems)
    return (
        <section className="w-100 h-full my-auto py-4 container">
            <h1 className="d-flex justify-content-center section__title">Qualification</h1>
            <h3 className="d-flex justify-content-center section__subtitle">My technical level</h3>
            <div className={"container"}>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className={"container"}>
                        <div className="carousel-inner">
                            {PortfolioData[0].carouselItems.map((single, key) => {
                                const isActive = (key == 0) ? "active" : ""
                                return (
                                    <div className={"carousel-item " + isActive}>
                                        <PortfolioCarouselItem data={single} key={key}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <i className="uil uil-angle-left carousel__control-prev-icon" aria-hidden="true"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <i className="uil uil-angle-right carousel__control-next-icon" aria-hidden="true"></i>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </section>

    )
}

export default Portfolio;
