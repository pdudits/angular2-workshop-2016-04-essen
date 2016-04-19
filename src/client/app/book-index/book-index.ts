import {Component, Input} from 'angular2/core';


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
  constructor() {}

}
