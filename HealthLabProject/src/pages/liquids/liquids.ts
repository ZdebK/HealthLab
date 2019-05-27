import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications, LocalNotificationsOriginal } from "@ionic-native/local-notifications";


@Component({
  selector: 'liquids',
  templateUrl: 'liquids.html'
})
export class LiquidsPage {
  
  constructor(private localNotifications: LocalNotificationsOriginal) {
  }

  

}