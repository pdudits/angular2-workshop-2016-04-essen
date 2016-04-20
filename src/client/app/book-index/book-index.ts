import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from 'angular2/core';
import {BookData, Book} from '../book-data/book-data';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/zip';

import {ShoutPipe} from '../shout-pipe/shout-pipe';

@Component({
  selector: 'book-index',
  templateUrl: 'app//book-index/book-index.html',
  styleUrls: ['app//book-index/book-index.css'],
  providers: [BookData],
  directives: [],
  pipes: [ShoutPipe]
})
export class BookIndex implements OnInit {
  @Input('myInputValue') input: string;
  @Input('title') title: string;
  @Output() titleClicked = new EventEmitter<string>();

  books: Book[];

  constructor(
    private data: BookData
  ) {
    const timer$ = Observable.interval(1000);
    const chars$ = Observable.fromArray(['A', 'B', 'C', 'D', 'E', 'F']);

    Observable.zip(chars$, timer$)
      .subscribe(([char]) => console.log(char));
  }

  ngOnInit() {
    this.data.getBooks()
      .subscribe(
        books => this.books = books,
        error => console.error(error)
      );
  }
}
