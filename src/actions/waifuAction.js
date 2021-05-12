import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchWaifu = () => {
    return(dispatch => {
        dispatch({type: FETCH_START});

        dispatch(fetchStart());
        axios.get('https://dog.ceo/api/breeds/image/random')
             .then(res => {
                 dispatch({type: FETCH_SUCCESS,
                           payload: res.data.message})
             })
             .catch(err => {
                 console.log('ERROR', err);
             })
    });
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (url) => {
    return({type: FETCH_SUCCESS, payload: url});
}

export const fetchFail = (error) => {
    return({type: FETCH_START, payload: error});
}