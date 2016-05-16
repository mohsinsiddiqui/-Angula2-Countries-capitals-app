import {Component} from 'angular2/core';
import {RouterLink}  from 'angular2/router';
 
@Component({
    selector: 'footer',
    template:
     `
     <center>
     <div class="btn_btn">
     <button (clicl) = "hide()" class="button" [routerLink]="['/Home']"  id="btn1" >Home</button>
      <button  class="button " [routerLink]="['/Countries']" >Browse Countries</button>
     </div>
     </center>
    `,
    directives:[RouterLink]
})
export class Footer {

   

}