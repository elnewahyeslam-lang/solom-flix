import imagesolom from "./assets/image-solom-flix-2.png"
function Home({show,setShow}:{show:string,setShow:(val:string)=>void}){
    return(
        <div className="mt-10 ml-30">
                   <img src={imagesolom} className="md:w-full md:mt-10 md:-ml-10 w-full mt-50 ml-[-50px]" />
            <div >
                <input type="search" placeholder="Search for movies, Tv shows..."
                 className=" md:w-100 md:ml-50 bg-[#181924] rounded-xl p-3 text-white border border-gray-800 focus:outline-none transition-all mt-30"
                 onChange={(e)=>setShow(e.target.value)} value={show}/>
            </div>
     
        </div>
    )
}
export default Home