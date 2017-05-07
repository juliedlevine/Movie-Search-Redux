import React from 'react';

// Parameters should match the connect state and the action functions
const MovieWidget = ({ typing, search, query, isFetching, results, error, details, detailedResults, back }) =>
    <div>
        <img className="film" src="film.png"></img>
        <h1 className="header">Movie Search!</h1>
        <input className="searchBox" type="text" onChange={(event) => typing(event)}></input>
        <input className="submitButton" type="submit" onClick={() => search(query)}></input>
        <p className="errorMessage">{error}</p>

        {detailedResults ?

            <div className="results details">
                <h3>{detailedResults.title}</h3>
                {detailedResults.poster_path ?
                    <img src={"http://image.tmdb.org/t/p/w185/" + detailedResults.poster_path}></img> :
                    <img alt={detailedResults.title} src={'/poster.png'}></img>}
                <p><span className="bold">Release Date:</span> {detailedResults.release_date}</p>
                <p><span className="bold">Popularity Score:</span> {detailedResults.popularity}</p>
                <p><span className="bold">Plot Synopsis:</span></p>
                <p>{detailedResults.overview}</p>
                <button className="submitButton" onClick={back}>Back to results</button>
            </div> :

            <div className="results">
            {isFetching ?
                <div className="fetching">
                    <h3>Fetching movie data...</h3>
                    <img src="gears.gif"></img>
                </div> :
                <div></div>}

            {results.slice(0, 6).map((movie, idx) =>
                <div key={movie.release_date} className="eachMovie">
                    {movie.poster_path ?
                        <img onClick={()=> details(idx)} src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}></img> :
                        <img onClick={()=> details(idx)} alt={movie.title} src={'/poster.png'}></img>}
                </div>)}
            </div>}

    </div>


export default MovieWidget;
