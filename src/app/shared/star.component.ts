import {Component, OnChanges, Input} from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    //This will receive input from the place where this component is used in the template
    //Input decorator is a function so (), it doesn't need any arguments
    //Data to be passed from Container component to Nested component - @Input PROPERTY
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        //86 is the width of the star div width in html
        //5 is the max number of stars that will be displayed
        this.starWidth = this.rating * 86/5;
    }
}