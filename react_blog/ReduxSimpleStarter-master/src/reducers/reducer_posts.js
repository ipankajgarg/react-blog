import {FETCH_POSTS , FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all :[], post : null};

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case FETCH_POST :
            return{...state, post : action.payload.data};
        case FETCH_POSTS:
            console.log("data",action.payload.data)
            return{...state, all:action.payload.data};
        default:
            return state;
                      }
}