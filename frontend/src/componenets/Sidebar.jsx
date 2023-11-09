import { useEffect, useState } from "react";
import HomeIcon from "../assets/sidebar/home-menu-icon.png"
import AboutIcon from "../assets/sidebar/about-menu-icon.png"
import EventIcon from "../assets/sidebar/event-menu-icon.png"
import ContactIcon from "../assets/sidebar/contact-menu-icon.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
    useEffect(() => {
        const handleMount = () => {
            const urlHash = window.location.hash;
            console.log(urlHash);
            if (urlHash.length) {
                const element = document.getElementById(urlHash.substring(1));
                console.log(element);
                if (element) {
                    element.scrollIntoView();
                }
            }
        };

        handleMount();

        // Cleanup function (optional)
        return () => {
            // Code to run on component unmount
        };
    }, [])

    const [showSidebar, setShowSidebar] = useState(false);

    const ToggleSidebar = () => {
        showSidebar === true ? setShowSidebar(false) : setShowSidebar(true);
    }
    return (
        <div>
            <button className="nav-button" onClick={ToggleSidebar}>
            </button>
            <div className={`${showSidebar === true ? 'menu-open' : ''}`}>
                <div id="body-overlay" onClick={ToggleSidebar} ></div>
                <nav className="real-menu" role="navigation">
                    <button className="closeBtn cross-button" onClick={ToggleSidebar}></button>
                    <ul>
                        <li>
                            <div>
                                <img src={HomeIcon} alt="" />
                            </div>
                            <Link to="/" onClick={ToggleSidebar}>Home</Link>

                        </li>
                        <li>
                            <div>
                                <img src={AboutIcon} alt="" />
                            </div>
                            <Link onClick={() => window.location.replace("/#about")} >About Us</Link>

                        </li>
                        <li>
                            <div>
                                <img src={EventIcon} alt="" />
                            </div>
                            <Link to="/Events" onClick={ToggleSidebar}>Our Events</Link>
                        </li>
                        <li>
                            <div>
                                <img src={ContactIcon} alt="" />
                            </div>
                            <Link to="/Contact" onClick={ToggleSidebar}>Contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
