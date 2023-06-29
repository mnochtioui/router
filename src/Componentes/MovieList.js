import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies, nameSearch, rateSearch}) => {

    const search=()=>{
        console.log(rateSearch);
        return movies.filter((f)=>{
            return (rateSearch===0?
            f.name.toLowerCase().includes(nameSearch.toLowerCase()):
            (Number(f.rating)>=(Number(rateSearch)))  && (Number(f.rating)<(Number(rateSearch)+1)) && f.name.toLowerCase().includes(nameSearch.toLowerCase()));
               
        });
    }

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {
        search().map((m, index)=>{
            return  <MovieCard chouf={m} key={index} />
             
             
        })}
            

    </div>
  )
}

export default MovieList