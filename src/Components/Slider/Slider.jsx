import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styled from 'styled-components';
import { sliderItems } from '../../data';

export default function Slider() {

  const[slideIndex,setSlideIndex]=useState(0)

  const Slide=styled.div`
  background-color:#${props=>props.bg};
 
  `;

  const handleClick=(direction)=>{
    if(direction==="left" ){
      setSlideIndex(slideIndex >0 ? slideIndex-1 :2)
    }else{
      setSlideIndex(slideIndex < 2? slideIndex+1 :0)
    }
  }
  
  return (
    <div className='sliderContainer'>
      <div className='arrowL' direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon/>
      </div>

      <div className="wrapper" style={{transform:`translateX(${slideIndex * -100}vw)`}}>
        {sliderItems.map((item)=>{
          return(
            <Slide className='slide' bg={item.bg} key={item.id}>
            <div className="imgContainer">
              <div className="image">
                <img src={`${item.img}`} alt="img"/>
              </div>
              </div>
            <div className="infoContainer">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button style={{'--hover-color':`${item.btColor}`}}>SHOW NOW</button>
            </div>
            </Slide>
          )
        })}
      </div>

      <div className='arrowR' direction="right" onClick={()=>handleClick("right")} >
      <ArrowForwardIosOutlinedIcon/>
      </div>
    </div>
  )
}
