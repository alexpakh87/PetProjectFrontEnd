import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {fab}  from '@fortawesome/free-brands-svg-icons';
import { EquipmentCatalogComponent } from './components/equipment-catalog/equipment-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
@NgModule({
  declarations: [AppComponent,
     EquipmentCatalogComponent,
      CartComponent,
       UserListComponent,
      UserSignupComponent],
  imports: [BrowserModule,
     FontAwesomeModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);


  }
}







