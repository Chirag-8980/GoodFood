import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchData } from "../features/getData";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchData, setSearhData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getSearchData(searchData));
    navigate(`/alldata`);
    setSearhData("");
  };
  const handleChange = (e) => {
    setSearhData(e.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-t">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            <div className="glitch-wrapper">
              <div className="glitch" data-glitch="GoodFood">
                GoodFood
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                ></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#"></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchData}
                name="searchData"
                onChange={handleChange}
              />
              <button
                className="btn btn-warning"
                type="submit"
                onClick={handleClick}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
