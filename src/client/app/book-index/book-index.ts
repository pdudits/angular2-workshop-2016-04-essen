import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
  selector: 'book-index',
  templateUrl: 'app//book-index/book-index.html',
  styleUrls: ['app//book-index/book-index.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class BookIndex {
  @Input('myInputValue') input: string;
  @Input('title') title: string;
  @Output() titleClicked = new EventEmitter<string>();

  books = [
    {title: 'JavaScript für Enterprise-Entwickler', isbn: '978-3-89864-728-1'},
    {title: 'Node.js & Co.', isbn: '978-3-89864-829-5'},
    {title: 'Testgetriebene Entwicklung mit JavaScript', isbn: '978-3-86490-207-9'}
  ];

  constructor() {}

}
