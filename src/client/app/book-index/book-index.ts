import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {BookData, Book} from '../book-data/book-data';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'book-index',
  templateUrl: 'app//book-index/book-index.html',
  styleUrls: ['app//book-index/book-index.css'],
  providers: [BookData],
  directives: [],
  pipes: []
})
export class BookIndex {
  @Input('myInputValue') input: string;
  @Input('title') title: string;
  @Output() titleClicked = new EventEmitter<string>();

  books: Book[];

  constructor(private data: BookData) {
    data.getBooks()
      .subscribe(books => this.books = books);

    const timer$ = Observable.interval(1000);
    const chars$ = Observable.fromArray(['A', 'B', 'C', 'D', 'E', 'F']);

    Observable.zip(chars$, timer$)
      .subscribe(([char]) => console.log(char));
  }
}
