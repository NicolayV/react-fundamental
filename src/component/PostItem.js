import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const { remove, number, post } = props;
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {number}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
