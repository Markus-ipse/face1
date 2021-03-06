/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewPersonComponent } from './new-person.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { SafeUrlPipe } from '../shared/safe-url.pipe';
import { PersonEditorComponent } from '../person-editor/person-editor.component';
import { FormsModule } from '@angular/forms';

describe('NewPersonComponent', () => {
  let component: NewPersonComponent;
  let fixture: ComponentFixture<NewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        NewPersonComponent,
        PersonEditorComponent,
        ImageCropperComponent,
        SafeUrlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
