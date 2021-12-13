import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeTaskTilteAC} from "../redux/Todolists-reducer";

const Text = (props) => {
    const [active, disactive] = useState(false)
    const [value, setValue] = useState(props.text)
    const dispatch = useDispatch()

    const activeClick = () => {
        disactive(true)
    }
    const disActiveClick = () => {
        disactive(false)
        dispatch(changeTaskTilteAC(props.id,value))
    }

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    return active ?
        <input value={value} onChange={changeHandler} autoFocus onBlur={disActiveClick} type="text"/> :
        <div onDoubleClick={activeClick}>{props.text}</div>
}

export default Text;