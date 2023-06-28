import { useState, useEffect, useRef } from "react";
import "./style.css";
import Typed from "typed.js";

function Home() {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    setMatrix(document.getElementById("matrix"));
    const options = {
      strings: [
        "Full Stack Software Developer.",
        "DevOps Engineer.",
        "Tech Enthusiastic.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
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
        <canvas id="matrix" />
        <div className="text">
          <h1 className="title">Ygor Carmo</h1>
          <h2 className="title">
            I&apos;m <span style={{ whiteSpace: "pre" }} ref={el} />
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
