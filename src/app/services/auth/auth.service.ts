import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { credentialsModel } from 'src/app/models/credentials.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthActionType, authStore } from 'src/app/redux/auth-state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

public async register(user: UserModel): Promise<void> {
const token = await firstValueFrom(this.http.post<string>(environment.registerUrl,user));
authStore.dispatch({type: AuthActionType.Register, payload: token});

}

public async login(credentials: credentialsModel): Promise<void> {
const token = await firstValueFrom(this.http.post<string>(environment.loginUrl,credentials));
authStore.dispatch({type: AuthActionType.Login, payload: token});
}


public logout() :void {
authStore.dispatch({type: AuthActionType.Logout});
}


}
