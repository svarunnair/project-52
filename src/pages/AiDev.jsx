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
   padding:50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const SecondDetail = styled(Typography)(({ theme }) => ({

textAlign:"left",
display:"flex",
flexDirection:"column",




  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Detail = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   padding:20,
   width:"60%",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const InnerOne = styled(Box)(({ theme }) => ({
    display:"grid",

    width:"50%",
    gap:10,
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextInner = styled(Typography)(({ theme }) => ({
    fontSize:"50px",
    textAlign:"left",
    width:"90%",
    // border:"2px solid red",
":hover":{
  transitionDuration:".5s",
  paddingLeft:15
},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FirstBox = styled(Box)(({ theme }) => ({
    display:"flex",
  
    justifyContent:"center",
    gap:30,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column-reverse",
     gap:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const InnerImg = styled(Box)(({ theme }) => ({
    display:"flex",

boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    width:"100%",
    borderRadius:30,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgSec = styled(Box)(({ theme }) => ({
  width:"100%",
   boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
   borderRadius:30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Wrapper = styled(Box)(({ theme }) => ({
   display:"flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
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
const Heading = styled(Box)(({ theme }) => ({

  color: "#404044",

    justifyContent:"center",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const SecondBox = styled(Box)(({ theme }) => ({


    justifyContent:"center",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextBox = styled(Typography)(({ theme }) => ({
    justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextDes = styled(Typography)(({ theme }) => ({
   fontSize:12, 
   color:"grey",
 textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BoxFour = styled(Box)(({ theme }) => ({
   display:"flex",
   paddingBottom:25,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const FourBoxTwo = styled(Box)(({ theme }) => ({


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailFour = styled(Typography)(({ theme }) => ({
    textAlign:"left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const HeadFour = styled(Typography)(({ theme }) => ({
textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const FourBoxOne = styled(Box)(({ theme }) => ({
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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

function AiDev() {
  return (
    <>
    <Container>

    <FirstBox>
        <InnerOne>
        <TextInner sx={{fontSize:44,fontWeight:"500",cursor:"grab",":hover":{
  transitionDuration:".5s",
  paddingLeft:10,
  textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",color:"#1b3d9b"
},}}>Empowering Tomorrow with AI/ML Solutions.</TextInner>
        <TextDes>Unlock the power of data with AI/ML development services tailored to your unique needs. From predictive analytics to natural language processing, we deliver intelligent solutions that drive growth and competitive advantage.</TextDes>
<TextDes >Stay ahead of the curve with integration solutions, future-proofing businesses by connecting and supporting software, systems, and applications with cutting-edge expertise.</TextDes>
        </InnerOne>
<WrapI>
<InnerImg as={"img"} src={menlap}/>
</WrapI>

        </FirstBox>


<SecondBox>

<Heading sx={{fontSize:"24px",fontWeight:500,paddingTop:7,paddingBottom:3,":hover":{color:"#1b3d9b",transitionDuration:".5s",transform:"scale(1.1)",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},cursor:"grab"}}>Effortless Collaboration, Elevate With System Integrations
</Heading>


<Wrapper>
<WrapI>
<ImgSec as={"img"} src={gmeet}/>
</WrapI>

<Detail>
<SecondDetail sx={{fontSize:"19px",color:"#3c3c3c"}}>

Break down silos and enhance collaboration across your organization. Seamlessly connect disparate systems for a more cohesive and streamlined workflow.

</SecondDetail>

  

<SecondDetail  sx={{fontSize:"19px",color:"#3c3c3c",paddingTop:1}}>
    Stay ahead in a dynamic landscape with our forward-thinking system integrations. Embrace innovation as we align and future-proof your technology infrastructure for sustained success.
</SecondDetail>

</Detail>

</Wrapper>
</SecondBox>

<TextBox sx={{paddingTop:7,fontSize:36,fontWeight:500,paddingBottom:1,cursor:"grab",":hover":{
      transitionDuration:".5s",transform:"scale(1.1)",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",color:"#33fc"
    }}}>Seamless Connectivity, Superior Performance: Explore System Integrations</TextBox>

        <MidDiv/>

<BoxFour sx={{paddingTop:5}}>

<FourBoxOne>
    <HeadFour sx={{fontWeight:600,fontSize:18,padding:1,color:"#404044",}}>
Streamlined Excellence - Elevate IT Operations with Seamless Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey",fontSize:18,padding:1}}>
        Experience unparalleled efficiency as we seamlessly integrate and optimize your IT software, unlocking a new level of streamlined excellence for your business operations.
    </DetailFour>
</FourBoxOne>

<FourBoxTwo>

     <HeadFour sx={{fontWeight:600,fontSize:18,padding:1,color:"#404044"}}>
Innovative Fusion - Revolutionize IT with Advanced Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey",fontSize:18,padding:1}}>
Ignite innovation as our expert integrations connect and enhance your IT software, transforming the way your business operates and ensuring a future-ready IT infrastructure.
    </DetailFour>
</FourBoxTwo>



</BoxFour>
<Arrow>
<Scroll/>
</Arrow>
<FooterIcons/>


    </Container>
<Footer/>
    </>
  )
}

export default AiDev