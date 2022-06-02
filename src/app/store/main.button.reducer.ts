import {TOGGLE_MAIN_BUTTON, ToggleMainButton} from "./actions";


export interface PageState { buttonState: boolean }

const initialState: PageState = { buttonState: false };

export function mainButtonReducer(
  state: PageState = initialState,
  action: ToggleMainButton)
{
  switch (action.type)
  {
    case TOGGLE_MAIN_BUTTON:
      return {
        ...state,
        buttonState: !state.buttonState
      };
    default:
      return state
  }
}
