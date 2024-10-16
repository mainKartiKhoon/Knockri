import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiBriefcase } from "react-icons/pi";
import FilterInCandidates from './FilterInCandidates';
import { dataOfCandidates } from './dataOfCandidates';
import { IoIosArrowDown } from "react-icons/io";

const Page1Candidates = () => {

    const navigate = useNavigate();
    const [arrayInCandidates, setArrayInCandidates] = useState(null);

    async function fetchCandidatesData() {
        try {
            setArrayInCandidates(dataOfCandidates)
        }
        catch (error) {
            console.log('Error is in Page1Candidate');

        }
    }

    useEffect(() => {
        fetchCandidatesData();
    }, [])


    function handleCandidate() {
        navigate("/");
    }

    const [showMoreInCandidates, setShowMoreInCandidates] = useState(false);
    function toggleShowMoreInCandidates() {
        setShowMoreInCandidates(!showMoreInCandidates);
    }



    return (
        <div className='bg-white'>


            {/* NON TEMPLATE */}

            <div className='bg-white'>
                {/* Find Jobs */}
                <div className='bg-[#f4f7fc] mt-[93px] py-[40px] mb-[55px]'>
                    <h2 className='text-[#202124] text-[30px] font-semibold mb-[5px]'>Candidates</h2>
                    <p className='text-[#707071] text-[15px]'><span onClick={handleCandidate} className='text-black hover:cursor-pointer hover:text-[#226dd3] transition-all duration-300'>Home</span> / Candidates</p>
                </div>

                {/* Main Part */}
                <div className='mx-[120px] bg-white flex justify-start'>

                    {/* Left sorting part */}
                    <div className=' text-left w-[400px]'>

                        {/* Top */}
                        <div className='bg-[#f5f7fc] rounded-lg py-[20px] px-[35px]'>
                            {/* search by keyword */}
                            <div>
                                <h2 className='text-[18px] mb-[17px] font-semibold'>Search by Keywords</h2>
                                <div className='relative'>
                                    <input type="text" name="listing-search" placeholder="Job title, keywords, or company" value="" className='w-[100%] h-[60px] text-[15px] text-[#696969] border border-[#ecedf2] border-solid pl-[54px] rounded-lg pt-[14px] pr-[20px] pb-[14px]' />
                                    <CiSearch fontSize={22} className='absolute top-[20px] left-[20px]' />
                                </div>
                            </div>

                            {/* Location  */}
                            <div>
                                <h2 className='text-[18px] mb-[16px] font-semibold mt-[27px]'>Location</h2>
                                <div className='relative'>
                                    <input type="text" placeholder="City or postcode" className='w-[100%] h-[60px] text-[15px] text-[#696969] border border-[#ecedf2] border-solid pl-[54px] rounded-lg pt-[14px] pr-[20px] pb-[14px]' />
                                    <CiLocationOn fontSize={22} className='absolute top-[20px] left-[20px]' />

                                </div>
                            </div>
                            <div>
                                <p className='text-[#696969] text-[14px] mt-[10px] mb-[10px] font-semibold'>Radius around selected destination</p>
                                <div className='px-[10px] py-[5px] bg-[#d4e1f6] rounded-lg w-[65px] font-semibold text-[14px] m-auto text-[#2964b7] '>100km</div>
                            </div>

                            {/* category */}
                            <div >
                                <h2 className='text-[18px] mb-[16px] font-semibold mt-[30px]'>Category</h2>
                                <div className='relative'>
                                    <PiBriefcase fontSize={22} color='#696969' className='absolute top-[20px] left-[20px]' />
                                    <select className='w-[100%] h-[60px] text-[15px] text-[#696969] border border-[#ecedf2] border-solid pl-[54px] rounded-lg pt-[14px] pr-[20px] pb-[14px] bg-white'>
                                        <option value="">Choose a category</option>
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="apartments">Apartments</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-[18px] mb-[16px] font-semibold mt-[30px]'>Foundation Date</h2>
                                <div className='px-[10px] py-[5px] bg-[#d4e1f6] rounded-lg w-[95px]  font-semibold text-[14px] m-auto text-[#2964b7] mb-[20px]'>1900 - 2028</div>
                            </div>
                        </div>



                        {/* Bottom */}
                        {/* <div className='bg-[#f5f7fc] overflow-hidden rounded-lg py-[20px] px-[35px] mt-[30px] pt-[30px] pr-[140px]  pb-[30px]  pl-[30px] relative'>
                            <img className='absolute right-[-90px]' src='https://superio-reactjs.ibthemespro.com/images/resource/ads-bg-4.png'></img>
                            <h2 className='text-[18px] mb-[16px] font-semibold'>Recruiting?</h2>
                            <p className='text-[13.5px] text-[#696969] leading-[24px]'>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
                            <button className='text-[14px] font-semibold mt-[25px] startRecBtn rounded-lg py-[18px] px-[35px] text-center  hover:cursor-pointer'>Start Recruiting Now</button>
                        </div> */}
                    </div>

                    {/* Right Part */}
                    <div className='text-[14px] w-[70%] pl-[43px]'>
                        {/* Sorting */}
                        <div className='flex items-center justify-between mb-[40px]'>
                            <div className='flex items-center gap-[30px]'>

                                <div className='text-[#696969]'><span className='text-black font-semibold'>9</span> Jobs</div>
                            </div>
                            <div className='sortingKarniHai relative flex items-center gap-[15px] text-[#696969]'>
                                <IoIosArrowDown className='absolute top-[15px] left-[128px]' fontSize={18} />
                                <IoIosArrowDown className='absolute top-[15px] left-[275px]' fontSize={18} />
                                <select class="bg-[#f0f5f7] border-2 rounded-lg px-[20px] pr-[35px] py-[10px] h-[45px]"><option value="">Sort by (default)</option><option value="asc">Newest</option><option value="des">Oldest</option></select>
                                <select class="bg-[#f0f5f7] border-2 rounded-lg px-[20px] pr-[35px] py-[10px] h-[45px]"><option>All</option><option>25 per page</option><option>30 per page</option><option>35 per page</option></select>
                            </div>
                        </div>

                        {/* Filters */}
                        {/* <FilterInEmployers arrayInEmployers={arrayInEmployers} /> */}
                        <FilterInCandidates showMoreInCandidates={showMoreInCandidates} arrayInCandidates={arrayInCandidates} />




                    </div>
                </div>

                {/* Bottom Part */}
                <div className='flex flex-col items-center mt-[66px] pb-[90px] bg-white'>
                    <p className='text-[14px] text-[#black] mb-[10px]'>{showMoreInCandidates ? 'Showing 9 of 9 Candidates' : 'Showing 6 of 9 Candidates'}</p>
                    <div className='relative w-[300px] h-[6px] bg-[#d4e1f6] rounded-[10px] mb-[17px]'>
                        <span className={`bar-inner ${showMoreInCandidates ? 'w-[100%]' : 'w-[40%]'} absolute left-0 top-0 h-[100%] rounded-[20px] bg-[#1967d2]`} ></span>
                    </div>
                    <div onClick={toggleShowMoreInCandidates} className='flex bg-white flex-col items-start w-fit hover:cursor-pointer'>
                        <div className='text-[16px] font-semibold text-[#1e6ad3]'>{showMoreInCandidates ? 'Show Less' : 'Show More'}</div>
                        <div className='w-[60px] mt-[5px] h-[1px] bg-[#1e6ad3] '></div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Page1Candidates
