import React from "react";
import { postedAt } from "../data";
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
function ThreadDetail({title,body,createdAt,owner,category}){
    return(
        <>
        <div className="thread-detail-item">
            <p className="thread-detail-item-category">{category}</p>
            <h2>{title}</h2>
            <p>{parse(body)}</p>
            <div className="thread-detail-item-footer">
                <div className="thread-detail-item-footer-owner">
                <p className="thread-detail-item-owner"><span>Dibuat Oleh</span> {owner.name}</p>
                <img src={owner.avatar} alt={owner.name}/>
                </div>
                <span>{postedAt(createdAt)}</span>
            </div>
        </div>
        </>
    )
}

const ownerShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };
  ThreadDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    owner: PropTypes.shape(ownerShape).isRequired,
  };
export default ThreadDetail