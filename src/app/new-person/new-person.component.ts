import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  model = new Person(null, '', '', '');

  submitted = false;
  @Output() onSubmit = new EventEmitter<Person>();

  submit() {
    this.submitted = true;
    this.onSubmit.emit(this.model);
  }

  ngOnInit(): void {}
}
