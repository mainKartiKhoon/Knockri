import React from 'react'
import { VscBookmark } from "react-icons/vsc";
import { PiBriefcase } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import "./Card.css"
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    let card = props.card;
    const navigate = useNavigate();


    function clickHandlerInCard() {
        navigate(`/findjobs/template`, { state: { job: card } });
    }

    return (
        <div className='flex w-[420px] pt-[32px] pr-[20px] pb-[22px] pl-[30px] rounded-lg bg-white'>
            {/* logo */}
            <div>
                <img className='w-[50px] h-[50px] border-r-[50%] object-fill' src={card.image}></img>
            </div>

            {/* main */}
            <div className='flex flex-col items-start ml-[15px] mainInCard'>
                <h2 onClick={clickHandlerInCard} className='text-[17px] font-semibold mb-[10px] cardName'>{card.job}</h2>
                <div className='flex items-center text-[14px] text-[#4d4c4c] gap-[14px] mb-[10px]'>
                    <div className='flex items-center gap-[5px]'>
                        <PiBriefcase fontSize={22} />
                        <p>{card.companyName}</p>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <CiLocationOn className='text-black' fontSize={22} />
                        <p>{card.location}</p>
                    </div>
                </div>
                <div className='flex items-center text-[13px]'>
                    <div className='px-[20px] py-[5px] text-[#2a72d5] bg-[#dce8f8] rounded-full mr-[15px] font-semibold'>{card.time}</div>
                    <div className={`px-[20px] py-[5px]
                    ${card.jobcategory === "Private"? "text-[#42ae5f] bg-[#e0f2e5]" : "text-[#f9af0f] bg-[#fef3d9]" }
                    rounded-full font-semibold`}>{card.jobcategory}</div>
                </div>
            </div>

            {/* bookmark */}
            <VscBookmark fontSize={15} className='ml-[60px] mt-[20px] bookmark' />
        </div>
    )
}

export default Card
