import Projects from "./Projects";

function Home() {
  return (
    <>
      <section id="intro">
        <p class="name">
          Hi, my name is <span>Ygor Carmo.</span>
        </p>
        <h2>I am Currently Developing Full Stack Applications.</h2>
        <p>
          I'm a developer specializing in JS, .NET, Docker, React, SQL Server,
          Nginx, and AWS.
        </p>
        <p>
          Currently creating content for{" "}
          <a href="https://lookprint.com.au" target="_blank">
            Look Print
          </a>
        </p>
      </section>
      <div class="gradient"></div>
      <Projects />
      <div class="gradient"></div>
      <div class="section-plum">
        <section id="contact">
          <h3>Contact me</h3>
          <p>I'm always interested in hearing about web and app development</p>
          <p>
            <a class="button" href="mailto:ygor.carmo@gmail.com">
              Email me
            </a>
          </p>
        </section>
      </div>
      <div class="gradient"></div>
    </>
  );
}

export default Home;
