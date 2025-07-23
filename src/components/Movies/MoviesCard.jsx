import { FaStar } from 'react-icons/fa';

const MoviesCard = () => {
    return (
        <div className="bg-gray-900 text-white p-3 rounded-xl shadow w-64">
                <div className="rounded-md overflow-hidden">
                    <img
                        src=''
                        alt="Women's Day"
                        className="w-full h-80 object-cover"
                    />
                </div>
                <div className="mt-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Women's Day</h2>
                        <span className="text-yellow-400">2022</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-300">
                        <span className="px-1.5 py-0.5 border border-yellow-400 rounded text-yellow-400 text-xs">
                            HD
                        </span>
                        <span>128 min</span>
                        <span className="flex items-center gap-1">
                            <FaStar size={14} className="text-yellow-400" /> 3.5
                        </span>
                    </div>
                </div>
            </div>
    );
};

export default MoviesCard;