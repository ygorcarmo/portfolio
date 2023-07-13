import { useEffect, useRef, lazy } from "react";
import "./style.css";
import Typed from "typed.js";
const Matrix = lazy(() => import("./matrix"));

function Home() {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Developer.",
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

  return (
    <>
      <div className="homeContainer">
        <Matrix />
        <div className="hero-text">
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
