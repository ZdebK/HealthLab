import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications/index';
 
@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  data = { title:'', description:'', date:'', time:'' };
  dataDaily =  {description:'', day:'', time:'' };
 
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController ){
  }
 
  submit() {
    console.log(this.data);
    var date = new Date(this.data.date + " " + this.data.time);
    console.log(date);
    this.localNotifications.schedule({
       text: "Drink glass of water :)\n" + this.data.description,
       trigger: {at: new Date(new Date().getTime() + 3600)},
       led: 'FF0000',
       sound: 'file://assets/sounds/water_message.mp3',
    });
    let alert = this.alert.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+ date,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }
 
  singleUseNotificationWater(){
    this.localNotifications.schedule({
      text: "Drink glass of water :)\n" + this.data.description,
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: 'file://assets/sounds/water_message.mp3',
   });
   this.data = { title:'', description:'', date:'', time:'' };
  }
 
  // dailyNotificationWater(){
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: "df",
  //     foreground: true,
  //     text: "Drink glass of water :)\n" + this.dataDaily.description,
  //     trigger: { every: { hour: this.dataDaily.time, }, count: 1 },
  //     sound: 'file://assets/sounds/water_message.mp3',
  //  });
  //  this.dataDaily = {description:'', day:'', time:'' };
  // }
 
    updateDay(day){
      this.dataDaily.day = day;
    }
}