import React from "react";
import MovieCard from "./MovieCard"

class searchMovies extends React.Component{
    constructor(){
        super()     
        this.state={
            query:" ",
            movies:[]
        }
        this.submit=this.submit.bind(this)
        this.handleChange=this.handleChange.bind(this)
}
submit() {
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${this.state.query}&page=1&include_adult=false`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            const data=response.results
            this.setState({ movies: data })
        })
        
}
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

 render(){   
    return (
<div> 
    <div className="form">    
    <label className="label" htmlFor="query">Movie Name</label>
       <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={this.state.query} onChange={this.handleChange}
                    />


        <button className="button" onClick={this.submit}>Search</button>
    </div>
    <div className="card-list">
            {this.state.movies.filter(movie => movie.poster_path).map(movie => (
             <MovieCard movie={movie} key={movie.id} />
    ))}
    </div> 
</div>  
 
    )
}
}



export default searchMovies