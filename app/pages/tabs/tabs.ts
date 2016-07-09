import {Component} from '@angular/core'
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {FriendsPage} from '../friends/friends';
import { AuthPage } from '../auth/auth';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor(private nav: NavController, af: AngularFire) {
    
    
    // af.auth.subscribe((authState)=>{
    //   console.log(authState);
    //   if (!authState) {
    //     // this.nav.push(AuthPage);
    //     // this.nav.setPages([ {page: AuthPage} ]);
    //   }
    // })
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = FriendsPage;
  }
}
