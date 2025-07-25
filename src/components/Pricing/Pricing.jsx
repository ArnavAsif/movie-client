import { Fade } from 'react-awesome-reveal';
import pricingBg from '../../assets/colorful-work-space.jpg';
import themeBg from '../../assets/theme bg.png';
import Navbar from '../Navbar';

const Pricing = () => {
    return (
        <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(28,27,31,0.3)), url(${pricingBg})`,
            }}
        >
            <div className="h-screen">
                <Navbar />
                <div className="flex justify-center items-center pt-40 md:pt-64 px-4">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
                        Best <span className="text-[#e4d804]">Movie</span> Plan
                    </p>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${themeBg})` }}
                className="bg-cover bg-no-repeat min-h-screen text-white px-4 py-20 font-sans"
            >
                {/* Header */}
                <div className="text-center mb-16 max-w-xl mx-auto">
                    <h4 className="text-xs tracking-widest text-gray-300 uppercase mb-2">
                        Our Pricing Plans
                    </h4>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Pricing Strategy</h2>
                    <div className="h-1 w-12 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-wrap justify-center gap-8 items-stretch">
                    {/* Plan 1 */}
                    <Fade direction="down" cascade={false} delay={50}>
                        <div className="border hover:border-[#e4d804] p-8 rounded-md bg-gray-900 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] flex flex-col items-center">
                            <h3 className="uppercase text-sm font-semibold text-white mb-4">STANDARD</h3>
                            <div className="bg-[#e4d804] text-black font-bold text-center text-2xl py-6 px-6 rounded mb-6 w-full">
                                $7.99
                                <div className="text-sm font-normal">Monthly</div>
                            </div>
                            <ul className="text-sm text-white w-full space-y-4 mb-6">
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Video quality</span>
                                    <span className="text-[#e4d804]">Good</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Resolution</span>
                                    <span>480p</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Screens you can watch</span>
                                    <span>1</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Cancel anytime</span>
                                </li>
                            </ul>
                            <button className="mt-auto border border-[#e4d804] text-[#e4d804] py-2 px-6 rounded-full hover:bg-[#e4d804] hover:text-black transition">
                                Buy Now
                            </button>
                        </div>
                    </Fade>

                    {/* Plan 2 */}
                    <Fade direction="down" cascade={false} delay={100}>
                        <div className="border hover:border-[#e4d804] p-8 rounded-md bg-gray-900 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] flex flex-col items-center">
                            <h3 className="uppercase text-sm font-semibold text-white mb-4">PREMIUM</h3>
                            <div className="bg-[#e4d804] text-black font-bold text-center text-2xl py-6 px-6 rounded mb-6 w-full">
                                $9.99
                                <div className="text-sm font-normal">Monthly</div>
                            </div>
                            <ul className="text-sm text-white w-full space-y-4 mb-6">
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Video quality</span>
                                    <span className="text-[#e4d804]">Better</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Resolution</span>
                                    <span>1080p</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Screens you can watch</span>
                                    <span>2</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Cancel anytime</span>
                                </li>
                            </ul>
                            <button className="mt-auto border border-[#e4d804] text-[#e4d804] py-2 px-6 rounded-full hover:bg-[#e4d804] hover:text-black transition">
                                Buy Now
                            </button>
                        </div>
                    </Fade>

                    {/* Plan 3 */}
                    <Fade direction="down" cascade={false} delay={200}>
                        <div className="border hover:border-[#e4d804] p-8 rounded-md bg-gray-900 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] flex flex-col items-center">
                            <h3 className="uppercase text-sm font-semibold text-white mb-4">PRO</h3>
                            <div className="bg-[#e4d804] text-black font-bold text-center text-2xl py-6 px-6 rounded mb-6 w-full">
                                $11.99
                                <div className="text-sm font-normal">Monthly</div>
                            </div>
                            <ul className="text-sm text-white w-full space-y-4 mb-6">
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Video quality</span>
                                    <span className="text-[#e4d804]">Best</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Resolution</span>
                                    <span>4K+HDR</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Screens you can watch</span>
                                    <span>4</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-700 pb-2">
                                    <span>Cancel anytime</span>
                                </li>
                            </ul>
                            <button className="mt-auto border border-[#e4d804] text-[#e4d804] py-2 px-6 rounded-full hover:bg-[#e4d804] hover:text-black transition">
                                Buy Now
                            </button>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
