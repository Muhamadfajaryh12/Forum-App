import React,{useState} from "react";
import PropTypes from 'prop-types';
function CommentInput ({addComment}){
    const[content,setContent] =  useState ('');

    const onClickAddComment = () => {
        addComment(content);
        setContent('');
      };
      const onChangeHandler = (event) => {
        setContent(event.target.value);
      };
    return(
        <div className="comment-input">
            <h4>Berikan jawabanmu</h4>
            <form onSubmit={onClickAddComment}>
                <textarea value={content} onChange={onChangeHandler}></textarea>
                <button>KIRIM</button>
            </form>
        </div>
    )
}
CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired
}
export default CommentInput