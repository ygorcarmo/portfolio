function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span class="fas fa-code" aria-hidden="true">
                {" "}
              </span>
              <span>Ygor Carmo</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <a href="about.html">About</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ygor-c-bb1bb9125">
            <span class="fab fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ygorcarmo">
            <span class="fab fa-github" aria-hidden="true"></span>
            <span class="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
