import React from "react";
import { useContext } from "react";
import todoContext from "../context/todoContext"; 



const AddTodo = () => {
    const { handeChange , formValue } = useContext(todoContext);

    return (
        <div>
            <input type="text" onChange={handeChange} value={formValue}/>
        </div>
    )
}
export default AddTodo();