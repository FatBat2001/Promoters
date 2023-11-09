import Aboutus from "./components/Aboutus"
import Testimonial from "./components/Testimonial"
import Divider from "./components/Divider"
import Events from "./components/Events"

import "./styles/home.css"
import Carousel from "../../componenets/Carousel"
import { useEffect, useState } from "react"
import Loader from "../../componenets/Loader"

const Home = () => {

    return (
        <div>
            <Carousel />
            <Aboutus />
            <Testimonial />
            <Divider />
            <Events />
        </div>
    )
}

export default Home
