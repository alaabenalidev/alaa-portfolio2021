import {UilFacebook, UilInstagramAlt, UilTwitter, UilYoutube} from "@iconscout/react-unicons";

const Footer = () => {
    return (
        <footer className="footer-59391">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4 mb-2">
                        <div className="site-logo">
                            <a href="#" className={"h1 fw-bold"}>Alaa Eddine Ben Ali</a>
                        </div>
                    </div>
                    <div className="col-md-8 text-md-right d-flex justify-content-end">
                        <ul className="list-unstyled social-icons">
                            <li className={"mx-1"}><a href="#" className="fb"><UilFacebook className={"d-flex span-logo"}/></a></li>
                            <li className={"mx-1"}><a href="#" className="tw"><UilTwitter className={"d-flex span-logo"}/></a></li>
                            <li className={"mx-1"}><a href="#" className="in"><UilInstagramAlt className={"d-flex span-logo"}/></a></li>
                            <li className={"mx-1"}><a href="#" className="yt"><UilYoutube className={"d-flex span-logo"}/></a></li>
                            {/*<li className={"mx-1"}><a href="#" className="dr"><span className="icon-dribbble"></span></a></li>
                            <li className={"mx-1"}><a href="#" className="yt"><span className="icon-play"></span></a></li>*/}
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 ">
                        <ul className="nav-links list-unstyled nav-left">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-md-right d-flex justify-content-end">
                        <ul className="nav-links list-unstyled nav-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Our works</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <div className="copyright">
                            <p><small>Copyright 2021. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
