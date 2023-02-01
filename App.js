import { Text, View, PermissionsAndroid } from 'react-native'
import React, { useEffect } from 'react'
import * as MediaLibrary from "expo-media-library"
import NavContainer from './MyApp/Navigation'


const App = () => {

  useEffect(() => {
    const requestStoragePermission = async () => {

      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: "Storage Permission",
          message: "This app needs access to your storage to store files",
          buttonNeutral: "Ask me later",
          buttonNegative: "Cancel",
          buttonPositive: "Ok"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Permission Granted")
          getAudioFiles()
        } else {
          console.log("Permission denied")
        }
      } catch (error) {
        console.log(error)
      }

    }

    requestStoragePermission()
  }, [])

  const getAudioFiles = async () => {
    const audioMedia = await MediaLibrary.getAssetsAsync({
      mediaType: "audio"
    })
    console.log(audioMedia)
  }

  return (
    <NavContainer />
  )
}

export default App
