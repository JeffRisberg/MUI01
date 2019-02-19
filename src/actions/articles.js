import fetch from 'cross-fetch';
import {push} from 'react-router-redux';
import {ActionTypes as types} from '../constants';

export const queryArticles = () => {
    return function (dispatch) {

        dispatch({
            type: types.FETCH_ARTICLES,
        });
        return fetch('/api/articles', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: types.FETCH_ARTICLES_SUCCESS,
                        articles: json.data
                    });
            });
    };
};

export const fetchArticle = (id) => {
    return function (dispatch) {

        dispatch({
            type: types.FETCH_ARTICLES,
        });
        return fetch('/api/articles/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: types.FETCH_ARTICLES_SUCCESS,
                        articles: [json.data]
                    });
            });
    };
};

export const saveArticle = (article) => {
    return function (dispatch) {

        return fetch('/api/articles/' + article.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({article: article})
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.PERSIST_ARTICLE_SUCCESS,
                    articles: [json.data],
                    meta: {
                        log: ['article changed']
                    }
                });
                dispatch(push('/articles'));
            });
    };
};

