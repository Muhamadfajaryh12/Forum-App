import { hideLoading, showLoading } from 'react-redux-loading-bar';
import API from "../../data/api";
const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
  };
   
  function receiveUsersActionCreator(users) {
    return {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };
  }
  function asyncRegisterUser({ email, name, password }) {
    return async (dispatch) => {
      dispatch(showLoading());
      try {
        await API.register({ email, name, password });
      } catch (error) {
        alert(error.message);
      }
      dispatch(hideLoading());
    };
  }
  export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
  };