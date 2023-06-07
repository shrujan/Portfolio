import { useEffect, useRef, useState } from "react";

const BallGame = () => {
  const ballCanvasRef         = useRef<HTMLCanvasElement | null>(null);
  const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ]       = useState<CanvasRenderingContext2D | null>(null);

  // create a ball
  const ball = {
    x: canvas ? canvas.width / 2 : 0,
    y: canvas ? canvas.height / 2 : 0,
    size: 10,
    speed: 4,
    dx: 4, // direction 
    dy: -4
  }

  // create paddle 

  const paddle = {
    x: canvas ? (canvas.width / 2) - 40 : 0, // width of paddle is 80
    y: canvas ? canvas.height - 20 : 0,
    h: 10,
    w: 80,
    speed: 8,
    dx: 0
  }

  // draw ball on canvas

  const drawBall = () => {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
  }

  const drawPaddle = () => {
    if (!ctx) return false;

    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
  }

  useEffect(() => {
    const canvasElem = ballCanvasRef.current as HTMLCanvasElement;
    if (canvasElem) {
      setCanvas(() => canvasElem);
      setCtx(() => canvasElem.getContext('2d'));
    }
  }, [ ballCanvasRef ]);

  useEffect(() => {
    drawBall();
    drawPaddle();
  }, [ canvas, ctx ])
  
  return <canvas ref={ ballCanvasRef }>
  </canvas>
}

export default BallGame;
