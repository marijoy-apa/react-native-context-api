import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
    const { isDarkTheme, lightTheme, darkTheme } = useContext(ThemeContext)
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext)
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { headerContainer, headerText, headerTabContainer, headerTab } = styles;

    return (
        <View style={[headerContainer, theme]}>
            <Text style={[headerText, theme]}>
                OakAcademy
            </Text>
            <TouchableOpacity onPress={changeAuthStatus}>
                <Text>{isLoggedIn ? 'Logged in' : 'Logged out'}</Text>
            </TouchableOpacity>
            <View style={headerTabContainer}>
                <Text style={headerTab}>
                    Overview
                </Text>
                <Text style={headerTab}>
                    Contact
                </Text>
                <Text style={headerTab}>
                    Support
                </Text>
            </View>
        </View>
    )
}



// class Navbar extends Component {
//     // static contextType = ThemeContext;
//     render() {
//         const { headerContainer, headerText, headerTabContainer, headerTab } = styles;

//         return (
//             <AuthContext.Consumer>
//                 {(authContext) => {
//                     return (

//                         <ThemeContext.Consumer>
//                             {(themeContext) => {
//                                 const { isDarkTheme, lightTheme, darkTheme } = themeContext;
//                                 const { isLoggedIn, changeAuthStatus } = authContext;
//                                 const theme = isDarkTheme ? darkTheme : lightTheme;

//                                 return (
//                                     <View style={[headerContainer, theme]}>
//                                         <Text style={[headerText, theme]}>
//                                             OakAcademy
//                                         </Text>
//                                         <TouchableOpacity onPress={changeAuthStatus}>
//                                             <Text>{isLoggedIn ? 'Logged in' : 'Logged out'}</Text>
//                                         </TouchableOpacity>
//                                         <View style={headerTabContainer}>
//                                             <Text style={headerTab}>
//                                                 Overview
//                                             </Text>
//                                             <Text style={headerTab}>
//                                                 Contact
//                                             </Text>
//                                             <Text style={headerTab}>
//                                                 Support
//                                             </Text>
//                                         </View>
//                                     </View>
//                                 )
//                             }}

//                         </ThemeContext.Consumer>
//                     )
//                 }}
//             </AuthContext.Consumer>





//         )
//     }
// }

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'dimgrey',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
    },
    headerText: {
        marginTop: 25,
        fontSize: 28,
        color: 'white'
    },
    headerTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        backgroundColor: 'lightgrey',
        alignSelf: 'flex-end',
    },
    headerTab: {
        fontSize: 23,
        paddingVertical: 10
    }

})

export default Navbar;