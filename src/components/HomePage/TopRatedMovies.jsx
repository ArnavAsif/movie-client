import blackBg from '../../assets/theme bg.png'
import MovieHero from '../Movies/MovieHero';

const TopRatedMovies = () => {
    return (
        <div className=' bg-cover bg-no-repeat' style={{ backgroundImage: `url(${blackBg})` }}>
            <div className='w-10/12 mx-auto pt-25'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#e4d804] text-xs font-medium mb-3'>ONLINE STREAMING</p>
                    <h2 className='font-bold text-4xl text-white mb-15'>Top Rated Movies</h2>
                </div>
                <div className='flex justify-center gap-5'>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>TV Shows</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>Documentary</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>Movies</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>Sports</button>
                </div>
                <div>
                    <MovieHero></MovieHero>
                </div>
            </div>
        </div>
    );
};

export default TopRatedMovies;