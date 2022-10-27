import { useState } from "react"
import { useOnDraw } from "./Hooks"

const Canvas = (
  {
    width,
    height
  }) => {

  const [currentColor, setCurrentColor] = useState('#000000')

  
  function loadGrid(ctx) {
    const bw = window.innerWidth
    const bh = window.innerHeight
    const lw = 1              // box border
    const boxRow = 20         // how many boxes
    const box = bw / boxRow   // box size
    ctx.lineWidth = lw
    ctx.strokeStyle = 'rgba(234, 234, 234, 0.3)'
    for (let x=0;x<bw;x+=box)
    {
      for (let y=0;y<bh;y+=box)
      {
        ctx.strokeRect(x,y,box,box)
      }
    }
  }
    

  const setCanvasRef = useOnDraw(onDraw)

  function onDraw(ctx, point) {
    
    ctx.fillStyle = currentColor
    
    const bw = window.innerWidth
    const bh = window.innerHeight
    const lw = .1              // box border
    const boxRow = 33         // how many boxes
    const box = bw / boxRow   // box size
    ctx.lineWidth = lw
    ctx.strokeStyle = 'rgba(215, 215, 215, 0.3)'
    for (let x=0;x<bw;x+=box)
    {
      for (let y=0;y<bh;y+=box)
      {
        let boxToDrawX = Math.ceil(point.x/box)
        let boxToDrawY = Math.ceil(point.y/box)
        // console.log(box)
        ctx.beginPath()
        ctx.rect((boxToDrawX*23)-23,( boxToDrawY*23)-23, 23, 23);    
        ctx.fill();
        ctx.strokeRect(x,y,box,box)
      }
    }
  }

  return(
    <div>      
      <div className={`bg-[${currentColor}] h-12 w-12 rounded-full flex m-auto mb-10`}></div>
      <div className=" bg-slate-200 mb-2 w-full">
       <button onClick={() => setCurrentColor('#000000')} className=" bg-[#000000] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#ae00ff')} className=" bg-[#ae00ff] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#008000')} className=" bg-[#008000] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#B22222')} className=" bg-[#B22222] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#DAA520')} className=" bg-[#DAA520] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#FF69B4')} className=" bg-[#FF69B4] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#1E90FF')} className=" bg-[#1E90FF] w-10 h-10"></button>
               
      </div>
    <canvas 
      width={width} 
      height={height} 
      style={canvasStyle}
      ref={setCanvasRef}
    />
    </div>
  )
}

export default Canvas

const canvasStyle  = {
  border: '1px solid black',
  background: 'white',
}