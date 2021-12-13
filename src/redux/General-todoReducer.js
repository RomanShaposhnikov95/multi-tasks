const ADD_GENERAL_TODO = 'ADD_GENERAL_TODO';
export const REMOVE_GENERAL_TODO = 'REMOVE_GENERAL_TODO';


export const todolistsId1 = 1
export const todolistsId2 = 2

const initialState = [
    // {id: todolistsId1, title: 'todo1', filter: 'all'},
    // {id: todolistsId2, title: 'todo2', filter: 'completed'},
]

export const GeneralTodoReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_GENERAL_TODO:
            return [{id: Math.random(), title: action.title, filter: 'all'}, ...state]
        case REMOVE_GENERAL_TODO:
            return state.filter(el => el.id != action.todolistsId)
        default:
            return state
    }
}

export const addGeneralTodoAC = (title) => {
    return {
        type: ADD_GENERAL_TODO,
        title
    }
}

export const removeGeneralTodoAC = (todolistsId) => {
    return {
        type: REMOVE_GENERAL_TODO,
        todolistsId
    }
}