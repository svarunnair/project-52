import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Wrapper = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    padding:10,
    width:"95%",
   justifyContent:"space-between",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconBox = styled(Box)(({ theme }) => ({
    display:"flex",
    width:"5%",
    cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextOne = styled(Typography)(({ theme }) => ({
    display:"flex",
    fontWeight:600,
      cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Email = styled(Typography)(({ theme }) => ({
color:"grey",
    display:"flex",
      cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BottonBox = styled(Box)(({ theme }) => ({

    display:"flex",
    background:"#33ace2",
    padding:3,
    color:"white",
      cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


function Header() {

    const handleEmail=()=>{
        window.location.href="mailto:sales@nigussystems.com"
    }
  return (
    <OuterContainer>
    <Wrapper>
        <IconBox as={"img"} src='http://www.nigussystems.com/images/nigus-logo.png'/>
        <TextOne sx={{fontWeight:600}}>Services</TextOne>
         <TextOne sx={{fontWeight:600}}>Solutions</TextOne>
          <TextOne sx={{fontWeight:600}}>Industries</TextOne>
           <TextOne sx={{fontWeight:600}}>About Us</TextOne>
            <TextOne sx={{fontWeight:600}}>Contact Us</TextOne>
            <Email onClick={handleEmail}>sales@nigussystems.com</Email>
              <Email>+91 98806 98312</Email>
              <BottonBox><PermIdentityOutlinedIcon/>Sales</BottonBox>
              <BottonBox><HeadsetMicOutlinedIcon/>Support</BottonBox>
              </Wrapper>
            
    </OuterContainer>
  )
}

export default Header