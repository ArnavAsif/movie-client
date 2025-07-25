import blackBg from '../../assets/theme bg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MoviesCard from '../Movies/MoviesCard';

const UpcomingMovies = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div
            className="bg-cover bg-no-repeat bg-center py-20"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(28,27,31,0.5)), url(${blackBg})`,
            }}
        >
            <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 mx-auto">
                {/* Section Header */}
                <div
                    className="flex flex-col justify-center items-center text-center mb-12"
                    data-aos="fade-up"
                >
                    <p className="text-[#e4d804] text-xs font-medium tracking-wide mb-2">
                        ONLINE STREAMING
                    </p>
                    <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
                        Upcoming Movies
                    </h2>
                </div>

                

                {/* Movies Grid or Slider */}
                <div data-aos="fade-up">
                    <MoviesCard></MoviesCard>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMovies;
