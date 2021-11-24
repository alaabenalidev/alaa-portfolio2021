import {
    UilFacebook,
    UilInstagramAlt,
    UilLinkedin,
    UilYoutube
} from "@iconscout/react-unicons";

const Footer = () => {
    return (
        <footer className="footer-16371">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-center">
                        <div className="footer-site-logo mb-4">
                            <a href="#">Alaa Eddine Ben Ali</a>
                        </div>
                        <ul className="list-unstyled nav-links mb-5">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="social mb-4">
                            <h3>Stay in touch</h3>
                            <ul className="list-unstyled">
                                <li className="in"><a href="#"><UilInstagramAlt className={"mx-2 span-logo"}/></a></li>
                                <li className="fb"><a href="#"><UilFacebook className={"mx-2 span-logo"}/></a></li>
                                <li className="li"><a href="#"><UilLinkedin className={"mx-2 span-logo"}/></a></li>
                                <li className="yt"><a href="#"><UilYoutube className={"mx-2 span-logo"}/></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p className="mb-0"><small>© Colorlib. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
