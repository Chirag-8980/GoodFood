import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../features/getData";
import { useParams } from "react-router-dom";

const AllData = () => {
  
  const data = useSelector((state) => {
    return state.app.Data.hits;
  });
  const { Loading } = useSelector((state) => {
    return state.app;
  });
  console.log(data);
  return (
    <>
      <section className="articles mt-5 mb-5">
        {
          // Condition
          Loading == true ? (
            // Loader Code
            <div className="center">
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : !data.length == 0 ? (
            data.map((item, i) => {
              return (
                <article key={i}>
                  <div className="article-wrapper">
                    <figure>
                      <img src={item.recipe.image} alt="" />
                    </figure>
                    <div className="article-body">
                      <h2>{item.recipe.label.slice(0, 15)}...</h2>
                      <p className="d-flex flex-wrap">
                        {item.recipe.healthLabels
                          .map((healthLabels) => {
                            return (
                              <p className=" border p-1 m-1">{healthLabels}</p>
                            );
                          })
                          .slice(0, 7)}
                      </p>
                      <a href={item.recipe.url} className="read-more">
                        Read more{" "}
                        <span className="sr-only">
                          about this is some title
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <h1 className="text-center text-light">No Data Awailable </h1>
          )
        }
      </section>
    </>
  );
};

export default AllData;
