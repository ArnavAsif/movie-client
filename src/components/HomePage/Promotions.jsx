import promotionBg from '../../assets/people bg.png';
import people from '../../assets/live_img.png';
import { FaPlay } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Promotions = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div
            className='bg-cover bg-no-repeat bg-center py-16'
            style={{ backgroundImage: `url(${promotionBg})` }}
        >
            <div className='md:w-10/12 md:px-10 mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:gap-12'>
                {/* Left Content */}
                <div data-aos="zoom-in-up" className='max-w-xl'>
                    {/* Label */}
                    <div className='flex gap-3 items-center mb-4'>
                        <div className='border-b-[3px] w-10 border-[#F0E500]'></div>
                        <p className='text-xs text-[#1e1b29] font-semibold tracking-wider'>
                            ONLINE STREAMING
                        </p>
                    </div>

                    {/* Title */}
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1b29] leading-snug'>
                        Live Movie & TV Shows For <br /> Friends & Family
                    </h2>

                    {/* Description */}
                    <p className='text-[#6a6a6a] text-[14px] md:text-[15px] font-medium my-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod. <br />
                        There are many variations of passages of lorem Ipsum available, <br />
                        but the majority have suffered alteration.
                    </p>

                    {/* Stats */}
                    <div className='flex items-center gap-6 mb-8'>
                        <div
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px red',
                                textStroke: '1px red',
                            }}
                            className="text-5xl sm:text-6xl font-extrabold uppercase"
                        >
                            HD 4K
                        </div>
                        <div>
                            <p className='text-[32px] sm:text-[38px] text-[#1e1b29] font-bold leading-tight'>
                                20K+
                            </p>
                            <p className='text-[#1e1b29] font-semibold'>Active Customers</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className='flex items-center gap-2 bg-[#e4d804] border border-[#e4d804] rounded-full font-bold text-[#1e1b29] text-sm py-3 px-7 hover:bg-white transition duration-300 ease-in-out'>
                        <FaPlay />
                        WATCH NOW
                    </button>
                </div>

                {/* Right Image */}
                <div data-aos="zoom-in-down" className='w-full md:w-[50%]'>
                    <img
                        className='w-full h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105'
                        src={people}
                        alt="People watching TV"
                    />
                </div>
            </div>
        </div>
    );
};

export default Promotions;
