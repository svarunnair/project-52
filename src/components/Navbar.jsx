import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"right",
    background:"white",
    gap:50,
    padding:15,
    position:'sticky' ,
    top:0,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",

    gridTemplateColumns:"repeat(3,1fr)",
     gap:10,
    padding:5,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TitleOne = styled(Box)(({ theme }) => ({

    display:"flex",
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


function Navbar() {
  const navigate=useNavigate()

  const handleWeb=()=>{
    navigate("/webdev")
  }
  const handleApp=()=>{
    navigate('/home')
  }
  const handleSoft=()=>{
    navigate('/softdev')
  }
  const handleSystem=()=>{
    navigate('/system')
  }
  const handleAi=()=>{
    navigate('/aidev')
  }
  return (
    <OuterContainer>
        <TitleOne onClick={handleWeb} sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Web Development 
        </TitleOne>
         <TitleOne onClick={handleApp} sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Application Development  
        </TitleOne>
         <TitleOne onClick={handleSoft} sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Software Development
        </TitleOne>
         <TitleOne onClick={handleAi} sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
AI/ML Development 
        </TitleOne>
         <TitleOne onClick={handleSystem} sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
System Integration
        </TitleOne>
    </OuterContainer>
  )
}

export default Navbar