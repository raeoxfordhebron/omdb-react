// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const MovieDisplay = ({movie}) => {
    const loaded = () => {
     return <>
    <h1>{movie?.Title}</h1>
    <h2>{movie?.Genre}</h2>
    <img src={movie?.Poster} alt={movie?.Title}/>
    <h2>{movie?.Year}</h2>
    </>}
    const loading = () => <h1>No Movie to Display</h1>
    // expression ? true : false
    return movie ? loaded() : loading()
};
  
  // We must export the component to use it in other files
  export default MovieDisplay;