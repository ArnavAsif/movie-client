
import { FiDownload } from 'react-icons/fi';
import downloadPic from '../../assets/services_img.jpg'
import { MdLiveTv } from 'react-icons/md';
import { ImVideoCamera } from 'react-icons/im';

const DownloadSection = () => {
    return (
        <div className='bg-[#1C1B1F] flex w-full p-28 mx-auto'>
            <div className='flex w-10/12 mx-auto gap-11 justify-center'>
                {/* pictures */}
                <div>
                    <div className='flex gap-5'>
                        <div>
                            <img src={downloadPic} alt="" />
                        </div>
                        <div className='flex flex-col justify-end'>
                            <div className="bg-[#F0E500] rounded-md w-24 font-bold px-6 h-48 flex flex-col items-center justify-center text-black">
                                <div className="flex flex-col items-center justify-center relative">
                                    <span className="tracking-widest text-sm transform rotate-90 writing-vertical">
                                        DOWNLOAD
                                    </span>
                                    <FiDownload className="mt-2 text-xl absolute top-14" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* comment section */}

                <div>
                    <div>
                        <div className='flex gap-3 items-center mb-3'>
                            <div className='border-b-[3px] w-10 border-[#F0E500] '></div>
                            <p className='text-[#e4e2e2] text-xs'>Our Services</p>
                        </div>
                        <h2 className='text-4xl text-white font-bold'>Download Your Shows <br /> Watch Offline.</h2>
                        <p className='text-[#bcbcbc] text-[14px] mt-5 mb-8'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There <br /> are many variations of passages of lorem Ipsum available, but the majority have <br /> suffered alteration in some injected humour.</p>
                    </div>

                    <div className="flex py-8 gap-9 items-center">

                        <div className="flex items-center justify-center w-24 h-24 rounded-full border border-dashed border-[#F0E500]">

                            <div className="flex items-center justify-center w-22 h-22 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                                <MdLiveTv className="h-10 w-10 text-white" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[18px] text-white font-bold mb-3">Enjoy on Your TV.</p>
                            <p className="text-[#bcbcbc] text-[14px]">
                                Lorem ipsum dolor sit amet, consecetur adipiscing elit, <br />
                                sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>
                    <hr className='border-dotted border-white opacity-40' />
                    <div className='flex py-8 gap-9 items-center'>
                        <div className='w-24 h-24 flex justify-center items-center rounded-full border border-dashed border-[#F0E500]'>
                            <div className="flex items-center justify-center w-22 h-22 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                                <ImVideoCamera className="h-10 w-10 text-white" />
                            </div>
                        </div>

                        <div>
                            <p className='text-[18px] text-white font-bold mb-3'>Watch Everywhere.</p>
                            <p className='text-[#bcbcbc] text-[14px]'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, <br /> sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;