import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../ducks/post/data"

export const reducers = combineReducers({
  post: postReducer,
});

