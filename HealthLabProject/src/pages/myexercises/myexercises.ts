import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'myexercises',
  templateUrl: 'myexercises.html'
})
export class MyExercisesPage {

  videos: any[] = [
    {
      title: 'Ćwiczenia wzmacniające kręgosłup',
      video: 'https://www.youtube.com/embed/w33yS-OWRR4',
    },
    {
      title: '5 prostych ćwiczeń',
      video: 'https://www.youtube.com/embed/sDwxXZgfYfQ',
    }
  ]

  constructor(public navCtrl: NavController){

  }
}