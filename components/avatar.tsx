import React from 'react';
import styled from 'styled-components';

export interface AvatarProps {
    source: any;
}

export const Avatar: React.FC<any>= (props) => {
    return (
        <Container source={props.source}>
        </Container>
    )
}

const Container = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-right: 10px;
`;

