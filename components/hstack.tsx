import React from 'react';
import styled from 'styled-components';

interface HStackProps {
    alignment?: 'center';
}

export const HStack: React.FC<any>= (props) => {
    return (
        <Container alignment={props.alignment}>
            {props.children}
        </Container>
    )
}

const Container = styled.View`
    /* background: lightblue; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${ props => props.alignment == 'center' ? 'center' : 'flex-start' };
    align-items: center;
`;

