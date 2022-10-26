import Canvas from "../components/Canvas";

const Index = () => {
  return(
    <main className=" h-screen flex bg-slate-900">
      <div className=" m-auto ">
      <Canvas
        width={600}
        height={600}
       />
       </div>
    </main>
  )
}

export default Index