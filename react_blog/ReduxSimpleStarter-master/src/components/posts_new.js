import React , { Component , PropTypes} from 'react'; //redux-form is a library and same as connect function which connect data to props
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';
class PostsNew extends Component{
    static contextTypes = {
        router : PropTypes.object
    } 
onSubmit(props){
    this.props.createPost(props).then(()=>{
      this.context.router.push('/');  
    })
       
        //blog post has been created, navigate the user to the index
        //we navigate by calling this.context.router.push with the
        //new path to navigate to.
       
    
}
render(){
   
    //same as   const hanleSubmit = this.props.handleSubmit;
    const { fields : {title , categories,content} , handleSubmit} = this.props;
   
    return (
        //        <form onSubmit={handleSubmit(this.props.createPost)}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> //for call and navigate

        <h3>Create a new post </h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
        <label>Title</label>
        <input type="text" className="form-control" {...title} />
<div className="text-help">{title.touched ? title.error : ""}</div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
        <label>Categories</label>
        <input type="text" className="form-control" {...categories}/>
<div className="text-help">{categories.touched ? categories.error : ""}</div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
        <label>Content</label>
        <textarea  className="form-control" {...content}/>
<div className="text-help">{content.touched ? content.error : ""}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
<Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
}    
}
function validate(values){
    const errors  = {};
    if(!values.title){
        errors.title = 'enter a username';
    }
    if(!values.categories){
        errors.categories = 'enter a categories';
    }
    if(!values.content){
        errors.content = 'enter a content';
    }
    return errors;
}
//connect: first arguement is mapStateToProps,2nd is mapto dispatchProps
//reduxform:1st is form config,2nd is mapStateToPRops 3rd is mapDispatchToProps
export default reduxForm({
    form:"postsNewForm",                                   //this form key is defined ina reducer index.js
    fields : ['title' , 'categories' , 'content'],validate
}, null , {createPost})(PostsNew);