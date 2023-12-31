import { useState } from "react"

export default function Todo({e, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){
        const[newValue, setNewValue] = useState(e.title);

        function handleSubmit(e){
            e.preventDefault()
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value)
        }

        function handleClick(){
            onUpdate(e.id, newValue)
            setIsEdit(false)
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input className="todoInput" type="text" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClick}>Update</button>
        </form>
    }

    function TodoElement(){

        return <div className="todoInfo">
            <span className="todoTitle">{e.title}</span>
            <button className="button" onClick={()=> setIsEdit(true)}>Edit</button>
            <button className="buttonDelete" onClick={()=> onDelete(e.id)}>Delete</button>
        </div>    
    }
    return(
        <div className="todo">
            {isEdit? <FormEdit/> : <TodoElement/>}
        </div>
    )
}