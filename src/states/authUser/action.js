import API from '../../data/api';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
  };
   
  function setAuthUserActionCreator(authUser) {
    return {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser,
      },
    };
  }
   
  function unsetAuthUserActionCreator() {
    return {
      type: ActionType.UNSET_AUTH_USER,
      payload: {
        authUser: null,
      },
    };
  }

  function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
      try {
        const token = await API.login({ email, password });
        API.putAccessToken(token);
        const authUser = await API.getOwnProfile();
   
        dispatch(setAuthUserActionCreator(authUser));
        console.log(authUser)
      } catch (error) {
        alert(error.message);
      }
    };
  }
  function asyncUnsetAuthUser() {
    return (dispatch) => {
      dispatch(unsetAuthUserActionCreator());
      API.putAccessToken('');
    };
  }
  export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
  };