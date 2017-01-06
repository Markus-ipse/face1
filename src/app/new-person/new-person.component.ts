import { Component, Output, EventEmitter, HostBinding } from '@angular/core';
import { CropperSettings } from 'ng2-img-cropper';
import { Person, noImgDataUrl } from '../person.model';

const inactiveClasses = 'column people-card';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent {
  model = new Person(null, '', '', []);
  isActive = false;
  data: any;
  cropperSettings: CropperSettings;
  noImgDataUrl = noImgDataUrl;

  @Output() submitted = new EventEmitter<Person>();
  @HostBinding('class') classes = inactiveClasses;

  constructor() {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 600;
    this.cropperSettings.croppedHeight = 600;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};

  }

  onActivate() {
    this.isActive = true;
    this.classes = 'modal is-active';
  }

  onCancel() {
    this.isActive = false;
    this.classes = inactiveClasses;
  }

  onSubmit() {
    this.isActive = false;
    this.classes = inactiveClasses;
    this.model.imgUrl = this.data.image;
    this.submitted.emit(this.model);
    this.model = new Person(null, '', '', []);
  }
}
