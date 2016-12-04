import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryPeopleDataService implements InMemoryDbService {
  createDb() {
    const people = [
      {
        id: 1,
        firstName: 'Ned',
        lastName: 'Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg'
      },
      {
        id: 2,
        firstName: 'Catelyn',
        lastName: 'Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/Catelyn_Stark-Michelle_Fairley_S3.jpg'
      },
      {
        id: 3,
        firstName: 'Sansa',
        lastName: 'Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/SophieTurnerasSansaStark.jpg'
      }
    ];

    return {people};
  }
}
