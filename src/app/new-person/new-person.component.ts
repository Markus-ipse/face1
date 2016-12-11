import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'f1-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  model = new Person(5, '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
