import React from 'react'
import "./Page5.css"
import { MdPersonSearch } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaListCheck } from "react-icons/fa6";

const Page5 = () => {
  return (
    <div className='h-[100vh] flex bg-white'>
        {/* picture */}
      <div className='picture w-[60vw] ' >

      </div>

      {/* content */}
      <div className='content w-[35vw] flex text-left flex-col items-start justify-center relative mt-[50px] '>
        <img src='https://superio-reactjs.ibthemespro.com/images/index-11/shapes/3.png' className='absolute top-[-40px] right-[-70px]'></img>
        {/* para */}
        <div className=' text-[18px] font-semibold text-[#1e6ad3]'>DOWNLOAD & ENJOY</div>

        {/* heading */}
        <div className='leading-[55px] text-[46px] font-bold mt-[10px]'>
        Get the Knockri Job Search App
        </div>

        {/* boxes */}
        <div>
            <div className='flex mt-[35px]'>
                <div><MdPersonSearch fontSize={35} /></div>
                <div className='leading-none w-[450px] ml-[20px]'>
                    <h2 className='text-[18px] font-semibold'>Job Search</h2>
                    <p className='text-[15px] mt-[11px] leading-[23px] text-[#5b5b5b]'>Search through millions of jobs and find the right fit. Simply swipe right to apply.</p>
                </div>
            </div>
            <div className='flex mt-[20px]'>
                <div><ImProfile fontSize={30} /></div>
                <div className='leading-none w-[450px] ml-[25px]'>
                    <h2 className='text-[18px] font-semibold'>Job Search</h2>
                    <p className='text-[15px] mt-[11px] leading-[23px] text-[#5b5b5b]'>Search through millions of jobs and find the right fit. Simply swipe right to apply.</p>
                </div>
            </div>
            <div className='flex mt-[20px]'>
                <div><FaListCheck fontSize={30} /></div>
                <div className='leading-none w-[450px] ml-[25px]'>
                    <h2 className='text-[18px] font-semibold'>Job Search</h2>
                    <p className='text-[15px] mt-[11px] leading-[23px] text-[#5b5b5b]'>Search through millions of jobs and find the right fit. Simply swipe right to apply.</p>
                </div>
            </div>
        </div>


        {/* buttons */}
        <div className='flex items-center mt-[35px] gap-[15px] buttons'>
            <a href='https://www.apple.com/in/store' target='_blank'>
                <img src='https://superio-reactjs.ibthemespro.com/images/icons/apple.png'></img>
            </a>
            <a href='https://play.google.com/store/games?hl=en_IN&gl=US&pli=1' target='_blank'>
                <img src='https://superio-reactjs.ibthemespro.com/images/icons/google.png'></img>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Page5
