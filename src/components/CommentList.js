import React from "react";
import CommentItem,{CommentItemShape} from "./CommentItem";
import PropTypes from 'prop-types';

function CommentList({comments}){
    return(
        <div className="comment-list">
            {
                comments.length?
                comments.map((comment)=>(
                    <CommentItem
                    key={comment.id}
                    comment={comment}
                    />
                ))
                : " Belum ada komentar"
            }
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape)).isRequired,
  };
export default CommentList