import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
 
@Injectable()
export class Countryervice {
 
  constructor( private http:Http) {
       this.http = http;
   }
 
  // Uses http.get() to load a single JSON file 
  // Use this link for web service api https://restcountries.eu/rest/v1/all
  getCountries() {
    return this.http.get('./src/countries.json').map((res:Response) => res.json())
 }
}
 
