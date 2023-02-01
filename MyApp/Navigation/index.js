import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../Screens/SplashScreen'


const NavContainer = () => {

    const Stack = createNativeStackNavigator()
    const myTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "white"
        }
    }

    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen name='SplashScreen' component={SplashScreen} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default NavContainer