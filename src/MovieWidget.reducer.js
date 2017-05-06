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

    if (action.type === 'typing') {
        return Object.assign({}, state, {
            query: action.change
        });

    } else if (action.type === 'fetching_data') {
        return Object.assign({}, state, {
            results: [],
            isFetching: true
        });

    } else if (action.type === 'search') {
        let results = action.payload.results;
        return Object.assign({}, state, {
            results: results,
            isFetching: false
        });

    } else if (action.type === 'search_error') {
        return Object.assign({}, state, {
            error: action.error,
            isFetching: false
        });

    } else if (action.type === 'details') {
        return Object.assign({}, state, {
            detailedResults: state.results[action.index]
        });
    } else if (action.type === 'back') {
        return Object.assign({}, state, {
            detailedResults: null
        });
    } else {
        return state;
    }

}
