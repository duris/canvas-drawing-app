import { useRef } from "react";

export function useOnDraw(onDraw) {

  const canvasRef =  useRef(null);

  function setCanvasRef(ref) {
    if(!ref) return;
    canvasRef.current = ref;
    initMouseMoveListener()
    
  }

  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      // console.log({x: e.clientX, y: e.clientY});
      const point = computePointInCanvas(e.clientX, e.clientY);
      const ctx = canvasRef.current.getContext('2d');
      if(onDraw) onDraw(ctx, point);
      // if(loadGrid) loadGrid(ctx);
    }
    window.addEventListener('mousemove', mouseMoveListener)
  }

  function computePointInCanvas(clientX, clientY) {
    if(canvasRef.current) {
          const boundingRect = canvasRef.current.getBoundingClientRect()
      return {
        x: clientX - boundingRect.left,
        y: clientY - boundingRect.top,
      }
    } else {
      return null;
    }

  }

  return setCanvasRef;
}