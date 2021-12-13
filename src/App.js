import './App.css';
import Todolists from "./components/Todolists";
import {useDispatch, useSelector} from "react-redux";
import {addGeneralTodoAC} from "./redux/General-todoReducer";

function App() {
    const todolists = useSelector(state => state.GeneralTodoReducer)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('e', e.target[0].value)
        dispatch(addGeneralTodoAC(e.target[0].value))
        e.target[0].value = ''
    }

    return (
        <div className='todoDesk'>
            <form onSubmit={handleSubmit}>
                <input name="title" type="text" />
                <button type="submit">add</button>
            </form>
            {
                todolists.map(el => <Todolists key={el.id} {...el}/>)
            }
        </div>
    );
}

export default App;
