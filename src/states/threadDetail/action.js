import API from "../../data/api";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL', 
    ADD_COMMENTS :'ADD_COMMENTS'
}
function receiveThreadDetailActionCreator(threadDetail) {
    return {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail,
      },
    };
  }
   
  function clearThreadDetailActionCreator() {
    return {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };
  }
function CommentActionCreator(content) {
    return {
      type: ActionType.ADD_COMMENTS,
      payload: {
        content,
      },
    };
  }
  function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const threadDetail = await API.getThreadDetail(threadId);
        dispatch(receiveThreadDetailActionCreator(threadDetail));
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }
  
function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await API.createComment({ threadId, content });
      dispatch(CommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}
  export {
    ActionType,
    receiveThreadDetailActionCreator,
    clearThreadDetailActionCreator,
    CommentActionCreator,
    asyncReceiveThreadDetail,
    asyncAddComment
  };