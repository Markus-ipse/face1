import {Component, Output, EventEmitter, HostBinding} from '@angular/core';
import {Person} from '../person';

const inactiveClasses = 'column is-one-third-mobile is-one-quarter-tablet';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent  {
  model = new Person(null, '', '', '');

  isActive = false;

  @Output() submitted = new EventEmitter<Person>();
  @HostBinding('class') classes = inactiveClasses;

  activate() {
    this.isActive = true;
    this.classes = 'modal is-active';
  }

  cancel() {
    this.isActive = false;
    this.classes = inactiveClasses;
  }

  submit() {
    this.isActive = false;
    this.classes = inactiveClasses;
    this.submitted.emit(this.model);
    this.model = new Person(null, '', '', '');
  }
}
