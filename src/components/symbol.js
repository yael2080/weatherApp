import React from 'react'
import './symbol.css'
import sun from '../assets/sun.svg'
import snow from '../assets/snow.svg'
import clouds from '../assets/clouds.svg'

export default function  Symbol(props){

    const { temp } = props
    let symbol= 'white'

    temp >= 15 ? symbol = 'sun' : temp >0 && temp <15 ? symbol = 'clouds' : symbol = 'snow' 
    
    return(
        <>
           { symbol == 'sun' && <img src={sun}/>} 
           { symbol == 'clouds' && <img src={clouds}/>} 
           { symbol == 'snow' && <img src={snow}/>}           
        </>
    )
}
