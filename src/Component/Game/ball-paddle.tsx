import { useEffect, useRef, useState } from "react";
import styles from './ball-paddle.module.scss'

interface Brick {
  w: number;
  h: number;
  padding: number;
  offsetX: number;
  offsetY: number;
  visible: boolean;
  x: number;
  y: number;
}

const BallGame = () => {
  const ballCanvasRef         = useRef<HTMLCanvasElement | null>(null);
  const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null);
  const [ ctx, setCtx ]       = useState<CanvasRenderingContext2D | null>(null);
  
  let score = 0;

  const brickRowCount    = 9;
  const brickColumnCount = 5

  // create a ball props
  const ball = {
    x: canvas ? canvas.width / 2 : 0,
    y: canvas ? canvas.height / 2 : 0,
    size: 10,
    speed: 4,
    dx: 4, // direction 
    dy: -4
  }

  // create paddle props

  const paddle = {
    x: canvas ? (canvas.width / 2) - 40 : 0, // width of paddle is 80
    y: canvas ? canvas.height - 20 : 0,
    h: 10,
    w: 80,
    speed: 8,
    dx: 0
  }

  const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
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

  // draw paddle on canvas
  const drawPaddle = () => {
    if (!ctx) return false;

    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
  }

  const drawScore = () => {
    if (!ctx || !canvas) return;

    ctx.font = '20px Arial';
    ctx.fillText(`Score ${ score }`, canvas.width - 120, 30);
  }

  const drawBricks = () => {
    if (!ctx || !canvas) return
    // set positioning for each brick
    const bricks: Brick[][] = [];
    for (let i = 0; i < brickRowCount; i++) {
      bricks[i] = [];

      for(let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;

        bricks[i][j] = { x, y, ...brickInfo }
      }

      // draw the brick

      bricks.forEach(brickCol => {
        brickCol.forEach(brick => {
          ctx.beginPath();
          ctx.rect(brick.x, brick.y, brick.w, brick.h);
          ctx.fillStyle = brick.visible ? "#0095dd" : 'transparent';
          ctx.fill();
          ctx.closePath();
        })
      })

    }
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
    drawScore();
    drawBricks();
  }, [ canvas, ctx ])
  
  return <canvas className={ styles['ball-game'] } width={ '800px' }  height={ '600px' } ref={ ballCanvasRef }>
  </canvas>
}

export default BallGame;
