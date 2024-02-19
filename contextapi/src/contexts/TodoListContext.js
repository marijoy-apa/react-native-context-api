import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    useState([
        { text: 'Plan the family trim', id: '1' },
        { text: 'Go shopping for dinner', id: '2' },
        { text: 'Go for a walk', id: '3' },
    ]);

    return (
        <TodoListContext.Provider value={{todos}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider