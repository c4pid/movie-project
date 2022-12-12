import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
