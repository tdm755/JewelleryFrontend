import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'


function LayoutPage() {
  const location = useLocation();
  const {pathname} = location;

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className=''>
      <Header />
        <Outlet /> 
      <Footer />     
    </div>
  )
}

export default LayoutPage
