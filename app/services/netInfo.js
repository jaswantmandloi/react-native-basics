import NetInfo from '@react-native-community/netinfo'

//import netInfo from './app/services/netInfo'

const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });

 

