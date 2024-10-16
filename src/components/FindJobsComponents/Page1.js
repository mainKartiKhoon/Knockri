import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterInFindJobs from './FilterInFindJobs';
import { dataOfFindJobs } from './Page1DatasetFindJobs';
import { IoIosArrowDown } from "react-icons/io";
import "./Page1.css"


const Page1 = () => {

    const navigate = useNavigate();
    const [arrayInFindJobs, setArrayInFindJobs] = useState(null);
    const [categoryInFindJobs, setCategoryInFindJobs] = useState();

    async function fetchDataInFindJobs() {
        try {
            setArrayInFindJobs(dataOfFindJobs);
        }
        catch (error) {
            console.log('page1 component mein koi galti hai fetch data ke dauran');
        }
    }

    useEffect(() => {
        fetchDataInFindJobs();
        let contentToHideInPage1FindJobs = document.querySelector(".contentToHideInPage1FindJobs");
        contentToHideInPage1FindJobs.style.display = "block";
    }, [])

    const [showMore, setShowMore] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore);
    }



    // useEffect(() => {
    //     fetchDataInFindJobs();
    // }, [])
    // console.log(arrayInFindJobs);

    return (
        <div className='bg-white'>

            {/* NON TEMPLATE */}

            <div className='contentToHideInPage1FindJobs bg-white '>
                {/* Find Jobs */}
                <div className='bg-[#f4f7fc] mt-[93px] py-[40px] mb-[55px]'>
                    <h2 className='text-[#202124] text-[30px] font-semibold mb-[5px]'>Find Jobs</h2>
                    <p className='text-[#707071] text-[15px]'><span onClick={() => navigate("/")} className='text-black hover:cursor-pointer hover:text-[#226dd3] transition-all duration-300'>Home</span> / Jobs</p>
                </div>

                {/* Main Part */}
                <div className='text-[14px] mx-[120px] bg-white'>
                    {/* Sorting */}
                    <div className='flex items-center justify-between mb-[40px]'>
                        <div className='flex items-center gap-[30px]'>
                            <div className='bg-[#eef4fc] px-[35px] py-[10px] text-[#2a72d5] rounded-lg font-semibold hover:bg-[#d8e5f8] hover:cursor-pointer'>Filter</div>
                            <div className='text-[#696969]'>Show <span className='text-black font-semibold'>9</span> Jobs</div>
                        </div>
                        <div className='sortingKarniHai relative flex items-center gap-[15px] text-[#696969]'>
                            <IoIosArrowDown className='absolute top-[15px] left-[128px]' fontSize={18} />
                            <IoIosArrowDown className='absolute top-[15px] left-[275px]' fontSize={18} />
                            <select class="bg-[#f0f5f7] border-2 rounded-lg px-[20px] pr-[35px] py-[10px] h-[45px]"><option value="">Sort by (default)</option><option value="asc">Newest</option><option value="des">Oldest</option></select>
                            <select class="bg-[#f0f5f7] border-2 rounded-lg px-[20px] pr-[35px] py-[10px] h-[45px]"><option>All</option><option>25 per page</option><option>30 per page</option><option>35 per page</option></select>
                        </div>
                    </div>

                    {/* Filters */}
                    <FilterInFindJobs showMore={showMore} arrayInFindJobs={arrayInFindJobs} />

                </div>

                {/* Bottom Part */}
                <div className='flex flex-col items-center mt-[66px] pb-[90px] bg-white'>
                    <p className='text-[14px] text-[#black] mb-[10px]'>{showMore ? 'Showing 35 of 35 Jobs' : 'Showing 6 of 35 Jobs'}</p>
                    <div className='relative w-[300px] h-[6px] bg-[#d4e1f6] rounded-[10px] mb-[17px]'>
                        <span className={`bar-inner ${showMore ? 'w-[100%]' : 'w-[40%]'} absolute left-0 top-0 h-[100%] rounded-[20px] bg-[#1967d2]`} ></span>
                    </div>
                    <div onClick={toggleShowMore} className='flex showMore bg-white flex-col items-start w-fit hover:cursor-pointer'>
                        <div className='text-[16px] font-semibold text-[#1e6ad3]'>
                            {showMore ? 'Show Less' : 'Show More'}
                        </div>
                        <div className='w-[60px] mt-[5px] h-[1px] bg-[#1e6ad3] '></div>
                    </div>
                </div>
            </div>



            {/* TEMPLATE */}


        </div>
    )
}

export default Page1
