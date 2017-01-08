import { Component, Output, EventEmitter, HostBinding, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
  cropperReady = false;
  noImgDataUrl = noImgDataUrl;

  @Output() submitted = new EventEmitter<Person>();
  @HostBinding('class') classes = inactiveClasses;

  @ViewChild('canvasContainer') elementView: ElementRef;

  constructor() {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 600;
    this.cropperSettings.croppedHeight = 600;

    this.data = {};

  }

  onActivate() {
    this.isActive = true;
    this.classes = 'modal is-active';

    setTimeout(() => this.setCanvasSize(), 10);
  }

  onCancel() {
    this.isActive = false;
    this.cropperReady = false;
    this.classes = inactiveClasses;
  }

  onSubmit() {
    this.isActive = false;
    this.cropperReady = false;
    this.classes = inactiveClasses;
    this.model.imgUrl = this.data.image;
    this.submitted.emit(this.model);
    this.model = new Person(null, '', '', []);
  }

  setCanvasSize() {
    const width = this.elementView.nativeElement.offsetWidth;
    const height = window.innerHeight * 0.6;
    const size = Math.min(width, height);

    this.cropperSettings.canvasWidth = size;
    this.cropperSettings.canvasHeight = size;
    this.cropperReady = true;
  }
}
