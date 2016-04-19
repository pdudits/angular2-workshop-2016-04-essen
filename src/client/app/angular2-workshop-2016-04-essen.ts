import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {BookIndex} from './book-index/book-index';

@Component({
  selector: 'angular2-workshop-2016-04-essen-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/angular2-workshop-2016-04-essen.html',
  directives: [ROUTER_DIRECTIVES, BookIndex],
  pipes: []
})
@RouteConfig([

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
