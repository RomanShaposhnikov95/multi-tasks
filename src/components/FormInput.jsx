import {useDispatch} from "react-redux";
import {addTodoAC} from "../redux/Todolists-reducer";

const FormInput = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodoAC(props.id, e.target[0].value))
        e.target[0].value = ''
    }

    return (
        <form className='formInput' onSubmit={handleSubmit}>
            <input name="title" type="text" />
            <button type="submit">add</button>
        </form>
    )
}

export default FormInput