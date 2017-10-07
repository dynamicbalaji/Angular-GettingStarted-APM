import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  /*The selector property is only required if the component will be nested within another component.
    We won't need to nest this component; we'll instead display the component's view as part of the
      routing, so let's remove the selector.*/
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { 
    /*
      There are 2 different ways to get the parameter from route.
      1. Snapshot - if only need to get the initial value of the parameter
      2. Observable - if parameter will change without leaving the page For eg. If wee had a next button
          on the product detail page to display the next product, the URL will change to the next
          product's id so you'd want to use an observable instead.
    */
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    //The plus in JS shortcut to convert the parameter string to a numeric id
    let id = +this._route.snapshot.paramMap.get('id'); 
    this.pageTitle += `: ${id}`;
    console.log(this.pageTitle);
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  //For back button
  onBack(): void {
    this._router.navigate(['/products']);
  }

}
