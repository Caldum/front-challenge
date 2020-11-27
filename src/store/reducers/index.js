import { combineReducers } from "redux";
import categoriesReducer from "../reducers/categories";
import top10Reducer from "./top10";

export default combineReducers({
    categoriesReducer,
    top10Reducer
});