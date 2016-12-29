import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PeopleComponent} from './people/people.component';
import {InMemoryPeopleDataService} from './people-data';
import { NewPersonComponent } from './new-person/new-person.component';
import { CardComponent } from './people/card/card.component';
import { GuessNameComponent } from './guess-name/guess-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    NewPersonComponent,
    CardComponent,
    GuessNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryPeopleDataService),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
