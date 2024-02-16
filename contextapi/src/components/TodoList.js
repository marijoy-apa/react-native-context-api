import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../contexts/ThemeContext";
class TodoList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;

        const theme = isDarkTheme ? darkTheme : lightTheme;

        const { todoContainer, items, buttonContainer, buttonText } = styles
        return (
            <View style={[todoContainer, theme]}>
                <Text style={[items, theme]}>
                    Plan the family trim
                </Text>
                <Text style={[items, theme]}>
                    Go shopping for dinner
                </Text>
                <Text style={[items, theme]}>
                    Go for a walk
                </Text>
                <TouchableOpacity style={buttonContainer} onPress={changeTheme}>
                    <Text style={buttonText}>
                        Change Theme
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    items: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 10,
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 18,

    }
})

export default TodoList;