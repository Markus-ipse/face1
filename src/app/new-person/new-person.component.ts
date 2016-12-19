import {Component, Output, EventEmitter, HostBinding} from '@angular/core';
import {Person} from '../person';

const inActiveClasses = 'column is-one-third-mobile is-one-quarter-tablet';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent  {
  model = new Person(null, '', '', '');

  submitted = false;
  isActive = false;

  @Output() onSubmit = new EventEmitter<Person>();
  @HostBinding('class') classes = inActiveClasses;

  activate() {
    this.isActive = true;
    this.classes = 'modal is-active';
  }

  submit() {
    this.submitted = true;
    this.isActive = false;
    this.classes = inActiveClasses;
    this.onSubmit.emit(this.model);
    this.model = new Person(null, '', '', '');
  }
}
