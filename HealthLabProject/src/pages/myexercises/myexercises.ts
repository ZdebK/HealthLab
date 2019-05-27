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
    },
    {
      title: 'Trening brzucha',
      video: 'https://www.youtube.com/embed/LKO1yzvtK9s',
    },
    {
      title: 'Trening funkcjonalny',
      video: 'https://www.youtube.com/embed/Die0oESBhyE',
    },
    {
      title: 'Martwy ciąg',
      video: 'https://www.youtube.com/embed/0_igODjLiXM',
    },
    {
      title: 'Podciąganie',
      video: 'https://www.youtube.com/embed/olxgbxHIHTY',
    },
    {
      title: 'Wyciskanie sztangi',
      video: 'https://www.youtube.com/embed/bbGuHx07EDc',
    },
    {
      title: 'Przysiad',
      video: 'https://www.youtube.com/embed/NEduXlZ8zSk',
    },
  ]

  constructor(public navCtrl: NavController){

  }
}