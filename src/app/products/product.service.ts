//Services - A class with a focused purpose
//Used for features that:
//  Are independent from any particular component
//  Provide shared data or logic across components
//  Encapsulate external interactions

//Angular provides built-in injector and it maintains below services as singletons (single instances)
//  log, math & svc (service)
//Components can use these singletons in it without creating a seperate instance & that is called dependency injection
//Dependency Injection - A coding pattern in which a class receives the instances of objects it needs (called
//  dependencies) from an external source (Angular injector) rather than creating them itself.

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//For additional operator we are using with observable
//This kind of import statements which tells the module loader to load this library, but actually doesn't
//  import anything. When a library is loaded, its JS is executed & for this particular library,
//  executing the JS loads the operator.
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';

//@Injectable decorator is optional unless service has an injected dependency of its own i.e, some variables
//  in the constructor like constructor(private _var: object).
@Injectable()
export class ProductService {
    //As there is no service application available, we are using a json as an input here
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient){

    }

    //Unless marked private or protected, the properties & methods defined in the class is accessible to any
    //  class that uses this service.
    //Check rxmarbles.com to get more information about observables
    getProducts(): Observable<IProduct[]> {
        //do operator helps us to peak the response data without affecting the flow
        //catch operator will send the error to the method given in it for further proceedings
        return this._http.get<IProduct[]>(this._productUrl)
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }

}