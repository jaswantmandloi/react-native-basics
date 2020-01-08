import React, { useRef } from 'react';
import { Container, Content, Footer, Drawer, Toast, FooterTab, Button, Icon, Text } from 'native-base';
import {View, Dimensions} from 'react-native'

import HTML from 'react-native-render-html';

import HeaderView from './Header'
import SideBar from './SideBar'
import {htmlContent1} from './htmlContent'





var videoId = htmlContent1.substring(
  htmlContent1.lastIndexOf("https://www.youtube.com/embed/") + 30, 
  htmlContent1.lastIndexOf("?feature=oembed")
);

console.log('videoId======', videoId)

const Basic = () => {

  const drawerRef = useRef(null)

  return (
    <Drawer ref={drawerRef} 
    content={<SideBar  />} 
    onClose={() => drawerRef.current._root.close()} >
    <Container>
      
      <HeaderView openDrawer={() => {
      drawerRef.current._root.open()
    }} />
     


      <Content>
        <Text>
          This is Content Section 1
        </Text>
        <View>
        <Button  onPress={() =>{

              // Toast.show({
              //   text: "Wrong password!",
              //   buttonText: "Okay",
              //   duration: 3000
              // })

              console.log('testdsfdsf')
              
        }

              } >
                <Text>Toast</Text>
              </Button>
        </View>

        <View>
        <HTML html={htmlContent1}
        ignoredTags={['iframe']}
        imagesMaxWidth={Dimensions.get('window').width}
        debug={true}
        onHTMLParsed = {(dom, RNElements) => {
          
          console.log('RNElements: ', RNElements)

          return RNElements;
      }}
      

        />
        </View>

      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    </Drawer>
  );

}

export default Basic