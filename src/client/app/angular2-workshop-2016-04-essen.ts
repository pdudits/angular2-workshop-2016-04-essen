import {Component, provide} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CliRouteConfig} from './route-config';
import {BookIndex} from './book-index/book-index';
import {BookShow} from './book-show/book-show';
import {BookEdit} from './book-edit/book-edit';
@Component({
  selector: 'angular2-workshop-2016-04-essen-app',
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {
      useClass: HashLocationStrategy
    })],
  templateUrl: 'app/angular2-workshop-2016-04-essen.html',
  directives: [ROUTER_DIRECTIVES, BookIndex],
  pipes: []
})
@RouteConfig([
  {path: '/books', component: BookIndex, as: 'BookIndex', useAsDefault: true},
  {path: '/books/:isbn', component: BookShow, as: 'BookShow'},
  {path: '/books/:isbn/edit', component: BookEdit, as: 'BookEdit'}
].concat(CliRouteConfig))

export class Angular2Workshop201604EssenApp {
  x = 0;
  y: number;
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }

  handleMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  handleTitleClicked(text: string) {
    console.log(`The titleClicked-event is fired and says ${text}.`);
  }
}
