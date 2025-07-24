import promotionBg from '../../assets/people bg.png'
import people from '../../assets/live_img.png'
import { FaPlay } from 'react-icons/fa';

const Promotions = () => {
    return (
        <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${promotionBg})` }}>
            <div className='flex p-20 w-10/12 mx-auto gap-14 justify-center'>
                <div>
                    <div className='flex gap-3 items-center mb-3'>
                        <div className='border-b-[3px] w-10 border-[#F0E500] '></div>
                        <p className=' text-xs'>ONLINE STREAMING</p>
                    </div>
                    <h2 className='text-4xl text-[#1e1b29] font-bold'>Live Movie & TV Shows For <br /> Friends & Family</h2>
                    <p className='text-[#6a6a6a] text-[14px] font-medium my-9'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod <br /> There are many variations of passages of lorem Ipsum available, but the <br /> majority have suffered alteration.</p>
                    <div className='flex gap-7 mb-9'>
                        <div
                            style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px red',
                                textStroke: '1px red',
                            }}
                            className="text-6xl font-extrabold uppercase">
                            HD 4K
                        </div>
                        <div>
                            <p className='text-[38px] text-[#1e1b29] font-bold m-0 leading-none'>20K+</p>
                            <p className='text-[#1e1b29] font-bold m-0'>Active Customer</p>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 bg-[#e4d804] border-2 border-[#e4d804] rounded-full font-bold text-[#1e1b29] text-xs py-4 px-8 hover:bg-white transition delay-100 ease-in-out'>
                        <FaPlay />
                        WATCH NOW

                    </button>
                </div>
                <div>
                    <img className='w-full object-cover' src={people} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Promotions;