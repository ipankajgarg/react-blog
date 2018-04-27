import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Logged: () => ['hello', 'hi']
});

export default rootReducer;
