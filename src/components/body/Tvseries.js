import React, { useEffect, useState } from "react";
import RealCard from "./RealCard";
import UseHttp from "../../hooks/use-http";

export default function Tvseries({ handleDetail }) {
  useEffect(() => {
    fetchAPI({ url: "https://api.themoviedb.org/3/tv/airing_today" });
    fetchAPI2({ url: "https://api.themoviedb.org/3/tv/on_the_air" });
    fetchAPI3({ url: "https://api.themoviedb.org/3/tv/popular" });
    fetchAPI4({ url: "https://api.themoviedb.org/3/tv/top_rated" });
  }, []);

  const { data, isLoading, fetchMyAPI: fetchAPI } = UseHttp();
  const { data: data1, fetchMyAPI: fetchAPI2 } = UseHttp();
  const { data: data2, fetchMyAPI: fetchAPI3 } = UseHttp();
  const { data: data3, fetchMyAPI: fetchAPI4 } = UseHttp();

  return (
    <>
      <div>
        <div className="Cards">
          <h5
            style={{
              color: "white",
              margin: "0",
              height: "12px",
              display: "inline",
            }}
          >
            Airing Today
          </h5>
          {data.map((dat) => {
            return (
              <RealCard
                key={dat.id}
                title={dat.name}
                id={dat.id}
                poster={dat.poster_path}
                handleDetail={handleDetail}
                link="/detail2"
                isLoading={isLoading}
                IMDB={dat.vote_average}
              />
            );
          })}
        </div>

        <div className="Cards">
          <h5
            style={{
              color: "white",
              margin: "0",
              height: "12px",
              display: "inline",
            }}
          >
            On Air
          </h5>
          {data1.map((dat) => {
            return (
              <RealCard
                key={dat.id}
                title={dat.name}
                id={dat.id}
                poster={dat.poster_path}
                handleDetail={handleDetail}
                link="/detail2"
                isLoading={isLoading}
                IMDB={dat.vote_average}
              />
            );
          })}
        </div>
        <div className="Cards">
          <h5
            style={{
              color: "white",
              margin: "0",
              height: "12px",
              display: "inline",
            }}
          >
            Popular
          </h5>
          {data2.map((dat) => {
            return (
              <RealCard
                key={dat.id}
                title={dat.name}
                id={dat.id}
                poster={dat.poster_path}
                handleDetail={handleDetail}
                link="/detail2"
                isLoading={isLoading}
                IMDB={dat.vote_average}
              />
            );
          })}
        </div>
        <div className="Cards">
          <h5
            style={{
              color: "white",
              margin: "0",
              height: "12px",
              display: "inline",
            }}
          >
            Top Rated
          </h5>
          {data3.map((dat) => {
            return (
              <RealCard
                key={dat.id}
                title={dat.name}
                id={dat.id}
                poster={dat.poster_path}
                handleDetail={handleDetail}
                link="/detail2"
                isLoading={isLoading}
                IMDB={dat.vote_average}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
