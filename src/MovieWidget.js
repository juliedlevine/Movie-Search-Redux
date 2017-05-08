// eslint-disable-next-line
import React from 'react';

export default class MovieWidget extends React.Component {

    componentDidMount() {
        this.props.loadInitial('Apollo 13');
    }

    render() {
        return (
            <div>
                <img className="film" src="film.png"></img>
                <h1 className="header">Movie Search!</h1>
                <input className="searchBox" type="text" onChange={(event) => this.props.typing(event)}></input>
                <input className="submitButton" type="submit" onClick={() => this.props.search(this.props.query)}></input>
                <p className="errorMessage">{this.props.error}</p>

                {this.props.detailedResults ?

                    <div className="results details">
                    <h3>{this.props.detailedResults.title}</h3>
                    {this.props.detailedResults.poster_path ?
                        <img alt={this.props.detailedResults.title} src={"http://image.tmdb.org/t/p/w185/" + this.props.detailedResults.poster_path}></img> :
                        <img alt={this.props.detailedResults.title} src={'/poster.png'}></img>}
                    <p><span className="bold">Release Date:</span> {this.props.detailedResults.release_date}</p>
                    <p><span className="bold">Popularity Score:</span> {this.props.detailedResults.popularity}</p>
                    <p><span className="bold">Plot Synopsis:</span></p>
                    <p>{this.props.detailedResults.overview}</p>
                    <button className="submitButton" onClick={this.props.back}>Back to results</button>
                </div> :

                <div className="results">
                {this.props.isFetching ?
                    <div className="fetching">
                        <h3>Fetching movie data...</h3>
                        <img alt="gears gif" src="gears.gif"></img>
                    </div> :
                    <div></div>}

                {this.props.results.slice(0, 6).map((movie, idx) =>
                    <div className="eachMovie">
                        {movie.poster_path ?
                        <img onClick={()=> this.props.details(idx)}src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}></img> :
                        <img onClick={()=> this.props.details(idx)}src={'/poster.png'}></img>}
                     </div>)}
                 </div>}

             </div>
        )
    }
}
