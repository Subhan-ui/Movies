import React, { useCallback, useEffect, useState } from "react";

 function Details({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U",
    },
  };
  const fetchAPI=useCallback(async ()=> {
    setIsLoading(true);
    let datas = await fetch(`https://api.themoviedb.org/3/tv/${id}`, options);
    let parsedData = await datas.json();
    setData(parsedData);
    setIsLoading(false);
  },[])
  useEffect(() => {
    fetchAPI();
  }, []);
//   console.log(id);
  let year = data?.first_air_date?.slice(0, 4);
  let year2 = data?.last_air_date?.slice(0, 4);
  let genres = [];
  if (data.genres) {
    genres = data.genres;
  }
  let companies = [];
  if (data.production_companies) {
    companies = data.production_companies;
  }
  let countries = [];
  if (data.production_countries) {
    countries = data.production_countries;
  }
  return (
    <>
      {!isLoading && (
        <div className="bodyOfDetail">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            className="imgDetail"
          />
          <div className="info">
            <h3>{data.name}</h3>
            <p>
              <b>
                {year} to {year2}
              </b>
            </p>
            {/* <div className='genres'>
        {genres.map((dat,index)=>{
        return <p key={index}><b>{dat.name}, </b></p>
        })}</div> */}
            <p>
              <b>Total Episode: </b>
              {data.number_of_episodes}
            </p>
            {/* <p><b>Budget: </b>{data.budget}</p> */}
            <p>
              <b> Overview. </b>
              {data.overview}
            </p>
            <div className="genres">
              <b>Production Companies:-></b>
              {companies.map((company, index) => {
                return (
                  <p key={index}>
                    {" "}
                    {company.name},{"   "}
                  </p>
                );
              })}
            </div>
            <div className="genres">
              <b> Production Countries:-></b>
              {countries.map((country, index) => {
                return (
                  <p key={index}>
                    {" "}
                    {country.name},{"   "}
                  </p>
                );
              })}
            </div>
            <p>
              <b> Release Date: </b>
              {data.first_air_date}
            </p>
            <p>
              <b> Status:</b> {data.status}
            </p>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}

export default React.memo(Details);