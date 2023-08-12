import React, { useCallback, useEffect, useState } from "react";
import "./Card.css";
import RealCard from "./RealCard";
import UseHttp from "../../hooks/use-http";

export default function Card({ handleDetail }) {
  const { data, isLoading, fetchMyAPI } = UseHttp();
  useEffect(() => {
    fetchMyAPI({
      url: `https://api.themoviedb.org/3/movie/now_playing`,
    });
  }, []);

  return (
    <>
      <div className="Cards">
        {!isLoading &&
          data.map((dat) => {
            return (
              <RealCard
                key={dat.id}
                title={dat.title}
                id={dat.id}
                poster={dat.poster_path}
                handleDetail={handleDetail}
                link="/detail"
                IMDB={dat.vote_average}
                isLoading={isLoading}
              />
            );
          })}
      </div>
    </>
  );
}
