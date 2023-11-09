import logo from "../assets/promoterslogo.svg"
import phone from "../assets/navbar/phone-icon.png"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";

const withouSidebarRoutes = ["/Dashboard"];

const Navbar = () => {
    const { pathname } = useLocation();
    const [text, setText] = useState("DRINK A COFFEE");
    const [navbarBgColor, setNavbarBgColor] = useState('rgba(0,0,0,0.2)');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
                setNavbarBgColor("#000");
            } else if (scrollPosition === 0) {
                setNavbarBgColor('rgba(0,0,0,0.2)'); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]); 
    
    // Validates if the current pathname includes one the routes you want to hide the sidebar is present on the current url
    // If that's true render null instead of the sidebar EDIT BY YOUSSEF

    if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
    return (
        <>
            <div className="header-outer fixed" style={{ background: pathname.length > 1 ? "#000" : navbarBgColor , transition: "ease .4s" }} >
            <div className="flex header just-between ">
                <div className="nav-logo"><Link to="/"><img src={logo}  alt="logo not found" className="img" /></Link></div>
                <div className="header-nav ">
                    <button className="call-btn" onClick={() => { setText("02 333 811 99") }} >
                        <img src={phone} alt="" />
                        <a href="tel:02 33381199">{text}</a>
                    </button>
                    <div className="">
                        <Sidebar  />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${pathname.length === 1 ? `` : `h-nav`}`}></div>
        </>
        
    )
}

export default Navbar
