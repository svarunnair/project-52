import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MidDiv from '../components/MidDiv'
import FooterIcons from '../components/FooterIcons'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import menlap from '../components/Images/menlap.gif'
import gmeet from '../components/Images/gmeet.png'

const Container = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
padding:"30px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ArrowDiv = styled(Box)(({ theme }) => ({
  
  display:"flex",
  justifyContent:"end",
  width:"100%",
// border:"2px solid red",
  position:"sticky",
  top:100,
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const FirstDiv = styled(Box)(({ theme }) => ({

    display:"flex", 
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Wrap = styled(Box)(({ theme }) => ({

   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SubTit = styled(Typography)(({ theme }) => ({
    display:"flex", 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const SecondDiv = styled(Box)(({ theme }) => ({
    display:"flex", 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column"
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const MidTit = styled(Typography)(({ theme }) => ({
    display:"flex", 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgSec = styled(Box)(({ theme }) => ({
    display:"flex", 
    width:"50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextSec = styled(Typography)(({ theme }) => ({
    display:"flex", 
    flexDirection:"column",
    width:"50%",
    padding:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SubDiv = styled(Box)(({ theme }) => ({

    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:35,
  
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
 padding:5,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Div = styled(Box)(({ theme }) => ({
 
    display:"flex",
    justifyContent:"center",
    gap:20,
      ":hover":{
      transitionDuration:".3s",
      transform:"scale(1.2)",
      background:"#33ace2",
      color:"whitesmoke"
    },
 
    cursor:"pointer",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const DivOne = styled(Box)(({ theme }) => ({

    display:"flex",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    padding:33,
    
 
 borderRadius:10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextBox = styled(Typography)(({ theme }) => ({
   color:'#3c3c3c',
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const FirstText = styled(Box)(({ theme }) => ({
    display:"flex", 
    flexDirection:"column",
    width:"50%",
 
textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
       width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Header = styled(Typography)(({ theme }) => ({
 
textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     
textAlign:"center",
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
const FirstImg = styled(Box)(({ theme }) => ({
 width:"100%",
color:"grey",
borderRadius:30,

boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const WrapI = styled(Box)(({ theme }) => ({
 width:"50%",
color:"grey",
padding:10,
cursor:"grab",
":hover":{
  transitionDuration:".5s",
  transform:"scale(1.1)"
},

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function SoftDev() {
  return (
    <Wrap>
    <Container>
<FirstDiv>

<FirstText>
    <Header sx={{fontWeight:"500",fontSize: 48,cursor:"grab",":hover":{color:"#1b3d9b",transitionDuration:".5s",transform:"scale(1.1)",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",paddingLeft:7}}}>Software Excellence, Elevating Businesses to new heights</Header>
    <Disc>Seamlessly connect software, systems, and applications for optimized performance, propelling businesses to unparalleled success.</Disc>
<Disc sx={{paddingTop:2,}}>Experience the transformative power of unified operations, ensuring peak productivity and unlocking new possibilities with cutting-edge integration expertise.</Disc>
</FirstText>

<WrapI>
<FirstImg as={"img"} src={menlap}/>
</WrapI>

</FirstDiv>


<SubDiv>
    <TextBox sx={{fontWeight:500,fontSize:24,cursor:"grab",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",":hover":{transitionDuration:".5s",transform:"scale(1.2)",color:"#1b3d9b"}}}>Innovate. Build. Thrive</TextBox>
    <TextBox sx={{width:"65%",fontSize:18,color:"#3c3c3c",padding:1,}}>Decade of experience in integration with comprehensive services, seamlessly connecting software, systems, and applications for superior business outcomes.</TextBox>
</SubDiv>

<Div>
    <DivOne><TextBox sx={{fontSize:"18"}}>Enterprise Software</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>Customized Software</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>Enterprise Applications</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>Solutions & Consulting</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>Support & Maintenance</TextBox></DivOne>
</Div>

<SubTit sx={{fontSize:24,color:"#404044",paddingTop:7,paddingBottom:5,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",":hover":{transitionDuration:".5s",transform:"scale(1.2)",color:"#1b3d9b"},cursor:"grab"}}>Effortless Collaboration, Elevate With System Integrations</SubTit>
<ArrowDiv>
<Scroll/>
</ArrowDiv>
<SecondDiv>
<ImgSec as={"img"} src={gmeet}/>

<TextSec>
    <TextBox sx={{textAlign:"left",color:"#3c3c3c",fontSize:19}}>Break down silos and enhance collaboration across your organization. Seamlessly connect disparate systems for a more cohesive and streamlined workflow.</TextBox>
<TextBox sx={{textAlign:"left",paddingTop:1,color:"#3c3c3c",fontSize:19}}>Stay ahead in a dynamic landscape with our forward-thinking system integrations. Embrace innovation as we align and future-proof your technology infrastructure for sustained success.</TextBox>
</TextSec>

</SecondDiv>

<MidTit sx={{fontSize:36,color:"#404044",fontWeight:500,paddingTop:7,paddingBottom:2,":hover":{transitionDuration:".5s",transform:"scale(1.1)",color:"#1b3d9b"},cursor:"grab", fontFamily:'sans-serif'}}> Seamless Connectivity, Superior Performance: Explore System Integrations</MidTit>

<MidDiv/>

<FooterIcons/>


    </Container>

    
<Footer/>
    </Wrap>
  )
}

export default SoftDev