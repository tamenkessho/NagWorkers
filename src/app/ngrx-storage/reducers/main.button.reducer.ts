import {createReducer, on} from "@ngrx/store";
import {toggleMainButton} from './actions';

export interface MainPageState {
  mainButton: boolean;
}

export const initialState: MainPageState = {
  mainButton: false,
};

export const mainButtonReducer = createReducer(initialState,
  on(toggleMainButton, (state: MainPageState) => {
    console.log('state: ' + state.mainButton);
    const updatedValue: boolean = !state.mainButton;
    return {mainButton: updatedValue};
  }));

// export function mainButtonReducer(state = MainButtonState, action: Action){
//   switch (action.type){
//     case ACTIONS.TURN_OFF:
//       return {
//         ...state,
//         mainButtonState: false};
//     case ACTIONS.TURN_ON:
//       return {
//         ...state,
//         mainButtonState: true};
//     default:return state;
//   }
// }
