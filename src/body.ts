import {Component} from 'angular2/core';

@Component({
    selector: 'body',
    template:
    
     `
      <center> 
      <div class="div_main">
       <p >{{desc}}<p>
       </div>
        </center>
       
    `
})
export class Body {
    desc: string = 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTMLs syntax to express your applications components clearly and succinctly. Angulars data binding and dependency injection eliminate much of the code you would otherwise have to write.';
}