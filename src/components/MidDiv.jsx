import { Box, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styled from 'styled-components'

const TextTwo = styled(Box)(({ theme }) => ({
   textAlign:"left",
    color:"#3c3c3c",
    
    width:"100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ThirdDiv = styled(Box)(({ theme }) => ({
   display:"flex",
   justifyContent:"center",
  //  border:"2px solid red",
   padding:10,
   gap:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxTwo = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    gap:20,
    padding:10,
 
    // alignItems:'center',
    justifyContent:"center",

   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxOne = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
cursor:"pointer",
":hover":{
  transitionDuration:".3s",
  transform:"scale(1.2)",
},

    padding:25,
   
    gap:20,
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
          padding:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Disc = styled(Typography)(({ theme }) => ({
    color:"grey",
    


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Head = styled(Box)(({ theme }) => ({

   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function MidDiv() {
  return (
    
    <ThirdDiv>

<BoxOne>
<ThumbUpIcon sx={{color:"#1b3d9b",width:"230px",transitionDuration:".3s",}}/>
<Head sx={{fontSize:"22px",fontWeight:"600",transitionDuration:".3s",}}>
 Proven Expertise and Reliability   
</Head>
<Disc >Customers choose us for our proven IT expertise, track record of successful projects, and a dedicated team, instilling confidence through reliable and high-quality services.</Disc>

</BoxOne>

<BoxTwo>

<TextTwo sx={{fontSize:"20px"}}>Discover the power of seamless connectivity. Our system integration solutions ensure superior performance by intelligently connecting and synchronizing your diverse technological components.</TextTwo>
<TextTwo sx={{fontSize:"20px"}}>Experience a revolution in business operations. Our system integrations bridge gaps, enabling a cohesive and responsive environment that unlocks the full potential of your technological ecosystem.</TextTwo>


</BoxTwo>

</ThirdDiv>
  )
}

export default MidDiv