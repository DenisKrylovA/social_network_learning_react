import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;