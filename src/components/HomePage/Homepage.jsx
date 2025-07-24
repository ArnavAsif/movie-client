
import Headers from './Headers';
import UpcommingMovies from './UpcommingMovies';
import DownloadSection from './DownloadSection';
import TopRatedMovies from './TopRatedMovies';
import Promotions from './Promotions';


const Homepage = () => {
    return (
        <div>
            <Headers></Headers>
            <UpcommingMovies />
            <DownloadSection />
            <TopRatedMovies />
            <Promotions />
        </div>
    );
};

export default Homepage;
