import { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    setMatrix(document.getElementById("matrix"));
  }, []);

  if (matrix != null) {
    let canvas = document.querySelector("canvas"),
      // Initialising the canvas
      ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    let letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    let fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    let drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#FFF";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    // Loop the animation
    setInterval(draw, 33);
  }
  return (
    <>
      <div className="homeContainer">
        <div className="text">
          <h1 id="title">Ygor Carmo</h1>
        </div>
      </div>
      <canvas id="matrix" />
    </>
  );
}

export default Home;
