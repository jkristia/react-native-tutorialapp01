import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export interface WelcomeProps {
    name: string;
}
export const Welcome: React.FC<WelcomeProps>= (props) => {
    return (
        <View>
            <Text>Welcome: {props.name}</Text>
        </View>
    )
}