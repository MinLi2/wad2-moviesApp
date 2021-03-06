import React from "react";
import { Link } from "react-router-dom";
import "./topr.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopRatedCard = ({movie}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <div className="card-p">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        </div>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-over">
        <h2>overview</h2> 
        <p>{movie.overview}</p>
    </div>
        <div className="card-footer">
         <button type="button" className="btn w-100 btn-primary">
          <Link
                className="btn w-100 btn-primary"
                to={`/movies/ratemovie/${movie.id}`}
              >
                Rate Movie
              </Link>
          
          </button> 
    </div>
      </div>
    </div>
  );
};

export default TopRatedCard;

 