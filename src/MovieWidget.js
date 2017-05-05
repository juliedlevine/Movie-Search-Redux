import React from 'react';

export default class MovieWidget extends React.Component {
    render() {
        return (
            <div>
                <img className="film" src="film.png"></img>
                <h1 className="header">Movie Search!</h1>
                <input className="searchBox" type="text" onChange={(event) => this.props.typing(event)}></input>
                <input className="submitButton" type="submit" onClick={() => this.props.search(this.props.query)}></input>

                <p className="errorMessage">{this.props.error}</p>

                <div className="results">
                {this.props.isFetching ?
                    <div className="fetching">
                        <h3>Fetching movie data...</h3>
                        <img src="gears.gif"></img>
                    </div> :
                    <div></div>}

                {this.props.results.slice(0, 6).map((movie, idx) =>
                    <div key={movie.release_date} className="eachMovie">
                        <div className="movieText">
                            <p key={idx}>{movie.title}</p>
                            <p key={movie.release_date}>Release Date:<br/>{movie.release_date}</p>
                        </div>
                        {movie.poster_path ? <img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}></img> : <img alt={movie.title} src={'/poster.png'}></img>}
                    </div>)}
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}
