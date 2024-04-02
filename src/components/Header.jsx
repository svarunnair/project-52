import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';



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
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconBox = styled(Box)(({ theme }) => ({
    display:"flex",
    width:"5%",
    cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        width:"35%",
  },
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
  [theme.breakpoints.down("md")]: {
     background:"white",
         color:"black",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const SideBar = styled(Box)(({ theme }) => ({
display:"none",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const OuterWrap = styled(Box)(({ theme }) => ({
  display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgWrap = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"space-between",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SideBox = styled(Box)(({ theme }) => ({
  display:"flex",
  flexDirection:"column",
  height:"100%",
  width:"70%",
  // border:"2px solid red",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  position:"absolute",
  background:"white",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


function Header() {
  const navigate=useNavigate()
  const [slide,setSlide]=useState(false)

    const handleEmail=()=>{
        window.location.href="mailto:sales@nigussystems.com"
    }
    const handleChange=()=>{
       setSlide(true)
    }
    const handleClose=()=>{
      setSlide(false)
    }
    const handleWeb=()=>{
      navigate('/webdev')
    }
    const handleAi=()=>{
      navigate('/aidev')
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
    
  return (
    <OuterWrap>
    
    <SideBar>
<ViewSidebarIcon onClick={handleChange}/>
    </SideBar>



{slide&&<SideBox>
<ImgWrap>
  <IconBox as={"img"} src='http://www.nigussystems.com/images/nigus-logo.png'/>
  <CloseIcon onClick={handleClose}/>
  </ImgWrap>
   <TextOne sx={{fontWeight:600}} onClick={handleWeb}>Web Development </TextOne>
         <TextOne sx={{fontWeight:600}} onClick={handleApp}>Application Development  </TextOne>
          <TextOne sx={{fontWeight:600}} onClick={handleSoft}>Software Development</TextOne>
           <TextOne sx={{fontWeight:600}} onClick={handleAi}>AI/ML Development</TextOne>
            <TextOne sx={{fontWeight:600}} onClick={handleSystem}>System Integration</TextOne>

  <hr></hr>
        <TextOne sx={{fontWeight:600}}>Services</TextOne>
         <TextOne sx={{fontWeight:600}}>Solutions</TextOne>
          <TextOne sx={{fontWeight:600}}>Industries</TextOne>
           <TextOne sx={{fontWeight:600}}>About Us</TextOne>
            <TextOne sx={{fontWeight:600}}>Contact Us</TextOne>
            <Email onClick={handleEmail}>sales@nigussystems.com</Email>
              <Email>+91 98806 98312</Email>
              <BottonBox><PermIdentityOutlinedIcon/>Sales</BottonBox>
              <BottonBox><HeadsetMicOutlinedIcon/>Support</BottonBox>

</SideBox>}



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

    </OuterWrap>
  )
}

export default Header