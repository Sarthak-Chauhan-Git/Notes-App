import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <h1 className="edu-nsw-act-cursive">Take Notes</h1>
      <div id="menu">
        <div className="login">
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
