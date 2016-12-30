/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComponent } from './card.component';
import {Person} from '../../person.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let expectedPerson: Person;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    expectedPerson = new Person(42, 'john', 'doe', 'someUrl');
    component.person = expectedPerson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
