import React from 'react'
import LeftSideImage from '../../public/assets/Necklace.jpg'
import EarringVideo from '../../public/assets/AboutUsVideo.mp4'

function AboutUs() {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col items-center justify-center "> 
        <h2 className='text-[#9fb8e2] text-7xl fontStyle'>About Us</h2>
        <p className=" leading-relaxed text-center px-72 text-sm text-white/80">
          Jewelboc is a cutting-edge digital platform for managing and showcasing jewelry collections. It offers intuitive inventory tracking, high-resolution image storage, and robust security features for collectors and enthusiasts.
        </p></div>
      <div className="flex justify-center gap-10 h-[600px] mx-32">
        <div className="h-full w-1/2 flex flex-col justify-center">
          <img
            src={LeftSideImage}
            alt="Elegant Jewelry Craftsmanship"
            className="w-full h-[500px] object-cover shadow-2xl"
          />
          <div className="mt-8 text-center space-y-4">
            <div className="relative inline-block px-4">
              <h2 className="text-3xl font-light tracking-wide text-[#9fb9e2] relative z-10">
                Our Passion for Jewelry
              </h2>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#9fb9e2]/20 -z-10"></div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed px-6 max-w-xl mx-auto">
              Crafting more than accessories, we create narratives of elegance.
              Each piece embodies a delicate balance between artistic vision and
              meticulous craftsmanship. Our jewelry transcends mere adornment –
              it's a personal statement, a moment captured, a story waiting to be told.
            </p>
            <div className="h-[2px] w-24 mx-auto bg-[#9fb9e2]/50"></div>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center relative">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000003e]"></div>
          <video
            autoPlay
            loop
            muted
            src={EarringVideo}
            alt="Exquisite Necklace Collection"
            className="h-full w-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs