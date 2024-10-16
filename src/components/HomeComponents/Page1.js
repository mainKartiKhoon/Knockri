import React from 'react'
import "./Page1.css"
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";
import { PiBriefcase } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Page1 = (props) => {
  return (

    <div className='main h-[110vh] w-[100vw] flex items-center overflow-x-hidden'>


      {/* //? Left Part */}
      <div className='text-left  w-[60vw] flex flex-col ml-[127px]'>
        <h2 className='text-[50px] text-white font-semibold leading-[60px] mb-[15px]'>There Are 93,178 Postings Here For you!</h2>
        <p className='text-[15px] text-white mt-[5px] mb-[45px]'>Find Jobs, Employment & Career Opportunities</p>

        {/* //? find jobs */}
        <div className='bg-white flex items-center w-[97%] p-4 py-6 rounded-lg mb-[15px]'>
          <div className='flex items-center'>
            <CiSearch className='mr-[7px] text-[#626d75] ml-[10px]' fontSize={30} />
            <input placeholder='Job title, keywords or company' className='text-[14px] w-[250px] mr-[15px] border-r h-[56px]'></input>
          </div>
          <div className='flex items-center'>
            <CiLocationOn className='mr-[7px] text-[#626d75] ml-[5px]' fontSize={30} />
            <input placeholder='City or postcode' className='text-[14px] mr-[40px]'></input>
          </div>
          
          <Link to="/findjobs">
            <button className=' px-10 rounded-lg py-4 findJobs'>Find Jobs</button>
          </Link>
        </div>
        <p className='text-white text-[14px]'><span className='font-semibold mr-[30px]'>Popular Searches :</span> Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
      </div>






      {/* //? Right Part */}
      <img className='w-[50%] relative top-[50px] left-[15px]' src='https://superio-reactjs.ibthemespro.com/images/index-11/header/image.png'></img>

      {/* //? sticker 1 */}
      <div className='sticker1 absolute top-[280px] left-[920px] shadow-lg  bg-white w-[74px] p-3 pr-4 rounded-md'><LiaFileUploadSolid fontWeight={700} fontSize={40} color='#357ad7' /></div>

      {/* //? sticker 2 */}
      <div className='sticker2 absolute top-[310px] left-[970px] bg-white p-5 pl-[60px] pr-[40px] w-[270px] rounded-md flex flex-col items-start'>
        <h2 className='font-semibold text-[14px] mb-2'>Upload Your CV</h2>
        <p className='text-[#6b6b6b] text-[13px] font-semibold'>It only takes a few seconds</p>
      </div>

      {/* //? sticker 3 */}
      <div className='sticker3 absolute top-[180px] left-[1220px] flex gap-6  bg-white justify-center items-center w-[280px] p-4 rounded-md'>
        <div>
          <PiBriefcase color='#de4b42' fontSize={55} className='bg-[#f8d5d3] p-3 rounded-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='font-semibold text-[14px] mb-1'>Creative Agency</h2>
          <p className='text-[#6b6b6b] text-[13px] font-semibold'>Startup</p>
        </div>
        <div>
          <FaCheckCircle color='#f8d5d3' fontSize={30} />
        </div>
      </div>

      {/* //? sticker 4 */}
      <div className='sticker4 absolute top-[550px] left-[1215px] flex bg-white p-6 w-[320px] rounded-md overflow-x-hidden'>
        <div>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-3.png' alt="img1" className='w-[80%] mt-[7px]'></img>
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='font-semibold text-[17px] ml-3 mt-[7px] tracking-wide hover:text-blue hover:cursor-pointer hover:text-[#1967d2] transition-all duration-400 ease-in-out'>Product Manager, Studio</h2>
          <ul className='flex py-2 gap-4 mb-1'>
            <li className='flex items-center text-[12px] ml-3 text-[#7b7b7b]'>
              <span><PiBriefcase fontSize={18} className='mr-[4px]' /></span>
              Invision
            </li>
            <li className='flex items-center text-[12px] text-[#585858]'>
              <span><CiLocationOn fontSize={18} className='mr-[4px]' /></span>
              London, UK
            </li>
          </ul>
          <ul className='flex items-center text-[12px] gap-5'>
            <li className='text-[#206bd3] bg-[#dce8f8] rounded-full p-1 px-5'>Part Time</li>
            <li className='text-[#47b063] bg-[#e0f2e5] rounded-full p-1 px-5'>Private</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page1
