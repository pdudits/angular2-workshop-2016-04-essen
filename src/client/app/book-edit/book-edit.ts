import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, OnActivate} from 'angular2/router';
import {BookData, Book} from '../book-data/book-data';

@Component({
  selector: 'book-edit',
  templateUrl: 'app/book-edit/book-edit.html',
  styleUrls: ['app/book-edit/book-edit.css'],
  providers: [BookData],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class BookEdit implements OnActivate {
  book = new Book();

  constructor(
    private routeParams: RouteParams,
    private data: BookData
  ) {}

  routerOnActivate() {
    const isbn = this.routeParams.get('isbn');
    this.data.getBookByIsbn(isbn)
      .subscribe(book => this.book = book);
  }

  handleSubmit() {
    console.log('handle submit: ', this.book);
  }
}
