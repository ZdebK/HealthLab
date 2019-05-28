import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// export interface SearchType {
//     meta = '';
//     results : results2[];
//   }

//   export interface results2[] {
//       effective_time: string ;
//       purpose: string;
//       keep_out_of_reach_of_children: string;
//       warnings:string;
//       ask_doctor: string;
//     }
     
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

  // searchData(type: SearchType): Observable<SearchType>{
      
  //     const a = this.http.get(`${this.url}api/v1/references/medical/xml/"${this.drugName}"?key=${this.apiKey}.text`)[0];
  //     console.log(a);
  //     return a;
  // }

  getDetails(drugName: string){
      return this.http.get(`https://api.fda.gov/drug/label.json?search=active_ingredient:${drugName}`).pipe(
      map(results => {
       results;
      })
    );    

  }
  
}
