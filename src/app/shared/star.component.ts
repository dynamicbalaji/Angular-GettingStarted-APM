import {Component, OnChanges} from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    rating: number = 3;
    starWidth: number;

    ngOnChanges(): void {
        //86 is the width of the star div width in html
        //5 is the max number of stars that will be displayed
        this.starWidth = this.rating * 86/5;
    }
}