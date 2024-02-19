import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContext';
import AuthContextProvider from './src/contexts/AuthContext';
import TodoListContextProvider from './src/contexts/TodoListContext';

const App = (props) => {
    return (
        <View style={{flex: 1}}>
            <AuthContextProvider>

                <ThemeContextProvider>
                    <TodoListContextProvider>
                        <Navbar />
                        <TodoList />
                    </TodoListContextProvider>

                </ThemeContextProvider>
            </AuthContextProvider>

        </View>
    )
}

const styles = StyleSheet.create({})

export default App