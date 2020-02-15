import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from "./navigator/app-navigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ActionType, Action } from "./data";

const initialState = {
	action: Action,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.open:
			return { action: Action.open };
		case ActionType.close:
			return { action: Action.close };
		default:
			return state;
	}
};

const store = createStore(reducer);

export const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	)
}
export default App;