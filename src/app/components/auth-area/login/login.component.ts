import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credentialsModel } from 'src/app/models/credentials.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotifyService } from 'src/app/services/notfy/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public credentials = new credentialsModel();

  constructor(private authService: AuthService, private router: Router, private notifyService: NotifyService) {}

  public async send(): Promise<void> {
    try {
      await this.authService.login(this.credentials);
    //   alert('Welcome Back!');
    this.notifyService.success("Welcome Back!");
      this.router.navigateByUrl('/Home');


    } catch (err: any) {
      this.notifyService.error(err.message);
    }
  }
}
