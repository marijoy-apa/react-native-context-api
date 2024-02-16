import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './src/components/Navbar';
import TodoList from './src/components/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContext';

const App = (props) => {
    return (
        <View>
            <ThemeContextProvider>

                <Navbar />
                <TodoList />
            </ThemeContextProvider>

        </View>
    )
}

const styles = StyleSheet.create({})

export default App