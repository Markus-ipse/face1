import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'f1-people-list',
  templateUrl: './people.component.html',
  providers: [PeopleService],
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {}

  getPeople(): void {
    this.peopleService.getPeople()
      .then(people => this.people = people);
  }

  onAddPerson(person: Person): void {
    this.peopleService.create(person.firstName, person.lastName, person.imgUrl)
      .then(p => this.people.push(p));
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
