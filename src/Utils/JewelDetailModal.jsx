import React, { useContext } from 'react'
import { jewelDetailModalContext } from '../App'
import Bracelet from '../../public/assets/Bracelet.jpg'

function JewelDetailModal({showDetailModal, setShowDetailModal}) {


    
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center'>
      <div onClick={()=>setShowDetailModal(false)} className="absolute top-0 right-0 bottom-0 left-0 bg-[#00000091]"></div>
      <div className="bg-white w-[80%] h-[95%] relative z-10 flex gap-4 p-2">
        <div className="h-full w-[10%] border flex flex-col gap-4 items-center justify-start py-4">
            <div className="border h-16 w-16 rounded-2xl" style={{backgroundImage : `url${Bracelet}`}}></div>
        </div>
        <div className="flex flex-col gap-4 w-[40%]">
            <div className="h-[70%] border"></div>
            <div className="h-[30%] border"></div>
        </div>
        <div className="border w-[50%] h-full flex flex-col gap-4">
            <div className="border h-1/3 w-full"></div>
            <div className="border h-1/3 w-full"></div>
            <div className="border h-1/3 w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default JewelDetailModal
