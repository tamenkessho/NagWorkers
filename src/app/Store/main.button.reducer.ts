import {TOGGLE_MAIN_BUTTON, ToggleMainButton} from "./actions";

const initialState = {mainButtonStatus: true}

export function mainButtonReducer(state: { mainButtonStatus: boolean } =
                                    initialState, action: ToggleMainButton) {
  switch (action.type) {
    case TOGGLE_MAIN_BUTTON:
      return {
        // ...state,
        ...state, mainButtonStatus: action.payload
      }
    default:
      return {...state}
  }
}
