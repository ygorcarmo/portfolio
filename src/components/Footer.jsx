import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <h4>Ygor Carmo &middot; Developer</h4>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ygor-c-bb1bb9125"
              target="_blank"
            >
              <span class="fab fa-linkedin" aria-hidden="true"></span>
              <span class="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/ygorcarmo" target="_blank">
              <span class="fab fa-github-square" aria-hidden="true"></span>
              <span class="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="mailto:ygor.carmo@gmail.com">
              <span class="fas fa-envelope" aria-hidden="true"></span>
              <span class="sr-only">Email</span>
            </a>
          </li>
        </ul>
        <p>
          <small>
            &copy; {new Date().getFullYear()} Ygor Carmo. All rights reserved.
          </small>
        </p>
      </footer>
    );
  }
}
