import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  get message(): string {
    return 'Hello World!';
  }
}
