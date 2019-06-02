import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotification} from '@ionic-native/local-notifications';


@Component({
  selector: 'dishes',
  templateUrl: 'dishes.html'
})
export class DishesPage {

  data = { title:'', description:'', date:'', time:'' };
  dataDaily =  {description:'', day:'',date: '' , time:'' };
  sas : Date;
  scheduled: ILocalNotification[];
 
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController, private platform: Platform){
  }
 

  notificationEatBrakfast(){
    const diffTime = Math.abs(new Date().getTime() - new Date((this.data.date)).getTime());
    console.log(diffTime);
    const yr = new Date(this.data.date).getFullYear();
    console.log( yr);
    const mnth = new Date(this.data.date).getMonth();
    console.log(mnth);
    const dat = new Date(this.data.date).getDate();
    console.log(dat);
    //const currentDate = new Date();
    //const hour2 = this.data.time.split(":")[0];
    //const minute2 = this.data.time.split(":")[0];
    this.localNotifications.schedule({
      id: 1, 
      text: "Drink glass of water :)\n" + this.data.description,
      trigger: {at: new Date(new Date().getTime() + diffTime)},
      led: 'FF0000',
      sound: 'file://assets/audio/message.mp3',
   });
   this.data = { title:'', description:'', date:'', time:'' };
  }
 
  notificationEatDinner(){
    console.log("Data" + new Date(this.dataDaily.date));
    console.log("TIME" +   this.dataDaily.time);
    console.log("TIME2" + this.dataDaily.time.split(":")[0]);
    this.platform.ready().then(() => {
    this.localNotifications.schedule({
      id: 2,
      text: "Drink glass of water :)\n" + this.dataDaily.description,
      trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.MINUTE },
      led: 'FF0000',
      sound: 'file://assets/audio/message.mp3',
   });
  });
}
   //this.dataDaily = {description:'', day:'',date: '',  time:'' };
   notificationEatLunch() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Simons Notification',
      data: { mydata: 'My hidden message this is' },
      trigger: { every: ELocalNotificationTriggerUnit.SECOND },
    });
  }

  recurringNotification() {
    this.localNotifications.schedule({
      id: 22,
      title: 'Recurring',
      text: 'Simons Recurring Notification',
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE }
    });
  }
    updateDay(day){
      this.dataDaily.day = day;
    }
  
    getAll() {
      this.localNotifications.getAll().then((res: ILocalNotification[]) => {
        this.scheduled = res;
      })
    }
}