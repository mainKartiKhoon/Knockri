import React from 'react'
import { Link } from 'react-router-dom'


const Page3 = () => {
    
    return (
        <div>
            <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center relative bg-white'>

                {/* Main Part */}
                <div className='w-[420px] relative right-[310px] bottom-[60px] flex flex-col text-start gap-3 leading-7'>
                    <h2 className='text-[40px] text-[#202124] font-semibold leading-[50px] mb-[10px]'>Getting Applied by an Expert Talent</h2>
                    <p className='text-[15px] text-[#696969]'>This is the place where you can find your dream jobs, find your talent, find what lits a fire inside you.</p>
                    <p className='text-[15px] text-[#696969] mb-[10px]'>Software like Aldus PageMaker including versions of Knockri. There are many variations of passages</p>
                    <Link to="/candidates">
                        <button className='bg-[#1967d2] text-white px-[50px] py-[15px] rounded-lg w-[270px]'>Search Candidate</button>
                    </Link>
                </div>

                {/* Background Image */}
                <img src='https://superio-reactjs.ibthemespro.com/images/index-11/text/image-2.png' alt="img1" className='absolute top-[50px] right-[142px] w-[40%]'></img>

                {/* Sticker */}
                <div className='border-2  rounded-t-lg flex rounded-b-lg flex-col gap-[10px] z-10 absolute top-[410px] right-[140px] overflow-scroll h-[255px]'>
                    <div className='text-[16px] bg-[#1967d2] border-[#1967d2] border-2 rounded-t-lg font-semibold text-center text-white py-[12px] px-[82px] z-20'>Applicants List</div>
                    {/* heading */}

                    {/* profile 1 */}
                    <div className='text-left flex items-center'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-1.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Brooklyn Simmons</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 2 */}
                    <div className='flex items-center'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-2.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Courtney Henry</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 3 */}
                    <div className='flex items-center pb-[15px]'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-3.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Marvin McKinny</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 2 */}
                    <div className='flex items-center'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-2.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Courtney Henry</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 3 */}
                    <div className='flex items-center pb-[15px]'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-3.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Marvin McKinny</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 2 */}
                    <div className='flex items-center'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-2.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Courtney Henry</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                    {/* profile 3 */}
                    <div className='flex items-center pb-[15px]'>
                        <img src='https://superio-reactjs.ibthemespro.com/images/resource/applicant-3.png' alt="img1" className='pl-[17px] pr-[14px]'></img>
                        <div>
                            <h2 className='text-[16px] font-semibold'>Marvin McKinny</h2>
                            <p className='text-[#696969] text-[14px]'>Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3
