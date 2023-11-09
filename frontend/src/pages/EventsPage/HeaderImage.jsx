import goodMoments from "../../assets/bg-imgs/our-events-cover-min.jpg"; 
import './css/header-image.css'; 
const  HeaderImage = ({labelText}) => {
  return (
    <div className="image-container">
      <img src={goodMoments} alt="header-img"></img>
      <label>{labelText}</label>
    </div>
  )
}

export default HeaderImage; 