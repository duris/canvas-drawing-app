import { useOnDraw } from "./Hooks"

const Canvas = (
  {
    width,
    height
  }) => {

  
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
    
    ctx.fillStyle = '#000000'
    
    const bw = window.innerWidth
    const bh = window.innerHeight
    const lw = 1              // box border
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
    <canvas 
      width={width} 
      height={height} 
      style={canvasStyle}
      ref={setCanvasRef}
    />
  )
}

export default Canvas

const canvasStyle  = {
  border: '1px solid black',
  background: 'white',
}