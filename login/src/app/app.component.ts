import { Component } from '@angular/core';
import { Router } from "@angular/router";
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.router.navigateByUrl('splash');
    });
  }
}
