import React from 'react'

import YouTube from 'react-native-youtube'
 

const apiKey = `296938234587-g2mpstu4j5g623h1njpsln3m0vhonesl.apps.googleusercontent.com`





//import YouTube from './app/components/YouTube'

{/* <View style={styles.sectionContainer}>
            <YouTube />
          </View> */}





export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rated: false
    }
  }
 
  render() {
    return (
      
      
      <YouTube
      apiKey={apiKey}
  videoId="KVZ-P-ZI6W4" // The YouTube video ID
  play={false} // control playback of video with true/false
  fullscreen={false} // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => { console.log('onReady', e) } }
  onChangeState={e => { console.log('onChangeState', e) }}
  onChangeQuality={e => { console.log('onQualityChange', e) }}
  onError={e => { console.log('onError', e) }}
  style={{ alignSelf: 'stretch', height: 300 }}
/>


      
    )
  }

}