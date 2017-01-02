import { Component, OnInit } from '@angular/core';
import { nullPerson } from '../person.model';
import { GameService } from './game.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'f1-guess-name',
  templateUrl: './guess-name.component.html',
  styleUrls: ['./guess-name.component.css'],
  providers: [PeopleService, GameService]
})
export class GuessNameComponent implements OnInit {
  personToGuess = nullPerson;
  allCorrectlyGuessed = false;

  constructor(private gameService: GameService) {  }

  getPeople() {
    this.gameService.init()
      .then(() => this.personToGuess = this.gameService.currentPerson);
  }

  guessName(guess) {
    this.gameService.guessName(guess);
    this.personToGuess = this.gameService.currentPerson;
    this.allCorrectlyGuessed = this.gameService.allCorrectlyGuessed;
  }

  ngOnInit(): void {
    this.getPeople();
  }

}

