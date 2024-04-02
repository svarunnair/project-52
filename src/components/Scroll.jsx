import React, { useEffect, useState } from 'react'
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import styled from 'styled-components';
import { Box } from '@mui/material';

const ArrowDiv = styled(Box)(({ theme }) => ({
  
  display:"flex",
  justifyContent:"end",
  position:"sticky",
  top:100,
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function Scroll() {

    const [backToTop,setBackToTop]=useState(false)

  const scrollUp=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setBackToTop(true)
      }
      else{
         setBackToTop(false)
      }
    })
  },[])
  return (
    <ArrowDiv>
        {backToTop&&<ArrowCircleUpRoundedIcon onClick={scrollUp} sx={{color:"blue"}}/>}
    </ArrowDiv>
  )
}

export default Scroll