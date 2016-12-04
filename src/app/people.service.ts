import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Person} from './person';

@Injectable()
export class PeopleService {
  private peopleUrl = 'app/people';

  constructor(private http: Http) {}

  getPeople(): Promise<Person[]> {
    return this.http.get(this.peopleUrl)
      .toPromise()
      .then(res => res.json().data as Person[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
