import { Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../Styles/globalStyles'
import logo from "../../assets/images/logo.png"
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'



const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        let timeout = setTimeout(() => {
            navigation.navigate("ListAudioScreen")
        }, 3000);

        return () => clearTimeout(timeout)
    
    }, [])


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
                </View>
            </>
        )
    }
}

export default SplashScreen
