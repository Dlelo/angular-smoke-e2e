import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeApiService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Item One', description: 'First item' },
      { id: 2, name: 'Item Two', description: 'Second item' },
    ];
    return { items };
  }
}
