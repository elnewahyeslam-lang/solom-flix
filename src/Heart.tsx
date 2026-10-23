import { Heart as HeartIcon, Star } from "lucide-react";
export default function Heart({movies,heart,togg,}:{movies: any[];heart: number[];togg: (id: number) => void;}) {
  const favMovies = movies.filter((mov) => heart.includes(mov.id));
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2 ml-20">
        <HeartIcon className="text-red-500 fill-red-500" size={32} />
        Favorite Movies ({favMovies.length})
      </h1>

      {favMovies.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <HeartIcon size={64} className="mb-4 text-gray-600" />
          <p className="text-xl font-semibold">No favorite movies added yet!</p>
          <p className="text-sm text-gray-500 mt-2">
            Click on the heart icon on any movie to save it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:ml-20">
          {favMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 relative group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold truncate w-40">
                    {movie.title || movie.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                    <Star size={16} className="fill-yellow-400" />
                    <span>{movie.vote_average?.toFixed(1)}</span>
                  </div>
                </div>

                <button
                  onClick={() => togg(movie.id)}
                  className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition"
                >
                  <HeartIcon
                    size={20}
                    className="text-red-500 fill-red-500"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
