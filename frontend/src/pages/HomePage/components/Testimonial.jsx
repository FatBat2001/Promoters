import Calendar from "../../../assets/home-icons/years-icon.png"
import Project from "../../../assets/home-icons/projects-icon.png"
import CountUp from "react-countup"
import { useState,useEffect } from "react"

const Testimonial = () => {

    const [counterOn,setCounterOn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 780 && !counterOn) {
                setCounterOn(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-testimonial">
            <div className="counters-bottom flex align-end">
                <div className="testimonial">
                    <div className="years">
                        <div className="flex year-inner">
                            <img src={Calendar} alt="" />
                            <div className="years-content">
                                <span className="years-counter">{ counterOn ? <CountUp start={0} end={20} duration={2} delay={.7} /> : 0 }</span>
                                <p>Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="flex project-inner">
                            <img src={Project} alt="" />
                            <div className="projects-content">
                                <div className="projects-counter">
                                    <span className="counter">{ counterOn ? <CountUp start={0} end={2} duration={2} delay={.7} /> : 0}</span>
                                    <span>K</span>
                                </div>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
