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
  constructor() {}

}
