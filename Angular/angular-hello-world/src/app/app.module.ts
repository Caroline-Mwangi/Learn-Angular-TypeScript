import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

// Decorator adds metadata to the App Module

@NgModule({

  /* Declarations specify the components defined in the App Module.
    Components have to be declared in a NgModule before using them in templates.  
  */

  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
  ],

  /* Imports describes the dependencies the module has.
      + BrowserModule: Because it is a browser app.
      + If the module depends on other modules, they are listed on imports.
    Imports contains things that will be used in the templates or with dependency injection. */

  imports: [BrowserModule, AppRoutingModule],

  /* Providers are used during dependency injection to make a service available to 
    be injected throughout the application. 
  */

  providers: [provideClientHydration()],

  /* Bootstrap tells Angular when the module is used to bootstrap an app.
    The App Component is loaded as the top-level component */

  bootstrap: [AppComponent],
})
export class AppModule {}

/* Angular module system: NgModule
    + When an Angular app is booted, an NgModule is created which points 
    to the component you want to load.
*/
