import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link href="#">
              <span className="fas fa-code" aria-hidden="true">
                {" "}
              </span>
              <span>Ygor Carmo</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="fab fa-github" aria-hidden="true"></span>
            <span className="sr-only">GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="button">
            CTA
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
