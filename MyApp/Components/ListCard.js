import { Text, View, Dimensions, TouchableOpacity, StatusBar, Modal } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import styles from '../../Styles/globalStyles'
import { Audio } from "expo-av"
import { useNavigation } from '@react-navigation/native'
import CurrentAudio from '../Screens/CurrentAudio'

const ListCard = ({ index, filename, duration, item }) => {

  const [modal, setModal] = useState(false)
  const [currentAudioModal, setCurrentAudioModal] = useState(false)
  const [playPause, setPlayPause] = useState("play-circle-fill")

  let [songStatus, setSongStatus] = useState({
    playBackObj: null,
    soundObj: null,
    currentSong: {},
  })

  const songName = filename.split("-" || "_")[1]
  const singerName = filename.split("-" || "_")[0]


  async function handlePlay(item) {

    // if audio is playing for the very firstTime
    if (songStatus?.soundObj === null) {
      setPlayPause("pause-circle-filled")
      const playBack = new Audio.Sound()
      const status = await playBack.loadAsync({ uri: item.uri }, { shouldPlay: true })
      setSongStatus((prevState) => ({
        ...prevState,
        playBackObj: playBack,
        soundObj: status,
        currentSong: item
      }))
    }

    // Audio is already playing
    if (songStatus?.soundObj?.isLoaded && songStatus?.soundObj?.isPlaying && songStatus?.currentSong?.id === item.id) {
      const status = await songStatus.playBackObj.setStatusAsync({ shouldPlay: false })
      setPlayPause("play-circle-fill")
      setSongStatus((prevState) => (
        {
          ...prevState,
          soundObj: status,
        }
      ))
    }

    // Resume Audio
    if (songStatus?.soundObj?.isLoaded && !songStatus?.soundObj?.isPlaying && songStatus?.currentSong?.id == item?.id) {
      // console.log("same id")
      setPlayPause("pause-circle-filled")
      const status = await songStatus.playBackObj.playAsync()

      setSongStatus((prevState) => (
        {
          ...prevState,
          soundObj: status,
        }
      ))
    }

    // if (songStatus?.soundObj?.isLoaded && songStatus?.currentSong?.id !== item?.id) {
    //   console.log("This is different song")
    // }

  }


  function handleModal() {
    setModal(!modal)
  }


  return (

    <TouchableOpacity
      onPress={() => {
        console.log("clicking")
        if (songStatus.currentSong !== null) {
          setSongStatus((prevState) => {
            return {
              ...prevState,
              currentSong: item
            }
          })
        }
        setCurrentAudioModal(!currentAudioModal)
      }}>
      <View style={{ width: "95%", margin: 10 }} key={index}>
        <View style={{ flexDirection: "row", width: Dimensions.get("screen").width }}>
          <View style={{ justifyContent: "center" }}>
            <Feather
              name='music' size={30} color={"#00BFFF"}
              style={{ width: 55, height: 55, paddingTop: 10, paddingLeft: 10 }} />
          </View>
          <View style={{ justifyContent: "center", marginRight: 5, width: "60%" }}>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }} numberOfLines={1}>
                {singerName}
              </Text>
              {
                songName ?
                  <View style={{ flexDirection: "row", justifyContent: "space-around", marginRight: 5 }}>
                    <Text style={styles.subs} numberOfLines={1}>{songName ? songName.split(".mp3") : ""}</Text>
                    <Text style={{ marginHorizontal: 5 }}>|</Text>
                    <Text>{duration ? (duration / 60).toFixed(2) + " " + "mins" : ""}</Text>
                  </View> :
                  <View style={{ marginRight: 5 }}>
                    <Text>{duration ? (duration / 60).toFixed(2) + " " + "mins" : ""}</Text>
                  </View>
              }
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity onPress={() => handlePlay(item)}>
              <MaterialIcons name={playPause} size={35} color={"#00BFFF"} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity onPress={() => handleModal()}>
              <Entypo name='dots-three-vertical' size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        {/* Modal 1 to display */}
        <Modal
          visible={modal}
          animationType={"fade"}
          transparent={true}
        >
          <TouchableOpacity
            onPress={() => setModal(!modal)}
            style={{ flex: 1, backgroundColor: '#00000080' }}>
            <Text
              style={{ position: "absolute", bottom: 10, alignSelf: "center", backgroundColor: "white", paddingHorizontal: Dimensions.get("screen") }}>
              Some text</Text>
          </TouchableOpacity>
        </Modal>
        <Modal
          visible={currentAudioModal}
          animationType="slide"
        >
          <CurrentAudio
            setCurrentAudioModal={setCurrentAudioModal}
            currentSong={songStatus.currentSong}
            soundObj={songStatus.soundObj}
            playBackObj={songStatus.playBackObj}
          />
        </Modal>
      </View>
    </TouchableOpacity>
  )
}

export default ListCard