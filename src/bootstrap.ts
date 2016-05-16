import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {CountriesComponent} from './Contrynames';
import {Countryervice} from './service';
import {Component} from 'angular2/core';
import {header} from './header';
import {Footer} from './footer';
import {Body} from  './body';
 import {Country} from './country.model';
import {detail} from  './countryDetail';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';



@Component({

  selector: 'app',
  template: `
  	<header></header>
    <router-outlet></router-outlet>
    
    <footer></footer>
  `,
  directives : [header,Body,Footer,detail,ROUTER_DIRECTIVES],
  //styleUrls:['styles.css'],
  providers:[ROUTER_PROVIDERS, HTTP_PROVIDERS, Countryervice]
   
  
})

@RouteConfig([
  {
    path: '/Home',
    name: 'Home',
    component: Body,
    useAsDefault: true
     
  },{
    path: '/Countries',
    name: 'Countries',
    component: CountriesComponent
     
  }
  ,{
    path: '/Detail',
    name: 'Detail',
    component: detail
     
  }
 
])

export class App {
 
}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));