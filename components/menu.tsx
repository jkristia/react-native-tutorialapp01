import React from 'react';
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './colors';
import { HStack } from './hstack';
import { menuItems, mapDispatchToProps, IActionProps, IStateProps, Action, mapStateToProps } from '../data';
import { MenuItem } from './menuitem';
import { connect } from 'react-redux';

interface MenuProps extends IActionProps, IStateProps {
}
interface MenuState {
	top: any;
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component<MenuProps, MenuState> {
	state = {
		top: new Animated.Value(screenHeight)
	};

	componentDidMount() {
		this.toggleMenu();
	}
	componentDidUpdate() {
		this.toggleMenu()
	}
	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require("../assets/background2.jpg")} />
					<Title>xyz</Title>
					<Subtitle>A bit of This and a bit of That</Subtitle>
				</Cover>
				<TouchableOpacity onPress={this.props.closeMenu}>
					<HStack alignment={'center'}>
						<CloseView>
							<Ionicons name="ios-close" size={44} color={colors.c3} />
						</CloseView>
					</HStack>
				</TouchableOpacity>
				<Content>
					{menuItems.map((item, index) => (
						<MenuItem
							key={index}
							icon={item.icon}
							title={item.title}
							text={item.text}
						/>
					))}
				</Content>
			</AnimatedContainer>
		);
	}
	private toggleMenu() {
		if (this.props.action === Action.open) {
			Animated.spring(this.state.top, { toValue: 60 }).start();
		}
		if (this.props.action === Action.close) {
			Animated.spring(this.state.top, { toValue: screenHeight }).start();
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const Container = styled.View`
	/* background: ${colors.background1}; */
	position: absolute;
	background: ${colors.background1};
	width: 100%;
	height: 100%;
	z-index: 100;
	border-radius: 10px;
	overflow: hidden;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 8px;
`;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	margin-bottom: 15px;
	margin-top: -20px;
`;
const Content = styled.View`
	height: ${`${screenHeight}px`};
	background: ${colors.background1};
	/* background: darkgoldenrod; */
	padding: 50px;
`;