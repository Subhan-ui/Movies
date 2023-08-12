import React, { useEffect, useState } from "react";
import "./Detail.css";
import img from "./movie.png";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Swiper,SwiperSlide} from "swiper/react";
import EffectCoverflow from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'


export default function Detail({ id }) {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading,setIsLoading]= useState(false)
  const [isLoading1,setIsLoading1]= useState(false)
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U",
      },
    };
    
    async function fetchMyAPI() {
      setIsLoading(true)
      let datas = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      let parsedData = await datas.json();
      setData(parsedData);
      setIsLoading(false)

    }
    fetchMyAPI();
    async function fetchMyAPI1() {
      setIsLoading1(true)
      let datas = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        options
      );
      let parsedData = await datas.json();
      setImages(parsedData.backdrops);
      setIsLoading1(false);
    }
    fetchMyAPI1();
  }, [id]);

  // console.log(images)
  let year = data?.release_date?.slice(0, 4);
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
        <div className="bodyOfDetail">
      {!isLoading1 && 
            <Swiper centeredSlides slidesPerView='auto' effect="coverflow" loop coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }} modules={{EffectCoverflow}}>
                <div className="swiper-wrapper">
                {images.map((image,i)=>{
                    return <SwiperSlide key={i} style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${image.file_path})`}}/>
                })}</div>
                <div className="swiper-pagination"></div>
            </Swiper>}{
              isLoading1&&<div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            }
            {!isLoading &&
          <div className="info">
            <h3>{data.original_title}</h3>
            <p>
              <b> {year}</b>
            </p>
            <div className="genres">
              {genres.map((dat, index) => {
                return (
                  <p key={index}>
                    <b>{dat.name}, </b>
                  </p>
                );
              })}
            </div>
            <p>
              <b>Budget: </b>
              {data.budget}
            </p>
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
              {data.release_date}
            </p>
            <p>
              <b> Status:</b> {data.status}
            </p>
          </div>
      }
        </div>
      {
            isLoading && <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
      }
    </>
       
       
       
  );
}
