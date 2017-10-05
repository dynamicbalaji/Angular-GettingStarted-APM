import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

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

    //Data to be passed from Nested component to Container component - @Output EVENT
    //Output decorator can be used to decorate any property of the nested component - property type must be an event
    //This is the only way that a nested component can pass data to its container
    //The data to pass becomes the event payload
    //In Angular, an event is defined wih an event emitter object - it can be an instance of any datatype
    @Output() ratingClicked: EventEmitter<string>
                    = new EventEmitter<string>();


    onClick(): void {
        //ES2015 back ticks to define a template string
        console.log(`The rating ${this.rating} clicked`);
        //We are passing a string in this emit method, so the EventEmitter is having generic as string
        this.ratingClicked.emit(`The rating ${this.rating} clicked`);
    }

    ngOnChanges(): void {
        //86 is the width of the star div width in html
        //5 is the max number of stars that will be displayed
        this.starWidth = this.rating * 86/5;
    }
}