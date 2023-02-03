// Play audio for the very firstTime




export const play = async (soundObj, uri) => {
    try {
        return await playBack.loadAsync({ uri }, { shouldPlay: true })
    } catch (error) {
        console.log(error)
    }
}