const Portfolio = () => {
    return (
        <section className="w-100 h-full my-auto py-4 container section__block">
            <h1 className="d-flex justify-content-center section__title">Qualification</h1>
            <h3 className="d-flex justify-content-center section__subtitle">My technical level</h3>
            <div className={"container"}>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className={"container"}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <article className="postcard dark blue">
                                    <a className="postcard__img_link" href>
                                        <img className="postcard__img" src="https://picsum.photos/1000/1000"
                                             alt="Image Title"/>
                                    </a>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title blue"><a href>Podcast Title1</a></h1>
                                        <div className="postcard__subtitle small">
                                            <time dateTime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                            Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim,
                                            commodi quia,
                                            doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora
                                            reiciendis molestiae
                                            repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla
                                            unde ipsum
                                            dolores nobis enim quidem excepturi, illum quos!
                                        </div>
                                        <ul className="postcard__tagbox">
                                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                            <li className="tag__item play blue">
                                                <a href><i className="fas fa-play mr-2"></i>Play Episode</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div className="carousel-item">
                                <article className="postcard light blue ">
                                    <a className="postcard__img_link" href>
                                        <img className="postcard__img" src="https://picsum.photos/1000/1000"
                                             alt="Image Title"/>
                                    </a>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title blue"><a href>Podcast Title</a></h1>
                                        <div className="postcard__subtitle small">
                                            <time dateTime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                            Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim,
                                            commodi quia,
                                            doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora
                                            reiciendis molestiae
                                            repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla
                                            unde ipsum
                                            dolores nobis enim quidem excepturi, illum quos!
                                        </div>
                                        <ul className="postcard__tagbox">
                                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                            <li className="tag__item play blue">
                                                <a href><i className="fas fa-play mr-2"></i>Play Episode</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div className="carousel-item">
                                <article className="postcard light blue">
                                    <a className="postcard__img_link" href>
                                        <img className="postcard__img" src="https://picsum.photos/1000/1000"
                                             alt="Image Title"/>
                                    </a>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title blue"><a href>Podcast Title</a></h1>
                                        <div className="postcard__subtitle small">
                                            <time dateTime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                            Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim,
                                            commodi quia,
                                            doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora
                                            reiciendis molestiae
                                            repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla
                                            unde ipsum
                                            dolores nobis enim quidem excepturi, illum quos!
                                        </div>
                                        <ul className="postcard__tagbox">
                                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                            <li className="tag__item play blue">
                                                <a href><i className="fas fa-play mr-2"></i>Play Episode</a>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
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
