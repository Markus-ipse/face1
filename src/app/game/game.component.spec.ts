/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameComponent } from './game.component';
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

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ GameComponent ]
    })
      .overrideComponent(GameComponent, {
        set: {
          providers: [
            { provide: GameService, useClass: GameServiceSpy }
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
