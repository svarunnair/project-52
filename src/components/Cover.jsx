import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'



const Container = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:'column',
    alignItems:"center",
    border:"2px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Img = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:'column',
    border:"2px solid red",
    width:"30%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const Inner = styled(Box)(({ theme }) => ({

    display:"flex",
    maxWidth:"500px",
    border:"2px solid green",
    justifyContent:'center',
    alignItems:"center",
    padding:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Data = styled(Typography)(({ theme }) => ({

    display:"flex",
    flexDirection:'column',
    border:"2px solid blue",
    width:"60%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
function Cover() {
    const [show,setShow]=useState(false)

    const handleChange=()=>{
        setShow(true)
    }
    const handleChangePre=()=>{
        setShow(false)
    }
  return (
    <Container>

    <Inner>
    {show?<Data>
    Discover the power of seamless connectivity. Our system integration solutions ensure superior performance by intelligently connecting and synchronizing your diverse technological components.
Experience a revolution in business operations. Our system integrations bridge gaps, enabling a cohesive and responsive environment that unlocks the full potential of your technological ecosystem.

    </Data>

 : <Data>Page 2...............Semaphore Analytica was founded with this core service for companies in the manufacturing, logistics, and distribution industries. This model is an affordable solution for leaders who require a comprehensive understanding of every aspect of their operations. We provide a subscription model – Monthly and Annual – that provides a full suite of services that integrates data from every aspect of the business operation and display them in a daily workbook with dynamic analytics and data visualization.</Data>}
   
   <Button onClick={handleChange}>next</Button>
    <Button onClick={handleChangePre}>pre</Button>
    </Inner>

    </Container>
  )
}

export default Cover