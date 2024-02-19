import React, { Component, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // state = {
    //     isLoggedIn: false
    // }
    const changeAuthStatus = () => {
        this.setIsLoggedIn(!isLoggedIn);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;