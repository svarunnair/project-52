import { Box, Typography, makeStyles } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Slide } from '@mui/material';
import Scroll from '../components/Scroll';
import { Rotate90DegreesCcw } from '@mui/icons-material';
import aidev from '../components/Images/aidev.png'
import appli from '../components/Images/appli.png'
import softdev from '../components/Images/softdev.png'
import webdev from '../components/Images/webdev.png'
import system from '../components/Images/system.png'
import crm from '../components/Images/crm integration.png'
import ldylap from '../components/Images/business-conferencing.png'
import intig from '../components/Images/integration-logo.png'
import slider1 from '../components/Images/slider1.png'
import slider2 from '../components/Images/slider2.png'
import gif from '../components/Images/logogiff.gif'
import it1 from '../components/Images/it.png'
import it2 from '../components/Images/it5.jpeg'
import it3 from '../components/Images/it3.jpeg'
import adv from '../components/video/video_2024-04-03_15-47-43.mp4'
import Marquee from "react-fast-marquee";
import scroll1 from '../components/Images/scroll1.png'
import scroll2 from '../components/Images/scroll2.png'
import scroll3 from '../components/Images/scroll3.png'
import scroll5 from '../components/Images/scroll5.png'
import scroll6 from '../components/Images/scroll6.png'
// import styledd from 'styled-components';



const Container = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    padding:15,
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

const BoxOne = styled(Box)(({ theme }) => ({
    // border:"2px solid yellow",
    display:"flex",
    justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const OuterDiv = styled(Box)(({ theme }) => ({
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BottomBox = styled(Box)(({ theme }) => ({
    display:"flex",
    // border:"2px solid red",
    padding:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      justifyContent:"center",
   flexDirection:"column-reverse",
      justifyItems:"center",
      alignItems:"center",
          padding:0,
  },
    
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomData = styled(Typography)(({ theme }) => ({
  
    // border:"2px solid black",
    textAlign:"left",
    color:"#3c3c3c",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomOne = styled(Typography)(({ theme }) => ({
  
    // border:"2px solid black",
    width:"50%",
    padding:40,

    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"80%",
       padding:20,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomTwo = styled(Typography)(({ theme }) => ({
cursor:"grab",
    // border:"2px solid yellow",
    ":hover":{
      transitionDuration:".5s",
      transform:"scale(1.2)"
    },


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomImg = styled(Box)(({ theme }) => ({

    width:"70%",
  
 boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
        width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomList = styled(Typography)(({ theme }) => ({
  display:"flex",
  flexDirection:"column",
    // border:"2px solid green",
    textAlign:"left",
    paddingTop:20,
    gap:5,
    color:"#3c3c3c",
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const DetailOne = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"40%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgOne = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    width:"70%",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    ":hover":{
      transitionDuration:".5s",
      transform:"scale(1.2)"
    },
borderRadius:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgWrap = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    cursor:"grab",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TitleOne = styled(Typography)(({ theme }) => ({
    textAlign:"left",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const DiscOne = styled(Typography)(({ theme }) => ({
    textAlign:"left",
    color:"grey",
    // border:"2px solid red",
    // ":hover":{
    //   transitionDuration:",5s",
    //   transform:"scale(1.2)",
    // },

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
      textAlign:"center",
      width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextBox = styled(Typography)(({ theme }) => ({
    background:"white",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextBoxX = styled(Typography)(({ theme }) => ({
    background:"transparent",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


const ClientDiv = styled(Box)(({ theme }) => ({

background:"#fffe",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgCli = styled(Box)(({ theme }) => ({
// border:"2px solid green",
width:"100%",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgCliOuter = styled(Box)(({ theme }) => ({
// border:"2px solid blue",
width:"100%",
display:"flex",
justifyContent:"center",
alignItems:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"50%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TitleTwo = styled(Typography)(({ theme }) => ({
    // border:"5px solid green",
    width:"80%",
    justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SubDiv = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    justifyContent:"center",
    color:"grey",
   

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const DivOne = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    paddingTop:40,
    display:"flex",
    gap:20,
    justifyContent:"center",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconSecond = styled(Box)(({ theme }) => ({
 display:"flex",
justifyContent:"center",
//  border:"22px solid red",
paddingTop:"20px",
gap:20,
 

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
     display:"grid",
     gridTemplateColumns:"repeat(2,1fr)",
paddingTop:"20px",
gap:20,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ThirdIcon = styled(Box)(({ theme }) => ({
 display:"flex",
padding:40,
 gap:40,
 paddingLeft:90,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconDiv = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    cursor:"pointer",
    padding:10,
    
    // border:"2px solid green",
 boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    padding:0,
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgIcon = styled(Box)(({ theme }) => ({
width:"70%",
paddingTop:0,
":hover":{
  transitionDuration:".5s",
   transform:  'rotate(45deg)' ,
},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const WrapperSecond = styled(Box)(({ theme }) => ({
 display:"flex",
 flexDirection:"column",
//  border:"2px solid red",
 width:"100%",
 justifyContent:"right",

 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const SecondIcon = styled(Box)(({ theme }) => ({

    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    width:"15%",
    border:"2px solid red",
    height:150,
    padding:30,
    gap:30,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgSecond = styled(Box)(({ theme }) => ({
width:"80%",
border:"2px solid red",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const WrapIcon = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
// border:"2px solid blue",
padding:35,
    justifyContent:"center",
    alignItems:"center",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const DivOneBox = styled(Box)(({ theme }) => ({

  cursor:"pointer",
   padding:25,
   ":hover":{
    transitionDuration:".5s",
    transform:  'rotate(360deg)', 
    padding:"20px",
   
   },
   borderRadius:30,
  boxShadow:" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const IconImgOne = styled(Box)(({ theme }) => ({

  //  border:"2px solid red",
    width:"80%",
    
   
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ArrowDiv = styled(Box)(({ theme }) => ({

  //  border:"2px solid red",
    width:"80%",
    position:"sticky",
    top:100,
   
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))



function WebDev() {
   
     const [count,setCount]=useState(false)

  //    const slideAnimation = keyframe
  // from {
  //   transform: translateX(0);
  // }
  // to {
  //   transform: translateX(-100%);
  // }



   let image_set = [ "http://www.nigussystems.com/images/service-mobility.png",
      "http://www.nigussystems.com/images/versatality-features.png",
     ]


 useEffect(() => {
  const interval = setInterval(() => {
    if (count === 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 2000);

  return () => clearInterval(interval);
}, [count]);


console.log("count",count)


  return (
    <OuterDiv>
    <Container>

    <BoxOne>

    <DetailOne>

    <TitleOne sx={{fontWeight:"700",fontSize:44,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Revolutionizing Enterprise with Innovative Solutions</TitleOne>

    <DiscOne>Modernize the organization with innovative software solutions, applications and integrations</DiscOne>

    </DetailOne>

<ImgWrap>
    <ImgOne as={"img"} src={gif}/>
    </ImgWrap>

    </BoxOne>

    <TextBox sx={{fontSize:24,color:"#404044",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",fontWeight:500,paddingTop:5,background:"transparent"}}>Our Clients</TextBox>

   

    <ClientDiv sx={{paddingBottom:10}}>
   <Marquee speed={100}>
    <ImgCli as={"img"} src={scroll1}/>
    <ImgCli as={"img"} src={scroll2}/>
    <ImgCli as={"img"} src={scroll3}/>
    <ImgCli as={"img"} src={scroll5}/>
    <ImgCli as={"img"} src={scroll6}/>

    </Marquee>


    </ClientDiv>

     <video style={{width:"100%"}} autoPlay muted loop src={adv}/>

    <TitleTwo sx={{fontWeight:"600",fontSize:"34px"}}>
Future-Ready Solutions: Transforming Your Business With Innovative Software
    </TitleTwo>

    <SubDiv sx={{fontSize:19}}>Integrate any business application with new or existing systems</SubDiv>
<ArrowDiv>
  <Scroll/>
</ArrowDiv>
    <DivOne>
        <DivOneBox>
        <IconImgOne as={"img"} src={webdev}/>
        <TextBoxX sx={{fontWeight:600,}}>Web Development</TextBoxX>

        </DivOneBox>
        <DivOneBox>
        <IconImgOne as={"img"} src={appli}/>
        <TextBoxX sx={{fontWeight:600,}}>Application Development</TextBoxX>

        </DivOneBox>


        <DivOneBox >
    <IconImgOne as={"img"} src={softdev}/>
    <TextBoxX sx={{fontWeight:600,}}>Software Development</TextBoxX>

    </DivOneBox>

    <DivOneBox>
 <IconImgOne as={"img"} src={aidev}/>
  <TextBoxX sx={{fontWeight:600,}}> AI/ML Development</TextBoxX>
    </DivOneBox>
        
    </DivOne>
    
 <IconSecond>

 <DivOneBox>
 <IconImgOne as={"img"} src={system}/>
  <TextBoxX sx={{fontWeight:600,}}> System Integration</TextBoxX>
    </DivOneBox>
    
    
<DivOneBox>
 <IconImgOne as={"img"} src={crm}/>
  <TextBoxX sx={{fontWeight:600,}}>CRM Integration</TextBoxX>
    </DivOneBox>

  
    <DivOneBox>
 <IconImgOne as={"img"} src={intig}/>
  <TextBoxX sx={{fontWeight:600,}}> Application Integration</TextBoxX>
    </DivOneBox>


    </IconSecond>

    <ThirdIcon>

    

    </ThirdIcon>

    

    </Container>

   

    <BottomBox>
    <BottomOne>
    <BottomData sx={{fontSize:18}}>
    Our services are designed to help businesses establish a robust online presence in the digital age. We empower our clients to create impactful websites that effectively engage users and provide seamless experiences. Whether it's an enterprise software, a corporate website, or a web application, we leverage our creativity and technical expertise to develop responsive, user-friendly.

    </BottomData>
    <BottomList>
    <TextBox><CheckCircleIcon sx={{color:" #20ace2;"}}/>Web Development</TextBox>
     <TextBox><CheckCircleIcon sx={{color:" #20ace2;"}}/>Application Development</TextBox>
 <TextBox><CheckCircleIcon sx={{color:" #20ace2;"}}/>Software Development</TextBox>
 <TextBox><CheckCircleIcon sx={{color:" #20ace2;"}}/>AI/ML Development</TextBox>
 <TextBox><CheckCircleIcon sx={{color:" #20ace2;"}}/>System Integration</TextBox>
    </BottomList>
</BottomOne>

<BottomTwo>
    <BottomImg as={"img"} src={ldylap} />
</BottomTwo>
    </BottomBox>

      <Footer/>

    </OuterDiv>
  )
}

export default WebDev