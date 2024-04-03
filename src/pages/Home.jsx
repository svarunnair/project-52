import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { useHref, useParams } from 'react-router-dom';
import logoN from "../components/Images/logoN.png"
import menlap from '../components/Images/menlap.gif'
import gmeet from '../components/Images/gmeet.png'
import ring from '../components/Images/ring.png'
import install from '../components/Images/install.png'
import analitics from '../components/Images/analytic.png'



const Container = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:'column',
    gap:30,
    padding:35,
    id:"container",
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const OuterWrapper = styled(Box)(({ theme }) => ({
   
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
     display:"flex",
     flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SecondBox = styled(Box)(({ theme }) => ({

// border:"2px solid red",
    justifyContent:"center",


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
  [theme.breakpoints.down("md")]: {
    textAlign:"center",
  },
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

const Disc = styled(Typography)(({ theme }) => ({
    color:"grey",


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

const InnerImg = styled(Box)(({ theme }) => ({
    display:"flex",
// border:"2px solid red",
boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
borderRadius:30,
    width:"50%",
    height:"80%",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextInner = styled(Typography)(({ theme }) => ({
    fontSize:"50px",
    textAlign:"left",
    width:"90%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextDes = styled(Typography)(({ theme }) => ({
   fontSize:12, 
   color:"grey",
 textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Wrapper = styled(Box)(({ theme }) => ({
   display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column"
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Detail = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   padding:20,
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgSec = styled(Box)(({ theme }) => ({
  width:"50%",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  borderRadius:30,
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SubDiv = styled(Box)(({ theme }) => ({
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ArrowDiv = styled(Box)(({ theme }) => ({
  
  display:"flex",
  justifyContent:"end",
// border:"2px solid red",
  position:"sticky",
  top:100,
  
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ThirdDiv = styled(Box)(({ theme }) => ({
   display:"flex",

   justifyContent:"center",
   padding:10,
   gap:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxFour = styled(Box)(({ theme }) => ({
   display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
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

const BottomWrap = styled(Typography)(({ theme }) => ({
   background:"#1b3d9b",
   padding:40,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     padding:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Footer = styled(Box)(({ theme }) => ({
 
    textAlign:"left",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconImg = styled(Box)(({ theme }) => ({

    width:"10%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FooterHead = styled(Typography)(({ theme }) => ({
   
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

const FooterDisc = styled(Typography)(({ theme }) => ({
    color:"grey",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconDisc = styled(Typography)(({ theme }) => ({
 color:"grey",
 padding:30,

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



const FourBoxOne = styled(Box)(({ theme }) => ({
   

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

const DetailFour = styled(Typography)(({ theme }) => ({
    textAlign:"left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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

const BoxOne = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
    padding:25,
    gap:20,
    cursor:"pointer",
":hover":{
  transitionDuration:".3s",
  transform:"scale(1.2)",

},
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
       width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Head = styled(Box)(({ theme }) => ({

   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


const BoxTwo = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    gap:20,
    padding:20,

    // alignItems:'center',
    justifyContent:"center",

   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextTwo = styled(Box)(({ theme }) => ({
   textAlign:"left",
    color:"#3c3c3c",

    width:"100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
     textAlign:"center",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


function Home() {

  const [backToTop,setBackToTop]=useState(false)
  const params=useParams()

  console.log("HomeParams",params)

  const scrollUp=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setBackToTop(true)
      }
      else{
         setBackToTop(false)
      }
    })
  },[])




  return (
<OuterWrapper>

    <Container>
        <FirstBox>
        <InnerOne>
        <TextInner sx={{fontSize:44,fontWeight:"600"}}>Empowering Innovation through Customized Applications  </TextInner>
        <TextDes>We specialize in crafting cutting-edge applications that redefine user experiences and drive business success.Our team of experienced developers utilizes the latest technologies to create scalable and robust applications tailored to meet your unique needs.</TextDes>
<TextDes >From concept to deployment, we are dedicated to delivering top-notch solutions that elevate your digital presence and exceed your expectations.</TextDes>
        </InnerOne>


<InnerImg as={"img"} src={menlap}/>

        </FirstBox>


<SecondBox>

<Heading sx={{fontSize:"24px",fontWeight:500,paddingTop:7,paddingBottom:3}}>Effortless Collaboration, Elevate With System Integrations
</Heading>


<Wrapper>
<ImgSec as={"img"} src={gmeet}/>

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
<ArrowDiv>
{backToTop&&<ArrowCircleUpRoundedIcon onClick={scrollUp} sx={{color:"blue",}}/>}
</ArrowDiv>

<SubDiv sx={{fontWeight:"600",fontSize:40}}>
    Seamless Connectivity, Superior Performance: Explore System Integrations
</SubDiv>


<ThirdDiv>

<BoxOne>
<ThumbUpIcon sx={{color:"#1b3d9b",width:"230px"}}/>
<Head sx={{fontSize:"22px",fontWeight:"600"}}>
 Proven Expertise and Reliability   
</Head>
<Disc>Customers choose us for our proven IT expertise, track record of successful projects, and a dedicated team, instilling confidence through reliable and high-quality services.</Disc>

</BoxOne>

<BoxTwo>

<TextTwo sx={{fontSize:"20px",textAlign:"left"}}>Discover the power of seamless connectivity. Our system integration solutions ensure superior performance by intelligently connecting and synchronizing your diverse technological components.</TextTwo>
<TextTwo sx={{fontSize:"20px",textAlign:"left"}}>Experience a revolution in business operations. Our system integrations bridge gaps, enabling a cohesive and responsive environment that unlocks the full potential of your technological ecosystem.</TextTwo>


</BoxTwo>

</ThirdDiv>


<BoxFour>

<FourBoxOne>
    <HeadFour sx={{fontWeight:500,fontSize:18,padding:1,color:"#404044"}}>
Streamlined Excellence - Elevate IT Operations with Seamless Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey",fontSize:18,padding:1}}>
        Experience unparalleled efficiency as we seamlessly integrate and optimize your IT software, unlocking a new level of streamlined excellence for your business operations.
    </DetailFour>
</FourBoxOne>

<FourBoxTwo>

     <HeadFour sx={{fontWeight:500,fontSize:18,padding:1,color:"#404044"}}>
Innovative Fusion - Revolutionize IT with Advanced Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey",fontSize:18,padding:1}}>
Ignite innovation as our expert integrations connect and enhance your IT software, transforming the way your business operates and ensuring a future-ready IT infrastructure.
    </DetailFour>
</FourBoxTwo>



</BoxFour>

<IconBox>

<IconOne>
    <ImgIcon as={"img"} src={analitics}/>
    <IconHead sx={{fontWeight:600,fontSize:22,paddingTop:1}}>Analytics</IconHead>
    <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconOne>

<IconTwo>
     <ImgIcon as={"img"} src={ring}/>
      <IconHead sx={{fontWeight:600,fontSize:22,paddingTop:1}}>Application Integrations</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconTwo>

<IconThree>
     <ImgIcon as={"img"} src={install}/>
      <IconHead sx={{fontWeight:600,fontSize:22,paddingTop:1}}>Installation & Support</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconThree>




</IconBox>

<BottomWrap>
<BottomText sx={{fontSize:"33px",fontWeight:'600'}}>
    Decade-plus of experience in India, the Middle East, and the Asia Pacific, delivering enterprise software and application solutions tailored to meet diverse business needs.
</BottomText>
</BottomWrap>


<Footer>

<IconImg as={"img"} src={logoN}/>
<IconHead>Nigus Systems Private Limited</IconHead>
<FooterDisc sx={{fontSize:'12px'}}>We work across 24 x 7 to help you run your business without any hassle.
<FooterDisc sx={{fontSize:'12px'}}>business without any hassle.
</FooterDisc>

<FooterDisc sx={{fontSize:'12px',paddingTop:10,}}>© 2024 Nigus Systems Pvt Ltd
</FooterDisc>

</FooterDisc>

</Footer>

    </Container>

    </OuterWrapper>
  )
}

export default Home