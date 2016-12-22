import {Component, Input} from '@angular/core';
import {Person} from '../../person';

@Component({
  selector: 'f1-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() person: Person;

  constructor() { }

}
