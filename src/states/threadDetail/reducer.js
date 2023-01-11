import { ActionType } from './action';
 
function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
      case ActionType.ADD_COMMENTS:
        return {
          ...threadDetail,
          comments: [action.payload.comment, ...threadDetail.comments],
        };
        default:
        return threadDetail;
      }
    }
export default threadDetailReducer; 