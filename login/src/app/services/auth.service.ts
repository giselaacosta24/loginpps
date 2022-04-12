import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggged:any=false;
  constructor(public afAuth:AngularFireAuth,private router:Router) {
    afAuth.authState.subscribe(user=>this.isLoggged=user)
  }



  // onLogin(user:User) {
  //   this.afAuth.signInWithEmailAndPassword(user.email,user.password)
  //   .then(value => {
  //     console.log('Funcionó,usuario logueado');
  //     this.isLoggged=true;
  //     this.router.navigateByUrl('/home');
  //   })
  //   .catch(err => {
  //     console.log('Algo esta mal: ', err.message);
  //   });
  // }

  async onLogin(usuario:User){
    try{
      return await this.afAuth.signInWithEmailAndPassword(usuario.email,usuario.password);
    }
    catch(error)
    {
    console.log('Error en login',error)

    }
  }

  async onRegister(usuario:User){
     try{
      return await this.afAuth.createUserWithEmailAndPassword(usuario.email,usuario.password);
     }
     catch(error)
     {
     console.log('Error en registro',error)

    }
  }


  signOut() {
    this.afAuth.signOut()
    .then(value => {
      console.log('Salida exitosa');
      this.isLoggged=false;
      this.router.navigateByUrl('/login');
    })
    .catch(err => {
      console.log('Algo esta mal: ', err.message);
    });
  }

}
