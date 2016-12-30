import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Person} from './person.model';

@Injectable()
export class PeopleService {
  private peopleUrl = 'app/people';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) {}

  getPeople(): Promise<Person[]> {
    return this.http.get(this.peopleUrl)
      .toPromise()
      .then(res => res.json().data as Person[])
      .catch(this.handleError);
  }

  create(firstName: string, lastName: string, imgUrl: string): Promise<Person> {
    return this.http
      .post(this.peopleUrl, JSON.stringify({firstName, lastName, imgUrl}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
