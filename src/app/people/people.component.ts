import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'f1-people-list',
  templateUrl: 'people.component.html',
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {}

  getPeople(): void {
    this.peopleService.getPeople()
      .then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
