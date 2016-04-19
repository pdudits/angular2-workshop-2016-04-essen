import {Injectable} from 'angular2/core';

export interface Book {
  title: string;
  isbn: string;
}

@Injectable()
export class BookData {

  constructor() { }

  getBooks(): Book[] {
    return [
      { title: 'JavaScript für Enterprise-Entwickler', isbn: '978-3-89864-728-1' },
      { title: 'Node.js & Co.', isbn: '978-3-89864-829-5' },
      { title: 'Testgetriebene Entwicklung mit JavaScript', isbn: '978-3-86490-207-9' }
    ];
  }

}
