import React from 'react';
import {Route , IndexRoute} from 'react-router'; ///indexroute is used as default route whenever request will come for '/' indexRoutw will be served 

import App from './components/app';
import postsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
const greeting = ()=>{
    return(<div>hey there!</div>)
}
export default(
<Route path="/" component={App}>
           
           <IndexRoute component = {postsIndex} /> 
           <Route path = "posts/new" component = {PostsNew} />
           <Route path="posts/:id" component = {PostsShow} />
           </Route>
);