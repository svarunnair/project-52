import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


const Container = styled(Box)(({ theme }) => ({
    border:"2px solid red",
    display:"flex",
    flexDirection:'column',
    gap:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const FirstBox = styled(Box)(({ theme }) => ({
    display:"flex",
    border:"2px solid blue",
    justifyContent:"center",
    gap:30,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SecondBox = styled(Box)(({ theme }) => ({

    border:"2px solid black",
    justifyContent:"center",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))



const SecondDetail = styled(Typography)(({ theme }) => ({

    border:"2px solid green",
   


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Heading = styled(Box)(({ theme }) => ({

    border:"2px solid black",
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
    border:"2px solid green",
    width:"50%",
    gap:30,
    

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerImg = styled(Box)(({ theme }) => ({
    display:"flex",
    border:"2px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextInner = styled(Typography)(({ theme }) => ({
    fontSize:"50px",
    color:'red',
    textAlign:"left",

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

const Wrapper = styled(Box)(({ theme }) => ({
   display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Detail = styled(Box)(({ theme }) => ({
   display:"grid",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImgSec = styled(Box)(({ theme }) => ({
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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

const ThirdDiv = styled(Box)(({ theme }) => ({
   display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxFour = styled(Box)(({ theme }) => ({
   display:"flex",
   border:"2px solid green",
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

const BottomWrap = styled(Typography)(({ theme }) => ({
   background:"#1b3d9b",
   padding:40,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Footer = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    textAlign:"left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconImg = styled(Box)(({ theme }) => ({
    border:"2px solid green",
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
   border:"2px solid green",
   justifyContent:"center",
   gap:50,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const IconOne = styled(Box)(({ theme }) => ({
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
      alignItems:"center",
   border:"2px solid green",
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
   
   border:"2px solid green",
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
   border:"2px solid red",
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
   border:"2px solid green",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))



const FourBoxOne = styled(Box)(({ theme }) => ({
   
   border:"2px solid green",
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

   border:"2px solid green",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BoxOne = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:"35%",
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Head = styled(Box)(({ theme }) => ({
    border:"2px solid black",
   
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
    border:"2px solid red",
    justifyContent:'center',
   
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextTwo = styled(Box)(({ theme }) => ({
   textAlign:"left",
    color:"grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


function Home() {
  return (
    <Container>
        <FirstBox>
        <InnerOne>
        <TextInner sx={{fontSize:38}}>Empowering Innovation through Customized Applications  </TextInner>
        <TextDes>We specialize in crafting cutting-edge applications that redefine user experiences and drive business success.Our team of experienced developers utilizes the latest technologies to create scalable and robust applications tailored to meet your unique needs.</TextDes>
<TextDes >From concept to deployment, we are dedicated to delivering top-notch solutions that elevate your digital presence and exceed your expectations.</TextDes>
        </InnerOne>

<InnerImg as={"img"} src='http://www.nigussystems.com/images/complete-callcenter-solution.gif'/>

        </FirstBox>


<SecondBox>

<Heading>Effortless Collaboration, Elevate With System Integrations
</Heading>


<Wrapper>
<ImgSec as={"img"} src='http://www.nigussystems.com/images/customer-support-system.png'/>

<Detail>
<SecondDetail>

Break down silos and enhance collaboration across your organization. Seamlessly connect disparate systems for a more cohesive and streamlined workflow.

</SecondDetail>

<SecondDetail>
    Stay ahead in a dynamic landscape with our forward-thinking system integrations. Embrace innovation as we align and future-proof your technology infrastructure for sustained success.
</SecondDetail>

</Detail>

</Wrapper>
</SecondBox>


<SubDiv sx={{fontWeight:"600",fontSize:40}}>
    Seamless Connectivity, Superior Performance: Explore System Integrations
</SubDiv>


<ThirdDiv>

<BoxOne>

<Head sx={{fontSize:24,fontWeight:"600"}}>
 Proven Expertise and Reliability   
</Head>
<Disc>Customers choose us for our proven IT expertise, track record of successful projects, and a dedicated team, instilling confidence through reliable and high-quality services.</Disc>


</BoxOne>

<BoxTwo>

<TextTwo>Discover the power of seamless connectivity. Our system integration solutions ensure superior performance by intelligently connecting and synchronizing your diverse technological components.</TextTwo>
<TextTwo>Experience a revolution in business operations. Our system integrations bridge gaps, enabling a cohesive and responsive environment that unlocks the full potential of your technological ecosystem.</TextTwo>


</BoxTwo>

</ThirdDiv>

<BoxFour>

<FourBoxOne>
    <HeadFour sx={{fontWeight:600,fontSize:18}}>
Streamlined Excellence - Elevate IT Operations with Seamless Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey"}}>
        Experience unparalleled efficiency as we seamlessly integrate and optimize your IT software, unlocking a new level of streamlined excellence for your business operations.
    </DetailFour>
</FourBoxOne>

<FourBoxTwo>

     <HeadFour sx={{fontWeight:600,fontSize:18}}>
Innovative Fusion - Revolutionize IT with Advanced Software Integrations
    </HeadFour>

    <DetailFour sx={{color:"grey"}}>
Ignite innovation as our expert integrations connect and enhance your IT software, transforming the way your business operates and ensuring a future-ready IT infrastructure.
    </DetailFour>
</FourBoxTwo>



</BoxFour>

<IconBox>

<IconOne>
    <ImgIcon as={"img"} src='http://www.nigussystems.com/images/queue-statistics.png'/>
    <IconHead>Analytics</IconHead>
    <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconOne>

<IconTwo>
     <ImgIcon as={"img"} src='http://www.nigussystems.com/images/call-features.png'/>
      <IconHead>Application Integrations</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconTwo>

<IconThree>
     <ImgIcon as={"img"} src='http://www.nigussystems.com/images/configure.png'/>
      <IconHead>Installation & Support</IconHead>
       <IconDisc>Elevate performance through cutting-edge IT system analytics, providing deep insights for strategic decision-making and business empowerment.</IconDisc>
</IconThree>




</IconBox>

<BottomWrap>
<BottomText sx={{fontSize:"35px",fontWeight:'700'}}>
    Decade-plus of experience in India, the Middle East, and the Asia Pacific, delivering enterprise software and application solutions tailored to meet diverse business needs.
</BottomText>
</BottomWrap>


<Footer>

<IconImg as={"img"} src="http://www.nigussystems.com/images/nigus-logo.png"/>
<IconHead>Nigus Systems Private Limited</IconHead>
<FooterDisc sx={{fontSize:'12px'}}>We work across 24 x 7 to help you run your business without any hassle.

</FooterDisc>

</Footer>



    </Container>
  )
}

export default Home