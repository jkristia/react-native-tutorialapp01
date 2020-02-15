import React from 'react';
// https://styled-components.com/docs/basics#react-native
import styled from 'styled-components';
import { ScrollView, SafeAreaView, Animated, Easing, StatusBar } from 'react-native';
import { Card, colors, Logo, Course } from '../components';
import { logos, cards, courses, IActionProps, IStateProps, Action, mapStateToProps, mapDispatchToProps } from '../data';
import TitleBar from '../components/titlebar';
import Menu from '../components/menu';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { INavigationProp } from '../navigator/app-navigator';

interface HomeScreenProps extends IActionProps, IStateProps, INavigationProp {
}
interface HomeScreenState {
	scale: any;
	opacity: any;
}


class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
	state = {
		scale: new Animated.Value(1),
		opacity: new Animated.Value(1),
	}

	componentDidMount() {
		StatusBar.setBarStyle('dark-content', true);
		// console.log(this.props);
	}
	componentDidUpdate() {
		this.toggleMenu();
	}

	private toggleMenu() {
		if (this.props.action === Action.open) {
			Animated.timing(this.state.scale, {
				toValue: 0.9,
				duration: 300,
				easing: Easing.in(null)
			}).start();
			Animated.spring(this.state.opacity, {
				toValue: 0.5
			}).start()
			StatusBar.setBarStyle('light-content', true);
		}
		if (this.props.action === Action.close) {
			Animated.timing(this.state.scale, {
				toValue: 1,
				duration: 300,
				easing: Easing.in(null)
			}).start();
			Animated.spring(this.state.opacity, {
				toValue: 1
			}).start()
			StatusBar.setBarStyle('dark-content', true);
		}
	}

	render() {
		return (
			<RootView>
				<Menu />
				<AnimatedContainer style={{
					transform: [{ scale: this.state.scale }],
					opacity: this.state.opacity
				}}>
					<SafeAreaView>
						<TitleBar source={require('../assets/avatar.jpg')} name="jkristia"></TitleBar>
						<ScrollView>
							<SubTitle>Continue Learning</SubTitle>

							<ScrollView
								style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30 }}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								{logos.map((logo, index) => (<Logo key={index} image={logo.image} text={logo.text} />))}
							</ScrollView>

							<ScrollView
								horizontal={true}
								style={{ paddingBottom: 30 }}
								showsHorizontalScrollIndicator={false}
							>
								{cards.map((card, index) => (
									<TouchableOpacity
										key={index}
										onPress={ () => this.props.navigation.push('section', { card: card})}
									>
									<Card
										title={card.title}
										image={card.image}
										caption={card.caption}
										logo={card.logo}
										subtitle={card.subtitle}
									/>
									</TouchableOpacity>))
								}
							</ScrollView>

							<SubTitle>Popular Courses</SubTitle>
							{courses.map((course, index) => (
								<Course
									key={index}
									image={course.image}
									title={course.title}
									subtitle={course.subtitle}
									logo={course.logo}
									author={course.author}
									avatar={course.avatar}
									caption={course.caption}
								/>
							))}
						</ScrollView>
					</SafeAreaView>
				</AnimatedContainer>
			</RootView>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const RootView = styled.View`
	background: black;
	flex: 1;
`;

const SubTitle = styled.Text`
	color: ${colors.c1};
	font-weight: 600;
	font-size: 15px;
	margin-top: 20px;
	margin-left: 20px;
	text-transform: uppercase;
`;

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

