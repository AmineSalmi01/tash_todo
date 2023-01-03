import React from "react";
import { useState } from "react";
import { createContext } from "react";


const todoContext = createContext();

export const TodoProvider = ({children}) => {
    const [formValue, setFormValue] = useState();


    const handeChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    return (
        <todoContext.Provider
            value={{
                formValue,
                handeChange,
            }}
        >
            {children}   
        </todoContext.Provider>
    )

};

export default todoContext;
