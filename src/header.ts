import {Component} from 'angular2/core';

@Component({
    selector: 'header',
    template: `
          <div class="h1">
         <h1 >{{name}}<h1>
         <div>   
     `
})
export class header {
    name: string = 'Countries & capitals';
}