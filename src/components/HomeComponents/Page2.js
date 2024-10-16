import React from 'react'
import "./Page2.css"
import { RiStackLine } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuTowerControl } from "react-icons/lu";
import { MdOutlineTerminal } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BiFirstAid } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Page2 = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center relative bg-white'>
      <div className='flex flex-col items-center text-center pb-[80px] pt-[58px]'>
        <Link to="/findjobs">
          <h2 className='text-[30px] font-semibold'>Popular Job Categories</h2>
        </Link>
        <p className='text-[#717171] mt-[15px] text-[15px] paraInCard'>2020 jobs live - 293 added today.</p>
      </div>

      {/* //? Cards */}
      <div className='flex flex-wrap gap-x-5 gap-y-8 justify-center cards z-20'>
        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <RiStackLine fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Accounting / Finance</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(2 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <HiOutlineSpeakerphone fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Marketing</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(86 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <LuTowerControl fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Design</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(43 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <MdOutlineTerminal fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Development</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(12 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <ImProfile fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Human Resource</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(55 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <GoRocket fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Automotive Jobs</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(2 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <RiStackLine fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className=' text-[18px]'>Customer Service</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(2 open positions)</p>
          </div>
        </div>

        <div className='flex flex-col items-center p-[40px] px-[55px] w-[300px] rounded-lg card'>
          <BiFirstAid fontSize={57} className='mb-[25px] logoInSectionTwo' />
          <div className='flex flex-col items-center'>
            <Link to="/findjobs">
              <h2 className='text-[18px]'>Health and Care</h2>
            </Link>
            <p className='text-[#717171] text-[14px] paraInCard'>(25 open positions)</p>
          </div>
        </div>
      </div>
      <img src='https://superio-reactjs.ibthemespro.com/images/index-11/shapes/1.png' className='absolute bottom-[15px] right-[0px] z-10'></img>
    </div>
  )
}

export default Page2
