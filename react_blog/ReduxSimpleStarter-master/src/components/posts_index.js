import React, { Component } from 'react';
//componentWillMount is a prdefined method or a lifecycle to call function first time when we serve page
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.js';
import { Link } from 'react-router';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this would be a good time to call an action creator to fetch');
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log('props', this.props.posts);
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/' + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }
  render() {
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    const { posts } = this.props;
    if (1 > posts.length) {
      return (
        <div>
          <h1>loading</h1>
          <img src="../../gif.gif" alt="" />
        </div>
      );
    }

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          <ReactCSSTransitionGroup {...transitionOptions}>
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}
//function mapToDispatch(dispatch){
//    return bindActionCreators({fetchPosts},dispatch)
//}
function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); //connect is used to send data to the props
