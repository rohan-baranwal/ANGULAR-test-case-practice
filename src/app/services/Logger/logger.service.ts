import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];
  constructor() { }
  logMessage(msg: string): void {
    this.messages.push(msg);
  }
}
