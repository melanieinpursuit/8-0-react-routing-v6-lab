import { Link } from "react-router-dom"
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
          <Link to="/">
        <h1>
            Northwest <span>Animal Hospital</span>
        </h1>
          </Link>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
