import {Star,Heart} from "lucide-react"
import { useState } from "react"
function Movies({movies,heart,togg}:{movies:any[],heart:number[],togg:(id:number)=>void}){
    const[selected,setSelected]=useState<string|number>("All")
    const filterMovies= selected==="All"?movies:movies?.filter(mov=>mov.genre_ids?.includes(Number(selected)))
    return(
        <div className="ml-40 mt-20 bg-slate-950 min-h-screen">
            <h1 className="text-white text-4xl">Movies</h1>
            <nav className="mt-10 md:flex md:items-center md:justify-between grid grid-cols-3 gap-10 ml-[-140px] md:ml-[12px]">
                <button className={` text-white px-9 py-5 rounded-full  transition-all duration-300 hover:bg-purple-800 shadow-md active:bg-purple-800
                 ${selected==="All" ? "bg-purple-800":"bg-slate-800"}`} onClick={()=>setSelected("All")}>
                    All</button>
                <button  className={` text-white px-9 py-5 rounded-full hover:bg-purple-800 transition-all duration-300 shadow-md  active:bg-purple-800
              ${selected===28 ? "bg-purple-800":"bg-slate-800"}`}   onClick={()=>setSelected(28)}>
                    Action</button>
                <button  className={` text-white px-9 py-5 rounded-full hover:bg-purple-800 transition-all duration-300 shadow-md  active:bg-purple-800
               ${selected===35 ? "bg-purple-800":"bg-slate-800"}`}   onClick={()=>setSelected(35)}>
                    Comedy</button>
                <button  className={` text-white px-9 py-5 rounded-full hover:bg-purple-800 transition-all duration-300 shadow-md  active:bg-purple-800
              ${selected===18 ? "bg-purple-800":"bg-slate-800"}`}   onClick={()=>setSelected(18)}>
                    Drama</button>
                <button className={` text-white px-9 py-5 rounded-full hover:bg-purple-800 transition-all duration-300 shadow-md  active:bg-purple-800
              ${selected===12 ? "bg-purple-800":"bg-slate-800"}`}  onClick={()=>setSelected(12)} >
                    Adventure</button>
            </nav>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:p-4 p-2 mt-30 md:mr-10 ml-[-150px] md:ml-[-20px]">
       {filterMovies?.map((mov)=>(
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
          ))}
        </div>
        </div>
        )

}
export default Movies