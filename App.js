import { PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from "expo-media-library"
import NavContainer from './MyApp/Navigation'
import AudioContext from './MyApp/Context/Context'

const App = () => {

  const [audio, setAudio] = useState([])
  const [totalCount, setTotalCount] = useState(0)


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
    let audioMedia = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });

    audioMedia = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: audioMedia.totalCount
    });

    setTotalCount(audioMedia.totalCount)

    const audioFiles = audioMedia.assets.filter((asset) => {
      const fileExtension = asset.uri.split('.').pop();
      return fileExtension === 'mp3';
    });

    setAudio(audioFiles)

  };

  return (
    <AudioContext.Provider value={[audio, totalCount]}>
      <NavContainer />
    </AudioContext.Provider>
  )
}

export default App
