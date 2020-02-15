import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';
import { INavigationProp } from '../navigator/app-navigator';

export class ProjectsScreen extends React.Component<INavigationProp, any> {
	render() {
		return (
			<Container>
				<Text>Projects screen</Text>
				<Button title="Close" onPress={ () => this.props.navigation.goBack() } />
			</Container>
		)
	}
}

const Container = styled.View`
	flex: 1;
	/* background-color: green; */
	justify-content: center; 
	align-items: center;
`;
const Text = styled.Text``;