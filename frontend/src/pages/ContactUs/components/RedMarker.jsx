import redMarker from "../../../assets/red-marker.svg";

const RedMarker = ({ text }) => {
  return (
    <>
      <div style={{height:'50px', width:'50px'}}>
        <img src={redMarker} alt="location-marker" />
      </div>
    </>
  );
};

export default RedMarker;
