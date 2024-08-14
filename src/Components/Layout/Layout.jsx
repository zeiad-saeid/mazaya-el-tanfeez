/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Footer_2 from '../Footer_2/Footer_2'



export default function Layot() {
  return (
    <>
 
<Navbar />

<Outlet></Outlet>
<Footer/>
    </>
  )
}
