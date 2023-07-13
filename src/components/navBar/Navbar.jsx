import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Navbar() {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/">
                <span>
                  <FontAwesomeIcon
                    icon={icon({ name: "code" })}
                    aria-hidden={"true"}
                  />
                </span>
                <span> Ygor Carmo</span>
              </Link>
            </h1>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} arial-hidden={"true"} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} arial-hidden={"true"} />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <Link to="/" className="button">
              CTA
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
