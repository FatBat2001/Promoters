import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react';

const ScrollTopBtn = () => {

    const [opacity,setOpacity] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition >= 250) {
                setOpacity(true);
            } else {
                setOpacity(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]); 

    return (
        <button className='scrollTopBtn' style={{ opacity: opacity ? "1" : "0",transition: "all .4s" }} onClick={()=> { window.scrollTo(0, 0); }}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default ScrollTopBtn
