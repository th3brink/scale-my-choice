/// <reference path="../../../node_modules/angularfire2/firebase3.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class FriendsPage {
  search: string;
  friends: Observable<any[]>;
  constructor(private nav: NavController, af: AngularFire) {
      af.auth.subscribe((authState)=>{
        console.log(authState);
        if (authState) {
          // navController.push('login');
          // this.nav.setPages([ {page: List}, {page: Detail}, {page:Info} ]);
        }
      })
      // console.log(af.auth.getAuth())
    
    // this.friends = af.database.list('/user/'+userId+'/friends');
  }

  searchFriends(): void {
    // Search through user friend list
  }

}
