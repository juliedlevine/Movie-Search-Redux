// All dispatched types in this file should match what's in the reducer
import $ from 'jquery';

// Action for when search button is clicked
export function search(query) {

    // Do this return function syntax when it's an async action
    return function(dispatch) {

        // Action sent before ajax results come back
        dispatch({ type: 'fetching_data' });

        // Make the ajax request
        $.ajax({
            url:'https://api.themoviedb.org/3/search/movie?api_key=a1d16adc5c98583172694614c9271635&query=' + query
        })

        // When the results come back, wait a second and then dispatch the data to the action
        .then(data =>
            setTimeout(function() {
                dispatch({
                    type: 'search',
                    payload: data.results
                })
            }, 1000))

        // If there's an error with the ajax request dispatch the error
        .catch(resp => {
            let error = resp && resp.responseJSON && resp.responseJSON.message || 'Something went wrong!';
            dispatch({
                type: 'search_error',
                error: error

            })
        })
    }
};

// Action for every change event on the search box
export function typing(event) {
    let change = event.target.value
    return {
        type: 'typing',
        change: change
    }
}

// Action for when user clicks image on results page
export function details(idx) {
    return {
        type: 'details',
        index: idx
    }
}

// Actino for when user clicks back button on the details page
export function back() {
    return { type: 'back' }
}
