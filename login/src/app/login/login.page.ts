import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user:User= new User();
  constructor(private authSvc:AuthService,private router:Router) { }


 
  async onLogin()
  {
    const user=await this.authSvc.onLogin(this.user);
    console.log(this.user.email);
    console.log(this.user.password);

    console.log('login component');

  }
}
