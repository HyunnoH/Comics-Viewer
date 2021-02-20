import { useSelector, useDispatch } from "react-redux";
import { GlobalState, ViewType } from "./types";
import { useCallback, useMemo } from "react";
import * as actions from "./actions";

export function useGlobalState() {
  return useSelector(({ global }: { global: GlobalState }) => global);
}

export function useGlobal() {
  const dispatch = useDispatch();
  const changeView = useCallback(
    (viewType: ViewType) => {
      dispatch(actions.changeView({ viewType }));
    },
    [dispatch]
  );

  return useMemo(() => ({ changeView }), [changeView]);
}
