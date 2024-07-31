import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';


export interface AppState {
  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.userFeatureKey]: fromUser.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
