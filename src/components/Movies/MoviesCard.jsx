import { FaStar, FaClock } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
const MoviesCard = () => {
    const movies = [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            rating: 8.8,
            runtime: "2h 28m",
            resolution: "1080p",
            image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
        },
        {
            id: 2,
            title: "Interstellar",
            year: 2014,
            rating: 8.6,
            runtime: "2h 49m",
            resolution: "1080p",
            image: "https://m.media-amazon.com/images/I/712I5GOGprL._SL1200_.jpg"
        },
        {
            id: 3,
            title: "The Dark Knight",
            year: 2008,
            rating: 9.0,
            runtime: "2h 32m",
            resolution: "4K",
            image: "https://i.redd.it/vxjwqf3bx6ob1.jpg"
        },
        {
            id: 4,
            title: "The Matrix",
            year: 1999,
            rating: 8.7,
            runtime: "2h 16m",
            resolution: "4K",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DoFtShSmClflZ0RzBj9JBMweU5IUVBCeEbbLeV2XPlCnTKNi"
        },
        {
            id: 5,
            title: 'The Iron Ladies',
            year: 2001,
            rating: 6.6,
            runtime: "1h 44m",
            resolution: 'HD',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMSeNsKY2-23CkmXBMimW9JN0f9hJkTamKCIrILbn1m0uLLHmu',
        },
        {
            id: 6,
            title: 'The Miracle Season',
            year: 2018,
            rating: 6.7,
            runtime: "1h 51m",
            resolution: 'HD',
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZLL0bAmUQSsvIZv-M0nJgcfW_JyZYIhG-e9dI9IRMSoexySBE',
        },
        {
            id: 7,
            title: 'Soul Surfer',
            year: 2011,
            rating: 7.0,
            runtime: "1h 46m",
            resolution: 'HD',
            image: 'https://occ-0-8589-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABU9Vo3ijVsjlEnk-eTb5cWfGLgiBIYfPOWltezx3azSAUoPrFQXUm5WZT-AvBbPTz7ZS_0B4t2QjHFpR8om7kjFYJdAjTSFAMCs0.webp?r=8f5J',
        },
        {
            id: 8,
            title: 'Harukana Receive',
            year: 2018,
            rating: 6.5,
            runtime: "2h 24m",
            resolution: '4K',
            image: 'https://www.themoviedb.org/t/p/w1280/znH4hz01Jr2FqQ95PpcbaMWkZt3.jpg',
        },
    ];

    return (
        <Marquee speed={70} pauseOnHover>
            <div className="flex justify-center gap-6 p-6 bg-black">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-zinc-900 text-white rounded-lg shadow-lg w-60 overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="relative">
                            <img src={movie.image} alt={movie.title} className="h-80 w-full object-cover" />
                            <span className="absolute bottom-2 left-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-0.5 rounded">
                                {movie.resolution}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{movie.year}</p>
                            <div className="flex items-center justify-between text-sm text-gray-300">
                                <span className="flex items-center gap-1">
                                    <FaClock className="text-yellow-400" /> {movie.runtime}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" /> {movie.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

export default MoviesCard;
