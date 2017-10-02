/*
Interface 
    A specification identifying a related set of properties & methods
    A class commits to supporting the specification by implementing the interface
    Use interface as a datatype
    ES5 & ES2015 do not support interfaces, but TypeScript does. So interfaces are 
        transpiled out & are not found in the resulting JS. This means interfaces
        are development time only
*/
export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

/*
In general, we only create a business object class if that class provides some
functionality that we want to use throughout our application such as this calcuateDiscount
method.
*/

/*export class Product implements IProduct{
    constructor(public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string){

    }

    calculateDiscount(percent: number): number{
        return this.price - (this.price * percent / 100);
    }
}*/