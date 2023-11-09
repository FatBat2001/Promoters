import EventCardHome from "../../../componenets/EventCardHome"

import ConcertsIcon from "../../../assets/events-icons/concerts-icon.png"
import ConcertsImage from "../../../assets/bg-imgs/concerts-dark.jpg"

import CorporateIcon from "../../../assets/events-icons/corporate-icon.png"
import CorporateImage from "../../../assets/bg-imgs/corporate-events-dark.jpg"

import ConferencesIcon from "../../../assets/events-icons/conferences-icon.png"
import ConferencesImage from "../../../assets/bg-imgs/conferences-dark.jpg"

import ActivationIcon from "../../../assets/events-icons/activations-icon.png"
import ActivationImage from "../../../assets/bg-imgs/activations-dark.jpg"

const Events = () => {

    const events = [
        {
            bgImage: ConcertsImage,
            icon: ConcertsIcon,
            title: "concerts",
            link: "/events/concerts",
            eventLinks: [
                "Yanni",
                "Andrea Bocelli",
                "Shakira",
                "Ricky Martin",
                "Kylie Minogue",
                "See More"
            ]
        },
        {
            bgImage: CorporateImage,
            icon: CorporateIcon,
            title: "Corporate Events",
            link: "events/corporate",
            eventLinks: [
                "Capital Business Park",
                "Saint Catherine Religious Tolerance Forum",
                "Experience Egypt CNN",
                "See More"
            ]
        },
        {
            bgImage: ConferencesImage,
            icon: ConferencesIcon,
            title: "Conferences",
            link: "/events/conferences",
            eventLinks: [
                "Egypt’s New Hospitality Criteria"
            ]
        },
        {
            bgImage: ActivationImage,
            icon: ActivationIcon,
            title: "Activations",
            link: "/events/activations",
            eventLinks: [
                "BANQUE MISR “BM YOUTH” ACTIVATION",
                "Mouled Nestle 2019"
            ]
        },
    ]

    return (
        <div className="mx-4">
            <div>
                <h3 className="h2-about text-center my-5">OUR EVENTS</h3>
            </div>
            <div className="event-outer event-content ">
                {
                    events.map((event,index) => 
                        <EventCardHome key={index} bgImage={event.bgImage} icon={event.icon} title={event.title} link={event.link} eventLinks={event.eventLinks} />
                    )
                }
            </div>
        </div>
    )
}

export default Events
