import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.Search_Repo });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: { text: term },
        }
      );
      const names = data.objects.map((res: any) => {
        return res.package.name;
      });
      dispatch({
        type: ActionType.Search_Repo_Success,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.Search_Repo_Error,
          payload: err.message,
        });
      }
    }
  };
};
