import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {BookData, Book} from '../book-data/book-data';

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
    this.books = data.getBooks();
  }

}
