import { NgModule } from '@angular/core';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { PeopleComponent } from './people.component';
import { NewPersonComponent } from '../new-person/new-person.component';
import { CardComponent } from './card/card.component';
import { PeopleService } from './people.service';
import { SharedModule } from '../shared/shared.module';
import { PersonEditorComponent } from '../person-editor/person-editor.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PeopleComponent,
    NewPersonComponent,
    CardComponent,
    ImageCropperComponent,
    PersonEditorComponent
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
