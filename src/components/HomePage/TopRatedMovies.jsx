import blackBg from '../../assets/theme bg.png';
import MovieHero from '../Movies/MovieHero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TopRatedMovies = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div
            className='bg-cover bg-no-repeat bg-center py-20'
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(28,27,31,0.5)), url(${blackBg})` }}
        >
            <div className='w-full max-w-screen-xl px-4 sm:px-6 md:px-10 mx-auto'>
                {/* Section Header */}
                <div className='flex flex-col justify-center items-center text-center mb-12' data-aos="fade-up">
                    <p className='text-[#e4d804] text-xs font-medium tracking-wide mb-2'>
                        ONLINE STREAMING
                    </p>
                    <h2 className='text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4'>
                        Top Rated Movies
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-4 mb-12' data-aos="fade-up">
                    {['TV Shows', 'Documentary', 'Movies', 'Sports'].map((label) => (
                        <button
                            key={label}
                            className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-semibold text-[#e3dfdf] text-xs sm:text-sm py-3 px-6 hover:bg-[#e4d804] hover:text-black transition duration-300 ease-in-out shadow-md hover:shadow-yellow-300'
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Movies Grid or Slider */}
                <div data-aos="fade-up">
                    <MovieHero />
                </div>
            </div>
        </div>
    );
};

export default TopRatedMovies;
