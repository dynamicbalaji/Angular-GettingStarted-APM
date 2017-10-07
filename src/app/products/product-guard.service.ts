import { Injectable } from '@angular/core';
/*
  Protecting routes with Guards (restricting access for some users/asking user to confirm a navigation
  operation such as asking whether to save before navigating away from the page)
    CanActivate - Guard navigation to a route
    CanDeactivate - Guard navigation from a route
    Resolve - Pre-fetch the data before activating a route
    CanLoad - Prevent asynchronous routing
*/
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

 constructor(private _router: Router) { }

 //For simple cases, we are returing boolen. For complex cases, we can return obervable/promise
 canActivate(route: ActivatedRouteSnapshot): boolean {
  //Input will come in ActivatedRouteSnapshot is 'product/10', we need second object in array
  let id = +route.url[1].path;
  if(isNaN(id) || id < 1){
    alert('Invalid product id');
    this._router.navigate(['/products']);
    return false;
  }
  return true;
}

}
