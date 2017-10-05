import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    //Encapsulating component styles - Start
    //Both styles & styleUrls properties are array, so we can add multiple seperated by commas
    //styles: ['thead {color:#337AB7}']
    styleUrls: ['./product-list.component.css']
    //Encapsulating component styles - End
})

/*
    Improving Components
        Strong typing & interfaces
        Encapsulating styles
        Lifecycle hooks
            OnInit - Perform component initiazliation, retrieve data
            OnChanges - Perform action after change to input properties
            OnDestroy - Perform cleanup
        Custom pipes
        Nested components
*/

export class ProductListComponent implements OnInit{
    
        //constructor to setup default values of properties
        //Dependency injection should be done in constructor
        /*
            private _productService;
            constructor(productService: ProductService){
                _productService = productService;
            }
        */
        //Below code is the shorthand syntax provided by typescript for the above code
        constructor(private _productService: ProductService){
        }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMsg: string;

    //listFilter: string = 'cart';
    //Private variable with getter & setter
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[] = [];

    //TypeScript allows 'any' datatype
    //products: any[] = [
    products: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //ngOnInit is a method in OnInit interface that needs to be implemented here
    ngOnInit(): void {
        //console.log('In OnInit');
        //Service method is called in onInit method
        //Subscribing to an Observable
        //  x.them(valueFn, errorFn) - This is promise usually
        //  x.subscribe(valueFn, errorFn) - This is observable
        //  x.subscribe(valueFn, errorFn, completeFn)
        //  len sub = x.suscribe(valueFn, errorFn, completeFn) - this option is used when we need to provide
        //          an option to user to cancel the request
    this._productService.getProducts()
                        .subscribe(products => {
                            this.products = products;
                            this.filteredProducts = this.products;
                        },
                            error => this.errorMsg = <any>error //Casting error to any datatype
                        );
        
    }

    //Custom Filter
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        //ES2015 arrow syntax to define filter function
        return this.products.filter((product: IProduct) =>
                                    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List : ' + message;
    }
}