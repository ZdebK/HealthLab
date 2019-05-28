import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersDrugsProvider} from '../../providers/providers-drugs/providers-drugs';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
import 'rxjs/Rx'; 

@Component({
  selector: 'medicines',
  templateUrl: 'medicines.html'
})

export class MedicinesPage implements OnInit {

  results :any;
  searchTerm= 'ibuprofen';

  constructor(public navCtrl: NavController, private drugsProvider: ProvidersDrugsProvider) {
  }

  ngOnInit(){
      this.drugsProvider.getDetails(this.searchTerm).subscribe(e =>{
        this.results = e;
        console.log('My result'+ this.results);
      });
      
  }
}