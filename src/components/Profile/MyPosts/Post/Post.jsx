import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'></img>
      { props.message }
      <div>
        <span>Like: { props.likeCount }</span>
      </div>
    </div>
  );
}

export default Post;