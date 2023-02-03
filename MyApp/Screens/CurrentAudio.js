import { Dimensions, View, Text } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from '../../Styles/globalStyles'
import Slider from '@react-native-community/slider';
import PlayerButtons from '../Components/PlayerButtons';
import { Audio } from "expo-av"


const CurrentAudio = ({ setCurrentAudioModal, currentSong, soundObj, playBackObj }) => {


  return (
    <View style={styles.container}>
      <Ionicons name='arrow-back'
        size={30}
        style={{ position: "absolute", top: 20, left: 10 }}
        onPress={() => {
          console.log('double clicking')
          setCurrentAudioModal(false)
        }} />
      <MaterialCommunityIcons
        name='music-circle'
        size={150}
        style={{ backgroundColor: "#eee", padding: 70, borderRadius: 20 }}
        color={"#00BFFF"} />
      <View>
        <Text style={{ fontSize: 15, color: "black", marginTop: 15, marginHorizontal: 22 }} numberOfLines={1}>{currentSong?.filename}</Text>
      </View>
      <Slider
        style={{ width: Dimensions.get("window").width, height: 40, marginTop: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#00BFFF"
        maximumTrackTintColor="#000000"
      />
      <View style={{ flexDirection: 'row' }}>
        <PlayerButtons iconName={"skip-previous"} iconSize={35} margin={10} />
        <PlayerButtons iconName={playPause} iconSize={55} iconColor={"#00BFFF"} onPress={() => handlePlay()} />
        <PlayerButtons iconName={"skip-next"} iconSize={35} margin={10} />
      </View>
    </View>
  )
}

export default CurrentAudio
