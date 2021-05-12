import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/waifuAction';

const initialState = {
    url: 'https://dog.ceo/api/breeds/image/random',
    isFetching: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_SUCCESS):
            return({
              ...state,
              pic: action.payload,
              isFetching: false
            })
        case(FETCH_FAIL):
            return({
              ...state,
              error: action.payload,
              isFetching: false
            })
        default:
            return state;
    }
}
