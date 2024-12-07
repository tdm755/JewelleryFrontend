import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkle, ArrowUpRight, ArrowRight } from 'lucide-react';


import RingsOf from '../../public/assets/Rings.png';
import RingsOf2 from '../../public/assets/Ring2.png';
import NeckLaceCarousel from '../../public/assets/NeckLaceCarousel.png';
import Necklace from '../../public/assets/Necklace.jpg';
import JewelryProductCard from './pricingCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const JewellerySection = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    <div className="relative overflow-hidden">

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto"> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}

        // spaceBetween={30}
        slidesPerView={3}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={
          {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }
        }
        modules={[EffectCoverflow, Navigation, Pagination]}
        className='swiper_container'
      >
        {jewels.map((jewel, index) => (
          <SwiperSlide className='my-10' key={index}>
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
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowRight name='arrow-back-outline' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight name='arrow-forward-outline' />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>


    // </div>
  );
};

export default JewellerySection;