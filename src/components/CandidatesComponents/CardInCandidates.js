import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { PiBriefcase } from "react-icons/pi";
// import "./CardInEmployers.css"
import "./CardInCandidates.css";
import { useNavigate } from 'react-router-dom';
import { FaMoneyBillAlt } from "react-icons/fa";
import { data } from 'autoprefixer';


const CardInCandidates = (props) => {

    let dataCandidates = props.dataCandidates;
    const navigate = useNavigate();


    function handleClickCandidates() {
        // navigate(`/employers/template`, { state: { dataCandidates: dataCandidates } });
        navigate(`/candidates/template`, { state: { dataCandidates: dataCandidates } });
    }

    return (
        <div className='w-[100%] cardEmp flex pt-[32px] pr-[20px] pb-[22px] pl-[30px] items-center justify-between'>
            {/* left part */}
            <div className='flex items-center text-left'>
                {/* image part */}
                <div><img src={dataCandidates.image} width={90} height={90} className='rounded-full'></img></div>

                {/* rest content part */}
                <div className='flex flex-col ml-[15px] gap-[3px]'>
                    <h2 onClick={handleClickCandidates} className='text-[17px] font-semibold hover:text-[#1967d2] transition-all duration-300 hover:cursor-pointer'>{dataCandidates.name}</h2>
                    <div className='flex items-center text-[#474747] text-[13px] gap-[17px]'>
                        {/* JOb Profile */}
                        <div className='text-[#2f76d6]'>{dataCandidates.job}</div>

                        {/* location */}
                        <div className='flex items-center gap-[5px]'>
                            <CiLocationOn fontSize={21} />
                            <div>London, UK</div>
                        </div>

                        {/* briefcase */}
                        <div className='flex items-center gap-[5px]'>
                            <FaMoneyBillAlt fontSize={21} />
                            <div>${dataCandidates.salary} / hour</div>
                        </div>
                    </div>
                    <div className='flex items-center text-[14px] text-[#696969] gap-[15px] mt-[5px]'>
                        <div className='px-[20px] py-[5px] bg-[#f0f5f7] rounded-full'>App</div>
                        <div className='px-[20px] py-[5px] bg-[#f0f5f7] rounded-full'>Design</div>
                        <div className='px-[20px] py-[5px] bg-[#f0f5f7] rounded-full'>Digital</div>
                    </div>
                </div>
            </div>

            {/* right part */}
            <div>
                <div onClick={handleClickCandidates} className='text-[15px] viewProfile mr-[15px] py-[18px] px-[35px] rounded-lg mb-[10px] font-semibold'>View Profile</div>
            </div>
        </div>
    )
}

export default CardInCandidates;

