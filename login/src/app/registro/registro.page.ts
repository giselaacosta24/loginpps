import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {
  user:User= new User();
  constructor(private authSvc:AuthService,private router:Router) { }


 async onRegister()
 {
   const user=await this.authSvc.onRegister(this.user);
  
 }
}
