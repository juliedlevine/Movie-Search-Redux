import $ from 'jquery';

export function search(query) {
    console.log('Query: ' + query);
    return function(dispatch) {

        dispatch({ type: 'fetching_data' });

        $.ajax({
            url:'https://api.themoviedb.org/3/search/movie?api_key=a1d16adc5c98583172694614c9271635&query=' + query
        })
        .then(data =>
            setTimeout(function() {
                dispatch({
                    type: 'search',
                    payload: data
                })
            }, 1000))

        .catch(resp => {
            let error = resp && resp.responseJSON && resp.responseJSON.message || 'Something went wrong!';
            dispatch({
                type: 'search_error',
                error: error

            })
        })
    }
};

export function typing(event) {
    let change = event.target.value
    return {
        type: 'typing',
        change: change
    }
}
