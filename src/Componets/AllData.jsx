import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <section class="articles mt-5 mb-5">
        {
          // Condition
          Loading == true ? (
            // Loader Code
            <div className="center">
              <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            data.map((item, i) => {
              return (
                <article key={i}>
                  <div class="article-wrapper">
                    <figure>
                      <img src={item.recipe.image} alt="" />
                    </figure>
                    <div class="article-body">
                      <h2>{item.recipe.label}</h2>
                      <p>
                        {item.recipe.digest.map((digest)=>{ return digest.label}).join(" • ")}
                      </p>
                      <a href={item.recipe.url} class="read-more">
                        Read more{" "}
                        <span class="sr-only">about this is some title</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
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
          )
        }
      </section>
    </>
  );
};

export default AllData;
