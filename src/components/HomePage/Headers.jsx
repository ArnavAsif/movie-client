import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarAlt, FaPlay } from 'react-icons/fa';
import { IoTimerOutline } from 'react-icons/io5';

const Headers = () => {
    return (
        <div className='p-2 flex justify-start items-center h-[900px]'>
            <div>
                <Fade direction='down'>
                    <p className='text-[26px] text-[#e4d804] font-bold'>Movies For Life</p>
                </Fade>
                <Fade direction='up'>
                    <p className='text-[60px] text-white font-bold mt-3 mb-7 leading-18'>Unlimited <span className='text-[#e4d804]'>Movie</span>, TVs <br /> Shows, & More.</p>

                    <div className='flex items-center mb-12'>
                        <p className='font-bold bg-white text-black text-[11px] px-[11px] py-[6px]'>PG-18</p>
                        <p className='font-bold bg-black text-white px-[9px] py-[5px] border-2 border-white text-[11px] ml-2 mr-4'>HD</p>
                        <p className='text-[14px] text-[#e3dfdf] mr-1 hover:text-[#e4d804]'><a href="#">Romance,</a></p>
                        <p className='text-[14px] text-[#e3dfdf] mr-4 hover:text-[#e4d804]'><a href="#">Drama</a></p>
                        <div className='flex items-center text-[14px] gap-2 mr-2'>
                            <FaCalendarAlt className='text-[#e4d804]'></FaCalendarAlt>
                            <p className='text-[#e3dfdf]'>2022</p>
                        </div>
                        <div className='flex items-center text-[14px] gap-2'>
                            <IoTimerOutline className='text-[#e4d804]'></IoTimerOutline>
                            <p className='text-[#e3dfdf]'>128 min</p>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-4 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>
                        <FaPlay />
                        WATCH NOW

                    </button>
                </Fade>
            </div>
        </div>
    );
};

export default Headers;