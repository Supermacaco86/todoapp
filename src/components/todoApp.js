import {useState} from "react"
import Todo from "./todo";

export default function TodoApp(){
    const [title, setTitle] = useState("Hola");
    const [todo, setTodo] = useState([]); 

    function handleChange(e){
        const value = e.target.value;
        setTitle(value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            complited: false
        };
        const temp = [...todo]
        temp.unshift(newTodo)
        setTodo(temp);
    }

    function handleUpdate(id, value){
        const temp = [...todo]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodo(temp)
    }

    return <div className="todocontainer">
        <form 
        className="todoCreateForm"
        onSubmit={handleSubmit}>
            <input 
            className="todoInput"
            onChange={handleChange}
            value={title}/>
            <input 
            className="buttonCreate" 
            onClick={handleSubmit}
            type="submit" 
            value="Create todo"/>
        </form>
        <div className="todoContainer">
            {todo.map((e)=>(
                    <Todo key={e.id} e={e} onUpdate={handleUpdate}/>
                ))}
        </div>
    </div>;
}