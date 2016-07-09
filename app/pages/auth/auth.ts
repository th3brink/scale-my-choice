/// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title>
      Login
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>

  <ion-item>
    <ion-label>Username</ion-label>
    <ion-input type="text" [(ngModel)]="user.username"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Password</ion-label>
    <ion-input type="password" [(ngModel)]="user.password" ></ion-input>
  </ion-item>

</ion-list>

<div padding>
  <button block>Sign In</button>
</div>  
</ion-content>
  `
})
export class AuthPage {
  user: Object = {username: '', password: ''};
  constructor(private navController: NavController, af: AngularFire) {
    
  }
}
