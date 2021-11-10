import React, { useEffect, useState } from'react';
import WeatherUser from './weatherUser';
import DateAndHour from './dateAndHour';
import { useDispatch,useSelector } from 'react-redux';
import actions from '../redux/actions';
import './locationUser.css'

export default function  LocationUser(props){
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const dispatch = useDispatch();

    if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( function( location ) {
            console.log( `User location - Latitude: ${location.coords.latitude} | Longitude: ${location.coords.longitude}` );
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            dispatch(actions.addCoordinates({latitude: latitude, longitude: longitude}))         
          }, function( error ) {
          
            if( error.PERMISSION_DENIED === error.code ) {
              alert('Access to user location was denied.' )
              console.error( 'Access to user location was denied.' );
            } else {
              alert(error.message)
              console.error( error.message );
            }
          
          }, {
            maximumAge: 3000,
            timeout: 10000,
            enableHighAccuracy: true
          }
        );
      } else {
       // אם הדפדפן אינו נתמך
       alert('Geolocation is not supported.' )      
      }
    
    return(
        <>
            <div className="location-div-main">
            <div>
                <span className="location-span-th"> Current coordinates: </span>
            </div>
            <div>
                <span className="location-span"> latitude: {latitude}</span>
            </div>
            <div>
                <span className="location-span"> longitude: {longitude}</span>
            </div>
            <DateAndHour/>
            <WeatherUser lat={latitude} lon={longitude}/>
            </div>
      </>
    )
}


