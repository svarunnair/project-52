import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ring from '../components/Images/ring.png'
import analytics from '../components/Images/analytic.png'
import install from '../components/Images/install.png'
const BottomWrap = styled(Typography)(({ theme }) => ({
   background:"#1b3d9b",
   padding:40,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomText = styled(Typography)(({ theme }) => ({
   background:"#1b3d9b",
   color:'white',
   justifyContent:"center",
   textAlign:'center',
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconBox = styled(Box)(({ theme }) => ({
   display:"flex",
   justifyContent:"center",
   gap:50,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconOne = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
      alignItems:"center",
      ":hover":{
        transitionDuration:'.5s',
        
      },
   
    
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconThree = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   alignItems:"center",
   justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgIcon = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   width:"50%",
    
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconHead = styled(Typography)(({ theme }) => ({
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconDisc = styled(Typography)(({ theme }) => ({
 color:"grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconTwo = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
      alignItems:"center",
   justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function FooterIcons() {
  return (
    <>
  <IconBox>

<IconOne>
    <ImgIcon as={"img"} src={analytics}/>
    <IconHead>Analytics</IconHead>
    <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconOne>

<IconTwo>
     <ImgIcon as={"img"} src={ring}/>
      <IconHead>Application Integrations</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconTwo>

<IconThree>
     <ImgIcon as={"img"} src={install}/>
      <IconHead>Installation & Support</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconThree>




</IconBox>

<BottomWrap>
<BottomText sx={{fontSize:"33px",fontWeight:'600'}}>
    Decade-plus of experience in India, the Middle East, and the Asia Pacific, delivering enterprise software and application solutions tailored to meet diverse business needs.
</BottomText>
</BottomWrap>
</>
  )
}

export default FooterIcons