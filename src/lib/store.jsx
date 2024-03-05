"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userStateSlice from './slices/userSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userStateSlice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
