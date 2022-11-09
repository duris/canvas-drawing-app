import { useRef, useState } from "react"
import { useOnDraw, useSaveCanvas } from "./Hooks"

const Canvas = ({width,height}) => {

  const [currentColor, setCurrentColor] = useState('#000000')
  const [pixelPaintSize, setPixelPaintSize] = useState(5)

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
    const size = pixelPaintSize      // box border
    const boxRow = 1   
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
       
      }
    }
    // dest.drawImage(ctx.canvas,0,0,150,75)
    source = ctx
  }

  const getImageData = () => {   
    let data = source.canvas.toDataURL()  
  }

  const increasePixelSize = () => {
    if(pixelPaintSize+5<11){
    setPixelPaintSize(pixelPaintSize+5)
    }
  }
  const decreasePixelSize = () => {
    if(pixelPaintSize-5>0){
    setPixelPaintSize(pixelPaintSize-5)
    }
  }



  return(
    <div>      
      <div className=" absolute top-0">
      <div className="p-2 bg-slate-100 text-center text-slate-900">Current Color<div className={`bg-[${currentColor}] h-12 w-12 rounded-full flex m-auto my-5`}></div>
      <button className=" absolute left-0 top-20 px-1 rounded-lg inline-block mx-1 bg-slate-300" onClick={increasePixelSize}>+</button>
      <button className=" absolute left-6 top-20 px-1 rounded-lg inline-block mx-1 bg-slate-300" onClick={decreasePixelSize}>-</button>
      </div>      
      <div className=" bg-slate-200 w-full">
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
       <button onClick={() => setCurrentColor('#FFFFFF')} className=" bg-[#FFFFFF] w-10 h-10"></button>
               
      </div>
      </div>
      <div className="border inline-block top-10 relative ">
    <canvas 
      width={400} 
      height={400} 
      style={canvasStyle}
      ref={setCanvasRef}
    />
    </div>
    <div className="mt-1">
    {/* <canvas 
      width={150} 
      height={75} 
      style={canvasStyle}
      ref={setCanvasRef2}
    /> */}
    </div>

    </div>
  )
}

export default Canvas

const canvasStyle  = {
  // border: '1px solid white',
  background: 'white',
}