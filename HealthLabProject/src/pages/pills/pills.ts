import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications} from '@ionic-native/local-notifications';
 
@Component({
  selector: 'pills',
  templateUrl: 'pills.html'
})
export class PillsPage {
  pills = { title:'', description:'', date:'', time:'' };
 
 
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController, private platform: Platform){
  }
 
  singleUseNotificationPills(){
    const yr = new Date(this.pills.date).getFullYear(); 
    const mnth = new Date(this.pills.date).getMonth();
    const dat = new Date(this.pills.date).getDate();
    const hourP = this.pills.time.split(":")[0];
    const minuteP = this.pills.time.split(":")[1];

    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 1, 
        text: "Don't forget to take " + this.pills.description + ":)",
        trigger: {at: new Date(yr, mnth, dat), hour: hourP, time: minuteP},
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
          title: 'Single Reminder successfully set',
          buttons: ['OK']
        });
    alert.present();
    this.pills = { title:'', description:'', date:'', time:'' };
  }
}