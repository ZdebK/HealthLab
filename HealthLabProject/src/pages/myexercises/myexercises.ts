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
      video: 'https://www.youtube.com/watch?v=hEJ6HZX6pTY',
    },
    {
      title: '5 Simple Exercises to Lose Thigh Fat',
      video: 'https://www.youtube.com/watch?v=-RfsfNsp1vs',
    },
    {
      title: '10 Min Abs Workout',
      video: 'https://www.youtube.com/watch?v=1919eTCoESo',
    },
    {
      title: 'Basic Functional Training',
      video: 'https://www.youtube.com/watch?v=NX8lRmIsHLE',
    },
    {
      title: 'Exercises to strengthen back',
      video: 'https://www.youtube.com/watch?v=TGI5TFnY8Ck',
    },
    {
      title: 'Biceps Workout',
      video: 'https://www.youtube.com/watch?v=gozU3CUIizs',
    },
    {
      title: 'Bench Press',
      video: 'https://www.youtube.com/watch?v=vthMCtgVtFw',
    },
    {
      title: 'Barbell Squat',
      video: 'https://www.youtube.com/watch?v=1oed-UmAxFs',
    },
  ]

  constructor(public navCtrl: NavController){

  }
}