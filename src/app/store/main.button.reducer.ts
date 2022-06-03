import {TOGGLE_MAIN_BUTTON, ToggleMainButton} from "./actions";

export interface MainPageState { buttonState: boolean }

const initialState: MainPageState = { buttonState: false };

export function mainButtonReducer(      //just a local reducer
  state: MainPageState = initialState,
  action: ToggleMainButton)
{
  switch (action.type)
  {
    case TOGGLE_MAIN_BUTTON:    //here I can add multiple actions for the same reducer. There could be many of them
      return {
        ...state,
        buttonState: !state.buttonState
      };
    default:
      return state
  }
}
