import AboutImage from "../../../assets/about/about-image.png"

const Aboutus = () => { 
    return (
        <div className="about" id="about">
            <div className="container-lg">
                <div className="about-inner flex-col-sm">
                    <div className="col-lg-6 about-image">
                        <img src={AboutImage} alt="" />
                    </div>
                    <div className="col-lg-6 about-content">
                        <h2 className="h2-about">ABOUT US</h2>
                        <h3 className="h3-about">Beyond the norm</h3>
                        <p className="p-about">Promoters International has more than 20 years experience & the pioneer in Event Planning such as Concerts, Corporate Events, Conferences, Exhibitions & Activations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
