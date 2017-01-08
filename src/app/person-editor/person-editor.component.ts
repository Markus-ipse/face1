import {
  Component, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { CropperSettings } from 'ng2-img-cropper';
import { Person } from '../person.model';

@Component({
  selector: 'f1-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements AfterViewInit {
  model = new Person(null, '', '', []);
  data: any;
  cropperSettings: CropperSettings;
  cropperReady = false;

  @Output() submitted = new EventEmitter<Person>();

  @ViewChild('canvasContainer') elementView: ElementRef;

  constructor(private changeDetectionRef: ChangeDetectorRef) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 600;
    this.cropperSettings.croppedHeight = 600;

    this.data = {};
  }

  ngAfterViewInit() {
    this.setCanvasSize();
  }

  onCancel() {
    this.cropperReady = false;
    this.submitted.emit();
  }

  onSubmit() {
    this.cropperReady = false;
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

    // https://github.com/angular/angular/issues/6005#issuecomment-195991516
    this.changeDetectionRef.detectChanges();
  }

}
