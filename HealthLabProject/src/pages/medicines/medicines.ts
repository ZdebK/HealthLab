import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersDrugsProvider} from '../../providers/providers-drugs/providers-drugs';
import { Observable } from 'rxjs';

import {Result} from '../../providers/providers-drugs/providers-drugs';
// import { Injectable } from '@angular/core';
import 'rxjs/Rx'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
 

@Component({
  selector: 'medicines',
  templateUrl: 'medicines.html'
})

export class MedicinesPage{

  drug :any;
  results: any;

  something:  Observable<Result[]>;
  medicineName: string;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private drugsProvider: ProvidersDrugsProvider) {
  }
      
  search(){
    this.something = this.drugsProvider.getDetails(this.medicineName).map(e => e);
    console.log(this.something[0]);

    return this.something;
  }
  drugAdd () {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`medicineName/${auth.uid}`).push(this.medicineName)
      //.then(() => this.navCtrl.push('HomePage'));
    })
  }

}