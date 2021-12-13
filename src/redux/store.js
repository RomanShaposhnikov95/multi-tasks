import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./Todolists-reducer";
import {GeneralTodoReducer} from "./General-todoReducer";



const reducer = combineReducers({
    todolistsReducer,
    GeneralTodoReducer
})

export const store = createStore(reducer)

window.store = store

export default store