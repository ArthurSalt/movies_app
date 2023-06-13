import React from "react";
import MyButton from "../../UI/button/MyButton";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
   const router = useNavigate()
   return (
      <div className='post'>
         <div className="post__content">
            <h1>{props.post.id}. {props.post.title}</h1>
            <p>{props.post.body}</p>
         </div>
         <div className="post__btns">
            <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
         </div>
      </div>
   );
};

export default PostItem;