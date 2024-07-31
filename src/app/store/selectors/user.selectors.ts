import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInfoType } from 'src/app/types/login-type';

const user = (state:UserInfoType) =>state

export const selectUserInfo = createSelector(
  user,
  (state:UserInfoType) => state
)