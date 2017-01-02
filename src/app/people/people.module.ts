import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { PeopleComponent } from './people.component';
import { NewPersonComponent } from '../new-person/new-person.component';
import { CardComponent } from './card/card.component';
import { PeopleService } from './people.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PeopleComponent,
    NewPersonComponent,
    CardComponent,
    ImageCropperComponent
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
