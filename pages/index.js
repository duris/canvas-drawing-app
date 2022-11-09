import Canvas from "../components/Canvas";

const Index = () => {
  return(
    <div>
    <main className=" h-screen flex">
      <div className=" m-auto ">
        <div className=" absolute -z-10 w-full m-auto left-0 top-40 h-screen min-w-[400px] text-center">
          <img className=" h-100 h-100 text-center m-auto min-w-[400px]" src='shirt.png'/>
        </div>
        <div className="z-10">
      <Canvas
        width={300}
        height={300}
       />
       </div>
   
       </div>
        
    </main>

    <div className=" absolute bottom-5 right-5 bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
    Add to cart
    </div>
    </div>
  )
}

export default Index