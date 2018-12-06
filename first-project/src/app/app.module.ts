import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { NewmoduleModule } from './newmodule/newmodule.module';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    NewmoduleModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
