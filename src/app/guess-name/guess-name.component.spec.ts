/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuessNameComponent } from './guess-name.component';
import {Person} from '../person.model';
import {FormsModule} from '@angular/forms';
import { GameService } from './game.service';

class GameServiceSpy {
  testPerson = new Person(42, 'John Doe', 'someUrl');

  init = jasmine.createSpy('init').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => [Object.assign(this.testPerson)])
  );
}

describe('GuessNameComponent', () => {
  let component: GuessNameComponent;
  let fixture: ComponentFixture<GuessNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ GuessNameComponent ]
    })
      .overrideComponent(GuessNameComponent, {
        set: {
          providers: [
            { provide: GameService, useClass: GameServiceSpy }
          ]
        }
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
