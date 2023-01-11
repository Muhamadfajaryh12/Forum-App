import { ActionType } from './action';
 
function ThreadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREADS:
      return [action.payload.thread, ...threads];
    default:
      return threads;
  }
}
 
export default ThreadsReducer;