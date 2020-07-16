import React from "react";
import {connect} from 'react-redux';
import Post from "./Post";

 const Posts = ({syncPosts}) => {
    if(!syncPosts.length){
        return (<h2>no posts</h2>)
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
};

 const mapStateToProps = state => {
     return {
         syncPosts: state.postsReducer.posts
     }
 };

export default connect(mapStateToProps)(Posts);