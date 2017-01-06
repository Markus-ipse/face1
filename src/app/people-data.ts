import {InMemoryDbService} from 'angular-in-memory-web-api';

interface Person {
  id: number;
  name: string;
  imgUrl: string;
  tags: string[];
}

export class InMemoryPeopleDataService implements InMemoryDbService {
  createDb() {
    const people: Person[] = [
      {
        id: 1,
        name: 'Ned Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg',
        tags: ['Game of Thrones', 'Season 1']
      },
      {
        id: 2,
        name: 'Catelyn Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/Catelyn_Stark-Michelle_Fairley_S3.jpg',
        tags: ['Game of Thrones', 'Season 1', 'Woman', 'House of Stark', 'Matriarch', 'Dead']
      },
      {
        id: 3,
        name: 'Sansa Stark',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/SophieTurnerasSansaStark.jpg',
        tags: ['Game of Thrones', 'Season 1', 'Woman', 'House of Stark', 'Some really really long text']
      },
      {
        id: 4,
        name: 'Stannis Baratheon',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/05/Stannis_Baratheon-Stephen_Dillane.jpg',
        tags: ['Game of Thrones', 'Season 2']
      },
      {
        id: 5,
        name: 'Melisandre',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/80/Melisandre-Carice_van_Houten.jpg',
        tags: ['Game of Thrones', 'Season 2']
      },
      {
        id: 6,
        name: 'Davos Seaworth',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Davos_Seaworth-Liam_Cunningham.jpg',
        tags: ['Game of Thrones', 'Season 2']
      }
    ];

    return {people};
  }
}
