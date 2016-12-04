import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import {PeopleComponent} from './people.component';
import {InMemoryPeopleDataService} from './people-data';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryPeopleDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
