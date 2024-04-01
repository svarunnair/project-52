import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MidDiv from '../components/MidDiv'
import FooterIcons from '../components/FooterIcons'
import Footer from '../components/Footer'

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
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
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
const IconImage = styled(Box)(({ theme }) => ({

   width:"100%",

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
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
const FirstText = styled(Box)(({ theme }) => ({
    display:"flex", 
    flexDirection:"column",
    width:"50%",
 
textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Header = styled(Typography)(({ theme }) => ({
 
textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
color:"grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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


<FirstImg as={"img"} src='http://www.nigussystems.com/images/complete-callcenter-solution.gif'/>

</FirstDiv>


<IconImage as={"img"} src='http://www.nigussystems.com/images/slider.gif'/>

<SubDiv>
    <TextBox sx={{fontWeight:500,fontSize:24,}}>Unifying Software, Systems & Applications</TextBox>
    <TextBox sx={{width:"65%",fontSize:18,color:"#3c3c3c",}}>Decade of experience in integration with comprehensive services, seamlessly connecting software, systems, and applications for superior business outcomes.</TextBox>
</SubDiv>

<Div>
    <DivOne><TextBox sx={{fontSize:"18"}}>Software Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>IT System Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>Enterprise Applications Integrations</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>IT Solutions & Consulting</TextBox></DivOne>
    <DivOne><TextBox sx={{fontSize:"18"}}>IT Support & Maintenance</TextBox></DivOne>
</Div>

<SubTit sx={{fontSize:24,color:"#404044",paddingTop:7,paddingBottom:5}}>Effortless Collaboration, Elevate With System Integrations</SubTit>


<SecondDiv>
<ImgSec as={"img"} src='http://www.nigussystems.com/images/customer-support-system.png'/>

<TextSec>
    <TextBox sx={{textAlign:"left",color:"#3c3c3c",fontSize:19}}>Break down silos and enhance collaboration across your organization. Seamlessly connect disparate systems for a more cohesive and streamlined workflow.</TextBox>
<TextBox sx={{textAlign:"left",paddingTop:1,color:"#3c3c3c",fontSize:19}}>Stay ahead in a dynamic landscape with our forward-thinking system integrations. Embrace innovation as we align and future-proof your technology infrastructure for sustained success.</TextBox>
</TextSec>

</SecondDiv>

<MidTit sx={{fontSize:36,color:"#404044",fontWeight:500,paddingTop:7,paddingBottom:2, fontFamily:'sans-serif'}}> Seamless Connectivity, Superior Performance: Explore System Integrations</MidTit>

<MidDiv/>

<FooterIcons/>


    </Container>

    
<Footer/>
    </Wrap>
  )
}

export default System