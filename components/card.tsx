import React from 'react';
import styled from 'styled-components';
import { VStack } from './vstack';
import { HStack } from './hstack';
import { colors } from './colors';

export interface CardProps {
    title: string;
    image: any;
    logo: any;
    caption: string;
    subtitle: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <Container>
            <Cover>
                <Image source={props.image} />
                <Title>{props.title}</Title>
            </Cover>
            <Content>
                <HStack>
                    <Logo source={props.logo} />
                    <VStack background>
                        <Caption>{props.caption}</Caption>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </VStack>
                </HStack>
            </Content>

        </Container>
    );
}

const Content = styled.View`
    /* background: green; */
    padding-left: 20px;
    height: 80px;
    justify-content: center;
`;
const Logo = styled.Image`
    /* background-color: green; */
    width: 44px;
    height: 44px;
    margin-right: 10px;

`;
const Caption = styled.Text`
    color: ${colors.c2};
    font-size: 20px;
    font-weight: 600;
    padding: 2px;
`;
const Subtitle = styled.Text`
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    padding: 2px;
`;

const Container = styled.View`
    background: white;
    height: 280px;
    width: 315px;
    border-radius: 15px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;
const Image = styled.Image`
    position: absolute;
    height: 100%;
    width: 100%;

`;
const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;

`;