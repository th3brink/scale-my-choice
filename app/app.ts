/// <reference path="../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Loading} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {AuthPage} from './pages/auth/auth';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform, private af: AngularFire) {

      af.auth.subscribe((authState)=>{
      console.log(authState);
      if (!authState) {
        // this.nav.push(AuthPage);
        // this.nav.setPages([ {page: AuthPage} ]);
        this.rootPage = AuthPage;
      } else {
         this.rootPage = TabsPage;
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyDp_HxXYjYxFuanqeMtB2bBm8myCAr2Txk",
      authDomain: "engage-starter.firebaseapp.com",
      databaseURL: "https://engage-starter.firebaseio.com",
      storageBucket: "engage-starter.appspot.com",
  }),
]);
