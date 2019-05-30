import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'myexercises',
  templateUrl: 'myexercises.html'
})
export class MyExercisesPage {

  videos: any[] = [
    {
      title: 'Legs workout with Mariusz Pudzianowski',
      video: 'https://www.youtube.com/embed/hEJ6HZX6pTY',
    },
    {
      title: '5 Simple Exercises to Build Back',
      video: 'https://www.youtube.com/embed/x9jAiBG--KA',
    },
    {
      title: '10 Min Abs Workout',
      video: 'https://www.youtube.com/embed/1919eTCoESo',
    },
    {
      title: 'Basic Functional Training',
      video: 'https://www.youtube.com/embed/NX8lRmIsHLE',
    },
    {
      title: 'Exercises to strengthen back',
      video: 'https://www.youtube.com/embed/TGI5TFnY8Ck',
    },
    {
      title: 'Biceps Workout',
      video: 'https://www.youtube.com/embed/gozU3CUIizs',
    },
    {
      title: 'Bench Press',
      video: 'https://www.youtube.com/embed/rT7DgCr-3pg',
    },
    {
      title: 'Squat',
      video: 'https://www.youtube.com/embed/bEv6CCg2BC8',
    },
  ]

  constructor(public navCtrl: NavController){

  }
}
