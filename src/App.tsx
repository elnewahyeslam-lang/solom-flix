import {useState } from "react"
import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Products from './Products'
import Movies from "./Movies"
import Heart from "./Heart"
function App() {
   const[show,setShow]=useState("")
 const [movies,setMovies]=useState<any[]>([])
   const [heart,setHeart]=useState<number[]>([])
     const toggHeart=(id:number)=>{
        if(heart.includes(id)){
            setHeart(heart.filter((movv)=>movv!==id))
        }else{
            setHeart([...heart,id])
        }
    }
  return (
    <BrowserRouter>
    <div className='bg-slate-950 w-full'>
    <div className=' md:flex'>
    <Navbar/>
    <div className='ml-0 md:ml-[250px] flex-1 md:p-6'>
    <main>
    <Routes>
    <Route path="/" element={<Navigate to="/home" replace/>}/>
    <Route path="/home" element={
      <>
      <Home show={show} setShow={setShow}/>
      <Products movies={movies} setMovies={setMovies} heart={heart}  togg={toggHeart} show={show}/>
      </>
    }/>  
    <Route path="/movies" element={
      <>
      <Movies movies={movies} heart={heart}  togg={toggHeart} />
      </>
    }/>  
    <Route path="/heart" element={
      <>
      <Heart movies={movies} heart={heart}  togg={toggHeart}/>
      </>
    }/>  
    </Routes>
    </main>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
