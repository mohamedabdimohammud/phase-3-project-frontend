import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./Home";
import { Navbar } from "react-bootstrap";

function Navbar() {
return (
<div>
<nav className="navbar bg-dark">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarTogglerDemo01"
aria-controls="navbarTogglerDemo01"
aria-expanded="false"
aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
<Link className="navbar-brand" to="/">
Dashboard
</Link>
<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
<li className="nav-item active">
<Link className="nav-link" to="/">
Home <span className="sr-only">(current)</span>
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/signin">
Sign In
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/signup">
Sign Up
</Link>
</li>
</ul>
<form className="form-inline my-2 my-lg-0">
<input
className="form-control mr-sm-2"
type="search"
placeholder="Search"
aria-label="Search"/>
<button
className="btn btn-outline-success my-2 my-sm-0"
type="submit">
Search
</button>
</form>
</div>
</nav>
</nav>
<Homepage />
</div>
);
}

export default Navbar;