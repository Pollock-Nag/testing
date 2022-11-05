import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', { movieName: movieName, movieReview: movieReview }).then(alert("successful")).then(window.location.href = 'http://localhost:3000');

  };
  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="form">

        <label>Movie name</label>
        <input type="text" name="moviename" placeholder="Movie name" onChange={(e) => {
          setMovieName(e.target.value)
        }} />

        <label>Review</label>
        <input type="text" name="review" placeholder="Review" onChange={(e) => { setMovieReview(e.target.value) }} />
        <button onClick={submitReview}>Submit</button>

      </div>
    </div>
  );
}

export default App;
