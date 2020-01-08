import React, { useState,useRef } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon,  Item, Input } from 'native-base';



const HeaderView = ({openDrawer}) => {

  const [toggleSearchBox, setToggleSearchBox] = useState(false)

  const onToggleSearchBox = () => {
    setToggleSearchBox(!toggleSearchBox)
  }

  


  if (toggleSearchBox === false) {
    return (<Header >
      <Left>
        <Button transparent>
          <Icon name='menu' onPress={openDrawer} />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Icon name="search" onPress={onToggleSearchBox} />
      </Right>
    </Header>)

  }


  return (

    <Header searchBar >

      <Item>
        <Icon name="search" />
        <Input placeholder="Search" />
        <Icon name="people" onPress={onToggleSearchBox} />
      </Item>

    </Header>

  );

}


export default HeaderView