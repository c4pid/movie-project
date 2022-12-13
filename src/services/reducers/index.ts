import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: loginReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
