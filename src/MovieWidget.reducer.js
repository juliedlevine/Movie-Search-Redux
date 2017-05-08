// Initial state here shoudl match what's in the connect state in index.js
const INITIAL_STATE = {
    query: '',
    results: [],
    error: '',
    isFetching: false,
    detailedResults: null
}

// All action types here should match what's in the action file
export default function movieWidgetReducer(state = INITIAL_STATE, action) {

    // When user is typing, update the query state
    if (action.type === 'typing') {
        return Object.assign({}, state, {
            query: action.change
        });

    // When user clicks search, flip isFetching to true and reset the results to be empty. This happens before the ajax request is completed
    } else if (action.type === 'fetching_data') {
        return Object.assign({}, state, {
            results: [],
            isFetching: true
        });

    // this action is called when the ajax request has completed. Flip off isFetching and update results state
    } else if (action.type === 'search') {
        let results = action.payload;
        return Object.assign({}, state, {
            results: results,
            isFetching: false
        });

    // If there's a search error from the ajax request send that action
    } else if (action.type === 'search_error') {
        return Object.assign({}, state, {
            error: action.error,
            isFetching: false
        });

    // If user clicks on image to view details update the state of detailedResults with that movie
    } else if (action.type === 'details') {
        return Object.assign({}, state, {
            detailedResults: state.results[action.index]
        });

    // If user clicks back button flip off detailed Results
    } else if (action.type === 'back') {
        return Object.assign({}, state, {
            detailedResults: null
        });

    // Catch all, return state
    } else {
        return state;
    }

}
