/// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {TabsPage} from '../tabs/tabs';

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
            <ion-label>Email</ion-label>
            <ion-input type="text" [(ngModel)]="user.email"></ion-input>
        </ion-item>

        <ion-item>
            <ion-label>Password</ion-label>
            <ion-input type="password" [(ngModel)]="user.password" ></ion-input>
        </ion-item>

        </ion-list>

        <div padding>
            <button block (click)="login()">Sign In</button>
        </div>  
    </ion-content>
  `
})
export class AuthPage {
  user: Object = {email: '', password: ''};
  constructor(private nav: NavController, public af: AngularFire) {
    
  }

  login() {
    this.af.auth.login(this.user)
    .then(()=>{
        this.nav.setPages([ {page: TabsPage} ]);
    })
    .catch((err)=>{
        let toast = Toast.create({
            message: 'Login failed',
            duration: 3000
        });

        toast.onDismiss(() => {
            console.log('Dismissed toast');
        });

        this.nav.present(toast);

    });
    
  }

}
