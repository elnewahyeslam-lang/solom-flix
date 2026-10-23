import {Home,Film,Heart,Crown} from "lucide-react"
import {Link} from"react-router-dom"
import { useState } from "react"
function Navbar(){
    const[active,setActive]=useState("Home")
    return(
        <div className="flex md:flex-col  md:w-[300px] bg-slate-900/80 md:h-screen md:fixed sticky top-0 left-0 w-full"> 
        <div>
            <h1 className="pt-10 md:ml-22  ml-15 text-2xl md:text-4xl flex text-white"> <Crown className="mr-5 mt-2 md:size-10"/>Solom Flix</h1>
        </div>  
        <aside className="flex md:flex-col justify-between md:gap-20 md:pt-20 md:ml-20 pt-30 ml-[-200px] gap-15 ">
            <Link to="/home"
             className={`flex text-white md:text-2xl p-4 ${active==="Home"?"bg-purple-900":""} `}
             onClick={()=>setActive("Home")}> <Home className="mr-3 md:size-8"/>Home</Link>
            <Link to="/movies"
            className={`flex text-white md:text-2xl p-4 ${active==="Movies"?"bg-purple-900 ":""}`}
            onClick={()=>setActive("Movies")} > <Film className="mr-3 md:size-8"/>Movies</Link>
            <Link to="/heart"
             className={`flex text-white md:text-2xl p-4  ${active==="Heart"?"bg-purple-900":""}`}
            onClick={()=>setActive("Heart")}> <Heart className="mr-3 md:size-8"/>Heart</Link>
        </aside>      
        </div>
    )
}
export default Navbar