import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ViewType = "home" | "viewer";

export interface GlobalState {
  viewType: ViewType;
}

export type GlobalAction = ActionType<typeof actions>;
