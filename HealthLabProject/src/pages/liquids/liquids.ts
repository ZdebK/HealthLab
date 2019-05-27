import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  scheduled = [];
  
  constructor(public alertCtrl: AlertController, 
    private localNotifications: LocalNotifications,
     private plt: Platform) {
    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
      this.localNotifications.on('trigger').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    });
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'cos tam',
      text: 'cos tam2',
      data: { mydata: 'cos specjalnego'},
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      foreground: true
    });
  }

  recurringNotification() {
    this.localNotifications.schedule({
      id: 22,
      title: 'drugie',
      text: 'drugie2',
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE }
      //foreground: true
    });
  }

  repeatingDialy() {
    this.localNotifications.schedule({
      id: 42,
      title: 'trzecie',
      text: 'trzecie2',
      trigger: { every: { hour: 11, minute: 50} },
    });
  }

  getAll() {
    this.localNotifications.getAll().then(res => {
      this.scheduled = res;
    })
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header;
      subHeader: sub,
      message: msg, 
      buttons: ['Ok']
    }).then(alert => alert.present());
  }
  

}