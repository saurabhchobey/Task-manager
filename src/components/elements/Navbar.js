import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          task Book
        </Link>
        <div><button><Link to='/favor'>pending </Link></button></div>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
           create task
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
