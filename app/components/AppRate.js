import React from 'react'
import {  Button } from 'react-native'
import Rate, { AndroidMarket } from 'react-native-rate'
 
export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rated: false
    }
  }
 
  render() {
    return (
      
        <Button title="Rate App" onPress={()=>{
          const options = {
            AppleAppID:"2193813192",
            GooglePackageName:"com.mywebsite.myapp",
            AmazonPackageName:"com.mywebsite.myapp",
            OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp:false,
            openAppStoreIfInAppFails:true,
            fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
          }
          Rate.rate(options, success=>{
            if (success) {
              // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
              this.setState({rated:true})
            }
          })
        }} />
      
    )
  }

}