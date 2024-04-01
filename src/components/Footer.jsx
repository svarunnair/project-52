import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    textAlign:"left",
    padding:30,
    background:"#ebebeb",

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
const IconImg = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    width:"10%",

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


function Footer() {
  return (
  <FooterDiv>

<IconImg as={"img"} src="http://www.nigussystems.com/images/nigus-logo.png"/>
<IconHead>Nigus Systems Private Limited</IconHead>
<FooterDisc sx={{fontSize:'12px'}}>We work across 24 x 7 to help you run your business without any hassle

</FooterDisc>
<FooterDisc sx={{fontSize:'12px'}}>business without any hassle.
</FooterDisc>

<FooterDisc sx={{fontSize:'12px',paddingTop:10,}}>© 2024 Nigus Systems Pvt Ltd
</FooterDisc>

</FooterDiv>
  )
}

export default Footer