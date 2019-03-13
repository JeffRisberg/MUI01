import {handleActions} from 'redux-actions';
import {ActionTypes as types} from '../constants';

export default handleActions({
   [types.FETCH_TAGS]: (state) => {
      return Object.assign({}, state, {
         data: [],
         isFetching: true,
      });
   },
   [types.FETCH_TAGS_SUCCESS]: (state, action) => {
      return Object.assign({}, {data: action.tags}, {
         isFetching: false,
      });
   },
}, {data: [], isFetching: false});
