import './App.css';
import MovieList from './Componentes/MovieList';
import NavBarApp from './Componentes/NavBarApp';
import React ,{ useState } from 'react';
import {MovieData} from './Componentes/MovieData';
import AddMovie from './Componentes/AddMovie';
import { Route, Routes } from "react-router-dom";
import Details from './Componentes/Details';


function App() {
  const [movie, setMovie]=useState(MovieData);
  const [name, setName]=useState("");
  const [rate, setRate]=useState(0);


  return (
    
    <div className="App">
      
      
      
    <Routes>
      <Route exact path="/" 
      element={[
        <NavBarApp  nameSearch={name} setNameSearch={setName}  rateSearch={rate} setRateSearch={setRate}   />,
        <MovieList movies={movie} nameSearch={name} rateSearch={rate} />,
        <AddMovie movies={movie} setMovies={setMovie} />
      ]} ></Route>
      <Route exact path="/details/:name" 
      element={<Details movies={movie}  />}
      ></Route>
    </Routes>
    </div>
    
  );
}

export default App;
