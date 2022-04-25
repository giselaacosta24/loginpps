import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

 
  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Ingrese correo.' 
      },
      { 
        type: 'pattern', 
        message: 'Correo no válido.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Contraseña requerida.' 
      },
      { 
        type: 'minlength', 
        message: 'Contraseña no cumple con los valores minimos.' 
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private fb: FormBuilder ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  Login(value) {
    console.log(value);
    this.ionicAuthService.onLogin(value)
      .then((response) => {
        console.log(response)
        this.errorMsg = "";
        this.router.navigateByUrl('home');
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }
 ionViewDidEnter() {
    console.log('This runs as it should');
   }

  registro() {
    this.router.navigateByUrl('registro');
  }

}