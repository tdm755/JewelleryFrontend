import React from 'react'
import Carousel from '../Component/Carousel'
import HeroSection from '../Component/HeroSection'
import AboutUs from '../Component/AboutUs'
import JewellerySection from '../Component/Jewelleries'
import JewelleryComp2 from '../Component/JewelleryComp2'
import Features from '../Component/Features'


function HomePage() {
  return (
    <div className='flex flex-col gap-72'>
      <HeroSection />
      <Carousel />
      <AboutUs />
      <div className="flex flex-col gap-32">
        <JewelleryComp2 />
        <JewellerySection />
      </div>
      <Features />

    </div>
  )
}

export default HomePage
