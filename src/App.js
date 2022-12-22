import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useState} from "react"

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
    const data = await response.jscon()
    // update the movie state
    setMovie(data)
  }

  return (

    <div className="App">
      <Form/>
      <MovieDisplay/>
    </div>
  );
}

export default App;
