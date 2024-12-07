import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CLogo from '../../public/assets/download.jpeg'
import RingsOf from '../../public/assets/Rings.png';
import RingsOf2 from '../../public/assets/Ring2.png';
import NeckLaceCarousel from '../../public/assets/NeckLaceCarousel.png';
import CompanyLogo from '../../public/assets/CompanyLogo.png';


function MidCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const carouselResponsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const [Jewels, setJewels] = useState([
        {
            img: RingsOf,
            title: "Eternal Solitaire",
            description: "Classic Diamond Ring",
            price: "$2,999"
        },
        {
            img: RingsOf2,
            title: "Golden Embrace",
            description: "18K Gold Necklace",
            price: "$4,500"
        },
        {
            img: NeckLaceCarousel,
            title: "Lunar Pearl",
            description: "Akoya Pearl Earrings",
            price: "$1,799"
        },
        {
            img: RingsOf2,
            title: "Silver Symphony",
            description: "Elegant Tennis Bracelet",
            price: "$1,299"
        },
        {
            img: NeckLaceCarousel,
            title: "Celestial Gem",
            description: "Sapphire Pendant",
            price: "$3,299"
        },
        {
            img: RingsOf2,
            title: "Eternal Bond",
            description: "Platinum Wedding Band",
            price: "$1,999"
        },
        {
            img: NeckLaceCarousel,
            title: "Timeless Precision",
            description: "Swiss Luxury Watch",
            price: "$5,999"
        },
        {
            img: RingsOf,
            title: "Radiant Sparkle",
            description: "Diamond Stud Earrings",
            price: "$2,499"
        },
        {
            img: RingsOf,
            title: "Golden Legacy",
            description: "18K Gold Chain",
            price: "$3,799"
        }
    ]);
    const [isPaused, setIsPaused] = useState(false);
    const scrollerRef = useRef(null);

    useEffect(() => {
        if (scrollerRef.current) {
            const content = scrollerRef.current.innerHTML;
            scrollerRef.current.innerHTML = content + content;
        }
    }, []);

    const handleMouseEnter = () => {
        if (scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = 'paused';
        }
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        if (scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = 'running';
        }
        setIsPaused(false);
    };

    return (
        <div className="w-full relative ">
            {/* <div className="scroller-container mt-50 overflow-visible  bg-white absolute z-10 -right-4 -left-4 flex items-center justify-center -rotate-3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}>
                <div className="scroller flex animate-scroll" 
                    ref={scrollerRef}
                    style={{
                        animation: 'scroll 30s linear infinite',
                        display: 'flex',
                        whiteSpace: 'nowrap'
                    }}>
                    {Jewels ? Jewels.map((item, index) => (
                        <div key={index} className="category-item CAtegoryItem flex-shrink-0 mx-4 group hover:scale-105 transition-transform duration-300 ease-in-out">
                            <div className="item-logo flex items-center text-center">
                                <div className="image-container w-24 h-16 rounded-full overflow-hidden shadow-lg ">
                                    <img 
                                        className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out' 
                                        src={item.img} 
                                        alt={item.title}
                                    />
                                </div>
                                <div className="text-info">
                                    <h4 className="font-semibold text-sm text-[#9fb9e2]">{item.title}</h4>
                                    <p className="text-xs text-white">{item.description}</p>
                                    <p className="text-xs font-bold text-gray-700">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div> */}
            <div className="absolute -right-4 -left-4 h-20 rotate-6 overflow-hidden">
                <div className="whitespace-nowrap animate-scroll" style={{
                    animation: 'scroll 7s linear infinite',
                }}>
                    <h1 className="text-5xl font-bold" style={{
                        WebkitTextStroke: '1px #9fb9e2',
                        color: 'transparent',
                    }}>
                        Welcome to Our Amazing Collection of Jewels • Welcome to Our Amazing Collection of Jewels •
                    </h1>
                </div>
            </div>
            <div className=" bg-[#ffffff11] backdrop-blur-sm w-96 h-32 absolute z-20 left-[35%] -top-9 rounded-md shadow-lg flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                    <div className='BracketsBlinkEffect  font-extralight'>{'{'}</div>
                    <img className='w-20 h-20 ' src={CompanyLogo} alt="" />
                    <div className='BracketsBlinkEffect font-extralight'>{'}'}</div>
                </div>
                <div className="absolute z-10 w-full flex items-center justify-between">
                    <hr className='w-[32%] border-2 border-[#333966] rounded-r-full' />
                    <hr className='w-[32%] border-2 border-[#333966] rounded-l-full' />
                </div>
            </div>
            {/* <div className=" bg-gradient-to-r from-[#9fb9e2] to-[#ffffff] w-96 h-32 absolute z-20 left-[35%] -top-10 rounded-lg shadow-lg flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                    <div className='BracketsBlinkEffect  font-extralight'>{'{'}</div>
                    <img className='w-20 h-20 ' src={CompanyLogo} alt="" />
                    <div className='BracketsBlinkEffect font-extralight'>{'}'}</div>
                </div>
                <div className="absolute z-10 w-full flex items-center justify-between">
                    <hr className='w-[32%] border-2 border-[#333966] rounded-r-full' />
                    <hr className='w-[32%] border-2 border-[#333966] rounded-l-full' />
                </div>
            </div> */}
            <div className=" absolute -right-4 -left-4 h-20 -rotate-6 overflow-hidden">
                <div className="whitespace-nowrap animate-scroll" style={{
                    animation: 'scroll 7s linear infinite',
                }}>
                    <h1 className="text-5xl font-bold" style={{
                        WebkitTextStroke: '1px #9fb9e2',
                        color: 'transparent',
                    }}>
                        Welcome to Our Amazing Collection of Jewels • Welcome to Our Amazing Collection of Jewels •
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default MidCarousel;