import { useState } from "react"
import { useOnDraw, useSaveCanvas } from "./Hooks"

const Canvas = (
  {
    width,
    height
  }) => {

  const [currentColor, setCurrentColor] = useState('#000000')


  const setCanvasRef = useOnDraw(onDraw)
  const setCanvasRef2 = useSaveCanvas(saveCanvas)

  var source;
  var dest;

  function saveCanvas(ctx){
        
        if (source) {
          ctx.drawImage(source, 0, 0)
        }
        dest = ctx        
  }
  


  function onDraw(ctx, point) {
    
    ctx.fillStyle = currentColor
    

    const lw = 0        
    const size = 20      // box border
    const boxRow = 40   
    const bw = boxRow*size
    const bh = boxRow*size      // how many boxes
    const box = bw / boxRow   // box size
    ctx.lineWidth = lw
    ctx.strokeStyle = 'black'
    for (let x=0;x<bw;x+=box)
    {
      for (let y=0;y<bh;y+=box)
      {
        let boxToDrawX = Math.ceil(point.x/box)
        let boxToDrawY = Math.ceil(point.y/box)
        
        ctx.beginPath()
        ctx.rect((boxToDrawX*box)-box,( boxToDrawY*box)-box, box, box);    
        ctx.fill();
        //DRAW GRID
        // ctx.strokeRect(x,y,box,box)         
        
      }
    }
    dest.drawImage(ctx.canvas,0,0,100,100)
  }

  return(
    <div>      
      <div className="p-2 bg-slate-700 text-center text-white">Current Color<div className={`bg-[${currentColor}] h-12 w-12 rounded-full flex m-auto my-5`}></div></div>
      <div className=" bg-slate-200 mb-2 w-full">
       <button onClick={() => setCurrentColor('#000000')} className=" bg-[#000000] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#ae00ff')} className=" bg-[#ae00ff] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#008000')} className=" bg-[#008000] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#B22222')} className=" bg-[#B22222] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#DAA520')} className=" bg-[#DAA520] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#FF69B4')} className=" bg-[#FF69B4] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#1E90FF')} className=" bg-[#1E90FF] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#7FFF00')} className=" bg-[#7FFF00] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#FF8C00')} className=" bg-[#FF8C00] w-10 h-10"></button>
       <button onClick={() => setCurrentColor('#FAFAD2')} className=" bg-[#FAFAD2] w-10 h-10"></button>
               
      </div>
    <canvas 
      width={width} 
      height={height} 
      style={canvasStyle}
      ref={setCanvasRef}
    />
    <canvas 
      width={100} 
      height={100} 
      style={canvasStyle}
      ref={setCanvasRef2}
    />
    
    </div>
  )
}

export default Canvas

const canvasStyle  = {
  border: '1px solid black',
  background: 'white',
}