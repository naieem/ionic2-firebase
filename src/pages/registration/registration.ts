import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {IUser } from '../../models/user.model';
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  user: any= {};
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async registration(user: IUser) {
//     this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then((result) => {
// debugger;
//     }, (error) => {
//       debugger;
//     });
      try {
        const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
