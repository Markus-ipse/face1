export class Person {
  public tags: Set<string>;

  constructor(
    public id: number,
    public name: string,
    public imgUrl: string,
    tags: string[]
  ) {
    this.tags = new Set(tags);
  }
}
// tslint:disable-next-line:max-line-length
export const noImgDataUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj4gIDxwYXRoIGQ9Ik0xMDQuNyA1Ni43Yy0yLjUgMjQtMTEuNiA0MC42LTMwLjMgNDAuNi0xOC44IDAtMjcuNC0xNS0zMC4zLTQwQzQxLjcgMzUgNTUuNyAxNS44IDc0LjUgMTUuOGMxOC43IDAgMzIuNCAxOC41IDMwLjMgNDF6IiBmb250LXNpemU9IjEyIiBmaWxsPSIjY2NjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4gIDxwYXRoIGQ9Ik05Mi42IDg5LjZjLTEuOCA0LTMuMiAxMyAyLjMgMTcuMyA5IDcuMyAxMS43IDkuNSAyMy4zIDEyIDI1LjcgNS40IDIzLjMgMTkuMiAyOC4yIDMwLjJINC4zYzQuMi0xMC41IDIuMi0yNC40IDI4LTMwLjhDNDIgMTE2IDQ1LjggMTE0IDUzLjcgMTA3YzUtNC4zIDQtMTMgMi44LTE3LjctNC0uNSAzNy44LTEuMiAzNi4yLjN6IiBmaWxsPSIjY2NjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=';

export const nullPerson = new Person(null, 'John Doe', noImgDataUrl, []);
