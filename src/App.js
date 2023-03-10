import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useState, useEffect} from "react"

function App() {
  // API Key
  const apiKey = "392f7590"
  // declare our state
  const [movie, setMovie] = useState(null)
  // function to get movie
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    // conver the response into a javascript object
    const data = await response.json()
    // update the movie state
    setMovie(data)
  }
  console.log("log in the body of the component")
  useEffect(()=> {
    getMovie("Titanic")
    console.log("log in the use effect")
  }, [])
  return (

    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
