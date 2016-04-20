import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({
  name: 'shoutPipe'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    return String(value).toUpperCase() + '!!!1!11!elf!! ' + args.join(' ');
  }

}
