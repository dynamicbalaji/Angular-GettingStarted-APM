//Import - Allows us to use exported members from external ES modules/angular modules
import { Component } from '@angular/core';
//Eg. @angular/core, @angular/animate, @angular/http, @angular/router

//Metadata - Start
//A class becomes a component when we define a metadata
//Decorator - A function that adds metadata to a class, its members or its arguments. Prefixed with @. Eg.@Component()
@Component({
  //selector defines a directive name. A directive is a custom HTML tag.
  selector: 'pm-root',
  //Template - Start
  //Inline Template - Single line can be given in double quotes ("") but multiple lines should be given in backtick (``)
  template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
  `//Backtick (Not Quotes)
  //Linked Template
  //templateUrl: './app.component.html',
  //Template - End
  //styleUrls: ['./app.component.css']
})
//Notice there is no semicolon here after ).
//Metadata - End

//Class - Start
//As this file is exporting something, it is an ES2015 module
export class AppComponent {
  //Property
  //title = 'Angular: Getting Started';
  pageTitle: string = 'Acme Product Management';
}
//Class - End
