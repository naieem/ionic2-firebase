import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { IUser } from '../../models/user.model';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {};
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  login(user: IUser) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then((result) =>{
      if(result){
        this.navCtrl.push(HomePage);
      }
    },(error) => {
      debugger;
    });
  }
  goToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
