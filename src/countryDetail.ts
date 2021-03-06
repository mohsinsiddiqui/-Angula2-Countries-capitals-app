import { Component, Input  } from 'angular2/core';
import {Country} from './country.model';
import {CountriesComponent} from './Contrynames';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
@Component({
    selector: 'detail',
    template: `
   
       <div *ngIf="countries" class="animated fadeIn" id="div_des">    
     <center> 
    
    <button  class="button" (click) = "classChnage()"  id="btn2">Back</button>
    
      <div  class="div_des" *ngIf="countries" >
        <h2>{{countries.name}}</h2> <br>
         <p class="p"> Population of country:</p> <span class="span">{{countries.population}}</span><br>
          <p class="p">Area:</p><span class="span">{{countries.area}}</span><br>
        <p class="p"> Capital: </p><span class="span">{{countries.capital}}</span><br>
        <p class="p">Language:</p><span class="span">{{countries.languages}}</span><br>
        <p class="p">Region:</p><span class="span">{{countries.region}}</span><br>
         <p class="p">Currencies:</p><span class="span">{{countries.currencies}}</span>
         <img class="img"  src="src/images/{{countries.name}}.png" onError="this.src='src/images/no_image_placeholder.png' "> 
     </div>
    
   
        </center>
    </div> 
    `  ,
   providers: [HTTP_PROVIDERS]
})// 
export class detail    {
   ele ;
   @Input() countries: Country;
  
     
classChnage(){
    
   
    this.ele = document.getElementById('div_des').className = "animated fadeOut"
       this.ele = document.getElementById('div_des').style.zIndex = "-4" ; 
}
classChnageBlock(){ 
    
    this.ele = document.getElementById('div_des').className = 'animated fadeIn'; 
   this.ele = document.getElementById('div_des').style.zIndex = "4" ; 
}

} 