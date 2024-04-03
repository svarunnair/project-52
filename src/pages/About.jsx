import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled(Box)(({ theme }) => ({
display:"flex",
// border:"2px solid red",
flexDirection:"column",
alignItems:"end",
padding:30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TitleDiv = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BottomDiv = styled(Box)(({ theme }) => ({

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BoxDiv = styled(Box)(({ theme }) => ({

    display:'grid',
    gridTemplateColumns:"repeat(2,1fr)",
  justifyItems:"center",
    alignItems:"center",
    // border:"2px solid blue",
    width:"90%",
    alignContent:'center',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxOne = styled(Box)(({ theme }) => ({
    textAlign:"left",
    // border:"2px solid green",
    padding:20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const ImgBox = styled(Box)(({ theme }) => ({
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BoxTitle = styled(Box)(({ theme }) => ({

    color:'#404044',
    
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const BoxDisc = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"90%",
    paddingTop:"5px",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
function About() {

  const [show,setShow]=useState(false)

   

    const handleMove=(e)=>{
    const x = e.nativeEvent.clientX;
    const y = e.nativeEvent.clientY;
    console.log(`Mouse position: (${x}, ${y})`)
    if(x<600){
      setShow(true)
    }else{
      setShow(false)
    }
    }

  return (
    <>
     <TitleDiv sx={{fontWeight:700,fontSize:36,color:"#404044"}}>Decade of Experience</TitleDiv>
    <Container>

    <BoxDiv onMouseMove={handleMove}>

    {!show&&<BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/reliablity.png'/>
        <BoxTitle sx={{fontSize:24,}}>Support and Training</BoxTitle>
         <BoxDisc>Benefit from a dedicated support team committed to your success. Our software solutions come with personalized training options and ongoing support, empowering your team to maximize the full potential of our tools.</BoxDisc>
    </BoxOne>}

    {!show&&<BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/client-interaction.png'/>
        <BoxTitle sx={{fontSize:24,}}>Robust Security Measures</BoxTitle>
         <BoxDisc sx={{fontSize:18}} >Safeguard your valuable data with our robust security features. From encryption to regular updates, our solutions prioritize the highest standards of security, ensuring the confidentiality and integrity of your information.</BoxDisc>
    </BoxOne>}


    {show&&<BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/cost-efficency.png'/>
        <BoxTitle sx={{fontSize:24,}}>Cost-Effective Solutions</BoxTitle>
         <BoxDisc>Optimize your budget with our cost-effective software solutions. Enjoy a comprehensive set of features without compromising on quality. Our pricing models are designed to offer value for your investment, helping you achieve a higher return on investment.</BoxDisc>
    </BoxOne>}

    {show&&<BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/service-mobility.png'/>
        <BoxTitle sx={{fontSize:24,}}>Innovative Technology</BoxTitle>
         <BoxDisc sx={{fontSize:18}} >Embrace cutting-edge technology with our software solutions, ensuring your business stays ahead in an ever-evolving digital landscape. Benefit from features designed to enhance efficiency and adaptability.</BoxDisc>
    </BoxOne>}

    <BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/versatality-features.png'/>
        <BoxTitle sx={{fontSize:24,}}>Customer-Centric Solutions</BoxTitle>
         <BoxDisc sx={{fontSize:18}}>Experience an intuitive and user-friendly interface tailored to meet the needs of your team. Our software prioritizes a seamless user experience, reducing learning curves and optimizing productivity.</BoxDisc>
    </BoxOne>

    <BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/simple-conference-calls.png'/>
        <BoxTitle sx={{fontSize:24,}}> Scalability and Flexibility</BoxTitle>
         <BoxDisc sx={{fontSize:18}}>Grow your business without constraints. Our software solutions offer scalability and flexibility, accommodating the evolving demands of your organization. Scale up effortlessly as your requirements change.</BoxDisc>
    </BoxOne>

    <BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/client-interaction.png'/>
        <BoxTitle sx={{fontSize:24,}}>Robust Security Measures</BoxTitle>
         <BoxDisc sx={{fontSize:18}}>Safeguard your valuable data with our robust security features. From encryption to regular updates, our solutions prioritize the highest standards of security, ensuring the confidentiality and integrity of your information.</BoxDisc>
    </BoxOne>

    <BoxOne>
        <ImgBox as={"img"} src='http://www.nigussystems.com/images/reliablity.png'/>
        <BoxTitle sx={{fontSize:24,}}>Support and Training</BoxTitle>
         <BoxDisc sx={{fontSize:18}}>Benefit from a dedicated support team committed to your success. Our software solutions come with personalized training options and ongoing support, empowering your team to maximize the full potential of our tools.</BoxDisc>
    </BoxOne>




    </BoxDiv>
        


        <BottomDiv></BottomDiv>

    </Container>

    </>
  )
}

export default About