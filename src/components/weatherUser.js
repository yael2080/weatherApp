import React, { useEffect, useState } from 'react'
import Symbol from './symbol';
import { useDispatch } from 'react-redux'
import actions from '../redux/actions'
import './weatherUser.css'

export default function  WeatherUser(props){
    const [temp, setTemp] = useState('')
    const { lat, lon } = props
    const [celsius, setCelsius]= useState(true)
    const [fahrenheit, setFahrenheit]= useState(false)
    const dispatch = useDispatch();
    let date = new Date()
    let today = date.getHours()

    useEffect(function () {
        var myHeaders = new Headers();    
        var requestOptions = {
            method: 'get',
            headers: myHeaders,
        };
        fetch('https://www.7timer.info/bin/astro.php?lon=' + lat + '&lat=' + lon + '&ac=0&unit=metric&output=json&tzshift=0y')    
        .then(response => response.json())
            .then((resJson) => {        
               console.log(resJson)  
               setTemp(resJson.dataseries[today].temp2m)
               dispatch(actions.addTemperature( resJson.dataseries[today].temp2m))           
            })
            .catch(error => console.log('error', error))
    }, []);

    function changeToFahrenheit(){
        if(fahrenheit == false){
            let x
            x = temp * 9 / 5 +32
            x = Math.round(x)
            setTemp(x)
            setFahrenheit(true)
            setCelsius(false)
        }
    }
    function changeToCelsius(){
        if(celsius == false){
            let x
            x = (temp - 32) * 5/9
            x = Math.round(x)
            setTemp(x)
            setFahrenheit(false)
            setCelsius(true)
        }
    }
    return(
        <>   
        <Symbol temp={temp}/>
        <div>
            <span className="weatherUser-span">{temp}</span>
        </div>
        <button className="weatherUser-btn" onClick={changeToFahrenheit}>F</button>
        <button className="weatherUser-btn" onClick={changeToCelsius}>C</button>  
        </>
    )
}
