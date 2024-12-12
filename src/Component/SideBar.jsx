import React, { useRef } from 'react'
import ArrowIcon from '../../public/assets/ArrowTop.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SIPIconSVGComponent from '../../public/assets/SVGComponents/SIPIcon';
import EMIIconSVGComponent from '../../public/assets/SVGComponents/EMIIcon';
import KittyIconSVGComponent from '../../public/assets/SVGComponents/KittyIcon';
import NotificationIconSVGComponent from '../../public/assets/SVGComponents/NotificationIcon';
import AddMemSVGComponent from '../../public/assets/SVGComponents/AddMemIcon';
import ContactSVGComponent from '../../public/assets/SVGComponents/ContactUsIcon';
import ColorableSvg from '../Hooks/ColorableSvg';
import HomeSVGComponent from '../../public/assets/SVGComponents/HomeIcon';
import ProductSVGComponent from '../../public/assets/SVGComponents/ProductIcon';
import SettingSVGComponent from '../../public/assets/SVGComponents/SettingIcon';
import CompanyLogo from '../../public/assets/CompanyLogo.png'

function SideBar({isSideBarOpen, setIsSideBarOpen}) {
    const audioRef = useRef(null);
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout functionality
    }

    return (
        <div onClick={()=>{setIsSideBarOpen(false)}} className={`fixed top-2 ${isSideBarOpen ? 'left-2' : '-left-[280px]'} md:-left-[280px] shadow-2xl lg:shadow-none bottom-2 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 w-[270px] p-3 overflow-y-auto scrollbarOf z-50 transition-all duration-500 ease-in-out`}>
            <div className="flex flex-col gap-7 mb- items-center justify-center h-full relative">
                {/* Header Section with Gradient Background */}
                <div className="flex absolute top-0 flex-col items-center justify-center w-full py-4 bg-gradient-to-b from-[#0d0943] to-white text-white rounded-xl shadow-lg">
                    <div className="text-2xl font-bold tracking-wide">
                        <img className='w-20' src={CompanyLogo} alt="" />
                    </div>
                    
                </div>

                <div className="w-full flex flex-col gap-4 mt-20">
                    {/* Dashboard Section */}
                    <div className="flex flex-col gap-1">
                        <h4 className='text-blue-400 text-sm font-bold uppercase tracking-wider'>Menu</h4>
                        <NavLink to={'/'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${pathname === '/' ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-blue-500/20 hover:border-blue-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <HomeSVGComponent color={pathname === ('/') ? '#60A5FA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-blue-400 font-medium'>Home</span>
                                </div>
                            )}
                        </NavLink>
                        {/* <NavLink to={'/dashboard'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${pathname === '/dashboard' ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-blue-500/20 hover:border-blue-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <HomeSVGComponent color={pathname === ('/dashboard') ? '#60A5FA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-blue-400 font-medium'>Dashboard</span>
                                </div>
                            )}
                        </NavLink> */}
                        <NavLink to={'contactus'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-blue-500/20 hover:border-blue-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <ContactSVGComponent color={isActive ? '#60A5FA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-blue-400 font-medium'>Contact Us</span>
                                </div>
                            )}
                        </NavLink>
                        <NavLink to={'aboutus'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-blue-500/20 hover:border-blue-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <NotificationIconSVGComponent color={isActive ? '#60A5FA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-blue-400 font-medium'>About Us</span>
                                </div>
                            )}
                        </NavLink>
                    </div>

                    {/* Features Section */}
                    <div className="flex flex-col gap-1">
                        <h4 className='text-purple-400 text-sm font-bold uppercase tracking-wider'>Features</h4>
                        <NavLink to={'jewellery'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-purple-500 bg-purple-500/20 text-purple-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-purple-500/20 hover:border-purple-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <ProductSVGComponent color={isActive ? '#A78BFA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-purple-400 font-medium'>Jewellery</span>
                                </div>
                            )}
                        </NavLink>
                       
                        <NavLink to={'sip'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-purple-500 bg-purple-500/20 text-purple-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-purple-500/20 hover:border-purple-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <SIPIconSVGComponent color={isActive ? '#A78BFA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-purple-400 font-medium'>SIP</span>
                                </div>
                            )}
                        </NavLink>
                        <NavLink to={'emi'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-purple-500 bg-purple-500/20 text-purple-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-purple-500/20 hover:border-purple-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <EMIIconSVGComponent color={isActive ? '#A78BFA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-purple-400 font-medium'>EMI</span>
                                </div>
                            )}
                        </NavLink>
                        <NavLink to={'kitty'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-purple-500 bg-purple-500/20 text-purple-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-purple-500/20 hover:border-purple-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <KittyIconSVGComponent color={isActive ? '#A78BFA' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-purple-400 font-medium'>Kitty</span>
                                </div>
                            )}
                        </NavLink>
                    </div>

                    {/* Actions Section */}
                    {/* <div className="">
                        <h4 className='text-pink-400 text-sm font-bold uppercase tracking-wider'>Actions</h4>
                        <NavLink to={'setting'}>
                            {({ isActive }) => (
                                <div className={`h-12 w-full border-2 ${isActive ? 'border-pink-500 bg-pink-500/20 text-pink-400' : 'border-gray-700 text-gray-300'} rounded-2xl hover:bg-pink-500/20 hover:border-pink-500 flex gap-4 items-center justify-start px-4 group cursor-pointer transition-all duration-300`}>
                                    <ColorableSvg color="" width={24} height={24}>
                                        <SettingSVGComponent color={isActive ? '#F472B6' : '#CBD5E0'} />
                                    </ColorableSvg>
                                    <span className='group-hover:text-pink-400 font-medium'>Setting</span>
                                </div>
                            )}
                        </NavLink>
                    </div> */}
                </div>

                {/* User Profile Section */}
                {/* <div className="w-full pr-4 mt-10">
                    <div className="h-40 rounded-2xl mb-4 py-4 px-2.5 relative bg-gradient-to-br from-blue-600 to-purple-600 text-white flex flex-col justify-between shadow-lg">
                        <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white/30 absolute -top-7 -right-7 shadow-xl" style={{ backgroundImage: `url('https://avatar.iran.liara.run/public/boy')`, backgroundSize: 'cover' }}></div>
                        <div className="flex items-center gap-3">
                            <div>
                                <h4 className="font-bold text-lg">Admin User</h4>
                                <p className="text-sm text-blue-200">admin@geeks.com</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <button onClick={handleLogout} className='px-10 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-colors backdrop-blur-sm'>Logout</button>
                            <button onClick={()=>(navigate('setting'))} className='px-2 py-2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm'>
                                <img className='-rotate-45 w-5 filter brightness-0 invert' src={ArrowIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SideBar
