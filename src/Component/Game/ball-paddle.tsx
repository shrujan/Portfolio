import { useEffect, useRef, useState } from "react";

const BallGame = () => {
  const ballCanvasRef         = useRef<HTMLCanvasElement | null>(null);
  const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ]       = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvasElem = ballCanvasRef.current as HTMLCanvasElement;
    if (canvasElem) {
      setCanvas(() => canvasElem);
      setCtx(canvasElem.getContext('2d'));
    }
  }, [ ballCanvasRef ]);
  
  return <canvas id="canvas" ref={ ballCanvasRef }>
    Ball agame
  </canvas>
}

export default BallGame;
