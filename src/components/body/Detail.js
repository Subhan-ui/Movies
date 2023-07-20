import React, { useEffect, useState } from 'react'
import './Detail.css'
import img from './movie.png';

export default function Detail({id}) {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U'
            }
          };
          async function fetchMyAPI() {
            let datas = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            let parsedData = await datas.json();
            setData(parsedData)
          }
          fetchMyAPI();
          
    },[id])
    console.log(id)
    let year = data?.release_date?.slice(0,4)
    let genres = [];
    if(data.genres){
        genres=data.genres
    }
    let companies=[];
    if(data.production_companies){
        companies=data.production_companies
    }
    let countries = [];
    if (data.production_countries) {
        countries = data.production_countries
    }

    return (
    <>
{data? (<div className="bodyOfDetail">
    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" className='imgDetail'/> 
    <div className="info">
    <h3>{data.original_title}</h3>
    <p><b> {year}</b></p>
    <div className='genres'>
    {genres.map((dat,index)=>{
    return <p key={index}><b>{dat.name}, </b></p>
    })}</div>
    <p><b>Budget: </b>{data.budget}</p>
    <p><b> Overview. </b>{data.overview}</p>
    <div className='genres'>
    <b>Production Companies:-></b>
        {companies.map((company,index)=>{
            return  <p key={index}> {company.name},{"   "}</p>
        })}
    </div>
    <div className='genres'>
    <b> Production Countries:-></b>
        {countries.map((country,index)=>{
            return  <p key={index}> {country.name},{"   "}</p>
        })}
    </div>
    <p><b> Release Date: </b>{data.release_date}</p>
    <p><b> Status:</b> {data.status}</p>
    </div>
    </div>)
    :<p>Loading.....</p>}
    </>
  )

}
