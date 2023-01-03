import React from "react";
import { useState } from "react";
import { createContext } from "react";


const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [formValue, setFormValue] = useState();

    const handeChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    return (
        <TodoContext.Provider
            value={{
                formValue,
                handeChange
            }}
        >
            {children}   
        </TodoContext.Provider>
    )

};

export default TodoContext;

