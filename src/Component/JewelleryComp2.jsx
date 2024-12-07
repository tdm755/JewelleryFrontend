import React, { useReducer, useState } from 'react'
import JewelleryImage1 from '../../public/assets/JewelleryImage1.jpg'
import Bracelet3 from '../../public/assets/Bracelet3.jpg'
import JewelleryImage2 from '../../public/assets/JewelleryImage2.jpg'
import JewelleryImage3 from '../../public/assets/JewelleryImage3.jpg'
import JewelleryImage4 from '../../public/assets/JewelleryImage4.jpg'
// import JewelleryVideo from '../../public/assets/JewelleryVideo.mp4'
import HeroJewelImage from '../../public/assets/HeroJewelImage.png'
import { motion } from 'framer-motion';
import { Heart, Sparkle, ArrowUpRight, ArrowRight, Play, Pause } from 'lucide-react';


function JewelleryComp2() {

    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useReducer(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };


    return (
        <div className='flex flex-col gap-32'>

           <div className="flex flex-col gap-20">
           <div className="flex flex-col relative">
                {/* Animated Header */}
                <motion.div
                    className=" overflow-hidden"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="whitespace-nowrap animate-scroll text-center">
                        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-[#9fb9e2] fontStyle">
                            {/* Discover Exquisite Jewelry • Timeless Elegance Awaits • */}
                            New Collections
                        </h1>
                    </div>
                </motion.div>

                {/* Featured Section Title */}
                <motion.div
                    className="max-w-xl mx-auto text-center relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-extrabold text-[#9fb9e2] mb-4 flex items-center justify-center">
                        <Sparkle className="mr-3 text-blue-500" />
                        Explore Our Curated Collection
                        <Sparkle className="ml-3 text-blue-500" />
                    </h2>
                    <p className="text-[white]">Handcrafted Pieces That Tell a Story</p>
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="group relative w-[70%]">
                    {/* <video
                        ref={videoRef}
                        className="w-full"
                        autoPlay
                        loop
                        muted
                        src={JewelleryVideo}
                    /> */}
                    <div className={`absolute  group-hover:flex ${isPlaying ? 'hidden' : "flex"} inset-0 items-center justify-center`}>
                       <div className="border rounded-full p-2 border-[#9fb9e2]">
                       <button
                            onClick={togglePlayPause}
                            className="bg-white/10 backdrop-blur-sm p-7 rounded-full hover:bg-white/75 transition-all"
                        >
                            {isPlaying ? (
                                <Pause className="text-white" size={24} />
                            ) : (
                                <Play className="text-white" size={24} />
                            )}
                        </button>
                       </div>
                    </div>
                </div>
            </div>
           </div>

            <div className=" flex flex-col gap-7">
                <div className="flex  items-end justify-center gap-7">
                    <img className='w-24 h-28' src={Bracelet3} alt="" />
                    <img className='w-48 h-40' src={JewelleryImage2} alt="" />
                </div>
                <div className=" flex gap-7 justify-center items-end">
                    <div className="">
                        <img className='w-48 h-40' src={JewelleryImage4} alt="" />

                    </div>
                    <div className="">
                        <img className='w-80' src={JewelleryImage1} alt="" />
                    </div>
                    <div className="flex flex-col gap-7">
                        <img className='w-14 h-12' src={HeroJewelImage} alt="" />
                        <img className='w-48' src={JewelleryImage3} alt="" />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default JewelleryComp2
