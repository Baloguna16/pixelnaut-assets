import { useRef, useState, useEffect } from 'react';

import defaults from "./defaults/pixelnaut-offsets.json";

const composeAttributes = traits => {
  let attributes = defaults;
  attributes.hat.src = `assets/hat/hat-${traits.hat}.png`;
  attributes.body.src = `assets/body/body-${traits.body}.png`;
  attributes.eyes.src = `assets/eyes/eyes-${traits.eyes}.png`;
  attributes.mouth.src = `assets/mouth/mouth-${traits.mouth}.png`;
  attributes.accessory.src = `assets/accessory/accessory-${traits.accessory}.png`;
  attributes.background.src = `assets/background/background-${traits.background}.png`;
  return attributes;
};


// const Canvas = (props) => {
const Canvas = ({
  trait_hat,
  trait_body,
  trait_eyes,
  trait_mouth,
  trait_background,
  trait_accessory
}) => {

  const [hat, setHat] = useState(trait_hat);
  const [body, setBody] = useState(trait_body);
  const [eyes, setEyes] = useState(trait_eyes);
  const [mouth, setMouth] = useState(trait_mouth);
  const [accessory, setAccessory] = useState(trait_accessory);
  const [background, setBackground] = useState(trait_background);

  const canvasRef = useRef();

  const attrs = composeAttributes({
    hat,
    body,
    eyes,
    mouth,
    accessory,
    background
  });

  const draw = (ctx, attrs, frameCount) => {

    const scale = ctx.canvas.width / 40;

    const bgSprite = new Image();
    const hatSprite = new Image();
    const bodySprite = new Image();
    const eyesSprite = new Image();
    const mouthSprite = new Image();
    const accessorySprite = new Image();

    bgSprite.src = attrs.background.src;
    hatSprite.src = attrs.hat.src;
    bodySprite.src = attrs.body.src;
    eyesSprite.src = attrs.eyes.src;
    mouthSprite.src = attrs.mouth.src;
    accessorySprite.src = attrs.accessory.src;

    // if canvas starts stacking images uncomment below:
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      bgSprite,
      attrs.background.width * frameCount,
      0,
      attrs.background.width,
      attrs.background.height,
      attrs.background.offsetX * scale,
      attrs.background.offsetY * scale,
      attrs.background.width * scale,
      attrs.background.height * scale
    );

    ctx.drawImage(
      bodySprite,
      attrs.body.width * frameCount,
      0,
      attrs.body.width,
      attrs.body.height,
      attrs.body.offsetX * scale,
      attrs.body.offsetY * scale,
      attrs.body.width * scale,
      attrs.body.height * scale
    );

    ctx.drawImage(
      hatSprite,
      attrs.hat.width * frameCount,
      0,
      attrs.hat.width,
      attrs.hat.height,
      attrs.hat.offsetX * scale,
      attrs.hat.offsetY * scale,
      attrs.hat.width * scale,
      attrs.hat.height * scale
    );

    ctx.drawImage(
      eyesSprite,
      attrs.eyes.width * frameCount,
      0,
      attrs.eyes.width,
      attrs.eyes.height,
      attrs.eyes.offsetX * scale,
      attrs.eyes.offsetY * scale,
      attrs.eyes.width * scale,
      attrs.eyes.height * scale
    );

    ctx.drawImage(
      mouthSprite,
      attrs.mouth.width * frameCount,
      0,
      attrs.mouth.width,
      attrs.mouth.height,
      attrs.mouth.offsetX * scale,
      attrs.mouth.offsetY * scale,
      attrs.mouth.width * scale,
      attrs.mouth.height * scale
    );

    ctx.drawImage(
      accessorySprite,
      attrs.accessory.width * frameCount,
      0,
      attrs.accessory.width,
      attrs.accessory.height,
      attrs.accessory.offsetX * scale,
      attrs.accessory.offsetY * scale,
      attrs.accessory.width * scale,
      attrs.accessory.height * scale
    );
  }

  useEffect(() => {

    let animationFrameCount = 0;
    let animationFrameId;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = () => {
      setTimeout(() => {
        animationFrameCount++;
        draw(context, attrs, animationFrameCount % 10); // keeps frameCount between 0 and 10.

        animationFrameId = window.requestAnimationFrame(render);
      }, 400); // use this to change the pace of the gif
    }

    render();

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [draw, attrs])

  // <canvas> auto-resizes to fit the parent div
  return (
    <canvas ref={canvasRef} width='400' height='400'></canvas>
  );
}

export default Canvas;
