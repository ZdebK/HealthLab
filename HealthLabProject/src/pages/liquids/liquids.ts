import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private plt: Platform, public navParams: NavParams) {
    this.plt.ready().then((rdy) ==> {
      this.localNotifications.on('click', (notification,state) ==> {
        let json = JSON.parse(notification, data);

        let alert = this.alertCtrl.create({
          title: Notification,title,
          subTitle json.mydata
        });
        alert.present();
      });
    });
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Liquid',
      text: 'Napij sie wody!'
      at: new Date(new Date().getTime() + 5 * 1000),
      data: {mydata: 'wiecej tekstu'}
    });
  }
  

}