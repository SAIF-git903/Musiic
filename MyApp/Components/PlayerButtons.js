import { View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const PlayerButtons = (props) => {

    const { iconName, iconSize, margin, iconColor, onPress } = props

    return (
        <View>
            <MaterialCommunityIcons
                name={iconName}
                size={iconSize}
                style={{ marginTop: margin, marginHorizontal: 5 }}
                color={iconColor}
                onPress={onPress}
            />
        </View>
    )
}

export default PlayerButtons
