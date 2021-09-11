import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h2>My posts</h2>
      </div>
        <AddNewPostsFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

let maxLength10 = maxLengthCreator(10);

const AddNewPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'} placeholder={'Enter your post'}
          validate={[ required, maxLength10 ]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </form>
  )
}

const AddNewPostsFormRedux = reduxForm({ form: 'MyNewPostForm' })(AddNewPostsForm);

export default MyPosts;