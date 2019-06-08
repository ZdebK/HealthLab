import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotification} from '@ionic-native/local-notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
//import { Liquid } from '../../models/liquid';
 
@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  liquid = { title:'', description:'', date:'', time:'' };
  liquidDaily =  {description:'', day:'',date: '' , time:'' };
  sas : Date;
  scheduled: ILocalNotification[];
 
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private localNotifications: LocalNotifications, private alert: AlertController, private platform: Platform){
  }
 
  singleUseNotificationWater(){
    const yr = new Date(this.liquid.date).getFullYear(); 
    const mnth = new Date(this.liquid.date).getMonth();
    const dat = new Date(this.liquid.date).getDate();
    const hourL = this.liquid.time.split(":")[0];
    const minuteL = this.liquid.time.split(":")[1];

    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 1, 
        text: "Drink glass of water :)\n" + this.liquid.description,
        trigger: {at: new Date(yr, mnth, dat), hour: hourL, time: minuteL},
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
          title: 'Single Reminder successfully set',
          buttons: ['OK']
        });
    alert.present();
    this.liquid = { title:'', description:'', date:'', time:'' };
  }
 
  dailyNotificationWater(){
    const hourLD = this.liquidDaily.time.split(":")[0];
    const minuteLD = this.liquidDaily.time.split(":")[1];
    
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        id: 2,
        text: "Drink glass of water :)\n" + this.liquidDaily.description,
        trigger: { firstAt : new Date(), every: ELocalNotificationTriggerUnit.DAY, hour: hourLD, minutes: minuteLD },
        led: 'FF0000',
        sound: 'file://assets/audio/message.mp3',
      });
    });
    let alert = this.alert.create({
      title: 'Daily Reminder successfully set',
      buttons: ['OK']
    });
    alert.present();
  }

  getAll() {
    this.localNotifications.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
    })
  }

  singleNotiAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`liquid/${auth.uid}`).push(this.liquid)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }

  dailyNotiAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`liquidDaily/${auth.uid}`).push(this.liquidDaily)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }

}