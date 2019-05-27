import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchType {
  results = 'results',
  warnings = 'warnings',
  all = "all"
}
/*
  Generated class for the ProvidersDrugsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersDrugsProvider {

  url = 'https://dictionaryapi.com/';
  apiKey= 'a7d37e5d-d654-4159-bc4a-8277221e2ec1';
  drugName = 'desloratadine';

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersDrugsProvider Provider');
  }

  searchData(type: SearchType): Observable<any>{
      return this.http.get(`${this.url}api/v1/references/medical/xml/"${this.drugName}"?key=${this.apiKey}.text`).map(e => e['dt']);
  }

  getDetails(drugName: string): Observable<any>{
    return this.http.get(`https://api.fda.gov/drug/label.json?search=active_ingredient:${drugName}`).map(e => e.toString());

  }

}
