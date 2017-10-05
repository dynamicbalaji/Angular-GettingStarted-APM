//AppModule - Organization, Boundaries & Template resolution environment
//Organization - organize application into cohesive blocks of functionality
//Boundaries - provide boundaries within the application
//Template resolution environment - When the Angular compiler sees a directive in a template, it looks to the
//  Angular module for the definition so we declare the AppComponent in an Angular module so the compiler
//  can find it
//We also use the module to bootstrap our startup component, which is AppComponent
//We want our app to work correctly in browser, so we add Angular's browser module in Angular module's import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//for ngModel
import { FormsModule } from "@angular/forms";
//for http service calls
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";

@NgModule({
  //For @NgModule decorator, the properties are arrays
  //declarations array - defines which of our components/pipes belong to this module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  //imports array - defines the external modules that we want to have available to all of the components
  //that belong to this module
  //BrowserModule - every browser application must import
  //Browser module register is important to application service providers such as error handling
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  //providers array - defines the services
  providers: [],
  //bootstrap array - defines the startup component of the application
  //Startup component should have the selector (eg. pm-root) that we use in index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
