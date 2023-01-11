import React from "react";
import { postedAt } from "../data";
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
function CommentItem({comment}){

    return(
        <>
        <div className="comment-item">
            <div className="comment-item-header">
            <p>Jawaban dari :</p>
            <img src={comment.owner.avatar} alt={comment.owner.name}/>
            <h4>{comment.owner.name}</h4>
            </div>
            <br></br>
            <p className="comment-item-content">{parse(comment.content)}</p>
            <p className="comment-item-time">{postedAt(comment.createdAt)}</p>
        </div>
        </>
    )
}
const CommentItemShape = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  })
}.isRequired;   

CommentItem.propTypes = {
  ...CommentItemShape,
};
export { CommentItemShape };
export default CommentItem;