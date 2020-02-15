import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SectionScreen } from '../screens/section-screen';
import HomeScreen from '../screens/home-screen';
import { CoursesScreen } from "../screens/courses-screen";
import { ProjectsScreen } from "../screens/projects-screen";

// https://reactnavigation.org/docs/en/navigation-prop.html
export interface INavigationProp {
	navigation: {
		goBack: () => void;
		navigate: (name: string, params?: any) => void;
		push: (name: string, params?: any) => void;
	}
	route?: {
		name: string;
		params?: any;
	}
}

// https://reactnavigation.org/docs/en/stack-navigator.html#example
const Stack = createStackNavigator();
const StackNavigation: React.FC<any> = () => {
	return (
		<Stack.Navigator initialRouteName={'home'} headerMode={'none'} mode={'modal'}>
			<Stack.Screen name="section" component={SectionScreen} options={{ title: 'Section' }} />
			<Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
		</Stack.Navigator>
	);
}

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";
const Tab = createBottomTabNavigator();

const TabNavigation: React.FC<any> = () => {
	// https://reactnavigation.org/docs/en/tab-based-navigation.html
	let setupTabs = ({route}): any => {
		return {
			tabBarIcon: ({ focused }) => {
				let color = focused ? activeColor : inactiveColor;
				let routename = route.name;
				let iconName = '';
				if (routename === 'home') {
					iconName = 'ios-home';
				}
				if (routename === 'courses') {
					iconName = 'ios-albums';
				}
				if (routename === 'projects') {
					iconName = 'ios-folder';
				}
				return <Ionicons name={iconName} size={26} color={color}/>
			}
		}
	}
	return (
		<Tab.Navigator
			screenOptions={setupTabs}
			tabBarOptions={{
				activeTintColor: activeColor,
				inactiveTintColor: inactiveColor,
			}}
			>
			<Tab.Screen name="home" component={StackNavigation} options={{ title: 'Home' }} />
			<Tab.Screen name="courses" component={CoursesScreen} options={{ title: 'Courses' }} />
			<Tab.Screen name="projects" component={ProjectsScreen} options={{ title: 'Projects' }} />
		</Tab.Navigator>
	);
}


export const AppNavigation: React.FC<any> = (props) => {
	return (
		<TabNavigation />
	)
}

