import { combineReducers } from 'redux';
import PostReducer from'./reducer_posts.js'
import {reducer as formReducer } from 'redux-form'; //redux-form is a library {reducer as formReducer} it means grab reducer from the redux-form as put in a variable of formReducer this is because of name coflict
const rootReducer = combineReducers({
 posts : PostReducer,
    form:formReducer
});

export default rootReducer;
