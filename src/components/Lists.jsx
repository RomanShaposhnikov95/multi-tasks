import {useDispatch, useSelector} from "react-redux";
import {changeFiterAC, changeStatusAC, removeTodoAC, todolistsReducer} from "../redux/Todolists-reducer";
import Text from "./Text";
import {useState} from "react";


const Lists = (props) => {
    const dispatch = useDispatch();

    let copyTasks = props.tasks

    const removeHandler = (id) => {
        dispatch(removeTodoAC(id))
    }

    const [filter,setFilter] = useState('all')
    if(filter === 'active'){copyTasks = copyTasks.filter(el => el.isDone === false)}
    if(filter === 'completed'){copyTasks = copyTasks.filter(el => el.isDone === true)}
    const filterHandler = (key) => {setFilter(key)}

    return (
        <div>
            {
                copyTasks.map(el => {
                    const changeStatusHandler = (e) => {
                        dispatch(changeStatusAC(el.id, e.target.checked))
                    }

                    return (
                        <div key={el.id} className='item'>
                            <input onChange={changeStatusHandler} checked={el.isDone} type="checkbox"/>
                            <Text {...el}/>
                            <button onClick={()=> {removeHandler(el.id)}}>X</button>
                        </div>
                    )
                })
            }

            <button onClick={()=>{filterHandler('all')}}>all</button>
            <button onClick={()=>{filterHandler('active')}}>active</button>
            <button onClick={()=>{filterHandler('completed')}}>completed</button>
        </div>
    )
}

export default Lists