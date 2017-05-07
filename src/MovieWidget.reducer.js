// Initial state here shoudl match what's in the connect state in index.js
const INITIAL_STATE = {
    query: '',
    results: [
    {
      poster_path: '/aWY1PbVO3VvjOX4bbyTxG9oPgGl.jpg',
      adult: false,
      overview: 'A young man raised by scientists on Mars returns to Earth to find his father.',
      release_date: '2017-01-26',
      genre_ids: [
        10749,
        12,
        878,
        18
      ],
      id: 365942,
      original_title: 'The Space Between Us',
      original_language: 'en',
      title: 'The Space Between Us',
      backdrop_path: '/jLW7ekg60Tg7OxCElhou1Akje0v.jpg',
      popularity: 6.702607,
      vote_count: 108,
      video: false,
      vote_average: 6.9
    },
    {
      poster_path: '/bJhVLribUKCrKv1h1WFqv4QmRWM.jpg',
      adult: false,
      overview: 'In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.',
      release_date: '1996-11-15',
      genre_ids: [
        16,
        35,
        18,
        10751,
        14
      ],
      id: 2300,
      original_title: 'Space Jam',
      original_language: 'en',
      title: 'Space Jam',
      backdrop_path: '/kBTdPNTAzagAY6UiwY957KCDGuu.jpg',
      popularity: 2.90185,
      vote_count: 965,
      video: false,
      vote_average: 6.4
    },
    {
      poster_path: '/iO9aZzrfmMvm3IqkFiQyuuUMLh2.jpg',
      adult: false,
      overview: 'Three office workers strike back at their evil employers by hatching a hapless attempt to embezzle money.',
      release_date: '1999-02-19',
      genre_ids: [
        35,
        80
      ],
      id: 1542,
      original_title: 'Office Space',
      original_language: 'en',
      title: 'Office Space',
      backdrop_path: '/xczi1bXG9FCfxN1NmTrKgmCx0i4.jpg',
      popularity: 2.771097,
      vote_count: 932,
      video: false,
      vote_average: 7.4
    },
    {
      poster_path: '/mNkxKBlR3FYYRkmhdJo2OiqOGFs.jpg',
      adult: false,
      overview: 'A 13-hour mini-series detailing James A. Michner\'s fictional account of the American space program from the years after World War II to the Apollo landings on the moon in the early 1970\'s.',
      release_date: '1985-04-13',
      genre_ids: [
        18,
        10770
      ],
      id: 266314,
      original_title: 'Space',
      original_language: 'en',
      title: 'Space',
      backdrop_path: null,
      popularity: 1.052479,
      vote_count: 0,
      video: false,
      vote_average: 0
    },
    {
      poster_path: '/90T7b2LIrL07ndYQBmSm09yqVEH.jpg',
      adult: false,
      overview: 'Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world\'s most advanced super computer.',
      release_date: '1968-04-05',
      genre_ids: [
        878,
        9648,
        12
      ],
      id: 62,
      original_title: '2001: A Space Odyssey',
      original_language: 'en',
      title: '2001: A Space Odyssey',
      backdrop_path: '/pckdZ29bHj11hBsV3SbVVfmCB6C.jpg',
      popularity: 3.945443,
      vote_count: 2395,
      video: false,
      vote_average: 7.8
    },
    {
      poster_path: '/aBhWg4uQMnpWnsn8pgNw6mQasOJ.jpg',
      adult: false,
      overview: 'Frank Corvin, ‘Hawk’ Hawkins, Jerry O\'Neill and ‘Tank’ Sullivan were hotdog members of Project Daedalus, the Air Force\'s test program for space travel, but their hopes were dashed in 1958 with the formation of NASA and the use of trained chimps. They blackmail their way into orbit when Russia\'s mysterious ‘Ikon’ communications satellite\'s orbit begins to degrade and threatens to crash to Earth.',
      release_date: '2000-07-31',
      genre_ids: [
        28,
        12,
        53
      ],
      id: 5551,
      original_title: 'Space Cowboys',
      original_language: 'en',
      title: 'Space Cowboys',
      backdrop_path: '/yDq3Mi5iqPWqnN1ym5VZrEL07EN.jpg',
      popularity: 2.337292,
      vote_count: 328,
      video: false,
      vote_average: 6.3
    }],
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
