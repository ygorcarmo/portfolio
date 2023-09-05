import adoptMe from "../assets/img/adopt-me.png";
import arduino from "../assets/img/arduino-logo.png";

function Projects() {
  return (
    <div class="section-dkblue">
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <article>
          <div class="text">
            <h4>Adopt Me</h4>
            <p class="blackbox">
              This is a sample of a pet adoption website linked to the{" "}
              <a
                href="https://frontendmasters.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Masters
              </a>{" "}
              API. You can find the &nbsp; rel="noopener noreferrer"
              <a href="https://adopt-me.ygor.tech/" target="_blank">
                live app here
              </a>
              , and{" "}
              <a
                href="https://github.com/ygorcarmo/adopt-me/tree/main"
                rel="noopener noreferrer"
                target="_blank"
              >
                github repo
              </a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>React</li>
              <li>React Query</li>
              <li>Vite</li>
            </ul>
          </div>
          <img src={adoptMe} alt="Screenshot of the Adopt Me website" />
        </article>
        <article class="reverse">
          <div class="text">
            <h4>Arduino 101</h4>
            <p class="blackbox">
              This project is my documented journey towards learning Arduino.
              You can find the repo at &nbsp;
              <a
                href="https://github.com/ygorcarmo/Arduino-101/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>Arduino</li>
            </ul>
          </div>
          <img src={arduino} alt="Arduino Logo." />
        </article>
        <article>
          <div class="text">
            <h4>Grid Flexbox v2</h4>
            <p class="blackbox">
              This is a vite preact webapp containing my learnings form the CSS
              Grid & Flexbox for Responsive Layouts tought by Final Personal
              Page for Grid FlexBox v2 from{" "}
              <a
                href="https://frontendmasters.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Masters
              </a>
              . You can find the live website{" "}
              <a
                href="https://grid-flex.ygor.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              , and the code at{" "}
              <a
                href="https://github.com/ygorcarmo/grid-flexbox-v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
              <li>Vite</li>
              <li>Preact</li>
            </ul>
          </div>
          <img
            src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
            alt="Screenshot of the Wall of Wonder."
          />
        </article>
      </section>
    </div>
  );
}

export default Projects;
