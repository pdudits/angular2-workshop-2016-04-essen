import {Injectable} from 'angular2/core';

import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Book {
  title: string;
  isbn: string;
}

@Injectable()
export class BookData {

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get('http://localhost:4730/books')
      .map(response => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get(`http://localhost:4730/books/${isbn}`)
      .map(response => response.json());
  }
}
