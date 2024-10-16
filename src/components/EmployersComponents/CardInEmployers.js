import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { PiBriefcase } from "react-icons/pi";
import "./CardInEmployers.css"
import { useNavigate } from 'react-router-dom';


const CardInEmployers = (props) => {

    let dataEmployers = props.dataEmployers;
    const navigate = useNavigate();


    function handleClickEmployers() {
        navigate(`/employers/template`, { state: { dataEmployers: dataEmployers } });
        // navigate(`/employers/template`, { state: { dataEmployers: dataEmployers } });
    }

    return (
        <div className='w-[100%] cardEmp flex pt-[32px] pr-[20px] pb-[22px] pl-[30px] items-end justify-between'>
            {/* left part */}
            <div className='flex items-center text-left'>
                {/* image part */}
                <div><img src={dataEmployers.image} width={50} height={50}></img></div>

                {/* rest content part */}
                <div className='flex flex-col ml-[15px]'>
                    <h2 onClick={handleClickEmployers} className='text-[17px] font-semibold hover:text-[#1967d2] transition-all duration-300 hover:cursor-pointer mb-[13px]'>{dataEmployers.companyName}</h2>
                    <div className='flex items-center text-[#474747] text-[14px] gap-[17px]'>
                        {/* location */}
                        <div className='flex items-center gap-[5px]'>
                            <CiLocationOn fontSize={21} />
                            <div>London, UK</div>
                        </div>

                        {/* briefcase */}
                        <div className='flex items-center gap-[5px]'>
                            <PiBriefcase fontSize={21} />
                            <div>Accounting / Finance</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right part */}
            <div>
                <div className='text-[13px] mr-[15px] py-[5px] px-[20px] rounded-full mb-[10px] bg-[#dce8f8] text-[#3177d6] font-semibold'>Open Jobs - {dataEmployers.jobsAvailable}</div>
            </div>
        </div>
    )
}

export default CardInEmployers
