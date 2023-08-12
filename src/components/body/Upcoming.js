import React, { useEffect, useState } from "react";
import RealCard from "./RealCard";
import UseHttp from "../../hooks/use-http";

export default function Upcoming({ handleDetail }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, fetchMyAPI } = UseHttp();

  useEffect(() => {
    fetchMyAPI({
      url: `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
    });
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className="Cards">
        {data.map((dat) => {
          return (
            <RealCard
              key={dat.id}
              title={dat.title}
              id={dat.id}
              poster={dat.poster_path}
              handleDetail={handleDetail}
              link="/detail"
              isLoading={isLoading}
              IMDB={dat.vote_average}
            />
          );
        })}
      </div>

      <div className="buttons">
        <button
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
          type="button"
          className="btn btn-outline-light"
        >
          Previous
        </button>
        <p style={{ color: "white" }}>{page}</p>
        <button
          onClick={handleNextPage}
          type="button"
          className="btn btn-outline-light"
        >
          Next
        </button>
      </div>
    </>
  );
}
