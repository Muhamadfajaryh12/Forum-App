import React from "react";
import parse from 'html-react-parser';
import { postedAt } from "../data";
import { Link } from "react-router-dom";
import {BiCommentDots} from "react-icons/bi";
import PropTypes from 'prop-types';
import Card from './styled/Card';
function ThreadItemBody({id,title,body,category,createdAt,totalComments,user}){
    return(
        <Card>
            <p className="thread-item-body-category">{category}</p>
            <h3 className="thread-item-body-title"><Link className="thread-title" to = {`/threads/${id}`}>{title}</Link></h3>
            <p className="thread-item-body-text">{parse(body)}</p>
            <h4 className="thread-item-body-length"><BiCommentDots size={30}/>{totalComments}</h4>
            <p className="thread-item-body-owner"><span>Dibuat Oleh</span> {user.name}</p>
            <p className="thread-item-body-date">{postedAt(createdAt)}</p>
        </Card>
    )   
}
const userShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };
  
  const threadItemBodyShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
    user: PropTypes.shape(userShape).isRequired,
  };
  ThreadItemBody.propTypes = {
    ...threadItemBodyShape,
  };
export {threadItemBodyShape}
export default ThreadItemBody