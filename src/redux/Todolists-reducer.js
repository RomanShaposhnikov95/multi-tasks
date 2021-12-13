import {REMOVE_GENERAL_TODO, todolistsId1, todolistsId2} from "./General-todoReducer";

const ADD_TODO = "ADD-TODO"; //+
const REMOVE_TODO = 'REMOVE_TODO'; // +
const CHECKED_TODO = 'CHECKED_TODO'; //+
const CHANGE_TITLE = 'CHANGE_TITLE'; // +
const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = [
    // {parentId: todolistsId1, id: 1, text: 'hello world', isDone: true},
    // {parentId: todolistsId1, id: 2, text: 'Im fine', isDone: false},
    // {parentId: todolistsId1, id: 3, text: 'Test text', isDone: true},
    // {parentId: todolistsId2, id: 1, text: 'hello worldrepeat', isDone: true},
    // {parentId: todolistsId2, id: 2, text: 'Im true', isDone: true},
    // {parentId: todolistsId2, id: 3, text: 'PHP', isDone: false}
]

export const todolistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTask = {parentId: action.id, id: Math.random(), text: action.text, isDone: false}
            return [...state, newTask]
        case REMOVE_TODO:
            return state.filter(el => el.id !== action.id)
        case CHECKED_TODO:
            const status = state.find(el => el.id === action.id)
            if(status){
                status.isDone = action.isDone
            }
            return [...state]
        case CHANGE_TITLE:
            const title = state.find(el => el.id === action.id)
            if(title){
                title.text = action.text
            }
            return [...state]
        case CHANGE_FILTER:
             const test = state.filter(el => el.isDone === action.boolValue)
            return test
        case REMOVE_GENERAL_TODO:
            return state.filter(el => el.parentId != action.todolistsId);
        default:
            return state
    }
}

export const addTodoAC = (id, text) => {return {type: ADD_TODO, id, text}};
export const removeTodoAC = (id) => {return{type: REMOVE_TODO, id}};
export const changeStatusAC = (id,isDone) => {return {type: CHECKED_TODO, id, isDone}};
export const changeTaskTilteAC = (id, text) => {return {type: CHANGE_TITLE, id, text}};
export const changeFiterAC = (boolValue) => {return{type: CHANGE_FILTER, boolValue}}

