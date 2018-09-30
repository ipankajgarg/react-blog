import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ipankaj';


export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
//    console.log(request);
//    return (dispatch) =>{
//        request.then(({data})=>{
//            dispatch({type : FETCH_POSTS, payload : request})
//        });
//    };
    return{
        type : FETCH_POSTS,
        payload : request
    };
}
//http://reduxblog.herokuapp.com/api/posts?key=ipankaj



export function createPost(props){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
//    console.log(request);
//    request.then(()=>{
//        location.href = "http://localhost:8080/";
//    })
    
    return{
        type : CREATE_POST,
        payload : request
    }
    
}
export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    console.log(request);
    return{
        type : FETCH_POST,
        payload : request
    }
}
export function deletePost(id){
    const request =  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
     return{
        type : DELETE_POST,
        payload : request
    }
}