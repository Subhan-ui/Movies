import React, { useEffect, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Popular({handleDetail}) {
    const [data,setData]=useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU3ZGNkMzNhYWYwZjVhNDAxMzQwMzMyNDQyMGQwZSIsInN1YiI6IjY0YWZjNjBiOGEwZTliMDBlMzc2OTcyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8BNHS-1ZrsChBsg2qElbUHw6XtfwlGtx4lhM48uO9U'
            }
          };

          async function getAPI(){
            let datas = await fetch('https://api.themoviedb.org/3/movie/popular', options)
            let parsedData = await datas.json();
            setData(parsedData.results)
          }
          getAPI();
    })

  return (
    <div className='Cards'>
    {data.map((dat,index)=>{
       return <div key={index} className="flip-card">
    <div className="flip-card-inner">
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${dat.poster_path})`,backgroundSize:'cover'}} className="flip-card-front">
            
        </div>
        <div className="flip-card-back">
            <p className="title">IMDB {dat.vote_average}</p>
            <p className='genre'>Action</p>
            <p className='genre'>Adventure</p>
            <Link onClick={()=>handleDetail(dat.id)} to='/detail' className="button"> Details</Link>
        </div>
    </div>
    <p className='movieTitle'>{dat.title}</p>
</div>

})}
    </div>
  )
}
