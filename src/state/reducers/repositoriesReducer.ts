import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.Search_Repo:
      return { loading: true, error: null, data: [] };
    case ActionType.Search_Repo_Success:
      return { loading: false, error: null, data: action.payload };
    case ActionType.Search_Repo_Error:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
