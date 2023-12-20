import React from 'react'
import './ContactUs.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '70vw',
  height: '50vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};


const ContactUs = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAZr0bT0JmQkZe-NMq8T_5jK9UQNxJimag',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }
  return (
    <div className='Contact Container Section'>
        <div className="secContent grid">
        <h1>See our location</h1>
        <div className='gMap'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position="43.268314361572266,76.93737030029297" />
      </GoogleMap>
    </div>
        </div>
    </div>
  )
}

export default ContactUs