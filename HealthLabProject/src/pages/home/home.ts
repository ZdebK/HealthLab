import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../models/profile';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData : AngularFireObject<any>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, 
    private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data=> {
      if(data && data.email && data.uid) {
      this.toast.create({
        message: "Welcome to HealthLab, "+ data.email,
        duration: 5000
      }).present();

     return this.afDatabase.object(`profile/${data.uid}`).valueChanges();
      }
      else {
        this.toast.create({
          message: 'Could not find authentication details.',
          duration: 3000
        }).present();
      }
    });
  }

}
