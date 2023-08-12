import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function RealCard(props) {
    const {isLoading}= props;
  return (
    // <div className='Cards'><>
    <>
      {!isLoading?(<div key={props.id} className="flip-card">
                <div className="flip-card-inner">
                  <div
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.poster})`,
                      backgroundSize: "100% 100%",
                    }}
                    className="flip-card-front"
                  ></div>
                  <div className="flip-card-back">
                    <p className="title">IMDB {props.IMDB}</p>
                    <p className="genre">Action</p>
                    <p className="genre">Adventure</p>
                    <Link
                      onClick={() => props.handleDetail(props.id)}
                      to={props.link}
                      className="button"
                    >
                      {" "}
                      Details
                    </Link>
                  </div>
                </div>
                <p className="movieTitle">{props.title}</p>
              </div>):(
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              </>
    // </div>
  )
}

export default RealCard
