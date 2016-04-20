import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {BookData, Book} from '../book-data/book-data';

@Component({
  selector: 'book-show',
  templateUrl: 'app/book-show/book-show.html',
  styleUrls: ['app/book-show/book-show.css'],
  providers: [BookData],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class BookShow implements OnInit {

  isbn: string;
  book: Book;

  constructor(
    private routeParams: RouteParams,
    private data: BookData) {
    console.log(routeParams.get('isbn'));
  }

  ngOnInit() {
    this.isbn = this.routeParams.get('isbn');
    this.data.getBookByIsbn(this.isbn)
      .subscribe(book => this.book = book);
  }

}
