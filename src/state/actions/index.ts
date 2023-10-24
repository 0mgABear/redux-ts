import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
  type: ActionType.Search_Repo;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.Search_Repo_Success;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.Search_Repo_Error;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
