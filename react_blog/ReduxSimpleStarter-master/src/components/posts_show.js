import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class postsShow extends Component{
    static contextTypes = {
        router : PropTypes.object
    } 
    componentWillMount(){
       this.props.fetchPost(this.props.params.id)  //this id is coming from the url so important
    }
    DeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
             this.context.router.push('/');
        });
    }
go(post){
    console.log(post);
  if ($('h3').hasClass("intro")) {
        $('h3').removeClass('intro');
    } 
    else {
        $('h3').addClass('intro');
    }
   
}
    //here is the loader
    render(){
        
        const transitionOptions = {
           transitionName : "fade",
           transitionEnterTimeout : 500,
           transitionLeaveTimeout : 500
       };
    
        const {post} = this.props;
         if(!post)
    return <div> <img src="../../gif.gif" alt=""/></div>                     
        return (
             <ReactCSSTransitionGroup {...transitionOptions}>
        <div>
            <Link to="/">Back To Index</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.DeleteClick.bind(this)}>Delete Post</button>
            <h3 className="button" onClick={()=>this.go(post)}> {post.title}</h3>
            <h6>Categories : {post.categories}</h6>
            <p>{post.content}</p>
            </div>
</ReactCSSTransitionGroup>
            
        )
    }
}
function mapStateToProps(state){
    return {post :state.posts.post};
}
export default connect(mapStateToProps,{fetchPost , deletePost})( postsShow);