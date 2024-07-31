import { createReducer, on } from '@ngrx/store';
import { UserInfoType } from 'src/app/types/login-type';
import { addUserInfo, deleteUserInfo,   } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State   {
  userInfo:UserInfoType
}

export const initialState: State = {
  userInfo:{
    id: 0,
    username: '',
    token: '',
    avatar: null
  },
};

export const reducer = createReducer(
  initialState,
  on(addUserInfo,(state,{userInfo})=> ({
    ...state,
    userInfo
  })),
  on(deleteUserInfo, (state) => initialState)
);

