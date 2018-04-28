import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController) {}
  ngOnInit(){}
  ionViewDidLoad() {
    this.afAuth.authState.subscribe((result)=>{
      debugger;
    },(error)=>{
      debugger;
      this.navCtrl.push(LoginPage);
    });
  }

}
