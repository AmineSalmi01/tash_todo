import React from "react";
import  TodoContext  from "../context/todoContext";
import { useContext } from "react";


const AddTodo = () => {
    const { handeChange , formValue } =  useContext(TodoContext);
    

    return (
        <div>
            <input type="text" onChange={handeChange} value={formValue}/>
        </div>
    )
}
export default AddTodo();