import LogoFooter from "../assets/promoterslogo-footer.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from "react-router-dom"
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger"

    const withouSidebarRoutes = ["/Dashboard"];

const Footer = () => {

    const {pathname} = useLocation();
    const [beginAnim,setBeginAnim] = useState(false);
    
    
    // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
    // If that's true render null instead of the sidebar EDIT BY YOUSSEF

    if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

    return (
        <ScrollTrigger onEnter={() => {setBeginAnim(true)}} onExit={()=> {setBeginAnim(false)}} >
            <div className="footer">
            <div className="container footer-container">
                <div className="footer-inner ">
                    <div className="">
                        <img src={LogoFooter} width={180} alt="" />
                        <p className="footer-text">Promoters International has more than 20 years experience & the pioneer in Event Planning such as Concerts, Corporate Events, Conferences, Exhibitions & Activations.</p>
                    </div>
                    <div className="footer-nav">
                        <ul className="footer-nav-btns">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/#!/about">About Us</Link></li>
                            <li><Link to="/Events">Our Events</Link></li>
                            <li><Link to="/Contact">Contact us</Link></li>
                        </ul>
                        <div className="social w-100">
                            <div className={`social-icon-outer ${beginAnim ? `roll-in-right` : `d-none`}`}>
                                <a href="https://www.facebook.com/PromotersInternational/" className="social-icon " target="
                                _blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                            </div>
                            <div className={`social-icon-outer ${beginAnim ? `roll-in-late` : `d-none`}`}>
                                <a href="https://www.instagram.com/promotersinternational/?hl=en" className="social-icon " target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
            © 2019 PROMOTERS All Rights Reserved
            </div>
        </div>
        </ScrollTrigger>
    )
}

export default Footer
