import { Component, OnInit } from '@angular/core';
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

export class MedicinesPage implements OnInit {

  drug :any;
  results: any;
  searchTerm= 'ibuprofen';
  userList=[];
  reported_effects_keys:any;
  reported_effects: any;
  something:  Observable<Result[]>


  constructor(public navCtrl: NavController, private drugsProvider: ProvidersDrugsProvider) {
  }

  // ngOnInit(){
  //     this.drugsProvider.getDetails(this.searchTerm).subscribe((res) => {
  //       this.drug = res[ 'result' ][ 0 ];
  //       this.reported_effects_keys = Object.keys(this.drug[ 'side_effects' ][ 'reported_effects' ]);
  //       this.reported_effects = this.drug[ 'side_effects' ][ 'reported_effects' ];
  //       console.log('My result'+ this.drug);
  //     });
      
  // }

  ngOnInit(){
    this.something = this.drugsProvider.getDetails(this.searchTerm).map(e => e);
    console.log(this.something[0]);
  }

  search(){
    let newea = this.drugsProvider.getDetails(this.searchTerm);
    console.log(newea);

    this.drugsProvider.getDetails(this.searchTerm).subscribe(e => {
      this.results = e;
      console.log('My result'+ this.results);
    });
  }
}