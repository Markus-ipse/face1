import { Component, Output, EventEmitter } from '@angular/core';
import { Person, noImgDataUrl } from '../person.model';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent {
  isActive = false;

  noImgDataUrl = noImgDataUrl;

  @Output() submitted = new EventEmitter<Person>();

  onActivate() {
    this.isActive = true;
  }

  onSubmit(model) {
    this.isActive = false;

    if (model) {
      this.submitted.emit(model);
    }
  }

}
