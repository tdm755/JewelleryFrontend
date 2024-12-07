import React, { useState } from 'react'
import CompanyLogo from '../../public/assets/CompanyLogo.png'
import { useNavigate } from 'react-router-dom';
import ArrowDownIcon from '../../public/assets/ArrowDownIcon.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isSchemeOpen, setIsSchemeOpen] = useState(false);



  return (
    
    <div className='fixed top-0 right-0 left-0 h-20 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-evenly'>

      <div onClick={() => navigate('/')} className=" cursor-pointer"><img className='w-16' src={CompanyLogo} alt="" /></div>
      <div className="">
        <ul className='flex gap-10 text-[#9fb9e2]'>
          <li className='cursor-pointer' onClick={() => { navigate('/') }}>Home</li>
          <div className='cursor-pointer group relative flex gap-1 items-center justify-center'>
            <span>Scheme</span> 
            <img className={`w-5 group-hover:rotate-180 transition-all duration-300 ease-in-out`} src={ArrowDownIcon} alt="" />
            <div className=" absolute top-6 flex pt-9 items-center justify-center ">
              <ul className=' items-center justify-center bg-white/10 backdrop-blur-sm h-16 group-hover:flex hidden rounded-xl w-64'>
                <li className='cursor-pointer flex items-center justify-center w-1/3' onClick={() => navigate('sip')}>SIP</li>
                <li className='cursor-pointer flex items-center justify-center w-1/3' onClick={() => { navigate('emi') }}>EMI</li>
                <li className='cursor-pointer flex items-center justify-center w-1/3' onClick={() => { navigate('kitty') }}>Kitty</li>
              </ul>
            </div>
          </div>

          <li className='cursor-pointer' onClick={() => { navigate('jewellery') }}>Jewellery</li>
          <li className='cursor-pointer' onClick={() => { navigate('aboutus') }}>About Us</li>
          {/* <li className='cursor-pointer' onClick={() => { navigate('contactus') }}>Contact Us</li> */}
        </ul>
      </div>
      <div className="flex gap-10 items-center justify-center text-[#060436]">
          <button className='cursor-pointer bg-[#9fb9e2] px-7 py-2 rounded-full' onClick={() => { navigate('contactus') }}>Contact Us</button>
        
        <div className="">
        <input onClick={() => { setIsOpen(!isOpen) }} type="checkbox" id="checkbox" checked={isOpen} />
        <label for="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
        </div>
      </div>

    </div>
  )
}
