import {Component, Input} from '@angular/core';
import {Person} from '../../person.model';

@Component({
  selector: 'f1-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() person: Person;
  @Input() showTags: boolean;

  constructor() { }

}
