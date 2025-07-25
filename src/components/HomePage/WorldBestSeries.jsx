import blackBg from '../../assets/theme bg.png';
import MovieHero from '../Movies/MovieHero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WorldBestSeries = () => {
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
            <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 mx-auto text-center">
                {/* Section Header */}
                <div data-aos="fade-up" className="flex flex-col justify-center items-center mb-12">
                    <p className="text-[#e4d804] text-xs font-medium tracking-wide mb-2">Best TV Series</p>
                    <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8">
                        World Best TV Series
                    </h2>
                </div>

                {/* MovieHero Content */}
                <div data-aos="fade-up">
                    <MovieHero />
                </div>
            </div>
        </div>
    );
};

export default WorldBestSeries;
