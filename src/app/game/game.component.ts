import { Component, OnInit } from '@angular/core';
import { nullPerson } from '../person.model';
import { GameService } from './game.service';

@Component({
  selector: 'f1-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {
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

