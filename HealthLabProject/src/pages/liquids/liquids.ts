import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications/index';

@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  data = { title:'', description:'', date:'', time:'' };

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController,  private platform: Platform ){
  }

  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger: {at: new Date(new Date().getTime() + 3600)},
       led: 'FF0000',
       sound: this.setSound(),
    });
    let alert = this.alert.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/water_message.mp3'
    } else {
      return 'file://assets/sounds/water_message.caf'
    }
  }
}