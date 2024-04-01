import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import WebDev from '../pages/WebDev'
import SoftDev from '../pages/SoftDev'

function PublicRoutes() {
  return (

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/webdev' element={<WebDev/>}/>
<Route path='/softdev' element={<SoftDev/>}/>


</Routes>
        

  )
}

export default PublicRoutes