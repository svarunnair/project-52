import { Box } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
  const path=useLocation()

  console.log("paramss",path.pathname)

  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  }

  console.log("jn",activePage)
  

  const handleWeb=(webdev)=>{
      setActivePage(webdev);
    navigate("/webdev")
  }
  const handleApp=(home)=>{
    setActivePage(home);
    navigate('/home')
  }
  const handleSoft=(soft)=>{
    setActivePage(soft);
    navigate('/softdev')
  }
  const handleSystem=(system)=>{
    setActivePage(system);
    navigate('/system')
  }
  const handleAi=(aidev)=>{
    setActivePage(aidev);
    navigate('/aidev')
  }
  return (
    // style={{ fontWeight: activePage === "about" ? "bold" : "normal" }
    <OuterContainer>
        <TitleOne onClick={()=>handleWeb("webdev")} sx={{fontWeight:700,textDecoration:activePage==="webdev"?"underline":"none",color: activePage === "webdev" ? "#33ace2" : "normal",":hover":{color:"#33ace2",},cursor:"pointer"}}>
Web Development 
        </TitleOne>
         <TitleOne onClick={()=>handleApp("home")} sx={{fontWeight:700,textDecoration:activePage==="home"?"underline":"none",color: activePage === "home" ? "#33ace2" : "normal",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Application Development  
        </TitleOne>
         <TitleOne onClick={()=>handleSoft("soft")} sx={{fontWeight:700,textDecoration:activePage==="soft"?"underline":"none",color: activePage === "soft" ? "#33ace2" : "normal",":hover":{color:"#33ace2"},cursor:"pointer"}}>
Software Development
        </TitleOne>
         <TitleOne onClick={()=>handleAi("aidev")} sx={{fontWeight:700,textDecoration:activePage==="aidev"?"underline":"none",color: activePage === "aidev" ? "#33ace2" : "normal",":hover":{color:"#33ace2"},cursor:"pointer"}}>
AI/ML Development 
        </TitleOne>
         <TitleOne onClick={()=>handleSystem("system")} sx={{fontWeight:700,textDecoration:activePage==="system"?"underline":"none",color: activePage === "system" ? "#33ace2" : "normal",":hover":{color:"#33ace2"},cursor:"pointer"}}>
System Integration
        </TitleOne>
    </OuterContainer>
  )
}

export default Navbar