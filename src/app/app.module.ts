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
//for routing - registers router service, declares router directives, exposes configured routes (forRoot())
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  //For @NgModule decorator, the properties are arrays
  //declarations array - defines which of our components/pipes belong to this module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  //imports array - defines the external modules that we want to have available to all of the components
  //that belong to this module
  //BrowserModule - every browser application must import
  //Browser module register is important to application service providers such as error handling
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /*Angular supports HTML5 style urls eg. localhost:4200/products which doesn't require # to indicate
        local navigation. If we use this, then we need definer url rewriting in our web server.
      Angular supports non-HTML5 style urls also eg. localhost:4200/#/products which doesn't require any
        url rewriting in the web server. To enable this in angular routing, we need to add 'useHash: true'
        property in forRoot() method of RouterModule as given below
    */
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo:'welcome', pathMatch:'full' },
      { path: '**', redirectTo:'welcome', pathMatch:'full' } //Usually we will use this for 404
    ]//, {useHash: true}
    )
  ],
  //providers array - defines the services
  providers: [],
  //bootstrap array - defines the startup component of the application
  //Startup component should have the selector (eg. pm-root) that we use in index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
