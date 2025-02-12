import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../ducks/post/data"
import userReducer from "../ducks/auth/user"

export const reducers = combineReducers({
  post: postReducer,
  user: userReducer,
});

