import blackBg from '../../assets/SL-092619-23740-28.jpg'
import MovieHero from '../Movies/MovieHero';

const UpcommingMovies = () => {
    return (
        <div className=' bg-cover bg-no-repeat' style={{ backgroundImage: `url(${blackBg})` }}>
            <div className='w-10/12 mx-auto pt-25'>
                <p className='text-[#e4d804] text-xs font-medium mb-3'>ONLINE STREAMING</p>
                <h2 className='font-bold text-4xl text-white mb-15'>Upcoming Movies</h2>
                <div className='flex justify-center gap-5'>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>TV Shows</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>Documentary</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>Movies</button>
                    <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-3 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>Sports</button>
                </div>
                <div>
                    <MovieHero></MovieHero>
                </div>
            </div>
        </div>
    );
};

export default UpcommingMovies;