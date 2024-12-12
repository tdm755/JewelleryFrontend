import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkle, Filter, SortAsc } from 'lucide-react';
import Necklace from '../../public/assets/NeckLace.jpg';
// Import images 
import RingsOf from '../../public/assets/Rings.png';
import RingsOf2 from '../../public/assets/Ring2.png';
// import NeckLaceCarousel from '../../public/assets/NeckLaceCarousel.png';
import Ripple from '../Utils/Ripple';
import JewelryProductCard from '../Component/pricingCard';

const JewellerySection = () => {
  const [jewels] = useState([
    {
      id: 1,
      img: RingsOf,
      title: "Eternal Solitaire",
      description: "Classic Diamond Ring",
      price: "$2,999",
      category: "Rings",
      material: "18K White Gold",
      caratWeight: "1.5 ct",
      rating: 4.8
    },
    {
      id: 2,
      img: RingsOf2,
      title: "Golden Embrace",
      description: "18K Gold Necklace",
      price: "$4,500",
      category: "Necklaces",
      material: "18K Yellow Gold",
      chainLength: "45 cm",
      rating: 4.6
    },
    // ... (rest of the existing jewels with added details)
  ]);

  const [filteredJewels, setFilteredJewels] = useState(jewels);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Watches'
  ];

  const handleCategoryFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredJewels(jewels);
    } else {
      const filtered = jewels.filter(jewel => jewel.category === category);
      setFilteredJewels(filtered);
    }
  };

  const sortByPrice = () => {
    const sorted = [...filteredJewels].sort((a, b) =>
      parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
    );
    setFilteredJewels(sorted);
  };

  return (
    <>
      <div className="absolute h-[500px]  -top-20  w-full flex items-center justify-center">
        <div className="absolute flex h-[700px] left-0 right-0 top-0 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <Ripple />
        </div>
        <div className="flex mt-32 flex-col items-center justify-center">
          <h1 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Discover <br /> Exquisite Jewelry • Timeless Elegance Awaits •
          </h1>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 flex items-center justify-center">
            {/* <Sparkle className="mr-3 text-blue-500" /> */}
            Explore Our Curated Collection
            {/* <Sparkle className="ml-3 text-blue-500" /> */}
          </h2>
          <p className="text-gray-600">Handcrafted Pieces That Tell a Story</p>
        </div>
      </div>

      <div className="relative overflow-hidden  mt-[350px]">

        {/* Filtering and Sorting Controls */}
        <div className="max-w-7xl mx-auto px-8 flex flex-col xl:flex-row py-20 gap-10 justify-between items-center">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 space-x-2">
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={sortByPrice}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 flex items-center space-x-2"
              whileTap={{ scale: 0.95 }}
            >
              <SortAsc className="w-5 h-5" />
              <span>Sort by Price</span>
            </motion.button>
          </div>
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:px-8 max-w-7xl mx-auto lg:mt-32">
          {filteredJewels.map((jewel) => (
            <JewelryProductCard
              imageUrl={Necklace}
              gemColor="#d4af37"
              title="Golden Lotus Pendant"
              description=""
              price={50000}
              inStock={false}
              onReserve={() => console.log('Reserving piece')}
            />
          ))}
        </div>

        {/* No Results State */}
        {filteredJewels.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No items found in this category</p>
          </div>
        )}
      </div>
    </>
  );
};

export default JewellerySection;