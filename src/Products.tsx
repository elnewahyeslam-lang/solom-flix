import {useEffect} from "react"
import {Star,Heart} from "lucide-react"
function Products({movies,setMovies,heart,togg,show}:{movies:any[],setMovies:any,heart:number[],togg:(id:number)=>void,show:string}){

    useEffect(()=>{
        const pages = [1,2,3,4,5]
        Promise.all(
            pages.map(p=>
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9daee21166151e608af7c67d9c2e2ccd&language=ar-EG&page=${p}`)
                .then(res=>res.json())
            )
        ).then(results=>{
            const allMovies = results.flatMap(data=>data.results)
            const uniqueMovies = Array.from(
                new Map(allMovies.map(mov=>[mov.id,mov])).values()
            )
            setMovies(uniqueMovies)
        })
    },[])
    const filterMovies=movies.filter((mov)=>String(mov.title || "").toLowerCase().includes(show.toLowerCase()))
    if(movies.length===0){
        return(
            <h1 className="text-white text-center text-5xl mt-70">Loading...</h1>
        )
    }
   
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:p-4 p-2 mt-30 md:ml-20 ml-[12px]">
       {filterMovies?.map(mov=>
       <div key={mov.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg p-2 transform transition-transform duration-300 hover:-translate-y-8">
        <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
        className="w-full h-auto rounded" alt="error"/>
        <h2 className="text-white mt-2 truncate text-xl">{mov.title}</h2>
        <span className="flex items-center gap-2 mt-2 text-xl"> <Star className="w-4 h-4 fill-yellow-400 size-4" />
         {mov.vote_average}
         <button onClick={()=>togg(mov.id)}>
             <Heart className={`md:ml-50 ml-15 text-white ${heart.includes(mov.id)?"fill-red-500 text-red-500":"text-gray-400"}`}/>
             </button>
         </span>
        </div>
)}
        </div>
    )
}
export default Products