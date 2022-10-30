import Canvas from "../components/Canvas";

const Index = () => {
  return(
    <main className=" h-screen flex bg-slate-400">
      <div className=" m-auto ">
      <Canvas
        width={500}
        height={500}
       />
       </div>
    </main>
  )
}

export default Index