import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import SideBar from '../Component/SideBar';


function LayoutPage() {
  const location = useLocation();
  const {pathname} = location;


  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className=''>
      <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet /> 
      <Footer />     
    </div>
  )
}

export default LayoutPage
