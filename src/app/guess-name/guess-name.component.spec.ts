/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuessNameComponent } from './guess-name.component';

describe('GuessNameComponent', () => {
  let component: GuessNameComponent;
  let fixture: ComponentFixture<GuessNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
