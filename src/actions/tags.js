import fetch from 'cross-fetch';
import {push} from 'react-router-redux';
import {ActionTypes as types} from '../constants';

export const queryTags = () => {
   return function (dispatch) {

      dispatch({
         type: types.FETCH_TAGS,
      });
      return fetch('/api/tags', {})
         .then(response => response.json())
         .then((json) => {
            dispatch(
               {
                  type: types.FETCH_TAGS_SUCCESS,
                  tags: json.data
               });
         });
   };
};

