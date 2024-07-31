import { createAction, props } from '@ngrx/store';
import { UserInfoType } from 'src/app/types/login-type';

export const addUserInfo = createAction('addUserInfo',props<{userInfo: UserInfoType}>());
export const deleteUserInfo = createAction('deleteUserInfo');



