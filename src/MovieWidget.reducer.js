const INITIAL_STATE = {
    query: '',
    results: [],
    error: '',
    isFetching: false
}

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

    } else {
        return state;
    }

}
