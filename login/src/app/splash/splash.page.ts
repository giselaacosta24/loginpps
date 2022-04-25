import { Component, OnInit } from '@angular/core';
import { BackgroundMode} from '@ionic-native/background-mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage  {

  constructor(public router:Router) { 
     setTimeout(()=>{
       this.router.navigateByUrl('login');
     },3000);
  }


  ngOnInit() {
  }

}
