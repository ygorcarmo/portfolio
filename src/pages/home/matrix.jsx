import { useState, useEffect } from "react";

export default function Matrix() {
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    setMatrix(document.getElementById("Matrix"));
  }, []);

  if (matrix != null) {
    const canvas = document.querySelector("canvas");
    // Initialising the canvas
    const context = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Setting up the draw function
    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, .1)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = fontSize + "px monospace";
      context.fillStyle = "#FFF";

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );

        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Loop the animation
    setInterval(draw, 33);
  }
  return (
    <>
      <canvas id="Matrix" />
    </>
  );
}
