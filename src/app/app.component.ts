//Import - Allows us to use exported members from external ES modules/angular modules
import { Component } from '@angular/core';
//Eg. @angular/core, @angular/animate, @angular/http, @angular/router

import { ProductService } from './products/product.service';

//Metadata - Start
//A class becomes a component when we define a metadata
//Decorator - A function that adds metadata to a class, its members or its arguments. Prefixed with @. Eg.@Component()
@Component({
  //selector defines a directive name. A directive is a custom HTML tag.
  selector: 'pm-root',
  //Template - Start
  //Inline Template - Single line can be given in double quotes ("") but multiple lines should be given in backtick (``)
  //Binding - Coordinates communication between the component's class & its template & often involves passing data
  //Binding syntax is always defined in the template
  //{{}} - Interpolation/Template Expression - One way binding from class property to template so the value can shows up here
  //Interpolation can be used in many operations like given below
  //  concatenation - {{'Title: ' + pageTitle}}
  //  calcuations - {{2*20+1}}
  //  call class methods - {{'Title: ' + getTitle()}}
  //  element property assignments - <h1 innerText={{pageTitle}}></h1>
  template: `
    <!--<div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>-->
    <div>
      <nav class='navar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
  `//,//Backtick (Not Quotes)
  //Linked Template
  //templateUrl: './app.component.html',
  //Template - End
  //styleUrls: ['./app.component.css']
  //providers: [ProductService]
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
