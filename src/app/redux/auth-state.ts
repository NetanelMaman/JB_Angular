import jwtDecode from 'jwt-decode';
import { createStore } from 'redux';
import { Action } from 'rxjs/internal/scheduler/Action';
import { LoadingComponent } from '../components/shared-area/loading/loading.component';
import { UserModel } from '../models/user.model';

export class AuthState {
  public token: string = null;
  public user: UserModel = null;


}
// Constructor (){
//     this.token = localStorage.getItem('token');
//     if (this.token){
//         const container: { user: UserModel } = jwtDecode(this.token);
//         this.user = container.user;
//     }
// }



export enum AuthActionType {
  Register,
  Login,
  Logout,
}

export interface AuthAction {
  type: AuthActionType;
  payload?: string;
}

export function authReducer(
  currentState = new AuthState(),
  action: AuthAction
): AuthState {
  const newState = { ...currentState };

  switch (action.type) {
    case AuthActionType.Register:
    case AuthActionType.Login:
      newState.token = action.payload;
      const container: { user: UserModel } = jwtDecode(newState.token);
      newState.user = container.user;
      break;

    case AuthActionType.Logout:
      newState.token = null;
      newState.user = null;
      break;
  }
  return newState;
}

export const authStore = createStore(authReducer);
