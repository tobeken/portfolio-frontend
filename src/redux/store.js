import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { alertsSlice } from "./alertsSlice";
import { usersSlice } from "./usersSlice";
import {jobsSlice} from "./jobsSlice";


const rootReducer = combineReducers({
  alerts: alertsSlice.reducer,
  user:usersSlice.reducer,
  job:jobsSlice.reducer,
});

const store = configureStore({
  reducer:rootReducer,
});

export default store;