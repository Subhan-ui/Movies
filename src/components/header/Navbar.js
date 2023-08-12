import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleChange = props.handleChange;

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MOVIES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link" aria-current="page" to="/">
                  Now Playing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/popular">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/top">
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/upcoming" tabIndex="-1">
                  Upcoming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/tvseries" tabIndex="-1">
                  TV Series
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              value={props.text}
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link
              to="/search"
              onClick={props.handleClick}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
}
