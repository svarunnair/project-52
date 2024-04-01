import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled(Box)(({ theme }) => ({
    border:"2px solid red",
    display:"flex",
    justifyContent:"right",
    background:"white",
    gap:30,
    padding:15,
    position:'sticky' ,
    top:10,

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
        <TitleOne sx={{fontWeight:"700"}}>
Web Development 
        </TitleOne>
         <TitleOne sx={{fontWeight:"700"}}>
Application Development  
        </TitleOne>
         <TitleOne sx={{fontWeight:"700"}}>
Software Development
        </TitleOne>
         <TitleOne sx={{fontWeight:"700"}}>
AI/ML Development 
        </TitleOne>
         <TitleOne sx={{fontWeight:"700"}}>
System Integration
        </TitleOne>
    </OuterContainer>
  )
}

export default Navbar