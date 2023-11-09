import React from 'react'
import SpinLoader from "../assets/load-spinner.svg"

const Loader = ({loading}) => {
    return (
        <div className='loader' style={{ display: loading ? "" : "none" }}>
            <img src={SpinLoader} alt="" />
        </div>
    )
}

export default Loader
