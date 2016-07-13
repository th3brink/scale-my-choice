/// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {TabsPage} from '../tabs/tabs';

interface EmailPasswordCredentials {
    email: string;
    password: string;
}

@Component({
  template: `
    <ion-header>
        <ion-navbar>
            <ion-title>
            {{state}}
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

        <ion-item *ngIf="state === 'Create'">
            <ion-label>Password Again</ion-label>
            <ion-input type="password" [(ngModel)]="passwordCheck" ></ion-input>
        </ion-item>

        </ion-list>

        <div padding *ngIf="state === 'Login'">
            <button block (click)="Login()">Sign In</button>
            <button block light (click)="switchState('Create')">Create Account</button>
        </div>  

        <div padding *ngIf="state === 'Create'">
            <button block (click)="create()">Create Account</button>
            <button block light (click)="switchState('Login')">Sign In</button>
        </div>  
    </ion-content>
  `
})
export class AuthPage {
  user: EmailPasswordCredentials = {email: '', password: ''};
  passwordCheck: string = '';
  state: string = 'Login'; //Create
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

  create() {
    if (this.user.password === '' || this.user.password !== this.passwordCheck) {
        let toast = Toast.create({
            message: "Passowrds don't match",
            duration: 3000
        });
        toast.onDismiss(() => {
            console.log('Dismissed toast');
        });
        this.nav.present(toast);
        return;
    }
    this.af.auth.createUser(this.user)
    .then(()=>{
        this.nav.setPages([ {page: TabsPage} ]);
    })
    .catch((err)=>{
        console.log(err);
        let toast = Toast.create({
            message: 'create failed',
            duration: 3000
        });

        toast.onDismiss(() => {
            console.log('Dismissed toast');
        });

        this.nav.present(toast);

    });
    
  }

  switchState(state) {
    this.state = state;
  }

}
