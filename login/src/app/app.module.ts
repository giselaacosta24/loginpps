import { NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


//import { environment } from './../environments/environment';
// import { LoginPage } from './login/login.page';

import { environment } from './../environments/environment.prod';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
 AngularFireAuthModule,
 FormsModule,
 ReactiveFormsModule,
CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
