import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Mail, Phone, Gift } from 'lucide-react';
import CompanyLogo from '../../public/assets/CompanyLogo.png'

import FaceBookIcon from '../../public/assets/FaceBookIcon.svg'
import LinkedInIcon from '../../public/assets/LinkedInIcon.svg'
import InstaIcon from '../../public/assets/InstaIcon.svg'
import YouTube from '../../public/assets/YouTube.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.footer
            ref={footerRef}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-sm mt-52 py-16 px-8"
        >
            <div className="container mx-auto grid md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <div className="flex items-center space-x-3">
                        {/* <Heart className="text-rose-500" size={24} /> */}
                        <img className='w-12' src={CompanyLogo} alt="" />
                        <h3 className="text-2xl font-serif font-bold text-[#9fb9e2]">JEWELBOC</h3>
                    </div>
                    <p className="text-white/80">
                        Crafting timeless elegance, one exquisite piece at a time. Discover jewelry that tells your unique story.
                    </p>

                </motion.div>

                {/* Quick Links */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#9fb9e2] border-b-2 border-primary-default pb-2">
                        Discover
                    </h4>
                    <ul className="space-y-2">
                        <Link to={'jewellery'}><li className="text-white/80 hover:text-primary-default transition-colors">Collections</li></Link>
                        <Link to={''}><li className="text-white/80 hover:text-primary-default transition-colors">New Arrivals</li></Link>
                        <Link to={''}><li className="text-white/80 hover:text-primary-default transition-colors">Best Sellers</li></Link>
                        <Link to={''}><li className="text-white/80 hover:text-primary-default transition-colors">Gift Guide</li></Link>
                    </ul>
                </motion.div>

                {/* Customer Support */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#9fb9e2] border-b-2 border-primary-default pb-2">
                        Support
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                            <Mail className="text-primary-default" size={20} />
                            <a href="mailto:support@jewelboc.com" className="text-white/80 hover:text-primary-default">
                                support@jewelboc.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone className="text-primary-default" size={20} />
                            <a href="tel:+1234567890" className="text-white/80 hover:text-primary-default">
                                +91 3243 8* *****
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MapPin className="text-primary-default" size={20} />
                            <span className="text-white/80">Mumbai, Maharashtra</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#9fb9e2] border-b-2 border-primary-default pb-2">
                        Shine with Us
                    </h4>
                    <p className="text-white/80">Follow us on social media for the latest updates and exclusive offers!</p>

                    <ul className='flex gap-4 items-center justify-start'>
                        <li className='instagram w-12 h-12 rounded-full bg-[#0b0a17] hover:bg-[#ad0000] cursor-pointer flex items-center justify-center'><img className='w-5' src={InstaIcon} alt="" /></li>
                        <li className='w-12 h-12 rounded-full bg-[#0b0a17] hover:bg-[#0a66c2] cursor-pointer flex items-center justify-center'><img className='w-5' src={LinkedInIcon} alt="" /></li>
                        <li className='w-12 h-12 rounded-full bg-[#0b0a17] hover:bg-[#0866ff] cursor-pointer flex items-center justify-center'><img className='w-5' src={FaceBookIcon} alt="" /></li>
                        <li className='w-12 h-12 rounded-full bg-[#0b0a17] hover:bg-[#ff0033] cursor-pointer flex items-center justify-center'><img className='w-5' src={YouTube} alt="" /></li>
                    </ul>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                variants={itemVariants}
                className="text-center text-gray-500 mt-20 pt-4 "
            >
                © 2024 JEWELBOC. All Rights Reserved.
            </motion.div>
        </motion.footer>
    );
};

export default Footer;