import React from 'react';
import styled from 'styled-components';

export const VStack: React.FC<any>= (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.View`
    height: 100%;
    /* background: lightgreen; */
    display: flex;
    justify-content: center;
`;
