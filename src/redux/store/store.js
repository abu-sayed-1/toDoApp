import { createStore } from "redux";
import toDoReducers from "../toDoReducers/toDoReducers";


export const store = createStore(toDoReducers);