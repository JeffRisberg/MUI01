import {handleActions} from 'redux-actions';
import {ActionTypes as types} from '../constants';

export default handleActions({
    [types.FETCH_ARTICLES]: (state) => {
        return Object.assign({}, state, {
            data: [],
            isFetching: true,
        });
    },
    [types.FETCH_ARTICLES_SUCCESS]: (state, action) => {
        console.log("got the following articles ");
        console.log(action.articles);

        return Object.assign({}, {data: action.articles}, {
            isFetching: false,
        });
    },
}, {data: [], isFetching: false});
