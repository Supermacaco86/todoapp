import {useState} from "react"
import Todo from "./todo";

export default function TodoApp(){
    const [title, setTitle] = useState("");
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
        setTitle("")
    }

    function handleUpdate(id, value){
        const temp = [...todo]
        const e = temp.find(e => e.id === id)
        e.title = value
        setTodo(temp)
    }

    function handleDelete(id){
        const temp = todo.filter((e) => e.id !== id);
        setTodo(temp);
      }
    

    return(<div className="todocontainer">
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
                    <Todo
                    key={e.id}
                    e={e} 
                    onUpdate={handleUpdate} 
                    onDelete={handleDelete}/>
                ))}
        </div>
    </div>
    )
}