import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"right",
    background:"white",
    gap:30,
    padding:15,
    position:'sticky' ,
    top:0,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
  return (
    <OuterContainer>
        <TitleOne sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Web Development 
        </TitleOne>
         <TitleOne sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Application Development  
        </TitleOne>
         <TitleOne sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Software Development
        </TitleOne>
         <TitleOne sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
AI/ML Development 
        </TitleOne>
         <TitleOne sx={{fontWeight:"700",":hover":{color:"#33ace2"},cursor:"pointer"}}>
System Integration
        </TitleOne>
    </OuterContainer>
  )
}

export default Navbar