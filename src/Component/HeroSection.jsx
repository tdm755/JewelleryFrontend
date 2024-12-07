import React, { useState, useEffect, useMemo } from 'react'
import HeroJewelImage from '../../public/assets/Necklace2.jpg'
import Bracelet from '../../public/assets/Bracelet.jpg'
import Ring from '../../public/assets/Ring.jpg'
import Earring from '../../public/assets/Earring.jpg'
import Ripple from '../Utils/Ripple'

function HeroSection() {
    const [jewelView, setjewelView] = useState('Necklaces');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Pre-load images to prevent flicker during transitions
    useEffect(() => {
        const images = [HeroJewelImage, Bracelet, Ring, Earring];
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    // Memoize all style configurations
    const jewelConfigs = useMemo(() => ({
        'Necklaces': {
            borderRadius: '40% 40% 60% 60% / 30% 30% 70% 70%', // Elegant curved pendant shape
            image: HeroJewelImage,
            hrPosition: 'top-[19px]'
        },
        'Bracelets': {
            borderRadius: '40% 40% 40% 40% / 80% 80% 20% 20%', // Curved bracelet/cuff shape
            image: Bracelet,
            hrPosition: 'top-[61px]'
        },
        'Rings': {
            borderRadius: '50% 50% 50% 50% / 25% 25% 75% 75%', // Ring band shape
            image: Ring,
            hrPosition: 'top-[107px]'
        },
        'Earrings': {
            borderRadius: '60% 60% 40% 40% / 60% 60% 40% 40%', // More elegant teardrop shape
            image: Earring,
            hrPosition: 'top-[150px]'
        }
    }), []);

    const currentConfig = jewelConfigs[jewelView];

    return (
        <div className='h-[500px] px-20 flex mt-28'>
            <Ripple />

            <div className="h-full w-1/3 flex flex-col justify-between items-end">
                <span className='fontStyle text-[150px] font-mono text-[#9FB9E2] animate-fade-in-down'>Jew</span>
                <div className={`flex flex-col gap-3 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h2 className="text-2xl text-[#9FB9E2] font-light">Discover Our</h2>
                    <h1 className="text-4xl text-[#9FB9E2] font-semibold">Exclusive Collection</h1>
                    <p className="text-gray-300 mt-2 max-w-sm">
                        Explore our handcrafted jewelry pieces made with the finest materials and expert craftsmanship.
                    </p>
                    <button className="bg-white/10 backdrop-blur-sm text-white hover:text-primary-default  px-6 py-2 mt-4 w-fit hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform">
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="h-full w-1/3 flex items-center justify-center">
                <div
                    className={`h-[97%] w-[90%] transition-all bg-black duration-700 ease-in-out overflow-hidden bg-center bg-cover transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{
                        borderRadius: currentConfig.borderRadius,
                        backgroundImage: `url(${currentConfig.image})`,
                        transition: 'all 0.7s ease-in-out'
                    }}
                >
                </div>
            </div>

            <div className="h-full w-1/3 flex flex-col justify-between">
                <div className={`flex flex-col gap-3 items-end relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <hr className='w-44 absolute bottom-0 -left-5' />
                    <div className="flex flex-col gap-2 border-l mr-8 relative">
                        <hr className={`absolute w-10 border-[#9FB9E2] transition-all duration-700 ${currentConfig.hrPosition}`} />
                        {Object.keys(jewelConfigs).map((type) => (
                            <button
                                key={type}
                                onClick={() => setjewelView(type)}
                                className={`transition-all duration-700 ease-in-out hover:scale-105 ${jewelView === type ? 'pl-12 text-primary-default font-bold' : 'text-[#9FB9E2]'} px-4 py-2 text-sm flex items-start w-60`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="">
                    <span className='fontStyle text-[150px] font-mono text-[#9FB9E2] animate-fade-in-up'>ellery</span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
