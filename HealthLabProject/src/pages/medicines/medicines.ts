import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersDrugsProvider, SearchType } from '../../providers/providers-drugs/providers-drugs';
import { Observable } from 'rxjs';

@Component({
  selector: 'medicines',
  templateUrl: 'medicines.html'
})
export class MedicinesPage {

  results: Observable<any>;
  searchTerm= 'ibuprofen';
  type: SearchType = SearchType.all;

  constructor(public navCtrl: NavController, private drugsProvider: ProvidersDrugsProvider) {

  }

  search(){
    this.results = this.drugsProvider.getDetails(this.searchTerm);
    console.log('My result'+ this.results);
  }
}