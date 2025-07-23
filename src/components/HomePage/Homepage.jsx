import reactBg from '../../assets/main bg.webp'
import Headers from './Headers';
import Navbar from '../Navbar';
import UpcommingMovies from './UpcommingMovies';

const Homepage = () => {
    return (
        <div>
            <div className='relative bg-gradient-to-br  from-black to-gray-400 '>
                <img className='w-full h-full object-cover absolute mix-blend-overlay' src={reactBg} alt="" />
                <div className='w-10/12 mx-auto relative'>
                    <Navbar></Navbar>
                    <Headers></Headers>
                </div>
            </div>
            <UpcommingMovies></UpcommingMovies>
        </div>
    );
};

export default Homepage;