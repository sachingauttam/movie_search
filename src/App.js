import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  };
  
  const getMovie = (e) => {
    e.preventDefault();
    
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=db565e9c`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
      
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" >
            Movie Adda
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {movie?.map((value, index) => {
            return (
              <>
              
              <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={value.Poster}
                      className="img-fluid rounded-start"
                      alt="Poster"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{value.Title}</h5>
                      <p className="card-text">
                        YEAR: {value.Year}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              </>
            );
          })}
        </div>
      </div>
      <div>
      <img src="https://ogimgs.apkcombo.org/eyJsb2dvIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2pjNUdZQ3V6S0F4MjZGN002T1Z4UlpzYkYtUDFHa3F6dFBNcEEwOWdvX0FXNTN6ejEwZGFnUzVQYms5blVQaXByZz1zMjAwIiwidGl0bGUiOiAiTW92aWVzIEFkZGEgQVBLIn0=/movies-adda-apk" alt="poster" style={{width:"100vw"}} />
      </div>
    </>
  );
}

export default App;
