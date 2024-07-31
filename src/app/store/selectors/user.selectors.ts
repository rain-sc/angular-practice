import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { State } from '../reducers/user.reducer';

const user = (state:AppState) =>state.user

export const selectUserInfo = createSelector(
  user,
  (state:State) => state.userInfo
)