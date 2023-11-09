import { useState } from "react"
import { Link } from "react-router-dom"

const EventCardHome = ({
    bgImage,
    icon,
    title,
    link,
    eventLinks
}) => {

    const [isMouseOut,setIsMouseOut] = useState(false);
    const [isMouseIn,setIsMouseIn] = useState(false);

    const handleEnter = () => {
        setIsMouseIn(true)
    }

    const handleExit = () => {
        setIsMouseIn(false)
    }

    return (
        <div className="event">
            <Link to={link} className="relative event-card" onMouseEnter={handleEnter} onMouseLeave={handleExit}>
                <img src={bgImage} alt="" className="img max-eventimg" />
                <div className={`evt-content ${isMouseIn ? `scale-out-center` : `scale-in-center`}`}  >
                    <img src={icon} alt="" className="" />
                    <h3 className="h3-events">{title}</h3>
                </div>
                <div className={`evt-links-outer ${isMouseIn ? `scale-in-center` : `scale-out-center`}`} >
                    <div className="evt-links">
                        <div className="evt-links-inner w-50 p-2">
                            {
                                eventLinks.map((evtLink, index) => {
                                    if (index < 3 && eventLinks.length === 6) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    } else if (index < 2 && eventLinks.length === 4) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    } else if (index < 1 && eventLinks.length <= 2) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className="evt-links-inner w-50 p-2">
                            {
                                eventLinks.map((evtLink, index) => {
                                    if (index >= 3 && eventLinks.length === 6) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    } else if (index >= 2 && eventLinks.length === 4) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    } else if (index >= 1 && eventLinks.length <= 2) {
                                        return (
                                            <span className="evt-link">{evtLink}</span>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventCardHome
