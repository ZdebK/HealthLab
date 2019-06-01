import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications, ELocalNotificationTriggerUnit} from '@ionic-native/local-notifications/index';
 
@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  data = { title:'', description:'', date:'', time:'' };
  dataDaily =  {description:'', day:'',date: '' , time:'' };
  sas : Date;
 
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController, private platform: Platform){
  }


 
  submit() {
    console.log(this.data);
    const date2 = new Date(this.data.date + " " + this.data.time);
    console.log(date2);

    
    this.localNotifications.schedule({
       text: "Drink glass of water :)" + this.data.description,
       trigger: {at: new Date(new Date().getTime() + 3600)},
       led: 'FF0000',
       sound: 'file://assets/sounds/water_message.mp3',
    });
    let alert = this.alert.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+ date2,
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:'', date:'', time:'' };
  }
 
  singleUseNotificationWater(){
    const diffTime = Math.abs(new Date().getTime() - new Date((this.data.date)).getTime());
    console.log(diffTime);
    var yr = new Date(this.data.date).getFullYear();
    console.log( yr);
    var mnth = new Date(this.data.date).getMonth();
    console.log(mnth);
    var dat = new Date(this.data.date).getDate();
    console.log(dat);
    var currentDate = new Date();



    var hour2 = this.data.time.split(":")[0];
    var minute2 = this.data.time.split(":")[0];
    this.localNotifications.schedule({
      id: 1, 
      text: "Drink glass of water :)\n" + this.data.description,
      trigger: {at: new Date(new Date().getTime() + diffTime)},
      led: 'FF0000',
      sound: 'file://assets/sounds/water_message.mp3',
   });
   this.data = { title:'', description:'', date:'', time:'' };
  }
 
  dailyNotificationWater(){
    console.log("Data" + new Date(this.dataDaily.date));
    console.log("TIME" +   this.dataDaily.time);
    console.log("TIME2" + this.dataDaily.time.split(":")[0]);
    this.platform.ready().then(() => {
    this.localNotifications.schedule({
      id: 2,
      text: "Drink glass of water :)\n" + this.dataDaily.description,
      trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.MINUTE },
      led: 'FF0000',
      sound: 'file://assets/sounds/water_message.mp3',
   });
  });
}
   //this.dataDaily = {description:'', day:'',date: '',  time:'' };
  
 
    updateDay(day){
      this.dataDaily.day = day;
    }
}

// trigger: { every: { hour: this.dataDaily.time, }, count: 1 },