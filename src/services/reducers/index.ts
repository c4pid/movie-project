import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import listMoviesReducer from "./listMoviesReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: loginReducer,
  listMovies: listMoviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
