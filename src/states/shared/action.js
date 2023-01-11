import API from '../../data/api';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../users/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());      
    try {
      const users = await API.getAllUsers();
      const threads = await API.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };