import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authSvc:AuthService,private router:Router,private afAuth:AngularFireAuth) { }


  onLogOut(){
    console.log('Salir');
    this.authSvc.signOut();
  }
}
