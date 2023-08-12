import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import UseHttp from "../../hooks/use-http";
import RealCard from "./RealCard";

function SearchComponent(props) {
  // const [search, setSearch] = useState([]);
  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U",
    //   },
    // };
    // async function fetchAPI() {
    //   let datas = await fetch(
    //     `https://api.themoviedb.org/3/search/movie?query=${joined}`,
    //     options
    //   );
    //   let parsedData = await datas.json();
    //   setSearch(parsedData.results);
    // }
    fetchMyAPI({url: `https://api.themoviedb.org/3/search/movie?query=${props.joined}`});
    // setId('12345');
  }, [props.joined]);
  const {data,isLoading,fetchMyAPI}= UseHttp()
  

  return (
    <div className="Cards">
      {data.map((dat) => {
        return (
          <RealCard
            key={dat.id}
            title={dat.title}
            id={dat.id}
            poster={dat.poster_path}
            handleDetail={props.handleDetail}
            link="/detail"
            IMDB={dat.vote_average}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}

export default React.memo(SearchComponent);
