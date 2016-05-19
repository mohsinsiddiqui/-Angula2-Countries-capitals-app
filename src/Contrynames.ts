import {Component, Input, Injectable} from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Countryervice} from './service';
import {RouterLink}  from 'angular2/router';
 import {detail} from './countryDetail';
  import {Country} from './country.model';

// [routerLink]="['/Detail']"
@Component({
 
  selector: 'countriesName',
  template:`
     <center>
     <detail [countries]="selectedCountry"> </detail>
     
     <div *ngIf="ountries_error">An error occurred while loading the Data!</div>
   <div class="btn_div">
      <table style="width:60%">
  <caption>Countries Details</caption>
  <tr class="tr">
    <th>NAME</th>
    <th>CAPITAL</th>
    <th>AREA IN KM</th>
    <th>POPULATION</th>
    <th>REGION</th>
  </tr>
  <tr *ngFor="let country of countries"
  (click) = "onSelect(country)"
  [class.selected]="countries===selectedCountry">
  
   
    
  <td style="cursor:pointer"  col-span="2"  >
    {{country.name }}
    </td>
   <td col-span="2">
   {{country.capital }}
    </td>
   
    <td col-span="2">
  {{country.area }}
    </td>
    <td col-span="2">
   {{country.population }}
    </td>
     <td col-span="2">
   {{country.region  }}
    </td>
  </tr>

</table>
</div>
     
        </center>
 
  `,
   directives:[RouterLink,detail],
   providers:[detail]
  
 //
  
})

@Injectable()
export class CountriesComponent  {


 public ountries_error:Boolean = false;
countries: Country[];
selectedCountry: Country;
  constructor(private _Countryervice: Countryervice, private _detail: detail ) {}

   ngOnInit() {
    this.getCountries();
 
  }
 
 getCountries() {
     this._Countryervice.getCountries().subscribe(data => { this.countries  = data,
        console.log('data ', this.countries) 
       
       
    }),
      err => { this.ountries_error = true }
 
 }
 onSelect(country: Country){
   this.selectedCountry = country
    console.log('data ', country);
    this._detail.classChnageBlock();
    
 }
 
 

}
