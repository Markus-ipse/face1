import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ImageCropperComponent } from 'ng2-img-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { InMemoryPeopleDataService } from './people-data';
import { NewPersonComponent } from './new-person/new-person.component';
import { CardComponent } from './people/card/card.component';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    NewPersonComponent,
    CardComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryPeopleDataService),
    AppRoutingModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
