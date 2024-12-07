import React, { useState, useEffect, useMemo } from 'react'
import HeroJewelImage from '../../public/assets/Necklace2.jpg'
import Bracelet from '../../public/assets/Bracelet.jpg'
import Ring from '../../public/assets/Ring.jpg'
import Earring from '../../public/assets/Earring.jpg'
import AboutUsJewelleryImage from '../../public/assets/AboutUsJewelleryImage.jpg'
import CurlyLIneLeft from '../../public/assets/CurlyLIneLeft.png'
import CurlyLIneRight from '../../public/assets/CurlyLIneRight.png'
import Ripple from '../Utils/Ripple'


function AboutUsPage() {


    return (
        <div className='relative px-20  flex items-center justify-center'>
            <div className="absolute h-[500px]  -top-20  w-full flex items-center justify-center">
                <Ripple />
                <h1 className='text-[#9FB9E2] text-7xl fontStyle'>About Us</h1>
            </div>
            <div className=" w-full h-[500px] mt-[500px] flex items-center justify-evenly">
                <div className=" h-full w-1/3" style={{backgroundImage : `url(${AboutUsJewelleryImage})`, backgroundSize : 'cover', backgroundPosition : 'center', borderRadius : '40% 40% 60% 60% / 30% 30% 70% 70%'}} ></div>
                <div className=" h-full w-1/2 flex flex-col gap-12 content-center">
                    <div className="flex items-end justify-evenly">
                        <img className='w-[200px]' src={CurlyLIneLeft} alt="" />
                        <h2 className='text-[#9FB9E2] text-3xl mb-2'>JEWELBOC</h2>
                        <img className='w-[200px]' src={CurlyLIneRight} alt="" />
                    </div>
                    <p className='text-[#9FB9E2] text-center'>Uravield when it comes to creating the finest gold and diamond jewellery, jewel group of Companies presents 'Jewels Boc' jewellery showroom that comes from a strong lineage of 10 years of jewellery making. Being the Best Jewellers in Kolkata jewels Boc brings the art that has decades of marvellous experience and expertise in creating glorious and magnificent ornaments that inspires everyone. These mesmerizing Jewellery pieces are available at 'Jewels Boc
                    Jewels Boc is a modernistic brand famed for wedding jewellery in lucknow and Kolkata and diamond ,silver jewellery in lucknow and Kolkata  Keeping our knowledge, passion and experience in mind, we thereby bring jewels Boc the Best jewellers in Kolkata  with the most exclusive collection of jewellery filled with trust and purity. We are committed to offering superior services while providing our customers with the knowledge and expertise at our online shop  that they need to feel confident and excited about any jewellery purchase.</p>                
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage
