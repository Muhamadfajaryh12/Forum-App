import API from "../../data/api";
import { hideLoading, showLoading } from 'react-redux-loading-bar';
const ActionType ={
    RECEIVE_THREADS  :'RECEIVE_THREADS',
    ADD_THREADS : 'ADD_THREADS'
}
function receiveThreadsActionCreator(threads) {
    return {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads,
      },
    };
  }
   
  function addThreadActionCreator(thread) {
    return {    
      type: ActionType.ADD_THREADS,
      payload: {
        thread,
      },
    };
  }
  function asyncAddThread({title, category,body  }) {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        const thread = await API.createThread({ title, category,body });
        dispatch(addThreadActionCreator(thread));
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }
  export {
    ActionType,
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncAddThread,
  };