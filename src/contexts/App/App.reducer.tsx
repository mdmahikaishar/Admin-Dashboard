import { Dispatch } from "react";

type TAppAction =
  | { type: "DO_SOMETHING"; payload: string }
  | { type: "DO_MORE"; payload: string };

export interface IAppContext {
  dispatch: Dispatch<TAppAction>;
}

export const AppState = {
  dispatch: (value: TAppAction) => null,
};

export function AppReducer(state: IAppContext, action: TAppAction) {
  switch (action.type) {
    case "DO_SOMETHING": {
      return { ...state };
    }

    default: {
      return state;
    }
  }
}
