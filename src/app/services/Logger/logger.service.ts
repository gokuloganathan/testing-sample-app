import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[]=[];

  constructor(){
    debugger
  }

  log(message:string){
    this.messages.push(message);
  }

  clear(){
    this.messages = []
  }
}
