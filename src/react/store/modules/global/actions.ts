import { createAction } from "typesafe-actions";
import { ViewType } from "./types";

const CHANGE_VIEW = "global/CHANGE_VIEW";
type ChangeViewProps = { viewType: ViewType };
export const changeView = createAction(CHANGE_VIEW)<ChangeViewProps>();
