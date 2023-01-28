import {Action, createReducer, on} from "@ngrx/store";
import {hide, show} from "./action";
import {LoadingInterface} from "./loading.interface";

const initialState: LoadingInterface = {
  show: false
}

const reducer = createReducer(
  initialState,
  on(show, () => {
    return {...initialState, show: true};
  }),
  on(hide, () => {
    return {...initialState, show: false};
  })
)

export function loadingReducer(state: LoadingInterface | undefined, action: Action) {
  return reducer(state, action)
}
