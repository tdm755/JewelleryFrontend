import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkle } from 'lucide-react';

// Import images (ensure these are in your project)
import RingsOf from '../../public/assets/Rings.png';
import RingsOf2 from '../../public/assets/Ring2.png';
import NeckLaceCarousel from '../../public/assets/NeckLaceCarousel.png';

const JewelryCarousel = () => {
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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Animated Header */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-20 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="whitespace-nowrap animate-scroll text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Discover Exquisite Jewelry • Timeless Elegance Awaits •
          </h1>
        </div>
      </motion.div>

      {/* Featured Section Title */}
      <motion.div 
        className="max-w-xl mx-auto text-center mb-12 relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 flex items-center justify-center">
          <Sparkle className="mr-3 text-blue-500" />
          Explore Our Curated Collection
          <Sparkle className="ml-3 text-blue-500" />
        </h2>
        <p className="text-gray-600">Handcrafted Pieces That Tell a Story</p>
      </motion.div>

      {/* Jewelry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {jewels.map((jewel, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <img 
                src={jewel.img} 
                alt={jewel.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full">
                <Heart className="text-gray-600 hover:text-red-500 transition-colors" />
              </button>
            </div>
            
            <div className="p-6">
              <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                {jewel.category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-800">{jewel.title}</h3>
              <p className="text-gray-600 mt-1">{jewel.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-extrabold text-gray-900">{jewel.price}</span>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Footer */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="whitespace-nowrap animate-scroll text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Crafting Dreams • Inspiring Moments • Timeless Beauty •
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default JewelryCarousel;