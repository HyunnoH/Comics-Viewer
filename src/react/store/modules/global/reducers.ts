import { createReducer } from "typesafe-actions";
import { produce } from "immer";
import { changeView } from "./actions";
import { GlobalState, GlobalAction } from "./types";

const initialState: GlobalState = {
  viewType: "home",
};

const globalReducer = createReducer<GlobalState, GlobalAction>(
  initialState
).handleAction(changeView, (state, { payload: { viewType } }) =>
  produce(state, (draft) => {
    draft.viewType = viewType;
  })
);

export default globalReducer;
