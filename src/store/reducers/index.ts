import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({ 
  movies: moviesReducer,
})

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;