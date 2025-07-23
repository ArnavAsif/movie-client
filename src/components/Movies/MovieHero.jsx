import { FaPlay, FaShareAlt } from "react-icons/fa";
import hero from '../../assets/main bg.webp'
import { FiDownload } from "react-icons/fi";
const MovieHero = () => {
    return (
        <div className="bg-gray-900 text-white px-4 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center relative rounded-lg gap-6 md:gap-8">
            {/* Left: Poster */}
            <div className="relative w-full md:w-1/4 max-w-xs">
                <img
                    src={hero}
                    alt="The Easy Reach"
                    className="rounded-lg w-full"
                />
                <button className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-70 hover:opacity-100">
                    <FaPlay />
                </button>
            </div>

            {/* Middle: Details */}
            <div className="flex-1">
                <h4 className="text-yellow-400 text-lg font-semibold mb-1">
                    New Episodes
                </h4>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    The Easy <span className="text-yellow-400">Reach</span>
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                    <span className="px-2 py-0.5 bg-gray-700 rounded">PG 18</span>
                    <span className="px-2 py-0.5 bg-gray-700 rounded">HD</span>
                    <span>Romance, Drama</span>
                    <span>📅 2021</span>
                    <span>⏱ 128 min</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elseddo eiusmod
                    tempor. There are many variations of passages of lorem Ipsum
                    available, but the majority have suffered alteration in some injected
                    humour.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
                        <FaShareAlt /> Share
                    </button>

                    <div className="flex flex-col md:flex-row md:items-center bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 gap-2 md:gap-4">
                        <span>Prime Video</span>
                        <button className="flex items-center gap-2 px-3 py-1 text-yellow-400 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black">
                            <FaPlay /> Watch Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Download */}
            <div className="bg-yellow-400 rounded-md w-16 h-48 flex flex-col items-center justify-center text-black">
                <div className="flex flex-col items-center justify-center relative">
                    <span className="tracking-widest text-sm transform rotate-90 writing-vertical">
                        DOWNLOAD
                    </span>
                    <FiDownload className="mt-2 text-xl absolute top-15" />
                </div>
            </div>
        </div>
    );
};

export default MovieHero;
