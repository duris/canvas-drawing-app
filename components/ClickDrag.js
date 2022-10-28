import { useRef } from "react";



export function clickDrag(onDraw) {


  
  const canvasRef =  useRef(null);

  function setCanvasRef(ref) {
    if(!ref) return;
    canvasRef.current = ref;
   
    const ctx = canvasRef.current.getContext('2d');
    if(saveCanvas) saveCanvas(ctx); 
  }
  
  return setCanvasRef
}