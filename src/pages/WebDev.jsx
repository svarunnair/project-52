import { Box, Typography, makeStyles } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Slide } from '@mui/material';
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

    // border:"2px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomImg = styled(Box)(({ theme }) => ({

    width:"70%",

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
    width:"48%",

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

const ClientDiv = styled(Box)(({ theme }) => ({
// border:"2px solid blue",
overflow:"auto",
maxWidth:"900px",
display:"flex",
background:"#f8f8f8",
height:350,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgCli = styled(Box)(({ theme }) => ({
// border:"2px solid green",

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
    // border:"2px solid green",
 boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgIcon = styled(Box)(({ theme }) => ({
width:"70%",
paddingTop:0,
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

   padding:20,
  boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px",

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








function WebDev() {
    const [move,setMove]=useState(false)
       const [value,setValue]=useState(0)
         const [valueOne,setValueOne]=useState(0)
          const [valueTwo,setValueTwo]=useState(0)
     const [count,setCount]=useState(false)




const handleEnter = ()=>{
  console.log("Enter")
setValue(50)
}

const handleExit = ()=> {
  console.log("Exit")
setValue(0)
}



const handleEnterOne = ()=>{
  console.log("Enter")
setValueOne(50)
}

const handleExitOne = ()=> {
  console.log("Exit")
setValueOne(0)
}

const handleEnterTwo = ()=>{
  console.log("Enter")
setValueTwo(50)
}

const handleExitTwo = ()=> {
  console.log("Exit")
setValueTwo(0)
}



   let image_set = [ 'http://www.nigussystems.com/images/slider2.png',
      'http://www.nigussystems.com/images/slider1.png',
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

    <TitleOne sx={{fontWeight:"700",fontSize:44}}>Revolutionizing Enterprise with Innovative Solutions</TitleOne>

    <DiscOne>Modernize the organization with innovative software solutions, applications and integrations</DiscOne>

    </DetailOne>

    <ImgOne as={"img"} src='http://www.nigussystems.com/images/integration-logos.gif'/>

    </BoxOne>

    <TextBox sx={{fontSize:24,color:"#404044",fontWeight:500,}}>Our Clients</TextBox>

    <ClientDiv>

{/* <ImgCli as="img" src={image_set[count]}/> */}
 <ImgCliOuter sx={{position: 'relative',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',}}>
 {image_set.map((image, index) => (
        <Slide
          key={index}
          in={index === count}
          direction="right"
          mountOnEnter
          unmountOnExit
        >
          <ImgCli as="img" sx={{ position: 'absolute',
    top: 0,
    left: '-100%',
    transition: 'left 0.5s ease-in-out',}} src={image} alt={`Image ${index + 1}`} />
        </Slide>
      ))}
 </ImgCliOuter>


    </ClientDiv>

    <TitleTwo sx={{fontWeight:"600",fontSize:"34px"}}>
Future-Ready Solutions: Transforming Your Business With Innovative Software
    </TitleTwo>

    <SubDiv sx={{fontSize:19}}>Integrate any business application with new or existing systems</SubDiv>

    <DivOne>
        <DivOneBox>
        <IconImgOne as={"img"} src='http://www.nigussystems.com/images/apps.png'/>
        <TextBox sx={{fontWeight:600,}}>Web Development</TextBox>

        </DivOneBox>
        <DivOneBox>
        <IconImgOne as={"img"} src='http://www.nigussystems.com/images/crm%20integration.png'/>
        <TextBox sx={{fontWeight:600,}}>Web Development</TextBox>

        </DivOneBox>


        <DivOneBox>
    <IconImgOne as={"img"} src='http://www.nigussystems.com/images/unified%20communications.png'/>
    <TextBox sx={{fontWeight:600,}}>Software Development</TextBox>

    </DivOneBox>

    <DivOneBox>
 <IconImgOne as={"img"} src='http://www.nigussystems.com/images/application-integration.png'/>
  <TextBox sx={{fontWeight:600,}}> AI/ML Development</TextBox>
    </DivOneBox>
        
    </DivOne>
    
 <IconSecond>
    
    <IconDiv  onMouseEnter={handleEnter} onMouseLeave={handleExit}>
    <HandshakeIcon sx={{position:"absolute",paddingTop:`${value}px`}}/>
    <WrapIcon>
<ImgIcon as={"img"} src='http://www.nigussystems.com/images/call-center-solutions.png'/>
<TextBox sx={{fontWeight:600,}}>System Integration</TextBox>
</WrapIcon>
    </IconDiv>



    <IconDiv onMouseEnter={handleEnterOne} onMouseLeave={handleExitOne}>
    <HandshakeIcon sx={{position:"absolute",paddingTop:`${valueOne}px`,}}/>
    <WrapIcon>
<ImgIcon as={"img"} src='http://www.nigussystems.com/images/crm%20integration.png'/>
<TextBox sx={{fontWeight:600,width:"100%"}}>CRM Integration</TextBox>
</WrapIcon>
    </IconDiv>


    <IconDiv onMouseEnter={handleEnterTwo} onMouseLeave={handleExitTwo}>
    <HandshakeIcon sx={{position:"absolute",paddingTop:`${valueTwo}px`}}/>
    <WrapIcon>
<ImgIcon as={"img"} src='http://www.nigussystems.com/images/web-conferencing.png'/>
<TextBox sx={{fontWeight:600,width:"100%"}}>Application Integration</TextBox>
</WrapIcon>
    </IconDiv>


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
    <BottomImg as={"img"} src='http://www.nigussystems.com/images/business-conferencing.png' />
</BottomTwo>
    </BottomBox>

      <Footer/>

    </OuterDiv>
  )
}

export default WebDev