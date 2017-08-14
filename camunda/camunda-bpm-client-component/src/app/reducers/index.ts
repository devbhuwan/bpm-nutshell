import {ActionReducer, ActionReducerMap,} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  routerReducer: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: ActionReducer<any, any>[] = !environment.production
  ? [logger]
  : [];
