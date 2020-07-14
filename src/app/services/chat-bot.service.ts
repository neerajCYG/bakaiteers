import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  url= "http://heroku-node-bakaiteers.herokuapp.com/output?message="
  constructor(private http:HttpClient) { }

  getMessageOutput(inputText:string){

    return this.http.get(this.url+inputText)
  }
}
