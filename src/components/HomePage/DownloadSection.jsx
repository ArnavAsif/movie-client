import { FiDownload } from 'react-icons/fi';
import downloadPic from '../../assets/services_img.jpg';
import { MdLiveTv } from 'react-icons/md';
import { ImVideoCamera } from 'react-icons/im';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DownloadSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#1C1B1F] px-4 sm:px-6 md:px-10 py-12 md:py-16 lg:py-20">
      <div
        data-aos="zoom-in"
        className="flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-14 w-full max-w-screen-xl px-4 sm:px-6 md:px-10 mx-auto items-center"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-5">
            <div className="w-full sm:w-3/4">
              <img
                src={downloadPic}
                alt="Download"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="bg-[#F0E500] rounded-md w-20 sm:w-24 h-40 sm:h-48 flex flex-col items-center justify-center text-black font-bold px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center relative">
                  <span className="tracking-widest text-xs sm:text-sm rotate-90">DOWNLOAD</span>
                  <FiDownload className="mt-2 text-xl absolute top-14" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div>
            <div className="flex gap-3 items-center mb-2">
              <div className="border-b-[3px] w-10 border-[#F0E500]"></div>
              <p className="text-[#e4e2e2] text-xs sm:text-sm">Our Services</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight">
              Download Your Shows <br /> Watch Offline.
            </h2>
            <p className="text-[#bcbcbc] text-sm sm:text-base mt-3 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor. There are
              many variations of passages of lorem Ipsum available, but the majority have suffered
              alteration in some injected humour.
            </p>
          </div>

          {/* Service 1 */}
          <div className="flex py-6 gap-5 sm:gap-8 items-center">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-dashed border-[#F0E500]">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                <MdLiveTv className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            <div>
              <p className="text-base sm:text-lg text-white font-bold mb-2">Enjoy on Your TV.</p>
              <p className="text-[#bcbcbc] text-sm sm:text-base leading-snug">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, <br className="hidden sm:block" />
                sed do eiusmod tempor.
              </p>
            </div>
          </div>

          <hr className="border-dotted border-white opacity-40" />

          {/* Service 2 */}
          <div className="flex pt-6 gap-5 sm:gap-8 items-center">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-dashed border-[#F0E500]">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                <ImVideoCamera className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            <div>
              <p className="text-base sm:text-lg text-white font-bold mb-2">Watch Everywhere.</p>
              <p className="text-[#bcbcbc] text-sm sm:text-base leading-snug">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, <br className="hidden sm:block" />
                sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
