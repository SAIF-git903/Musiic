import { Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from '../../Styles/globalStyles'
import logo from "../../assets/images/logo.png"
import { useFonts } from 'expo-font'

const SplashScreen = () => {

    const [loaded] = useFonts({
        logoFont: require("../../assets/fonts/Oswald-VariableFont_wght.ttf")
    })

    if (!loaded) {
        return null
    } else {


        return (
            <>
                <View style={styles.container}>
                    <Image source={logo} style={{ resizeMode: "contain", width: 70, height: 70 }} />
                    <Text style={styles.logo}>Musiic</Text>
                    <StatusBar style='auto' />
                </View>
            </>
        )
    }
}

export default SplashScreen
