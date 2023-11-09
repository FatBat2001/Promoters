import React from "react";
import GoogleMapReact from 'google-map-react';
import RedMarker from "./RedMarker";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const  Map = () => {
  const defaultProps = {
    center: {
      lat: 30.04159,
      lng: 31.20954
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '28.125rem', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        
        <RedMarker
          lat={30.04159}
          lng={31.20954}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
export default Map;