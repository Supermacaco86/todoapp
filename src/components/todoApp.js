import {useState} from "react"

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

            {title}
        </form>
    </div>;
}