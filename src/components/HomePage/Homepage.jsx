import reactBg from '../../assets/main bg.webp';
import Headers from './Headers';
import UpcommingMovies from './UpcommingMovies';
import DownloadSection from './DownloadSection';
import TopRatedMovies from './TopRatedMovies';
import Promotions from './Promotions';
import Navbar from '../Navbar';

const Homepage = () => {
    return (
        <div className="bg-black text-white">
            {/* ✅ Hero Section: shared background for Navbar + Headers */}
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(28,27,31,0.8)), url(${reactBg})`,
                }}
            >
                {/* ✅ Place sticky Navbar here */}
                <div className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
                    <Navbar />
                </div>

                {/* ✅ Hero content */}
                <div className="w-10/12 mx-auto pt-6 pb-24">
                    <Headers />
                </div>
            </section>

            {/* ✅ Other sections */}
            <UpcommingMovies />
            <DownloadSection />
            <TopRatedMovies />
            <Promotions />
        </div>
    );
};

export default Homepage;
