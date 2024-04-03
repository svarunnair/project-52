import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MidDiv from '../components/MidDiv'
import FooterIcons from '../components/FooterIcons'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import menlap from '../components/Images/menlap.gif'
import gmeet from '../components/Images/gmeet.png'
import animislider from '../components/Images/animialider.gif'

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
const FirstDiv = styled(Box)(({ theme }) => ({

    display:"flex", 
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column-reverse",
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
    flexDirection:"column",
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
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
    borderRadius:30,
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
        padding:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SubDiv = styled(Box)(({ theme }) => ({

    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:25,
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Arrow = styled(Box)(({ theme }) => ({
width:"100%",
    display:"flex", 
    // border:"2px solid red",
    flexDirection:"column",
    position:"sticky",
    top:100,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconImage = styled(Box)(({ theme }) => ({

   width:"100%",
   boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Div = styled(Box)(({ theme }) => ({
 
    display:"flex",
    justifyContent:"center",
    gap:20,
    cursor:"pointer",
    ":hover":{
      transitionDuration:".3s",
            transform:"scale(1.2)",
      background:"#33ace2",
      color:"whitesmoke"
    },
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column"
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
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextBoxOne = styled(Typography)(({ theme }) => ({
   color:'#3c3c3c',
   width:"70%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
       width:"100%",
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
 width:"50%",
cursor:"wait",
color:"grey",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

function System() {
  return (
    <Wrap>
    <Container>
<FirstDiv>

<FirstText>
    <Header sx={{fontWeight:"500",fontSize: 48}}>Breaking Boundaries</Header>
    <Disc>Break free from limitations with integration expertise, unifying software, systems, and applications for a streamlined and cohesive business experience.</Disc>
<Disc sx={{paddingTop:2,}}>Stay ahead of the curve with integration solutions, future-proofing businesses by connecting and supporting software, systems, and applications with cutting-edge expertise.</Disc>


</FirstText>


<FirstImg as={"img"} src={menlap}/>

</FirstDiv>


<IconImage as={"img"} src={animislider}/>

<SubDiv>
    <TextBox sx={{fontWeight:500,fontSize:24,}}>Unifying Software, Systems & Applications</TextBox>
    <TextBoxOne sx={{fontSize:18,color:"#3c3c3c",}}>Decade of experience in integration with comprehensive services, seamlessly connecting software, systems, and applications for superior business outcomes.</TextBoxOne>
</SubDiv>

<Div>
    <DivOne><TextBox sx={{fontSize:"18", background:"transparent",}}>Software Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18", background:"transparent",}}>IT System Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18", background:"transparent",}}>Enterprise Applications Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18", background:"transparent",}}>IT Solutions & Consulting</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18", background:"transparent",}}>IT Support & Maintenance</TextBox></DivOne>
</Div>

<SubTit sx={{fontSize:24,color:"#404044",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",paddingTop:7,paddingBottom:5}}>Effortless Collaboration, Elevate With System Integrations</SubTit>


<SecondDiv>
<ImgSec  as={"img"} src={gmeet}/>

<TextSec>
    <TextBox sx={{textAlign:"left",color:"#3c3c3c",fontSize:19}}>Break down silos and enhance collaboration across your organization. Seamlessly connect disparate systems for a more cohesive and streamlined workflow.</TextBox>
<TextBox sx={{textAlign:"left",paddingTop:1,color:"#3c3c3c",fontSize:19}}>Stay ahead in a dynamic landscape with our forward-thinking system integrations. Embrace innovation as we align and future-proof your technology infrastructure for sustained success.</TextBox>
</TextSec>

</SecondDiv>
  <Arrow>
<Scroll/>
</Arrow>

<MidTit sx={{fontSize:36,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",color:"#404044",fontWeight:500,paddingTop:7,paddingBottom:2, fontFamily:'sans-serif'}}> Seamless Connectivity, Superior Performance: Explore System Integrations</MidTit>


<MidDiv/>

<FooterIcons/>


    </Container>

    
<Footer/>
    </Wrap>
  )
}

export default System