import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import threadReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import isPreloadReducer from './isPreload/reducer';
const store = configureStore({
    reducer: {
      authUser: authUserReducer,
      isPreload: isPreloadReducer,
      users: usersReducer,
      threads: threadReducer,
      threadDetail: threadDetailReducer,
      loadingBar: loadingBarReducer,
    },
  });
  
  export default store;