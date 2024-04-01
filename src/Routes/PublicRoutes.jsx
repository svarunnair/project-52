import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import WebDev from '../pages/WebDev'
import SoftDev from '../pages/SoftDev'
import AiDev from '../pages/AiDev'
import System from '../pages/System'

function PublicRoutes() {
  return (

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/webdev' element={<WebDev/>}/>
<Route path='/softdev' element={<SoftDev/>}/>
<Route path='/aidev' element={<AiDev/>}/>
<Route path='/system' element={<System/>}/>


</Routes>
        

  )
}

export default PublicRoutes