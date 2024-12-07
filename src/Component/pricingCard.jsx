import React, { useContext } from 'react';
import { Heart, Star, Eye, Phone } from 'lucide-react';
import CallIcon from '../../public/assets/CallIcon.svg';
import ContactUsIcon from '../../public/assets/CallIcon.svg';
import { useNavigate } from 'react-router-dom';
import { jewelDetailModalContext } from '../App';

function JewelryProductCard({
    gemColor, 
    title, 
    description, 
    price, 
    materials, 
    inStock, 
    onReserve, 
    imageUrl
}) {

    const { showDetailModal, setShowDetailModal } = useContext(jewelDetailModalContext);


    const navigate = useNavigate();

    return (
        <div className="relative  bg-white/10 backdrop-blur-sm shadow-2xl rounded-[50px] overflow-hidden transform transition-all hover:scale cursor-pointer hover:shadow-4xl group">
           <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000090] z-50 hidden group-hover:flex items-center justify-center gap-4 p-6">
                <button on onClick={()=>setShowDetailModal(true)} className='px-6 py-3 text-sm rounded-full bg-white text-primary-default flex items-center gap-2 hover:bg-primary-default hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105'>
                    <Eye className="w-5 h-5" />
                    View Details
                </button>
                <button onClick={()=>navigate('contactus')} className='px-6 py-3 text-sm rounded-full bg-white text-primary-default flex items-center gap-2 hover:bg-primary-default hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105'>
                    {/* <img className='w-5 h-5' src={ContactUsIcon} alt="" /> */}
                    <Phone className="w-5 h-5" />
                    Contact Us
                </button>
           </div>

            {/* Product Image Section */}
            <div className="relative h-[300px]  flex items-center justify-center">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className="max-h-[200px] group-hover:rotate-2 rounded-2xl w-auto object-contain transition-transform"
                    />
                ) : (
                    <div 
                        style={{ backgroundColor: gemColor }} 
                        className="w-24 h-24 rounded-full shadow-lg"
                    />
                )}
                {!inStock && (
                    <div className="absolute top-2 right-3 bg-black/70 text-white text-xs px-6 py-2 rounded-tr-full">
                        Limited Edition
                    </div>
                )}
            </div>

            {/* Product Details Section */}
            <div className="p-6 space-y-4">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="text-xl font-semibold text-[#9fb8e2] mb-2">{title}</h2>
                    {description !== '' && <p className="text-sm text-white/90">{description}</p>}
                </div>

              

                <div className="flex items-center justify-center">
                    <div>
                        {price !== '' && <span className="text-2xl font-bold text-primary-default absolute bottom-12 transition-all duration-500 ease-in-out group-hover:-bottom-20 ">₹{price.toLocaleString()}</span>}
                        <div className="flex items-center text-xs text-gray-500 mt-7">
                            {/* <Star fill="#ffd700" size={14} className="mr-1" /> */}
                            Handcrafted Luxury
                        </div>
                    </div>
                  <div className="bg-[#0b0a16] p-3 group cursor-pointer absolute right-4 bottom-4 rounded-md rounded-br-3xl">
                       <img className='w-5 group-hover:scale-125 transition-all duration-300 ease-in-out' src={CallIcon} alt="" />
                  </div>
                   
                </div>

             
            </div>
        </div>
    );
}

export default JewelryProductCard;