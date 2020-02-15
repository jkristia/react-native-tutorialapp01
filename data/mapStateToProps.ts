import { Action } from "./actions";

export interface IStateProps {
    action: Action;
}
export function mapStateToProps(state) {
	return { action: state.action }
}