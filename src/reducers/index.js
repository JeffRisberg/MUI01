import { combineReducers } from 'redux';
import articles from './articles'
import tags from './tags'

export default combineReducers({
  articles,
  tags
});
