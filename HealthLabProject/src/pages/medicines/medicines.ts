import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersDrugsProvider} from '../../providers/providers-drugs/providers-drugs';
import { Observable } from 'rxjs';

import {Result} from '../../providers/providers-drugs/providers-drugs';
// import { Injectable } from '@angular/core';
import 'rxjs/Rx'; 

@Component({
  selector: 'medicines',
  templateUrl: 'medicines.html'
})

export class MedicinesPage{

  drug :any;
  results: any;

  something:  Observable<Result[]>;
  medicineName: string;

  constructor(public navCtrl: NavController, private drugsProvider: ProvidersDrugsProvider) {
  }
      
  search(){
    this.something = this.drugsProvider.getDetails(this.medicineName).map(e => e);
    console.log(this.something[0]);

    return this.something;
  }
}