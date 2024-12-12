import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkle, ArrowUpRight, ArrowRight } from 'lucide-react';
import ArrowIcon from '../../public/assets/ArrowIcon.svg'

import RingsOf from '../../public/assets/Rings.png';
import RingsOf2 from '../../public/assets/Ring2.png';
import NeckLaceCarousel from '../../public/assets/NeckLaceCarousel.png';
import Necklace from '../../public/assets/NeckLace.jpg';
import JewelryProductCard from './pricingCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const JewellerySection = () => {
  const [jewels] = useState([
    {
      img: RingsOf,
      title: "Eternal Solitaire",
      description: "Classic Diamond Ring",
      price: "$2,999",
      category: "Rings"
    },
    {
      img: RingsOf2,
      title: "Golden Embrace",
      description: "18K Gold Necklace",
      price: "$4,500",
      category: "Necklaces"
    },
    {
      img: NeckLaceCarousel,
      title: "Lunar Pearl",
      description: "Akoya Pearl Earrings",
      price: "$1,799",
      category: "Earrings"
    },
    {
      img: RingsOf2,
      title: "Silver Symphony",
      description: "Elegant Tennis Bracelet",
      price: "$1,299",
      category: "Bracelets"
    },
    {
      img: NeckLaceCarousel,
      title: "Celestial Gem",
      description: "Sapphire Pendant",
      price: "$3,299",
      category: "Pendants"
    },
    {
      img: RingsOf2,
      title: "Eternal Bond",
      description: "Platinum Wedding Band",
      price: "$1,999",
      category: "Rings"
    },
    {
      img: NeckLaceCarousel,
      title: "Timeless Precision",
      description: "Swiss Luxury Watch",
      price: "$5,999",
      category: "Watches"
    },
    {
      img: RingsOf,
      title: "Radiant Sparkle",
      description: "Diamond Stud Earrings",
      price: "$2,499",
      category: "Earrings"
    },
    {
      img: RingsOf,
      title: "Golden Legacy",
      description: "18K Gold Chain",
      price: "$3,799",
      category: "Necklaces"
    }
  ]);

  return (
    <div className="relative overflow-hidden w-full ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          // When window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ 
          el: '.swiper-pagination', 
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className='swiper_container w-full'
      >
        {jewels.map((jewel, index) => (
          <SwiperSlide 
            key={index} 
            className='flex justify-center items-center my-10 px-2 md:px-4'
          >
            <JewelryProductCard
              imageUrl={Necklace}
              gemColor="#d4af37"
              title="Golden Lotus Pendant"
              description="Intricate 18k gold pendant"
              price={''}
              inStock={false}
              onReserve={() => console.log('Reserving piece')}
            />
          </SwiperSlide>
        ))}
        
        <div className="slider-controler flex justify-center items-center space-x-4 mt-4">
          <div className="swiper-button-prev slider-arrow  rounded-full border-white bg-white/10 backdrop-blur-md">
            {/* <ArrowRight className="w-6 h-6 transform rotate-180" /> */}
            <img src={ArrowIcon} alt="" />
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow  rounded-full border-white  bg-white/10 backdrop-blur-md">
           <img className='rotate-180' src={ArrowIcon} alt="" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default JewellerySection;