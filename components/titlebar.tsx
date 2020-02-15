import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from './avatar';
import { VStack } from './vstack';
import { colors } from './colors';
import { IActionProps, mapStateToProps, mapDispatchToProps } from '../data';
import { connect } from 'react-redux';

export interface TitlebarProps extends IActionProps {
    source: any;
    name: string;
}

const TitleBar: React.FC<TitlebarProps> = (props) => {
    return (
        <Container>
            <TouchableOpacity onPress={props.openMenu}>
              <Avatar source={props.source} />
            </TouchableOpacity>
            <VStack>
                <Title>Welcome back</Title>
                <Name>{props.name}</Name>
            </VStack>
            <Ionicons name="ios-notifications" size={32} color="#4777f2" style={{ position: 'absolute', right: 20, top: 5 }}/>
            {/* <NotificationIcon /> */}
        </Container>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)

const Title = styled.Text`
  color: ${colors.c1};
  font-size: 16px;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: ${colors.c2};
  font-weight: bold;
`;
const Container = styled.View`
  /* background: green; */
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  padding: 5px;
  padding-left: 20px;
  height: 50px;
`;
