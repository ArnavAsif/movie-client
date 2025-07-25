import reactBg from '../../assets/main bg.webp';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarAlt, FaPlay } from 'react-icons/fa';
import { IoTimerOutline } from 'react-icons/io5';
import Navbar from '../Navbar';

const Headers = () => {
    return (
        <div
            className='bg-no-repeat bg-cover bg-center'
            style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(28,27,31,0.3)), url(${reactBg})`,
            }}
        >
            <div className='w-10/12 mx-auto'>
                <Navbar />
                <div className='p-4 flex justify-start items-center min-h-[80vh] md:min-h-[90vh]'>
                    <div className='max-w-2xl'>
                        <Fade direction='down' triggerOnce>
                            <p className='text-xl md:text-2xl text-[#e4d804] font-bold tracking-wide'>
                                Movies For Life
                            </p>
                        </Fade>

                        <Fade direction='up' triggerOnce>
                            <h1 className='text-[36px] sm:text-[50px] md:text-[60px] text-white font-bold mt-3 mb-7 leading-tight'>
                                Unlimited <span className='text-[#e4d804]'>Movie</span>, TVs <br className='hidden md:block' />
                                Shows, & More.
                            </h1>

                            {/* Tags */}
                            <div className='flex flex-wrap items-center gap-3 mb-10'>
                                <span className='font-bold bg-white text-black text-xs px-3 py-1 rounded'>PG-18</span>
                                <span className='font-bold bg-black text-white border border-white text-xs px-3 py-1 rounded'>
                                    HD
                                </span>
                                <a
                                    href="#"
                                    className='text-sm text-[#e3dfdf] hover:text-[#e4d804] backdrop-blur-md px-2 py-1 rounded transition'
                                >
                                    Romance,
                                </a>
                                <a
                                    href="#"
                                    className='text-sm text-[#e3dfdf] hover:text-[#e4d804] backdrop-blur-md px-2 py-1 rounded transition'
                                >
                                    Drama
                                </a>
                                <div className='flex items-center gap-1 text-sm text-[#e3dfdf]'>
                                    <FaCalendarAlt className='text-[#e4d804]' />
                                    <span>2022</span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-[#e3dfdf]'>
                                    <IoTimerOutline className='text-[#e4d804]' />
                                    <span>128 min</span>
                                </div>
                            </div>

                            {/* Watch Button */}
                            <button className='flex items-center gap-2 bg-[#12151e]/90 border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs sm:text-sm py-3 px-6 hover:bg-[#e4d804] hover:text-black transition-all duration-300 ease-in-out'>
                                <FaPlay className='text-sm' />
                                WATCH NOW
                            </button>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;
