import { useSwiper } from "swiper/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const SwiperNavBtns = () => {

    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <div><button onClick={()=>{swiper.slidePrev();  }}><FontAwesomeIcon icon={faAngleUp} rotation={270} /></button></div>
            <div className="last-nav-btn"><button onClick={()=>{swiper.slideNext();  }}><FontAwesomeIcon icon={faAngleUp} rotation={90} /></button></div>
        </div>
    )
}

export default SwiperNavBtns
