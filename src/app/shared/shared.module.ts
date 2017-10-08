import { NgModule } from '@angular/core';
//For ngFor & ngIf
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./star.component";
import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
