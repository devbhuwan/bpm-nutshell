import * as bpm from '../actions/bpm';
import {User} from '../models/bpm';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
};

export function reducer(state = initialState, action: bpm.Actions): State {
  switch (action.type) {
    case bpm.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case bpm.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
