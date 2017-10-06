import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
