import { Text, View, Dimensions, BackHandler, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import AudioContext from '../Context/Context'
import ListCard from '../Components/ListCard'
import { useNavigation } from '@react-navigation/native'

const ListAudio = () => {

    const [audio] = useContext(AudioContext)
    const navigation = useNavigation()

    return (
        <>
            <ScrollView>
                {
                    audio?.map((item, index) => (
                        <View key={index}>
                                <ListCard
                                    item={item}
                                    filename={item.filename}
                                    index={index}
                                    duration={item.duration} uri={item.uri} />
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )

}

export default ListAudio
