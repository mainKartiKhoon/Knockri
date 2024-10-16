import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const CardInFindJobs = (props) => {

    const navigate = useNavigate();
    let job = props.job;

    function handleClick() {
        navigate(`/findjobs/template`, { state: { job: job } });
    }


    return (
        <div className='p-[30px] pt-[45px] border rounded-lg w-[413px] h-[380px] flex flex-col justify-center relative mb-[5px]'>

            {/* Floaters */}
            <div className='flex'>
                {job.category ? (<div className='absolute top-[0px] left-[0px] text-[13px] text-[#34a853] bg-[#e0f2e5] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-r-full mt-[10px]'>{job.category}</div>) : (<div className='absolute top-[0px] left-[0px] text-[13px] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-r-full mt-[10px]'></div>)
                }

                {job.time ? (<div className='absolute top-[45px] left-[0px]  text-[13px] text-[#f9ae0a] bg-[#fef3d9] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-r-full'>{job.time}</div>) : (<div className=''></div>)
                }

                {job.jobType ? (<div className='absolute top-[0px] right-[0px] text-[13px] text-[#3177d6] bg-[#dce8f8] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-full mt-[10px] mr-[10px]'>{job.jobType}</div>) : (<div className=''></div>)
                }
            </div>

            {/* First Part */}
            <div className='flex flex-col items-center'>
                {/* Logo */}
                <div className='mb-[10px]'><img src={job.image}></img></div>

                {/* Company Name */}
                <div className='text-[14px] text-[#34a853]'>{job.companyName}</div>

                {/* Job Name */}
                <div onClick={handleClick} className='text-[18px] mb-[23px] font-semibold hover:text-[#1967d2] transition-all duration-300 hover:cursor-pointer'>{job.job}</div>
            </div>

            {/* Location */}
            <div className='flex items-center justify-center'>
                {/* logo location */}
                <CiLocationOn className='text-black mr-[5px]' fontSize={22} />
                <div className='text-[14px] text-[#696969]'>London, UK</div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col items-center mt-[20px]'>
                {/* 3 buttons */}
                <div className='text-[#696969] flex items-center gap-2'>
                    <button className='text-[14px] bg-[#f0f5f7] pt-[3px] pb-[4px]  px-[20px] rounded-full'>App</button>
                    <button className='text-[14px] bg-[#f0f5f7] pt-[3px] pb-[4px]  px-[20px] rounded-full'>Design</button>
                    <button className='text-[14px] bg-[#f0f5f7] pt-[3px] pb-[4px]  px-[20px] rounded-full'>Digital</button>
                </div>

                {/* single button */}
                <button className='mb-[23px] text-[14px] mt-[10px] bg-[#1967d2] text-white pt-[3px] pb-[4px]  px-[20px] rounded-full'>+2</button>
            </div>
        </div>
    )
}

export default CardInFindJobs;