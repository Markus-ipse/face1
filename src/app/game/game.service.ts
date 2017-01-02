import { Injectable } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Person } from '../person.model';

const normalize = (str: string) => str ? str.trim().toLocaleLowerCase() : '';

@Injectable()
export class GameService {
  peopleToGuess: Person[] = [];
  correctlyGuessedPeople: Person[] = [];
  currentPerson: Person;
  allCorrectlyGuessed = false;

  constructor(private peopleService: PeopleService) { }

  init() {
    return this.peopleService.getPeople()
      .then(people => {
        this.currentPerson = people.shift();
        this.peopleToGuess = people;
      });
  }

  guessName(guess) {
    const isCorrectGuess = normalize(guess) === normalize(this.currentPerson.name);

    if (isCorrectGuess) {
      this.correctlyGuessedPeople.push(this.currentPerson);

      if (this.peopleToGuess.length > 0) {
        this.currentPerson = this.peopleToGuess.shift();
      } else {
        this.allCorrectlyGuessed = true;
      }

    }
  }

}
