import FormInput from "./FormInput";
import Lists from "./Lists";
import {useDispatch, useSelector} from "react-redux";
import {removeGeneralTodoAC} from "../redux/General-todoReducer";


const Todolists = (props) => {
    const todoTasks = useSelector(state => state.todolistsReducer)
    const tasks = todoTasks.filter(el => el.parentId === props.id)

    const dispatch = useDispatch()

    const removeHandler = () => {
        dispatch(removeGeneralTodoAC(props.id))
    }

   return (
       <div className="App">
           <h4>{props.title} <button onClick={removeHandler}>X</button></h4>
           <FormInput id={props.id} />
           <Lists tasks={tasks}/>
       </div>
   )
}

export default Todolists