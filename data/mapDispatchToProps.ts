import { ActionType } from "./actions";

export interface IActionProps {
	closeMenu: (e: any) => void;
	openMenu: (e: any) => void;
}

export function mapDispatchToProps(dispatch): IActionProps {
	return {
		closeMenu: () => dispatch({	type: ActionType.close }),
		openMenu: () =>	dispatch({ type: ActionType.open })
	};
}