import React from 'react'
import {  Button } from 'react-native'
import Share from 'react-native-share'
 

const share = () => {
  const options = {
    message: 'test message',
    title:'test title',
    subject:'test subject',
    email: 'test@gmail.com',
    social: Share.Social.WHATSAPP
  }
  Share.open(options)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });
}


export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rated: false
    }
  }
 
  render() {
    return (
      
        <Button title="Share App" onPress={()=>{
          
          share()
          
        }} />
      
    )
  }

}