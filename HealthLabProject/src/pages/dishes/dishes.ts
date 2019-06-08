import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotification} from '@ionic-native/local-notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'dishes',
  templateUrl: 'dishes.html'
})
export class DishesPage {
  breakfast = { description:'', date:'', time:'' };
  lunch = { description:'', date:'', time:'' };
  dinner = { description:'', date:'', time:'' };
  scheduled: ILocalNotification[];
 
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController, private platform: Platform){
  }
 
  notificationEatBrakfast(){
    const hourB = this.breakfast.time.split(":")[0];
    const minuteB = this.breakfast.time.split(":")[1];
    
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 5,
        text: "Hi! Let's start day with breakfast! \n" + this.breakfast.description,
        trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.DAY, hour: hourB, minutes: minuteB },
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
      title: 'Breakfast reminder successfully set',
      buttons: ['OK']
    });
    alert.present();
   this.breakfast = {description:'', date:'', time:'' };
  }

  notificationEatLunch() {
    const hourL = this.lunch.time.split(":")[0];
    const minuteL = this.lunch.time.split(":")[1];

    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 6,
        text: "Time for lunch!" + this.lunch.description,
        trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.DAY, hour: hourL, minutes: minuteL},
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
      title: 'Lunch reminder successfully set',
      buttons: ['OK']
    });
    alert.present();
   this.lunch = {description:'', date:'', time:'' }
  }
 
  notificationEatDinner(){
    const hourD = this.dinner.time.split(":")[0];
    const minuteD = this.dinner.time.split(":")[1];

    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 7,
        text: "Time for dinner!" + this.dinner.description,
        trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.DAY, hour: hourD, minutes: minuteD },
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
      title: 'Dinner reminder successfully set',
      buttons: ['OK']
    });
    alert.present();
   this.dinner = {description:'', date:'', time:'' };
  }
  
  
  getAll() {
    this.localNotifications.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
    })
  }

  breakfastAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`breakfast/${auth.uid}`).push(this.breakfast)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }

  lunchAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`lunch/${auth.uid}`).push(this.lunch)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }

  dinnerAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`dinner/${auth.uid}`).push(this.dinner)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }


}