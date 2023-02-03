import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../Screens/SplashScreen'
import ListAudio from '../Screens/ListAudio'
import CurrentAudio from '../Screens/CurrentAudio'

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
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='ListAudioScreen' component={ListAudio} />
                <Stack.Screen name='CurrentAudioScreen' component={CurrentAudio}
                    options={{
                        headerShown: true,
                        headerTitle: ""
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default NavContainer