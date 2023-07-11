import React, { useState } from "react";
import "../css/style.css";
import { useDispatch } from "react-redux";
import { getSearchData } from "../features/getData";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getSearchData(searchData));
    navigate("/alldata");
  };
  return (
    <>
      <div className="section d-flex justify-content-center align-items-center">
        <div className="container w-50 input-group mb-3 input-group-lg">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search Your Favrout Recipes.."
            aria-label="Search Your Favrout Recipes.."
            aria-describedby="button-addon2"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="btn btn-primary w-25 form-control-lg"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
