/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { Person } from '../person.model';
import { PeopleService } from '../people.service';

class PeopleServiceSpy {
  testPerson = new Person(42, 'John Doe', 'someUrl');

  getPeople = jasmine.createSpy('init').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => [Object.assign(this.testPerson)])
  );
}

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameService,
        { provide: PeopleService, useClass: PeopleServiceSpy}
      ]
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
