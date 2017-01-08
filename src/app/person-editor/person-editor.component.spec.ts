/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonEditorComponent } from './person-editor.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperComponent } from 'ng2-img-cropper';

describe('PersonEditorComponent', () => {
  let component: PersonEditorComponent;
  let fixture: ComponentFixture<PersonEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [
        PersonEditorComponent,
        ImageCropperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
