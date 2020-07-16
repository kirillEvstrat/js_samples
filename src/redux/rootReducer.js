import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    postsReducer: postsReducer,
    app: appReducer
});